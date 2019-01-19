/* Create an array of the links to choose from: */
var links = new Array();
links[0] = "index.html";
links[1] = "pages/about.html";
links[2] = "pages/roman-army.html";
links[3] = "pages/template.html";


function randomFunction() {
  /* Chooses a random link: */
  var i = Math.floor(Math.random() * links.length);
  /* Directs the browser to the chosen target: */
  parent.location = links[i];
  return false;
}
