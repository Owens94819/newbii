window.nimoLESS = function() {
  nimo__script = {
    script: window.document.scripts,
    script_length: window.document.scripts.length,
    a: null,
    b: window
  };
 nimo_arr = nimoID;
 for (var i = 0; i < nimo_arr.length; i++) {
   __array__ = nimoID[i];
   __selected__ = window.document.getElementById(''+__array__+'');
  if(__selected__.innerHTML){
    __data = 'data:text/javascript;charset=utf-8,'+encodeURIComponent(__selected__.innerHTML);
     }else{
    __data =__selected__.src;
  }
 var __SOURCE__ = new XMLHttpRequest();
__SOURCE__.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    __parser__ = "\n"+this.responseText+"\n";
    nimo__injection_0 = __parser__.replace(/owe/gm,'owe');
    nimo__injection_1 = nimo__injection_0.replace(/[\I][\D][_]'+[a-zA-Z_$\-0-9]*[']/g, ' (%%front%%)\$&(%%back%%)');
    nimo__injection_2 = nimo__injection_1.replace(/\(+%%front%%+[)]+ID_'/g," document.getElementById('");
    nimo__injection_3 = nimo__injection_2.replace(/[(]+%%back%%+[)]/g,")");  
    nimo__injection_4 = nimo__injection_3.replace(/[\Q][\S][_]'+[a-zA-Z_$\-#.0-9]*[']/g, ' (%%frontQS%%)\$&(%%backQS%%)');
    nimo__injection_5 = nimo__injection_4.replace(/\(+%%frontQS%%+[)]+QS_'/g,"document.querySelector('");
    nimo__injection_6 = nimo__injection_5.replace(/[(]+%%backQS%%+[)]/g,")");  
    nimo__injection_6_0 = nimo__injection_6.replace(/[\Q][\S][\A][_]'+[a-zA-Z_$#.]*[']/g, ' (%%frontQS%%)\$&(%%backQS%%)');
    nimo__injection_6_1 = nimo__injection_6_0.replace(/\(+%%frontQS%%+[)]+QSA_'/g,"document.querySelectorAll('");
    nimo__injection_6_2 = nimo__injection_6_1.replace(/[(]+%%backQS%%+[)]/g,")");  
    nimo__injection_6_3 = nimo__injection_6_2.replace(/[T][N][_]'+[a-zA-Z_$#.]*[']/g, ' (%%frontQS%%)\$&(%%backQS%%)');
    nimo__injection_6_4 = nimo__injection_6_3.replace(/\(+%%frontQS%%+[)]+TN_'/g,"document.getElementsByTagName('");
    nimo__injection_6_5 = nimo__injection_6_4.replace(/[(]+%%backQS%%+[)]/g,")");  
    nimo__injection_6_6 = nimo__injection_6_5.replace(/[C][N][_]'+[a-zA-Z_$#.]*[']/g, ' (%%frontQS%%)\$&(%%backQS%%)');
    nimo__injection_6_7 = nimo__injection_6_6.replace(/\(+%%frontQS%%+[)]+CN_'/g,"document.getElementsByClassName('");
    nimo__injection_6_8 = nimo__injection_6_7.replace(/[(]+%%backQS%%+[)]/g,")");  
    nimo__injection_7 = nimo__injection_6_8.replace(/[.]+css+[\s]+[=]|[.]+css+[=]/g,'.style.cssText = ');
    injector__nimo = "(\/[*]+[{]+[\\[]["+"0-9][\\]]*[\\s\\n\\r\\n\\ta-z#A-Z0-9.{,\\\\%@_(\\[\\]):\\-;''\"\"}]*[}]\\*\\/)"; 
    nimo_injection_paser = new RegExp(injector__nimo, "g");
    nimo__injection_8 = nimo__injection_7.replace(nimo_injection_paser, '(%%O%%)\$&(%%C%%)');
    nimo__injection_9 = nimo__injection_8.lastIndexOf('(%%O%%)/*{');
    nimo__injection_10 = nimo__injection_8.lastIndexOf('}*/(%%C%%)');
    nimo__injection_11 = nimo__injection_8.indexOf('(%%O%%)/*{');
    nimo__injection_12 = nimo__injection_8.indexOf('}*/(%%C%%)');
    nimo__injection_13 = nimo__injection_8.substring(nimo__injection_11+16,nimo__injection_12);
    nimo__injection_14 = nimo__injection_8.substr(nimo__injection_9+10, 5);
    nimo__injection_15 = nimo__injection_14.replace(/[^0-9]/g,'');
    nimo__injection_16 = parseFloat(nimo__injection_15+"+"+0);
    _body_script = window.document.body;
     for (var css = 0; css < nimo__injection_16+1; css++) {
    injector__nimo_2 = "(\/[*]+[{]+[\\[]["+css+"][\\]]*[\\s\\n\\r\\n\\ta-z#A-Z0-9.{,\\\\%@_(\\[\\]):\\-;''\"\"}]*[}]\\*\\/)"; 
    nimo_injection_paser_2 = new RegExp(injector__nimo_2, "g");
    nimo__injection_8_2 = nimo__injection_7.replace(nimo_injection_paser, '(%%O%%)\$&(%%C%%)');
    nimo__injection_9_2 = nimo__injection_8_2.lastIndexOf('(%%O%%)/*{['+css);
    nimo__injection_10_2 = nimo__injection_8_2.indexOf('}*/(%%C%%)');
    nimo__injection_11_2 = nimo__injection_8_2.substring(nimo__injection_9_2,nimo__injection_8_2.length);
    nimo__injection_12_2 = nimo__injection_11_2.indexOf('(%%O%%)/*{['+css);
    nimo__injection_13_2 = nimo__injection_11_2.indexOf('}*/(%%C%%)');
    nimo__injection_14_2 = nimo__injection_11_2.substring(nimo__injection_12_2,nimo__injection_13_2);
    nimo__injection_15_2 = nimo__injection_14_2.replace(/([(]+%%O%%+[)]\/\*{\[+[0-9]*\])/g,'');
    translate_nimo_0 = nimo__injection_8.replace(/([(]+%%O%%+[)]+[/]+[*]+[{]+[\[]+[0-9]*[\]]*[\w]*[\s])/gm,'!_!_!_!'+css+'\r\n');
    translate_nimo_1 = translate_nimo_0.replace(/([\s]+[}]+[*]+[/]+[(]+%%C%%+[)])/gm,'\r\n\r\n_!_!_!_'+css);
    nimo__injection_16_2  = nimo__injection_15_2.replace(/[\r\n]/gim,'');
    nimo__injection_17_2 = nimo__injection_16_2;
    nimo__injection_18_2 = new RegExp("([(]+%%O%%+[)]+[/]+[*]+[{]+[\[]+["+css+"]*[\]]+[^><]*[}]+[*]+[/]+[(]+%%C%%+[)])", "g");
   nimo__injection_19_2 = nimo__injection_8_2.replace(/(\(%%O%%\)\/\*{\[+[0-9]*\])/g,'document.getElementById("nimo_css'+css+'").innerHTML+="');                                         
  nimo__injection_19_3 = nimo__injection_19_2.replace(/[}]+[*]+[/]+[(]%%C%%[)]/g,'";');
  nimo__injection_19_4_2 = nimo__injection_19_3.replace(/[a-zA-Z0-9_$]*[(]+on*[a-z]+[)]+[\sa-zA-Z0-9"'$_]*[{]/g,'[__function1__]\$&');
  nimo__injection_19_4_2_1 = nimo__injection_19_4_2.replace(/[\[]+__function1__+[\]]*[a-zA-Z0-9$_};]?[^}]*[^]*[}]/g,'$&');
  nimo__injection_19_4_3 = nimo__injection_19_4_2_1.replace(/[\[]+__function1__+[\]]+[a-zA-Z0-9$_]*[(]/g,'\$&[__function2__]');
  nimo__injection_19_4_4 = nimo__injection_19_4_3.replace(/[(]+[\[]+__function2__+[\]]+[a-z]*[)]+[a-zA-Z0-9'"\s]*[{]/g,'\$&[__function3__]');
  nimo__injection_19_4_5 = nimo__injection_19_4_4.replace(/\[__function1__\]/g,'');
  nimo__injection_19_4_6 = nimo__injection_19_4_5.replace(/[(]+\[__function2__\]/g,'.');
  nimo__injection_19_4_7 = nimo__injection_19_4_6.replace(/[.]+on+[a-z]*[)]/g,'\$&[__function1__])');
  nimo__injection_19_4_8 = nimo__injection_19_4_7.replace(/[)]+[\[]+__function1__+[\]]+[)]/g,' = function(');
  nimo__injection_19_4_9 = nimo__injection_19_4_8.replace(/[{]+[\[]+__function3__+[\]]/g,') {');
  nimo__injection_19_4_10 = nimo__injection_19_4_9.replace(/([$]+[(]+[\w\W]*[\s]+[{]*[}]+[)])/g,'[%%function1_nimo%%]\$&[%%function2_nimo%%]');
  nimo__injection_19_4_11 = nimo__injection_19_4_10.replace(/([\[]+%%function1_nimo%%+[\]]+[$]+[(]+[^{]*)/g,'\$&[%%null%%]');
  nimo__injection_19_4_12 = nimo__injection_19_4_11.replace(/([\[]+%%function1_nimo%%+[\]]+[$]+[(])/g,'function(');
  nimo__injection_19_4_13 = nimo__injection_19_4_12.replace(/([\[]+%%null%%+[\]])/g,') ');
  nimo__injection_19_4_14 = nimo__injection_19_4_13.replace(/([)]+[\[]+%%function2_nimo%%+[\]])/g,'');
  
  nimo__injection_19_4_15 = nimo__injection_19_4_14.replace(/\n/g,'/*space*/\n').replace(/([\s]+[/]+[*]+space+[*]+[/]+[\n])/g,'/*space*/\n');
 nimo__injection_19_4_16 = nimo__injection_19_4_15.replace(/([\}\)\]]+[/]+[*]+space+[*]+[/])/g,'\$&; ');
 $nimo__injection_19_5 = nimo__injection_19_4_16.replace(/[/][*]+space+[*][/]/g,'');


 $nimo__injection_corrections_0 = $nimo__injection_19_5.replace(/([a-zA-Z_$]+[\s]+[=]*["]*["]*[\n])/g,'$&;');
 $nimo__injection_19_5_0 = $nimo__injection_corrections_0.replace(/([/]+[/]+[^\n]*[\n])/g,'');
 $nimo__injection_19_5_1 = $nimo__injection_19_5_0.replace(/([/][*][\W\w]*[*][/])/g,'');
 $nimo__injection_19_5_2 = $nimo__injection_19_5_1.replace(/(Random+\(+[0-9]*\))/g,'$random');
 nimo__injection_19_5 = $nimo__injection_19_5_2.replace(/\n/g,'');

  
 $alphabet__lowercase = "onmlkjihgfedcba" + "zyxwvutsrqp";
 $alphabet__uppercase = "LMNOPQRSTUVWXYZ" + "ABCDEFGHIJK";
 $__numbers = "0123456789";
 $__objects = "=-_";
 $max__Math_random = 26;
 randomMAX = 8;
    for (var nimoRandom = 0; nimoRandom < randomMAX; nimoRandom++) {
      $random__Names = document.createElement('c-1');
      $random__Names.innerHTML += $alphabet__uppercase.charAt((Math.floor(Math.random() * $max__Math_random))) + "" + $alphabet__lowercase.charAt((Math.floor(Math.random() * $max__Math_random))) + "" + $__numbers.charAt((Math.floor(Math.random() * $max__Math_random))) + "" + $__objects.charAt((Math.floor(Math.random() * $max__Math_random)));
      $random__Names.value += $random__Names.innerHTML;
      $random__Names.style.cssText = "display:none;";
      document.body.appendChild($random__Names);
      main_0 = document.querySelector('c-1');
      main_0.innerHTML += $random__Names.innerHTML;
    }
    $random = main_0.innerHTML;
    
    
    
    _style_ = document.createElement("style");
    _style_.id = "nimo_css"+css;
    _body_script.appendChild(_style_);
     }
    _javascript = document.createElement("script");
    if(nimo__injection_19_5.includes('window.onload')){
    _javascript.src = 'data:text/javascript;charset=utf-8,'+encodeURIComponent('\r\n '+nimo__injection_19_5+'\r\n onload()');
    }else{
    _javascript.src = 'data:text/javascript;charset=utf-8,'+encodeURIComponent('\r\n '+nimo__injection_19_5+'\r\n');
    }
    _javascript.id = "nimo_js"+i;
    _javascript.crossOrigin = "anonymous";
    _body_script.appendChild(_javascript);
  }};
__SOURCE__.open("GET", __data, true);
__SOURCE__.send();
old__script = document.getElementById(''+nimoID[i]+'');
if(old__script.innerHTML){
old__script.innerHTML = "\s\n\n\"NIMOLESS_INJECTOR\"\;\n\n\r\n";
}else{
old__script.src = "NIMOLESS_INJECTOR";
}}};
setTimeout(function() {
__body__ = window.document.body;
__bodyValue__ = __body__.innerHTML.replace(/(<c+-1+\s+style="+display: none;"+>+[\w\W]*<\/+c-1>)/g, '');
__body__.innerHTML = __bodyValue__;
},1000)