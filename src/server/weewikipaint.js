// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function() {
	"use strict";

	console.log("weewikipaint called");

	var server = require("./server.js");
	server.start("homepage.html", "404.html", 8080);
}());