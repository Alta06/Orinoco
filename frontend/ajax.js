function ajaxGet(url) {
    return new Promise((resolve) => {
    let req = new XMLHttpRequest();
    req.onload = function () {
        resolve(req.responseText);
    }
    req.open("GET", url);
    req.send(null);
    }) 
}

