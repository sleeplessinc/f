
if((typeof process) !== 'undefined') {
	// node.js
	F = require("./index.js")
	F.write = console.log
}
else {
	// browser
	// assumes f.js is already included in page
	F.write = function(s) { document.write(s) }	// document.write is a function object
}

F.tag("input",{type:"text",value:"joe bob",id:"username"});
F.tag("select",{name:"state", value:"WA"}, true);

F.inp("username", "joe bob", "+", "myclass", {size: 20});

F.str("firstname", "joebob", "first", "");
F.str("firstname", "bob");

F.pwd("pass");
F.pwd("+pass", "x");

F.txt("firstname", "bob");
F.txt("notes", "", "+", "tclass", {cols:80});
F.txt("notes", "Some default text")

F.opt("Washington", "WA")
F.opt("Washington", "WA", null, null, {foo:"bar"})
F.opt({"a":"True", "b":"False"})
F.opt({"AK":"Alaska", "CA":"California", "WA":"Washington"}, "CA")

F.sel("color", F.opt({"r":"Red", "g":"Green", "b":"Blue"}, "b"), "+", "selclass", {style:'width: 100%;'});

F.chk("cb4")
F.chk("+cb3", true)
F.chk("cb1", false, null, null, {value:"1"})
F.chk("cb2", true, null, null, {value:"2"})


F.rad("rd4")
F.rad("+rd3", true)
F.rad("rd1", false, null, null, {value:"1"})
F.rad("rd2", true, null, null, {value:"2"})

F.sub("submit")
F.sub("submit", "Send")
F.btn("submit", "Login")
F.btn("login")
F.btn("login", "Log on")

/*
var form = {
	"Username": F.str("user"),
	"Password": F.str("pass"),
	"-": F.sub("Login"),
	"--": "Forgot password?"
}
F.frm("theform", form, "formid", "formclass", {action:"foo.php"})
*/

