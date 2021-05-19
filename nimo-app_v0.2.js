(function(script, handler) {
    App = script;
    App.attributes = {
        view: 'view',
        target: 'target',
        action: '-action',
        app: 'app',
        item: 'items',
        station: 'station',
        request: 'onrequest',
        com: 'com'
    };
    App.handler = handler;
    App.onerror = null;
    App.obj = new Object();
    App.arr = new Array();
    App[App.attributes.item] = new Object();
    App[App.attributes.com] = new Object();
    App.string = new Object();
    App.error = {
        param: `a valid argument required.\n - <string>`,
        name0: ` is invalid\n -argument should only contain latin letters.\n -value.length should not be greater than 10.`,
        con: `Failed to construct 'App':\n`,
        con1: `Failed to setItem:\n`,
        arg: `2 arguments required, but only 0 present.`,
        type: ` -'App' cannot be called as a function.\n -Please use the 'new' operator <new App()> instead.`,
        index: {
            index: 'text:Hello App!.'
        }
    };
    App.error.type = App.error.con + App.error.type
}(function() {

    /*
TODO:
FIXE - onrequest


TODO:
FIXE - com:index+"text"

TODO:
FIXE - make all properties updates instead of just target
    */

    //bundles
    var handler = App.error;
    var log = App.handler;
    var pack = this;
    var $obj = {};
    this.delay = 500;
    this.devMode = true;
    var trash = {};
    var $Html = document.documentElement;
    var attribute = App.attributes;

    //attributes syntax
    var syn = {
        file: function(v, y) {
            v = rq(v, y);
            return v;
        },
        text: function(v, y) {
            v = v + "";
            if (typeof y == 'string') {
                var do_ = txt[y];
                var v = do_(v);
            }
            return (v);
        },
        number: function(v, y) {
            v = v == 0 ? 0 : +v;

            // v = eval(v);
            v = v || 0;
            if (typeof y == 'string') {
                var do_ = txt[y];
                var v = do_(v);
            }
            return v;
        },
        stream: function(x) {
            var p = parseString(x, true, 'file');
            var base = 'data:;base64'
            var r = syn[p[0]](p[1], 'promise');
            return new Promise(function(rs) {
                r.then(function(e) {
                    //FIXME - base64
                    //LOG - var bl, e,
                    //stream returns text instead of base64 format
                    var bl = new Blob([e]);
                    url = URL.createObjectURL(bl);
                    rs(url);
                });
            }
            );
        }
    };
    syn[attribute.com] = function(v, y) {
        var x = App[attribute.com][AppName][v];
        y = y + ""
        y = y in txt ? y : 'null';
        x = txt[y](x)
        return x;
    }
    ;
    syn.string = syn.text;

    var time = {
        mil: function(e) {
            return e;
        },
        sec: function(e) {
            return 1000 * e;
        },
        min: function(e) {
            return 1000 * 60 * e;
        }
    }

    var createElement = function(a) {
        try {
            var a = document.createElement(a);
        } catch (error) {
            var msg = error.message
            log(pack.onerror, msg);
            var a = document.createElement('span');
        }
        return a;
    }

    var EqualTo = function(name, arr) {
        var rnt = false
        arr.forEach(function(v) {
            if (v === name) {
                return rnt = v === name;
            }
        })
        return rnt;
    }

    var vld_type = function(x) {
        var tox = typeof x;
        tox = tox in syn ? tox : 'text';
        return tox;
    }

    var purify_string = function(val, str, max) {
        str = str.trim()
        var sl = "\\\\\\";
        if (max) {
            var sl = "";
            if ('number' === typeof max) {
                for (var i = 0; i < max.length; i++) {
                    sl += '\\'
                }
            } else {
                var sl = "\\";
            }
        }
        var newStr = '';
        for (var i = 0; i < val.length; i++) {
            var e = val.charAt(i);
            for (var i_0 = 0; i_0 < str.length; i_0++) {
                var e_0 = str.charAt(i_0);
                if (e === e_0) {
                    e = sl + e
                }
            }
            newStr += e;
        }
        return (newStr)
    }

    //@parameter<replace()>
    var regex = {
        0: {
            cd: /\<+\{+[^\s\w]*[^\n]+\}\>/gi,
            0: "$&`)+\"",
            1: "\"+\"\"+\pm\(`\\$&",
        },
        html: {
            0: /[\w\W]*<\{{nimoApp}\}>/i,
        },
        syn: {
            0: new RegExp(purify_string('<!--\\?+\\w[^>]+\\?-->', '\\', 1),'gm'),
            1: new RegExp(purify_string('<\\?+\\w[^>]+\\?>', '\\', 1),'gm')
        }
    };

    var HTMLtag = function(tag, attributes, fallback) {
        var app = App[App.attributes.item][attributes[attribute.app]];
        var url = fallback.url;
        if (!tag) {
            attributes[attribute.view] = eval(attributes[attribute.view])

            view = parseString(attributes[attribute.view], 'string');
            view[1] = parseUrl(view[1]);
            view[1] = view[1][attribute.view]

            try {
                view = app[view[0]][view[1]];
            } catch (error) {
                view = '';
            }
            return view || '';
        }

        // var tg = `<${tag} ${attributes} >${fallback}</${tag}>`;
        var elem = createElement(tag);
        elem.$setAttribute = function(a, b) {
            if (!b) {
                return;
            }
            try {
                elem.setAttribute(a, b)
            } catch (error) {
                var msg = error.message
                log(pack.onerror, msg);
            }
        }
        var val = elem.outerHTML;
        if (val.indexOf('></') < 0) {
            val = true;
            var target = 'value'
        } else {
            val = false
            var target = 'innerHTML';
        }

        attributes[attribute.view] = eval(attributes[attribute.view])
        //delete(attributes[attribute.view])
        if (fallback) {
            var view = parseString(fallback[attribute.view]);
            try {
                view = app[view[0]][view[1]];
            } catch (error) {
                view = fallback[attribute.view];
            }
            fallback[attribute.view] = view;
            // console.log(url);
            url[attribute.target] = url[attribute.target] || target;
            url[url[attribute.target]] = fallback[attribute.view];
            delete (url[attribute.target])
            for (var prop in url) {
                if (val == true) {
                    elem.$setAttribute(prop, url[prop])
                } else {
                    elem[prop] = url[prop]
                }
            }
        }
        //@ - html self closing tag
        //@ - note: self closing has no falback
        // if (EqualTo(tag, ['img', 'input'])) {
        //    var tg = `<${tag} ${attributes} />`;
        // }

        for (var prop in attributes) {
            elem.$setAttribute(prop, attributes[prop])
        }
        val = elem.outerHTML;
        // console.log(val);

        return val;
    }

    //encode html
    var nimoEnc = function(e) {
        e = e.replace(/</g, '&nmlt'),
        e = e.replace(/>/g, '&nmgt');

        e = e.replace(/%=/g, '%equal;')
        e = e.replace(/%&/g, '%and;');
        e = e.replace(/%\?/g, '%qu;');

        e = purify_string(e, '"', true)
        return e;
    }

    //decode encoded html
    var nimoDec = function(e) {
        e = e.replace(/&nmlt/g, '<'),
        e = e.replace(/&nmgt/g, '>');

        e = e.replace(/%equal;/g, '=')
        e = e.replace(/%qu;/g, '?');
        e = e.replace(/%and;/g, '&')

        return e;
    }

    //cleaning up tabs
    var nimoMin = function(e) {
        e = e.replace(/  /gm, ' '),
        e = e.replace(/  /gm, ' '),
        e = e.replace(/\n\r|\n/gm, ' ');

        return e;
    }

    var appSelector = function(e, f) {
        if (e) {//attribute.app = e;
        }
        var app = e || attribute.app;
        var all = document.all;
        var arr = [];

        //var val = 0; val < all.length; val++
        //var val in all
        for (var val = 0; val < all.length; val++) {
            //var value = val
            var value = all[val];

            // console.log(value,value.app);
            var type = false;

            if ('object' == typeof (value)) {
                type = value.getAttribute([attribute.app]) || value[attribute.app];
            }

            if (type) {
                if (value_app = value.getAttribute(app)) {
                    value[app] = value_app;
                    value.removeAttribute(app);
                }
                var name = value.getAttribute(attribute.app) || value[attribute.app];
                if (name === AppName) {
                    var view_name = value.getAttribute(attribute.view) || value[attribute.view];
                    if (view_name) {
                        //     
                        if (f) {
                            //setItem issue here
                            var view = value[attribute.view];
                            var f_len = f.length;
                            var view = view.substring(0, f_len);
                            if (view === f) {
                                arr[arr.length] = value;
                            }
                        } else {
                            arr[arr.length] = value;
                        }
                    }
                }
            }
        }

        return arr;
    }

    //checks if @parameter1 as nimo syntax
    //expected syntax = <?<name> echo(<value>) ?>
    var trueType = function(e, t) {
        try {
            e = e.replace(/\*/g, '')
        } catch (error) {
            return String(e);
        }
        // e = e.replace(/\?-->|\?>/g, '#'),
        e = e.replace(regex.syn[0], '*'),
        e = e.replace(regex.syn[1], '*'),

        // e = e.replace(/[^\*]/g, '');
        e = e.includes('*');
        return e;
    }

    //checks if App() === <class>
    var isClass = function(obj) {
        var cont = obj.constructor;
        obj = false;
        // WARNING:  bugs detected
        // TODO: fixe
        // FIXME: cont.caller
        try {
            obj = cont.arguments !== undefined ? cont.caller !== undefined ? cont.name == "" ? true : false : false : false;
        } catch (e) {}
        return obj;
    }

    //gets the total number of properties inside an object
    // var obj_length = function(x) {
    //     var arr = [];
    //    for (var prop in x) {
    //        arr[arr.length] = prop;
    //    }
    //    return arr.length;
    //  }

    //object_proto
    //gets the last property inside an object
    var object_proto = function(object, return_last_prop) {
        var arr = [];
        for (var prop in object) {
            arr.push(prop);
        }
        if (return_last_prop) {
            return arr[arr.length - 1];
        } else {
            return arr;
        }
    }

    //removes all white spaces
    var cleanSpace = function(x, y) {
        if (y) {
            return x.trim();
        }
        var x = x.replace(/\s/g, '');
        return x;
    }

    //check if string is a valid aphabeth
    var isAphabelt = function(value) {
        if ('string' == typeof value) {
            var r_len = value.length;
            value = value.replace(/[a-z]/gi, 'x'),
            value = value.replace(/[^\x]/gi, '');
            if (r_len === value.length) {
                return true;
            }
        }
    };

    var clearAttributes = function() {/*
 the below code causes @parseHtml to remove app 
 and view attributes before @update could access them
       */
    //appSelector()
    // appSelector('view')
    }

    //mimic <new Promise>,
    //@returns<then()> *returns @parameter<1> to <promise>
    var $prom = function(x) {

        return new Promise(function(r) {
            r(x);
        }
        );
    }

    //merges two object together
    var merge = function($this, $with, name) {
        $with = eval($with);
        for (var prop in $this) {
            $with[name][prop] = $this[prop];
        }

        return $with;
    }

    //FIXE me: double qoute in stringify obj
    var parseJSON = function(x) {
        try {
            eval('var y = ' + x)
        } catch (error) {
            log(pack.onerror, `@ - unexpected error from:\n\n  ${x}`)
            var y = {}
        }
        return y;
    }

    var stringifyJSON = function(x) {
        try {
            var y = JSON.stringify(x)
        } catch (error) {
            return log(pack.onerror, `@ - unexpected error`);
        }
        return y;
    }

    /*
    @ - proccess value if it returns a Promise object,
     and this function makes it easy to do just that
    */
    var EndValue = function(elm, value) {
        if ('object' === typeof value) {
            //value is an object, probably a promise type
            var name = value.constructor.name;
            name = name.toLowerCase()
            if (name === 'promise') {
                value.then(function(e) {
                    //run parsing for <e> @syn <object>
                    EndValue(elm, e);
                });
            } else {//value is not a promise type, run fallback here

            }
        } else {
            value = parseHtml(value)
            if (elm[attribute.target]) {
                name = elm[attribute.target];
                elm[name] = value;
                ultra_update(app)
            }
        }
    }

    //parse strings <attributes syntax>
    // param < 2 = apps
    // param < 3 = syn
    var parseString = function(x, y, z) {
        var typ = typeof (x)
        x = x + '';
        z = z ? z : 'text';
        var idx = x.indexOf(':');
        var sub_1 = x.substring(0, idx)
          , sub_1 = cleanSpace(sub_1).toLowerCase()
          , sub_2 = x.substring(idx + 1, x.length)
          , sub_2 = cleanSpace(sub_2, '-')

        // TRY: *log(y)
        if (y) {
            if (sub_1 == '') {
                sub_1 = z;
            }
            if (sub_1 in syn === false && y !== undefined) {
                sub_1 = z;
                sub_2 = x;
            }
        }

        //@ - this.com(object)
        typ = typ in syn ? typ : 'text';
        sub_1 = typ === 'number' ? typ : sub_1;
        var r = syn[typ](sub_2);
        return [sub_1, r];
    };

    // HEADS UP:
    var store = function(x, y) {

        var x = parseString(x, true, vld_type(typeof x));
        var do_ = syn[x[0]];
        var prm = do_(x[1], 'promise');

        var $prm = new Promise(function(r) {
            prm.then(function(e) {
                /**
               *
               * ERROR HERE: e = e
               *
               *
               * **/
                //    e = "text:" + e;
                e = e || e == 0 ? e : x[0] + ':' + x[1];
                r({
                    val: e,
                    prop: y
                })
            });
        }
        )
        return $prm;
    };

    //parse tag localName with (-)
    //FOR:app-<name>
    //RETURNS:<name>
    var parseM = function(x) {
        x = x.toLowerCase();
        x_i = x.lastIndexOf('-');
        x = x.substring(x_i + 1);
        return x;
    }

    //parsing @<?> to <length>
    //<?name=66> = {name:66}
    //return: <object>
    var parseUrl = function(val, x, y) {
        val = val || '';
        var tg_v = !x ? "innerHTML" : '';
        if (y) {
            if (!val.includes('?')) {
                return ({
                    url: {}
                })[attribute.view] = val
            }
        }
        if (!val.includes('?')) {
            val = val + "?" + attribute.target + "=" + tg_v
        }

        //@ - changeable (?) to (#, / etc)
        var i1 = val.indexOf('?');
        var view = val.substring(0, i1);
        var url = val.substring(i1 + 1, val.length).trim();
        if (url == "") {
            var url = attribute.target + "=" + tg_v;
        }
        if (!url.includes('=')) {
            var url = url + "="
        }

        url = url.trim()
        url = nimoEnc(url)

        //@ - fixed the letter of (url) if it === (&). @ - substring()
        var url = url.replace(/=/g, '":"')
          , url = url.replace(/&/g, '","');
        var url = `{"${url}"}`;
        url = nimoDec(url)

        var url = parseJSON(url);

        var str = '?'
        var lst = object_proto(url, 'return last property')
        for (var prop in url) {
            var $vl = url[prop];
            str += `${prop}=${$vl}`
            str += prop === lst ? '' : '&'
            var vl = $vl;

            if (!y) {
                //remeber to remove the below code to fixe loading delay
                // vl = parseUrl(vl,true,true).view;

                vl = parseString(vl);

                //PROBLEMS IN HERE
                //App or syn @loc
                var loc = App[App.attributes.item][AppName];
                vl1 = loc[vl[0]] || $vl;
                vl1 = 'object' == typeof vl1 ? vl1[vl[1]] || $vl : vl1;
                vl = vl1
            }

            url[prop] = vl;
        }

        //compusory properties
        if (!x) {
            url[attribute.target] = url[attribute.target] || tg_v;
            if (view.trim() == 0) {
                view = attribute.com + ':';
                url[attribute.target] = '';
            }
        }

        //heads up here 
        //@ - str
        // str = view+str
        // view = str
        view = url[attribute.view] || view;
        var obj = {
            url: url
        }
        obj[attribute.view] = view
        return obj;
    }

    //checks if AppName is a valid name
    var make_valid = function(val) {
        var val = val + ""
          , val = val.trim()
          , len = val.length;
        if (10 > len && val) {
            //  if (isAphabelt(val)) {
            return val;
            //  } else {
            //    return null;
            // }
        }
        return false;
    }

    // Active-User: @this.delay
    var parseTime = function(v) {
        if ('number' == typeof v) {
            return v;
        }
        v = String(v);
        v = v.toLowerCase();
        var num = v.replace(/[^0-9.]/gi, '')
          , str = v.replace(/[^a-z]/gi, '');
        num = num || 0;
        try {
            num = eval(num);
            str = str.trim();
        } catch (e) {
            if (e) {
                log(pack.onerror, 'invalid duration!.');
                return num;
            }
        }

        if (str == "") {
            return num;
        }

        if (str in time == false) {
            log(pack.onerror, `invalid time!.\n -try the following format, 'mil', 'sec', 'min'.`);
            return num;
        }

        return time[str](num);
    }

    //php syntax :)
    //<?<name> ?>
    var parseHtml = function(e) {
        var txt = 'object' == typeof e ? e.innerHTML : e;
        if ('object' !== typeof e) {//  console.log(e);
        }
        var tt = trueType(txt);
        if (tt === true) {
            // txt = purify_string(txt,'`(${\'\"})+')
            txt = txt.replace(/`|\$|{|\+/g, '\\$&'),
            txt = txt.replace(regex.syn[0], '`+don(`$&`)+`'),
            txt = txt.replace(regex.syn[1], '`+don(`---$&--`)+`'),
            txt = '`' + txt + '`';
            txt = eval(txt);

            if ('object' == typeof e) {
                //var target = e[attribute.app] === AppName ? e[attribute.target] || 'innerHTML' : 'innerHTML';
                e.innerHTML = txt;
            }
        }
        // setTimeout(function() {
        //    clearAttributes();
        // });
        return txt;
    }

    //making request <file>
    var rq = function(x, y) {

        x = x.includes('.') ||
        x.includes('/')? x : x + '.html';
        //.app
        /*
        // TODO: problem with host
        if a 404 error occur

        acode host problem

        //TRY: x = window.location.href + x;
        //OR TRY: x = x;
        */
        //if (window.win) {
        // x = window.location.href + x;
        //}
        var prm = new Promise(function(r) {
            var rqt = new XMLHttpRequest();
            var pnd = pack[attribute.request];
            if (y) {
                rqt.onloadstart = function(e) {
                    e = e.target;
                    (pnd || new Function())(e)
                }
                ;
            }

            //console.log(rqt);
            rqt.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //var response = this.response;
                    // response = response.replace(/[^]*<\{{nimoApp}\}>/i, '<\{{nimoApp}\}>')

                    //console.log(this.response);

                    // var response = response.trim();
                    // var tr = response.substring(3, 10).toLowerCase();
                    //if (tr === 'nimoapp') {
                    //    var response = response.substring(13, response.length)
                    //encode words
                    // }
                    // var response = nimoMin(response);
                    r(this.response)
                } else if (this.status === 404) {
                    log(pack.onerror, `${this.status} error while fetching '${x}'`)
                    r(null)
                }
            }
            ;
            rqt.open("GET", x, true);
            try {
                rqt.send();
            } catch (e) {
                log(pack.onerror, `${e.name} while fetching '${x}'\n -this could be due to an invalid protocol '${location.protocol}'`)
                r(null)
            }
        }
        );

        return prm;
    };

    var echo = function(v) {
        v = purify_string(v, '\',+', 2)

        v = "','" + v + "'";
        return v;
    }

    var exp = function(x, y) {

        var $x = parseUrl(x);
        x = $x[attribute.view];

        var tag = 'text'in $x.url ? null : $x.url.tag || 'span';

        var p_y = parseUrl(y, true);
        //  p_y[attribute.view] = p_y[attribute.view] ||  'com:';
        // p_y.url[attribute.target] = p_y.url[attribute.target] || ''

        var $y = (p_y[attribute.view])

        $y = parseString($y)
        var err_msg = `Error @${x}.\n -'${y}' is undefined.\n  -> error successfully resolved.`;
        var err_msg1 = `Error @${x}.\n -'${$y[1]}' is undefined @${y}.\n  -> error successfully resolved.`;
        var err_type = 404;
        try {
            var apps = App[App.attributes.item][x][$y[0]][$y[1]];
        } catch (e) {
            if (e) {
                log(pack.onerror, err_msg, err_type);
            }
        }
        /*
PROBLEM:
 HEADS UP:
        */
        apps = App[App.attributes.item]
        if (x in apps) {
            apps = App[App.attributes.item][x];
            ;
        } else {
            log(pack.onerror, err_msg, err_type);
            //return '';
            apps = {}
        }
        if ($y[0]in apps) {
            apps = apps[$y[0]];
        } else {
            log(pack.onerror, err_msg, err_type);
            apps = {}
        }

        if ($y[1] && $y[1]in apps) {
            apps = apps[$y[1]];
        } else {
            log(pack.onerror, err_msg1, err_type);
            apps = ''
        }

        //@ - authentication
        //if ($y[1] in apps === false) {
        //console.log(apps);
        //log(pack.onerror, `Error @${x}.\n -'${y}' is undefined @${x}.`);
        //    return '';
        //}

        // var apps = apps[$y[1]];
        //var tt = trueType(apps)

        // if (tt === true) {
        var apps = parseHtml(apps)

        //}

        var apps = parseString(apps);

        //var ap = App[App.attributes.item][AppName];
        /*
         WARNING:  bugs in here
        //VARIABLES: 'var tg'
        //FIXE: ${app}
        //$line
        //console.log(apps)
        // TRY: var tg = `<${tag} app="${x}" view="${p_y[attribute.view]}?target=${p_y.url[attribute.target]}">${apps[1]}</${tag}>`;
        */

        var fallback = p_y.url.fallback;
        // var target = p_y.url[attribute.target]||'${target}';
        delete (p_y.url.fallback);
        delete (p_y.url.tag);

        var str = '';
        fallback = parseUrl(fallback, true)

        //for (var prp in p_y.url) {
        // TODO: do authentication here
        //   str += ` ${prp}=${p_y.url[prp]}`;
        //}
        p_u = p_y.url;
        p_u[attribute.target] = purify_string(p_u[attribute.target] || '', '${') || '${target}';
        var target = '';

        for (var prp in p_u) {
            var tgt = p_u[prp]
            if (prp != attribute.target) {
                tgt = purify_string(tgt, '${');
            }
            target += `&${prp}=${tgt}`;
        }
        target = target.substring(1, target.length)

        //here
        target = `${attribute.target}=${p_u[attribute.target]}`;

        delete (p_y.url[attribute.target]);
        p_u[attribute.app] = x
        p_y[attribute.view] = purify_string(p_y[attribute.view], '${') + "?"
        p_u[attribute.view] = p_u[attribute.view] || `\`${p_y[attribute.view]}${target}\``;
        //fallback = fallback || '';
        //var tg = `${attribute.app}=${x} ${attribute.view}=${p_y[attribute.view]}?${attribute.target}=${target} ${str}`;
        //var tg = HTMLtag(tag, tg, fallback, p_y[attribute.view]);
        // console.log(p_u);
        // console.log(p_u);
        var tg = HTMLtag(tag, p_u, fallback);

        return tg;
    }

    var don = function(v) {
        // WARNING: ERRORs IN HERES!!
        v = purify_string(v, `"'()\``);
        v = '"' + v.substring(5, v.length - 4).trim();
        v = v.replace(/\s/, '"+echo(`');

        v = v.replace(/\n/gim, '');
        v = cleanSpace(v)
        v = v + "`);"

        v = "'" + eval(v);
        v = cleanSpace(v)
        v = "exp(" + v + ");";
        v = eval(v);
        return v;
    }

    //@attributes_syntax in objects @setItem;
    var lookT = function(obj, x) {
        for (var prp in obj) {
            var def = obj[prp];
            if (EqualTo(typeof def, ['string', 'number'])) {
                var c = parseString(def, '-');

                if (c[0] == attribute.com) {//try: obj[prp]='eval:'+c[1];
                }
            }
        }
        return obj;
    }

    var mark_view = function(st) {
        st[attribute.view] = st.getAttribute(attribute.view) || st[attribute.view];
        st.removeAttribute(attribute.view)
    };

    //updates @tag_attributes app=<name>
    var update_ex = function(apps, ex, ex2) {
        //var len = arguments.length;
        //var typ = 'at';
        //var name = '[app="' + AppName + '"]';
        //var elm = document.querySelectorAll(name);
        var elm = appSelector(attribute.view);
        // var arr = [];
        // for (var i = 0; i < elm.length; i++) {
        //     arr.push(elm[i]);
        // }
        // var _this = this;
        //var max_len = elm.length
        // eval('var t = ' + max_update);
        //arr.forEach(t);
        elm.forEach(max_update)
        //  return reture_$to_update_ex;
    }

    //updates app-<name>
    var update = function(apps, ex, ex2) {
        var len = arguments.length;
        var typ = 'tg';
        // var name = 'app-' + AppName;
        var name = '[' + attribute.app + '="' + AppName + '"]';
        // var elm = document.querySelectorAll(name);
        var elm = appSelector();
        // var arr = [];
        // for (var i = 0; i < elm.length; i++) {
        //   arr.push(elm[i]);
        // }
        //if (arr.length < 1) {
        //   update_ex(App[App.attributes.item][AppName], true);
        //   return;
        // }
        //console

        var _this = this;
        //var t = tags;
        eval('var t = ' + tags + '');
        //arr.forEach(t);

        elm.forEach(t)
    }

    var ultra_update = function(apps, name, ve) {
        apps = apps || app
        name = name || attribute.view;
        if (apps == undefined) {
            return;
        }
        ve = ve || window.document.querySelectorAll('[' + name + ']');
        appSelector(name)
        if (ve.length > 0) {
            for (var i = 0; i < ve.length; i++) {
                var elm = ve[i];
                var app_name = elm.getAttribute(attribute.app) || elm[attribute.app];
                if (app_name !== AppName) {
                    /**
                  HEADS UP HERE
                  LOCATION: break;


                  */

                    //HEADS UP HERE
                    break;
                }
                elm[attribute.view] = elm.getAttribute(attribute.view) || elm[attribute.view];

                if (elm[attribute.view] == undefined) {
                    return false;
                }
                elm.removeAttribute(attribute.view);
                //elm.removeAttribute(attribute.app);

                $target(elm)

                var p = parseString(elm[attribute.view])

                // HEADS UP:
                var p_1 = apps[p[0]];

                if (!p_1 || p[1] == 0) {
                    return ('no view');
                }
                if (p[1]in p_1 == false) {
                    return ('no view');
                }

                p_1 = p_1[p[1]]

                //error here
                //p
                var p = parseString(p_1, true, vld_type(typeof p_1))
                var p_1 = syn[p[0]];
                p_1 = p_1(p[1])

                if (EqualTo(typeof p_1, ['string', 'number'])) {
                    var $e = parseString(p_1, 'string');
                    p_1 = syn[$e[0]]($e[1]);
                }
                //if (elm[elm[attribute.target]] != String(p_1) || parseHtml(p_1) != elm[elm[attribute.target]]) {
                EndValue(elm, p_1)
                // elm[elm[attribute.target]] = parseHtml(p_1);
                // }

                var vw = window.document.querySelectorAll('[' + name + ']')
                if (vw.length > 0) {
                    ultra_update(apps)
                }
            }
        } else {
            return '';
        }
        return 'done!';
    }

    // DO: bug fixed
    // HEADS UP: only title is updating
    var max_update = function(st, index, length) {

        //  var strapp = strapp||undefined;
        //    var arr;
        var el = st;
        //DO:setting getting <tag attributes>[attribute.view];
        mark_view(st);

        //DO:parse <tag attributes>[attribute.view];
        $target(st)
        var p = parseString(st[attribute.view]);

        //if (index === 0) {
        //trash.strapp2 = parseJSON(App.string[AppName]);
        //}

        var strapp = parseJSON(App.string[AppName]) || {};

        //here
        // if (p[0]in strapp === false && p[0]in App[App.attributes.item][AppName] === false) {
        //  return (false);
        //}

        strapp[p[0]] = strapp[p[0]] || {};

        var old = strapp[p[0]] || {};
        var _new = App[App.attributes.item][AppName][p[0]] || {};
        //if (p[1].trim() == 0) {
        // return 
        //}
        // console.log(p[1]);

        var $old = old[p[1]];
        var $new = _new[p[1]];

        // var st_target = st[st[attribute.target]]
        //  , st_target = parseString(st[st[attribute.target]])

        //  var st_new = parseString($new,'text')
        //  console.log(st_new);
        // Error: bugs
        // TODO:

        /*
        var $n =$new;
        if ('string' === typeof $new) {
            var $e = parseString($new, 'string');
            $new = syn[$e[0]]($e[1])||$new;
        }
        if ('string' === typeof $old) {
            var $e = parseString($old, 'string');
            $old = ((strapp)[$e[0]]||{})[$e[1]]||$old;
        }
*/

        if ($old !== $new) {
            /*

TODO: update item by st.view other tha st.target

*/
            new Promise(function(r) {
                // var val_syn = parseString($new, true, vld_type(typeof $new));
                // var $new_0 = syn[val_syn[0]](val_syn[1]);

                //HEADS up!!

                if (EqualTo(typeof $new, ['string'])) {
                    var $e = parseString($new, 'string');
                    $new = syn[$e[0]]($e[1], null) || $new;
                }

                EndValue(st, $new);

                //st[st[attribute.target]] = parseHtml($new);
                //app[p[0]][p[1]] = $new;

                strapp[p[0]][p[1]] = $new;
                // strapp[p[0]][p[1]] = $n;

                //trash.strapp2[p[0]][p[1]] = $new;

                var obj = {
                    tag: st,
                    value: $new,
                };
                obj[attribute.view] = st[attribute.view];

                var resolve_$at_updateItem = obj;

                r(resolve_$at_updateItem);
                // reture_$to_update_ex =resolve_$at_updateItem;
            }
            ).then(function(obj) {
                /**
                 * trash.updated_date_$_max_update = trash.updated_date_$_max_update||[];
                 * trash.updated_date_$_max_update.push(e);
                 */

                //UPDATE HERE:

                (pack.onupdate || new Function)(obj)
            });
        } else {}

        //length.length === max_len

        if (index + 1 === length.length) {
            var strapp_ = App[App.attributes.item][AppName];
            App.string[AppName] = stringifyJSON(strapp_);
            delete (trash.strapp2)
        }

        //HEADS UP HERE: denger here
        //denger successfully fixed!
        //closed!!!
        //if (i + 1 === len) {
        //  App.string[AppName] = stringifyJSON(strapp);
        //}

        //DO: checks if <attributes><view> exist in document.body;
        //RETURNS: boolean
        //VARIABLES: <$st> <st>
        var $st = false;
        var $st = st.attributes[attribute.view] === undefined ? false : true;
        if ($st === true) {

            // FIXME: add two param <boolean>
            //TRY:update_ex(apps,$st);
            update_ex(app);
        }

    }

    // HEADS UP: this creates <element>.act property in the element making the user manipulate multiple properties inside <element>
    var $target = function(elm, x) {
        // WARNING: bugs in here
        var v = elm[attribute.action] ? elm[attribute.action] : elm[attribute.view];
        v = v + ""
        elm[attribute.app] = elm.getAttribute(attribute.app) || elm[attribute.app]
        elm.removeAttribute(attribute.app);

        //if (!elm.act) {
        // elm.act = v;
        if (v.includes('?')) {
            elm[attribute.action] = v;
            var pr = parseUrl(v);
            elm[attribute.view] = elm[attribute.view] || elm[attribute.view] != 0 ? parseUrl(elm[attribute.view])[attribute.view] : pr[attribute.view];
            for (var prp in pr.url) {
                var ul = pr.url[prp];
                var p = parseString(ul)
                $p = p;

                var _app = App[App.attributes.item][AppName];
                var val = ""
                if (p[0]in _app) {
                    val = _app[p[0]];
                    if (p[1]in val) {
                        val = val[p[1]]
                    } else {
                        val = '';
                        break;
                    }
                    p = parseString(val);
                    if (p[0]in _app === false) {
                        p[0] = 'text'
                    }
                    val = syn[p[0]](p[1]);

                } else {
                    val = p[1]
                }
                if (elm[prp] !== val && x && $p[0]in app) {} else if (!x) {
                    elm[prp] = val;
                }
            }

            try {
                elm[attribute.target] = elm[attribute.target].trim();
            } catch (e) {}

            /**
             * //no longer need due to @parseUrl
             * 
            if (elm[attribute.target] in elm === false) {
                elm[attribute.target] = 'innerHTML';
            }


             */
        }
        //  }

        elm[attribute.target] = elm[attribute.target] == 0 || elm[attribute.target] ? elm[attribute.target] : 'innerHTML';
        //  elm[attribute.action] += ''
        return elm[attribute.target];
    }

    // @update eval(tag+'')
    var tags = function(elm) {

        //FOR: app-<name>
        if (!elm.getAttribute(attribute.app) || !elm[attribute.app]) {
            // WARNING: bugs in here
            // AT: elm.setAttribute
            var loc = elm.localName;
            var loc = parseM(loc);
            //elm.setAttribute('app',loc);
        }
        elm[attribute.view] = elm.getAttribute(attribute.view) || elm[attribute.view];
        if (elm[attribute.view] == undefined) {
            return false;
        }
        elm.removeAttribute(attribute.view);
        $target(elm)
        var view = parseString(elm[attribute.view]);

        // if ('string' == typeof ex) {
        //     if (view[0] !== ex) {
        //        return false
        //    }
        //}

        var err_0 = `@${elm[attribute.view]}.\n '${view[0]}' is undefined or invalid\n -use the getItem() method to look into this error`;
        var err_1 = `@${elm[attribute.view]}.\n '${view[1]}' is undefined or invalid\n -use the getItem() method to look into this error\n -> error successfully resolved.`;
        apps = apps || app

        if (view[0]in apps === false) {
            //  console.log(view[1]);

            var err_type = view[0] === attribute.com ? 419 : undefined;
            var err_msg = view[0] === attribute.com ? err_0 + '\n -Load time Error' : err_0;
            log(pack.onerror, err_msg, err_type)
            //var apps ={}
            return;
        }
        var val0 = apps[view[0]]
        if (!view[1]) {
            return;
        }
        if (view[1]in val0 === false) {
            var err_type = 404;
            var err_msg = err_1;
            log(pack.onerror, err_msg, err_type)
            // var val =''
            return;
        } else {
            var val = val0[view[1]];
        }

        var val = parseString(val, 'text');
        var do_ = syn[val[0]];
        var vl = do_(val[1], App[attribute.com][AppName])

        //console.log(val);
        if (val[0] == attribute.com) {// vl = parseString(vl, null);
        // var do_ = syn[vl[0]];
        // vl = do_(vl[1]);
        }

        var Text = new Promise(function(r) {
            if ('object' == typeof vl) {

                // TODO: try check if (vl+'') includes 'Promise' or === '[Object Promise]'
                vl.then(function(vl) {
                    r(vl);
                })
            } else {
                r(vl);
            }
        }
        );

        Text.then(function(e) {
            /*
WARNING: lots of bugs in this function
          */
            if (ex === undefined) {
                if (EqualTo(typeof e, ['string', 'number'])) {
                    e = parseHtml(e)
                    var $e = parseString(e, 'string');
                }
                $e = syn[$e[0]]($e[1])
                EndValue(elm, $e)
                // elm[elm[attribute.target]] = syn[$e[0]]($e[1]);

                if (document.querySelector(`[${attribute.app}="${AppName}"]`)) {
                    ultra_update(apps, attribute.app)
                }

                return ('');
            }
        });

    }

    var txt = {
        null: function(x) {
            return x;
        },
        promise: $prom
    }

    if (arguments.length < 1) {
        log(pack.onerror, handler.con + `1 argument required, but only ${arguments.length} present.\n - argument 1 = <string>`)
        return;
    }
    // <App> @param<1>
    var AppName = arguments[0];
    var $AppName = AppName
    // checks if AppName ain't a false value
    if (!AppName || AppName == 0) {
        log(pack.onerror, handler.param);
        return null;
    }

    // checks if AppName ain't an invalid value
    AppName = make_valid(AppName);
    if (!AppName) {
        log(pack.onerror, `'${$AppName}'` + handler.name0);
        return null;
    }

    /*
    if (AppName in App[App.attributes.item]) {
        delete (this.delay)
        log(pack.onerror, `'${$AppName}' already exist`);
        return;
    }
*/

    //checks if App() is a class, *user
    if (!isClass(this)) {
        if (AppName in App[App.attributes.station]) {
            return App[App.attributes.station][AppName];
        }
        log(pack.onerror, handler.type);
        return null;
    }

    //<globalise>
    // makeing AppName an Object properties, *globalise
    App[attribute.com][AppName] = {};
    App[App.attributes.item][AppName] = {};
    attribute.action = 'act-' + AppName + attribute.action
    App[App.attributes.item][AppName][attribute.com] = {};
    var app = App[App.attributes.item][AppName];
    var $com = App[App.attributes.item][AppName][attribute.com];

    //loaded
    var exe = function() {
        $obj.load = $obj.load || $prom(App.error.index);
        $obj.load.then(function(e) {
            // remove typeof === number
            if (EqualTo(typeof e, ['string', 'number'])) {
                var e = parseJSON(e);
            }
            var last = object_proto(e).length;
            var num = 0;
            for (var prop in e) {
                var st = store(e[prop], prop);
                st.then(function(val) {
                    num++
                    var ph = parseHtml(val.val);
                    //  var ph = val.val;
                    $com[val.prop] = ph;
                    App[attribute.com][AppName][val.prop] = ph;
                    //parseHtml($Html);

                    if (num === last) {

                        /***
        *
        * app loaded!!
        * @<pack.onload>
        * @<update>
        *
        *
        * ***/
                        /**
                   *
                   *
                   * HEADS UP HERE: setTimeout <500>
                   *
                   * **/

                        var time = parseTime(pack.delay);
                        if (pack.devMode == false) {
                            log = new Function();
                        }

                        parseHtml($Html);
                        var load = function(a) {
                            var $apps = App[App.attributes.item][AppName];
                            App.string[AppName] = stringifyJSON($apps);
                            //pack.onload(pack)
                            //parseHtml($Html);
                            //console.log(appSelector());
                            update(App[App.attributes.item][AppName]);

                            if (pack.onload !== null) {
                                if (a) {
                                    (pack.onload || new Function)(pack)
                                } else {
                                    setTimeout(function() {
                                        (pack.onload || new Function)(pack)
                                    }, 50);
                                }
                            }
                        }

                        if (time) {
                            setTimeout(function() {
                                load();
                            }, time);
                        } else {
                            load(true);
                        }

                        /**
           *
           * <end> @break @loop
           *
           **/

                    }
                });
            }
        });
        delete (pack[attribute.com])
        //[attribute.com]
    };

    //depending files
    new Promise(function(r) {
        pack[attribute.com] = function() {
            var val = arguments[0] || App.error.index;
            if (EqualTo(typeof val, ['string', 'number'])) {
                var prm = rq(val);
            } else {
                var prm = new Promise(function(r) {
                    r(val);
                }
                );
            }
            $obj.load = prm;
            r();
        }
    }
    ).then(exe);

    //loading @<this.com>
    setTimeout(function() {
        if (pack[attribute.com]) {
            exe();
        }
    }, 100);

    //<globalise> @App[App.attributes.item]

    this.onload = null;
    this.onupdate = null;
    this.onerror = null;
    this[attribute.request] = null

    //auto updating
    this.autoUpdateMode = function() {
        pack.store[attribute.item] = app;
        pack.autoUpdateMode = true;
        autoUpdateMode();
    }
    ;
    //database
    //globalise object
    this.store = (/*
        this.autoUpdate ? {
        item: function() {
            var item = arguments[0];
            if (arguments.length < 1) {
                log(pack.onerror, `1 arguments required, but only ${arguments.length} present.\n - argument 1 = <string>`)
                return
            }
            if (item in app === false) {
                app[item] = {};
            }
            return app[item]
        },
        hasItem: function() {
            var item = arguments[0];
            return item in app
        }
    } : 
    */

    {
        setItem: function() {
            var name = arguments[0];
            var obj = arguments[1];
            if (arguments.length < 2) {
                log(pack.onerror, handler.con1 + `2 arguments required, but only ${arguments.length} present.\n - argument 1 = <string>\n - argument 2 = <object>`)
                return
            }
            if ('string' === typeof obj) {
                obj = rq(obj);
            } else if ('object' === typeof obj) {
                obj = new Promise(function(resolve, reject) {
                    resolve(obj);
                }
                );
            } else if (!obj) {
                return log(pack.onerror, '@setItem\n -argument 1 most be a string\n argument 2 should be the following, a valid object, a valid URL to a \'.JSON\' file.')
            }
            var c = name.toLowerCase().trim();
            if (c === attribute.com) {
                log(pack.onerror, `@setItem\n '${c}' is an invalid name!.\n -try something else.`);
                return false;
            }
            obj.then(function(e) {
                if ('string' === typeof e) {
                    var e = parseJSON(e)
                }
                //var e = lookT(e, App.com);
                var lst = object_proto(e, 'return last property');

                for (var prp in e) {
                    var e_prp = e[prp]
                    var st = store(e_prp, prp);
                    st.then(function(obj) {

                        e[obj.prop] = obj.val;
                        if (obj.prop === lst) {
                            app[name] = e;
                            var i = appSelector(attribute.view, name + ':');
                            //ultra_update(null, null, i)
                            //or
                            //console.log(i);
                            i.forEach(max_update)
                            // callback:app[name] = e;
                        }
                    })
                }

                //app[name] = e;
                // callback:app[name] = e;
            })
        },

        updateItem: function() {
            var name = arguments[0];
            if (name in app == false) {

                //callback use only
                update_ex(App[App.attributes.item][AppName], true);

                log(pack.onerror, `@updateItem\n '${name}' is not a valid item.`)
                return false;
            }
            var obj = app[name];
            var $this = this;
            /*
            GOTO : isClass <VARIABLE>


            */
            if (isClass(this)) {
                var prm = new Promise(function(r) {
                    r(merge(this, `App[App.attributes.item].${AppName}`, name));
                }
                )
            } else {
                var prm = new Promise(function(r) {
                    //setTimeout(function () {
                    r(obj);
                    //},1);
                }
                )
            }
            prm.then(function(e) {

                /**
             * pack.onupdate(new Promise(function (r) {
                setTimeout(function () {
                    r(trash.updated_date_$_max_update)
                    delete(trash.updated_date_$_max_update)
                });
            }));
             */
                //run code here
                if ('boolean' !== typeof pack.autoUpdateMode && pack.autoUpdateMode !== true) {
                    update_ex(App[App.attributes.item][AppName], true);
                }
            });

            return obj;
        },

        hasItem: function() {
            var name = arguments[0];
            if (name in app) {
                return true;
            } else {
                return false;
            }
        },

        getItem: function() {
            var name = arguments[0];
            if (name === undefined) {
                var $app = app;
            } else {
                var $app = app[name]
            }
            return $app;
        }
    });

    //name
    this.name = AppName;

    (App[App.attributes.station] = App[App.attributes.station] || {})[AppName] = this;

    var autoUpdateMode = function() {
        //make an interval here @requestAnimationFrame or @setInterval or selfMake
        //requestAnimationFrame(autoUpdateMode);
        if (pack.autoUpdateMode) {
            update_ex();
        }
        requestAnimationFrame(autoUpdateMode);
    };
}, //handler
function() {
    var event = arguments[0];
    var value = arguments[1];
    var type = arguments[2];
    (event || new Function)({
        value: value,
        code: type
    });
    console.error(value);
}))
