window.nimoLESS = function () {
	_starter_ = {
			script: null,
			script_length: null,
			a: null,
			b: null
		},
		nimo_arr = nimoID;
	for (var e = 0; e < nimo_arr.length; e++) {
		__array__ = nimoID[e],
			__selected__ = window.document.getElementById("" + __array__),
			__selected__.innerHTML ? __data = "data:text/javascript;charset=utf-8," + encodeURIComponent(__selected__.innerHTML) :
			__data = __selected__.href;
		var n = new XMLHttpRequest;
		n.onreadystatechange = function () {
				if (4 == this.readyState && 200 == this.status) {
					__parser__ = "nimo{\n date: hey;\n} \n " + this.responseText.replace(/""/g, '" "').replace(/''/g, '" "').replace(/'/g, "\"\\'4531").replace(/\"\\'4531;/g, "\\';").replace(/\\'4531/g, "\\'").replace(/,/g, "_COMMA_").replace(/"/g, '(¤)"').replace(/\(¤\)"/g, '"$&').replace(/\"\(¤\)\"+\"/g, "").replace(/:/g, "_COLON_").replace(/];/g, "] ;").replace(/_COLON_;/g, "_COLON_null;").replace(/@[^\s{]*/g, "$&_SPACE_").replace(/@/g, "_AT_").replace(/_SPACE_+\s/g, "_SPACE_"),
						this.responseText = this.responseText.replace(/\] \[/g, "] ["),

						$int_parsing_1 = this.responseText.replace(/\]\s\[/g, "]   [").replace(/[:\s][^\[]+\[/gm, "$&|<|").replace(/'/g, "\\$&"),
						$int_parsing_1 = $int_parsing_1.replace(/\]+[^\w]/gm, "|>|$&").replace(/\[\|<\|[^=]+=>/g, "$&<exit>"),
						$int_parsing_1 = $int_parsing_1.replace(/[\s\[]+\|<\|/gm, "$&'+"),
						$int_parsing_1 = $int_parsing_1.replace(/\|>\|+\]/gm, "+'$&"),
						$int_parsing_1 = $int_parsing_1.replace(/=><exit>/gm, "<dot>").replace(/#/g, "$&"),
						$int_parsing_1 = $int_parsing_1.replace(/\\'/g, "$&"),
						$initial = document.createElement("v-initial"),
						$initial.innerHTML = $int_parsing_1.replace(/\[\|<\|/g, "<v-clone>").replace(/\|>\|\]/g, "</v-clone>").replace(/\n/g, "$&"),
						document.body.appendChild($initial);

					for (var e = document.querySelectorAll("v-clone"), n = 0; n < e.length; n++) {
						var r = (r = (r = (r = (r = (r = (r = (r = (r = (r = e[n].innerHTML.replace(/#/g, "_HASH_")).replace(/\./g, "_DOT_")).replace(/\,/g, "_COMMA_")).replace(/\-/g, "_HYPHEN_")).replace(/\:/g, "_COLON_")).replace(/\*/g, "_ASTERISK_")).replace(/\@/g, "_AT_")).replace(/<dot>/g, ".")).replace(/[\s ]/g, "_SPACE_")).replace(/=>|=>/g, ".");
						e[n].innerHTML = r
					}

					$int_parsing_1 = $initial.innerHTML.replace(/<v-clone>/g, "").replace(/<\/v-clone>/g, "").replace(/\n/g, "").replace(/=>/g, "$&"),
						int_parsing = __parser__.replace(/[:]*[^;]+[;]/g, "$&!(,)_").replace(/\./g, "_DOT_").replace(/-/g, "_HYPHEN_"),
						int_parsing = int_parsing.replace(/[;]!\(,\)_/g, "$,"),
						int_parsing = int_parsing.replace(/[{]*[^}]+[}]/g, "$&!(;)_"),
						int_parsing = int_parsing.replace(/!\(;\)_/g, ";"),
						int_parsing = int_parsing.replace(/[^;]+[\w]*[{]/g, "$&!(=)_"),
						int_parsing = int_parsing.replace(/{!\(=\)_/g, " = {"),
						int_parsing = int_parsing.replace(/[:]*[$]/g, '"'),
						int_parsing = int_parsing.replace(/{*[^:]+:/g, '$&"'),
						int_parsing = int_parsing.replace(/[#*.][\w\W][^=]+[=]/gm, "$&").replace(/'/g, "$&"),
						int_parsing = int_parsing.replace(/\[/gm, "$&|<|"),
						int_parsing = int_parsing.replace(/\]/gm, "|>|$&").replace(/\[\|<\|[^=]+=>/g, "$&<exit>"),
						int_parsing = int_parsing.replace(/"+[\s\[]+\|<\|/gm, "'+"),
						int_parsing = int_parsing.replace(/\|\>\|+\][^"\s]*[\s"]/gm, "+'"),
						int_parsing = int_parsing.replace(/=><exit>/gm, ".").replace(/#/g, "_HASH_").replace(/\*/g, "_ASTERISK_").replace(/\]\s\[/g, "$&"),
						int_parsing = int_parsing.replace(/[^a-zA-Z]:"[^=][a-z]+[^{}]+{/g, "<null>$&"),
						int_parsing = int_parsing.replace(/<null>*[^:]+:"/g, "\n:").replace(/:/g, "_COLON_").replace(/_COLON_"/g, ":");
					var a = document.createElement("m-scanner");
					a.innerHTML = int_parsing.replace(/\n/g, "<br>").replace(/:["]*[^"]+",/g, "<v-1>$& </v-1>").replace(/[{]*[^{]+[}]+;/g, "<v-wrap>$&</v-wrap>").replace(/}[^{]+{/g, "$&").replace(/___]/g, "</vhead>").replace(/\[_____/g, "<vhead>").replace(/hhbh/g, "$&").replace(/\[\|<\|[^'\]]+'/g, "$&"),
						document.body.appendChild(a);
					var _ = document.querySelectorAll("v-1");
					for (n = 0; n < _.length; n++) {
						r = (r = (r = (r = (r = (r = (r = (r = _[n].innerHTML.replace(/_HASH_/g, "#")).replace(/_COMMA_/g, ",")).replace(/_DOT_/g, ".")).replace(/_COLON_/g, ":")).replace(/_HYPHEN_/g, "-")).replace(/_ASTERISK_/g, "*")).replace(/_SPACE_/g, " ")).replace(/_AT_/g, "@");
						_[n].innerHTML = r
					}
					var i = document.querySelectorAll("v-wrap");
					for (n = 0; n < i.length; n++) {
						r = i[n].innerHTML.replace(/_COLON_/g, ":").replace(/:/g, ':"').replace(/:"[^"]+",/g, "[undo]$&").replace(/:"/g, ":").replace(/\[undo\]:/g, ':"');
						i[n].innerHTML = r
					}
					int_parsing_1 = a.innerHTML.replace(/<br>/g, "\n").replace(/<v-1>/g, "").replace(/<\/v-1>/g, "").replace(/<v-wrap>/g, "").replace(/<\/v-wrap>/g, "").replace(/<vhead>/g, "").replace(/<\/vhead>/g, "").replace(/\"\(¤\)\"+\"/g, '"').replace(/\(¤\)"/g, '"').replace(/ /g, "$&").replace(/\[+\|<\|/g, "'+").replace(/""/g, '"'),
						int_parsing_1 = int_parsing_1.replace(/"[^"]*"/g, "<v-2>$&</v-2>");
					var p = document.createElement("v-scan");
					p.innerHTML = int_parsing_1,
						document.body.appendChild(p);
					var l = document.querySelectorAll("v-2");
					for (n = 0; n < l.length; n++) {
						r = (r = (r = (r = (r = (r = (r = (r = (r = l[n].innerHTML.replace(/_HASH_/g, "#")).replace(/_COMMA_/g, ",")).replace(/_DOT_/g, ".")).replace(/_COLON_/g, ":")).replace(/_HYPHEN_/g, "-")).replace(/_ASTERISK_/g, "*")).replace(/_SPACE_/g, " ")).replace(/_AT_/g, "@")).replace(/_A-T_/g, "$&");
						l[n].innerHTML = r
					}
					int_parsing_1 = p.innerHTML.replace(/<v-2>/g, "").replace(/<\/v-2>/g, ""),
						int_parsing_1 = int_parsing_1.replace(/<v-in>/g, "").replace(/<\/v-in>/g, ""),
						int_parsing_1 = int_parsing_1.replace(/_AT_[^;]+};[^;]+};+[\n\s]+}/g, "<v-ani>$&</v-ani>"),
						scanner_2 = document.createElement("v-scan2"),
						scanner_2.innerHTML = int_parsing_1.replace(/'\+[^'\]]+'/g, "<v-in>$&</v-in>"),
						document.body.appendChild(scanner_2);
					var c = document.querySelectorAll("v-ani");
					for (n = 0; n < c.length; n++) {
						r = (r = (r = (r = c[n]).innerHTML.replace(/;/g, ",")).replace(/=/g, ":")).replace(/_AT_[^{]*/g, "$& = ");
						c[n].innerHTML = r
					}
					var t = document.querySelectorAll("v-in");
					for (n = 0; n < t.length; n++) {
						r = (r = (r = (r = t[n].innerHTML).replace(/=>/g, ".")).replace(/@/g, "_AT_")).replace(/\s/g, "_SPACE_");
						t[n].innerHTML = r
					}
					int_parsing_1 = scanner_2.innerHTML.replace(/<v-ani>/g, "").replace(/<\/v-ani>/, "").replace(/=>/g, "$&").replace(/_A-T_/g, "_AT_"),
						int_parsing_1 = int_parsing_1.replace(/<v-in>/g, ""),
						int_parsing_1 = int_parsing_1.replace(/<\/v-in>/g, "").replace(/\+''\+/g, "+' '+");
					var g = document.createElement("script");
					g.src = "data:text/javascript;charset=utf-8," + encodeURIComponent(int_parsing_1 + 'var _1 = "\'"+$int_parsing_1+"\'";  prepared = eval(_1); var p1 = document.createElement(\'link\'); p1.rel = "stylesheet"; p1.type= "text/css"; p1.href ="data:text/css;charset=utf-8,"+encodeURIComponent(prepared);document.body.appendChild(p1);'),
						document.body.appendChild(g),
						document.body.removeChild(a),
						document.body.removeChild(p),
						document.body.removeChild(scanner_2),
						document.body.removeChild($initial),
						document.body.removeChild(g)
				}
			},
			old__script = document.getElementById("" + nimoID[e]),
			old__script.href ? (old__script.href = "data:text/css;base34,body{opacity:0;transition:1s;}",
				setTimeout(function () {
					old__script.href = "data:text/css;base34,body{opacity:1;transition:1s;}"
				}, 300)
			) :
			old__script.innerHTML && (old__script.innerHTML = "body{opacity:0; transition:1s;}",
				setTimeout(function () {
					old__script.innerHTML = "body{opacity:1;transition:1s;}"
				}, 300)),
			setTimeout(function () {
				var e = document.head,
					n = document.body;
				e.innerHTML.includes("<link") || e.innerHTML.includes("<style ") || n.removeChild(old__script),
					n.innerHTML.includes("<link") || n.innerHTML.includes("<style ") || e.removeChild(old__script)
			}, 500),
			n.open("GET", __data, !0), n.send()
	}
};
