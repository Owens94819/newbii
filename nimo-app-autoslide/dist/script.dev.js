"use strict";

var app = new App('nimo');
app.com('app/app.json');
app.delay = 100;
var store = app.store;

app.onupdate = function (e) {
  var get = store.getItem('com');

  if (get.num > 5) {
    get.num = 0;
  }
};