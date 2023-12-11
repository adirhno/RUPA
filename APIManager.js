//This is the class that will manage all your APIs

class APIManager {
	constructor() {
		this.data = {};
	}
	loadData() {
		$.get("https://api.kanye.rest").then((data) => {
			this.data.quote = data.quote;
		});
		$.get("https://randomuser.me/api/?results=7").then((data) => {
			this.data["user"] = data.results;
			this.data["friends"] = data.results.splice(1);
		});
		$.get(
			"https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
		).then((data) => {
			this.data["meat"] = data;
		});
		const randomPokemon = Math.floor(Math.random() * 948) + 1;
		$.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`).then((data) => {
			this.data.pokemon = {
				name: this.properCase(data.name),
				img: data.sprites.other.dream_world.front_default,
			};
		});
	}
	getData() {
		return this.data;
	}
	properCase(name) {
		let newName = "";
		newName += name[0].toUpperCase();
		newName += name.substring(1);
		return newName;
	}
}
