
var log = console.log

F = require("./f.js")

log(F.tag("input",{type:"text",value:"joe bob",id:"username"}));
log(F.tag("select",{name:"state", value:"WA"}, true));

log(F.inp("username", "joe bob", "+", "myclass", {size: 20}));

log(F.str("firstname", "joebob", "first", ""));
log(F.str("firstname", "bob"));

log(F.pwd("pass"));
log(F.pwd("+pass", "x"));

log(F.txt("firstname", "bob"));
log(F.txt("notes", "", "+", "tclass", {cols:80}));
log(F.txt("notes", "Some default text"))

log(F.opt("Washington", "WA"))
log(F.opt("Washington", "WA", null, null, {foo:"bar"}))
log(F.opt({"a":"True", "b":"False"}))
log(F.opt({"AK":"Alaska", "CA":"California", "WA":"Washington"}, "CA"))

log( F.sel("color", F.opt({ "r":"Red", "g":"Green", "b":"Blue" }, "b"), "+", "selclass", {style:'width: 100%;'}));

log( F.chk("cb4") )
log( F.chk("+cb3", true) )
log( F.chk("cb1", false, null, null, {value:"1"}) )
log( F.chk("cb2", true, null, null, {value:"2"}) )


log( F.rad("rd4") )
log( F.rad("+rd3", true) )
log( F.rad("rd1", false, null, null, {value:"1"}) )
log( F.rad("rd2", true, null, null, {value:"2"}) )

log(F.sub("submit"))
log(F.sub("submit", "Send"))
log(F.btn("submit", "Login"))
log(F.btn("login"))
log(F.btn("login", "Log on"))



var form = {
	"Username": F.str("user"),
	"Password": F.str("pass"),
	"": F.sub("Login"),
	"forgot password?": "",
}
log(F.frm("theform", form, "formid", "formclass", {action:"foo.php"}))

