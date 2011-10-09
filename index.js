
/*
Copyright 2011 Sleepless Software Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE. 
*/

String.prototype.ucfirst = function(s) {
	return s.substring(0,1).toUpperCase() + s.substring(1)
}


var F = {}

F.tag = function(t, o, guts) {
	var h = "<"+t+" "
	for(k in o) {
		h += k+"=\""+o[k]+"\" "
	}
	h += ">"
	if(typeof guts == "string")
		h += guts+"</"+t+">"
	if(F.write)
		F.write(h)
	return h;
}

F.mrg = function(n, v, i, c, e) {
	o = e || {}
	if(c)
		o["class"] = c
	if(i) {
		if(i == "+")
			i = n
		o.id = i
	}
	if(!o.name)
		o.name = i
	if(v)
		o.value = v
	if(n) {
		o.name = n
		if(n[0] == "+") 
			o.id = o.name = n.substring(1);
	}
	return o
}

F.inp = function(n, v, i, c, e) {
	var o = F.mrg(n, v, i, c, e)
	return F.tag("input", o, false);
}

F.str = function(n, v, i, c, e) {
	return F.inp(n, v, i, c, e) 
}

F.pwd = function(n, v, i, c, e) {
	e = e || {}
	e.type = "password"
	return F.inp(n, v, i, c, e) 
}

F.sub = function(n, v, i, c, e) {
	e = e || {}
	e.type = "submit"
	return F.inp(n, v, i, c, e) 
}

F.btn = function(n, v, i, c, e) {
	e = e || {}
	e.type = "button"
	return F.inp(n, v, i, c, e) 
}

F.txt = function(n, v, i, c, e) {
	var o = F.mrg(n, null, i, c, e)
	return F.tag("textarea", o, v || "")
}

F.opt = function(l, v, i, c, e) {
	var o, s

	if(typeof l == "object") {
		s = "";
		for(k in l) {
			o = F.mrg(null, k, i, c, e)
			delete o.name
			if(k == v)
				o.selected = "selected"
			s += F.tag("option", o, l[k] || "")
		}
		return s;
	}

	o = F.mrg(null, v, i, c, e)
	delete o.name
	return F.tag("option", o, l || "")
}

F.sel = function(n, v, i, c, e) {
	var o = F.mrg(n, null, i, c, e)
	return F.tag("select", o, v)
}


F.chk = function(n, v, i, c, e) {
	var o = F.mrg(n, null, i, c, e)
	delete o.checked
	if(v) 
		o.checked = "checked"
	o.type = "checkbox"
	return F.tag("input", o)
}

F.rad = function(n, v, i, c, e) {
	var o = F.mrg(n, null, i, c, e)
	delete o.checked
	if(v) 
		o.checked = "checked"
	o.type = "radio"
	return F.tag("input", o)
}


F.frm = function(n, f, i, c, e) {
	var o = F.mrg(n, null, i, c, e)
	var tmpl = "\n" +
		"	<div class=label>__label__</div>\n" +
		"	<div class=field>__value__</div>\n" +
		"";
	var s = "";
	for(k in f) {
		s += tmpl.replace(/__label__/g, k).replace(/__value__/g, f[k])
	}
	return F.tag("form", o, s);
}




if((typeof process) !== 'undefined') {
	// node.js
	module.exports = F
}
else {
	// browser
}


