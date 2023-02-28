let a = document.getElementsByTagName("div")[0];

// a.innerHTML = a.innerHTML + "<h3>Hello World..</h3>";

let div = document.createElement("div");
div.innerHtml = "<h3>Hello Priyanshu Gour</h3>";
a.append(div);
a.prepend(div);
a.before(div);
a.after(div);
// a.replacewith(div)
