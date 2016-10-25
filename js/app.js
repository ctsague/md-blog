console.log('hello word');
(function(){
	"use strict";
	var app = {
		init:function(){
			
		// this.recupDonAlice();
		// this.recupDonExample();
		this.recupDonJson();
		this.listeners();

		},
		

		recupDonAlice : function(){
			$.ajax( "http://192.168.1.40:1337/alice.md")
			.done(this.successAlice)
			.fail(this.fail);		
		},

		successAlice : function(fichierAlice){
			//console.log(fichierAlice);
			var converter = new showdown.Converter();
    		var htmlText = converter.makeHtml(fichierAlice);
    		$("#md").append(htmlText);
		},

		recupDonExample : function(){
			$.ajax( "http://192.168.1.40:1337/example.md")
			.done(this.successExample)
			.fail(this.fail);		
		},

		successExample : function(fichierExample){
			//console.log(fichierAlice);
			var converter = new showdown.Converter();
    		var htmlText = converter.makeHtml(fichierExample);
    		$("#md").append(htmlText);
		},

		recupDonJson :function(){
			$.ajax( "http://192.168.1.40:1337/menu.json")
			.done(this.successJson)
			.fail(this.fail);
		},

		successJson :function(fichierJson){
			 //console.log(fichierJson);
			 var len =fichierJson.menu.length;
			 for  (var i = 0; i < len; i++){
			 	var titre = fichierJson.menu[i].title;
			 	$("#menu").append('<a class="active item">'+ titre + '</a>');
			 }

		},

		listeners :function(){
			$("a.active.item").on('click',this.recupDonAlice.bind(this));
		},

			// var cle1 = fichierJson.menu[0];
			// var cle2 = fichierJson.menu[1];
			// console.log(cle1);
			// console.log(cle2);
			// $("#json").append('<a href="http://192.168.1.40:1337/alice.md">' + cle2.path + '</a>');
			//$("#json").append('<a href="http://192.168.1.40:1337/menu.json">' + cle2.title + '</a>');
	

	};


	$(document).ready(function(){
		app.init();
	});
})();


