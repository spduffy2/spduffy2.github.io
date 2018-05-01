console.log("Hello class.");

// $(document).ready(function() {  //7 run this function when the DOM is finished building, not necessarily when the page is finished loading

// 	//JS from last week (even if we could use the document ready function in js)
// 	var bParaJS1 = document.createElement("p"); //8a
// 	bParaJS1.innerHTML = ("This is Dynamic HTML - JavaScript1"); //8b
// 	var containerDiv = document.getElementById("container");  //8c1  yes, if you created the $ function in js, you could use it here, but that's even more lines of code
// 	containerDiv.appendChild(bParaJS1);  //8c2

// 	//or if you shorten the JS to make 8c happen on one line
// 	var bParaJS2 = document.createElement("p"); //8a
// 	bParaJS2.innerHTML = ("This is Dynamic HTML - JavaScript2"); //8b
// 	document.getElementById("container").appendChild(bParaJS2);  //8c

// 	//with jQuery, you can shorten it even more (this one is as assigned)
// 	var bParaJQ1 = $("<p>");  //8a create a new p element, place it in a variable
// 	bParaJQ1.text("This is Dynamic HTML - jQuery1");  //8b add text to the new p
// 	$("#container").append(bParaJQ1);  //8c display it in html in the id="container"

// 	var bParaJQ2 = $("<p>");  //8a
// 	bParaJQ2.html("<p>This is Dynamic HTML - jQuery2</p>");  //8b this content is added as html
// 	$("#container").append(bParaJQ2);  //8c

// 	$("#container").append("<p>This is Dynamic HTML - jQuery3</p>");  //8a,b,c

// 	var bParaJQ4 = $("<p>");  //8a
// 	bParaJQ4.text("<p>This is Dynamic HTML - jQuery4</p>");  //8b what happens when we use html tags using the .text method?
// 	$("#container").append(bParaJQ4);  //8c

// //	$("#container").html("<p>This is Dynamic HTML - jQuery5</p>"); //8a,b,c what happens when we use the .html or .text method in this format?

// });


// use this for part 2 of the assignment
var blogArticles = [{
		title: "Advanced Performance Audits With DevTools",
		author: "Paul Irish",
		publishedOn: "Mar 27th, 2015",
		url: "http://www.paulirish.com/2015/advanced-performance-audits-with-devtools/",
		content: [{
				heading: "",
				paragraph: "In this doc, we look at the scrolling of CNET, input latency on CNET, some very interesting challenges on the responsive Time.com, and infinite scroll on Google Play’s desktop site."
			},{
				heading: "",
				paragraph: "The intended audience is browser engineers and performance-minded frontend developers. It’s fairly advanced, but I’m spelunking deep to identify how the sites butt heads with the browser APIs and architecture."
			},{
				heading: "",
				paragraph: "Lastly, we’re using this research to improve Chrome DevTools and what you hear from Chrome."
			}	
		]
	},{
		title: "Introducing RAIL: A User-Centric Model For Performance",
		author: "Paul Irish & Paul Lewis",
		publishedOn: "10/2/2015",
		url: "http://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/",
		content: [{
				heading: "Slow",
				paragraph: "Is changing the DOM slow? What about loading a <script> in the <head>? JavaScript animations are slower than CSS ones, right? Also, does a 20-millisecond operation take too long? What about 0.5 seconds? 10 seconds? "
			},{
				heading: "",
				paragraph: "While it’s true that different operations take different amounts of time to complete, it’s hard to say objectively whether something is slow or fast without the context of when it’s happening. For example, code running during idle time, in a touch handler or in the hot path of a game loop each has different performance requirements. Put another way, the people using your website or app have different performance expectations for each of those contexts. Like every aspect of UX, we build for our users, and what they perceive is what matters most. In fact, number one on Google’s ten things we know to be true is “Focus on the user and all else will follow.”"
			},{
				heading: "",
				paragraph: "Asking “What does slow mean?,” then, is really the wrong question. Instead, we need to ask “What does the user feel when they’re interacting with the things we build?”"
			}
		]
	}, {
		title: "Introducing ASP.NET WebHooks Receivers - WebHooks made easy.",
		author: "Scott Hanselman",
		publishedOn: "10/2/2015",
		url: "http://www.hanselman.com/blog/IntroducingASPNETWebHooksReceiversWebHooksMadeEasy.aspx",
		content: [{
				paragraph: "However, while ASP.NET 5 is cool and exciting, it's also not yet released (at the time of this writing, Beta 8 is being worked on). There are very cool things happening around ASP.NET 4.6 which is released and ready to go live today. Something else that's VERY cool that I want to explore today is ASP.NET WebHooks, which just came out as a preview and is being actively worked on. Just as there's Web Forms, MVC, SignalR, Web API and they are all components within ASP.NET, you can think of Web Hooks as another member of the ASP.NET family of technologies. When you want it, it's there to plug in. If you don't use it, it costs you nothing in weight or runtime."
			},{
				heading: "What are WebHooks?",
				paragraph: "Let's start with the What Are They part of the conversation. WebHooks are a convention. They are HTTP callbacks. Moreover, they are \"user-defined HTTP callbacks.\" You and/or your app signs up for notification when something happens and your URL endpoint will get an HTTP POST when that thing happens. WebHooks can and should be RESTful as well. That means if you have a nice RESTful Web API then adding WebHooks to your application should not only be easy, it should a natural and clean extension."
			},{
				heading: "SO WHAT? WHY DO WE NEED A LIBRARY FOR THIS?",
				paragraph: "Technically you don't, of course. You could theoretically implement the WebHooks pattern with an HttpHandler if you felt you had something to prove. You could more reasonably do it with ASP.NET Web API, but the general thinking is that if there's a clear and common pattern for doing something then it should be made easier and codified for correctness."
			}
		]		
}];

function renderBlogs() {
	for (a in blogArticles) {
		var article = blogArticles[a];

		var articleWrapper = $("<div>");
		articleWrapper.addClass("article-wrapper");
		$("#blog-container").append(articleWrapper);

		var title = $("<h1>");
		title.text(article.title);
		articleWrapper.append(title);

		var author = $("<h4>");
		author.text(article.author);
		articleWrapper.append(author);

		var publishedOn = $("<h4>");
		publishedOn.text(article.publishedOn);
		articleWrapper.append(publishedOn);


		var contentWrapper = $("<div>");
		contentWrapper.addClass("content-wrapper");
		articleWrapper.append(contentWrapper);

		for (var b in article.content) {
			var heading = article.content[b].heading;
			if (heading !== "") {
				var headerh2 = $("<h2>");
				headerh2.text(heading);
				contentWrapper.append(headerh2);
			}
			var paragraph = $("<p>");
			paragraph.text(article.content[b].paragraph);
			contentWrapper.append(paragraph);
		}
	}
}



$(document).ready(function() {
	renderBlogs();
});