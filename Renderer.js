class Renderer {
	constructor() {}
	userRender(user) {
		let source = $("#user-template").html();
		let template = Handlebars.compile(source);
		let newHtml = template(user[0]);
		$("#user").html("");
		$("#user").append(newHtml);
	}
	friendsRender(friends) {
		let source = $("#friends-template").html();
		let template = Handlebars.compile(source);
		let newHtml = template({ friends });
		$("#friends").html("");
		$("#friends").append(newHtml);
	}
	contentRender(quote, meat, pokemon) {
		let source = $("#content-template").html();
		let template = Handlebars.compile(source);
		let newHtml = template({ quote: quote, meat: meat, pokemon: pokemon });
		$("#content").html("");
		$("#content").append(newHtml);
	}

	mainRender(data) {
		this.userRender(data.user);
		this.friendsRender(data.friends);
		this.contentRender(data.quote, data.meat, data.pokemon);
	}
}
