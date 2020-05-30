function ajaxGet(url) {
    return new Promise(function(resolve) {
    var req = new XMLHttpRequest();
    req.onload = function () {
        resolve(req.responseText);
    }
    req.open("GET", url);
    req.send(null);
    }) 
}

