var para = document.createElement("p");
var node = document.createTextNode("RED PANDAAAA");
para.appendChild(node);

var element = document.getElementsByTagName("Body");
element[0].appendChild(para);


var elements = document.getElementsByTagName("address");
var i;
for(i = 0; i < elements.length; i++){
	var link = document.createElement("a");
	link.href="http://www.google.com/search?tbm=isch&q=RED+PANDAAAA";
	link.target="_blank";
	var image = document.createElement("img");
	var imageurl = chrome.extension.getURL("red.jpg");
	image.src = imageurl;
	image.width = "640";
	image.height = "480";
	link.appendChild(image);
	elements[i].appendChild(link);

	var para1 = document.createElement("p");
	var node1 = document.createTextNode("RED PANDAAAA");
	para1.appendChild(node1);
}

//document.write("RED PANDAAAA");