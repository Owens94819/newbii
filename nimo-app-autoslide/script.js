
//@ - <html>
var body = document.documentElement;
body.style.opacity = '0';

//@ - img src
var img = 4;

//@ - creating app
var app = new App('nimo');
app.com('app/app.json');
app.autoUpdateMode();
app.delay = 100;

var store = app.store;
var item = store.items;
var get = item.com;

//@ - slider
function runTime() {
    if (typeof (get.num) != 'number') {
        return ("updates freezed");
    }
    get.num++;
    return ("updated");
}

//@ - pause/play slider
function controller() {
    if (typeof (get.num) != 'number') {
        get.num = +get.num;
        return ("played");
    }
    get.num = String(get.num);
    return ("paused")
}

//@ - app updated!!
app.onupdate = function(e) {
    if (get.num > img) {
        get.num = 0;
    }
}

//@ - error handler / fallback
app.onerror = function(e) {
  console.log(e);
    if (e.code == 419) {
        location.reload();
    }
}

//@ - loading
app.onrequest = function(e) {
    console.log(e);
}

//@ - app loaded
app.onload = function(e) {
    setInterval(runTime, 1000);
    body.style.opacity = '';
    store.deleteItem('com:index');
   
};
