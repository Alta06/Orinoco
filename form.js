

/* (function () {
     function toJSONString(form) {
        var contact = {};
         var elements = form.querySelectorAll("input, select, textarea");
         for (var i = 0; i < elements.length; ++i) {
             var element = elements[i];
             var name = element.name;
             var value = element.value;

             if (name) {
                 contact[name] = value;
             }
         }
         return JSON.stringify(contact);
     } */
    /* function post (path, params, method='post') {

         const form = document.getElementById("myForm");

         form.method = method;
         form.action = path;
         for (const key in params) {
             if (params.hasOwnProperty(key)) {
                 const hiddenField = document.createElement('input');
                 hiddenField.type = 'hidden';
                 hiddenField.name = key;
                 hiddenField.value = params[key];

                 form.appendChild(hiddenField);
             }
         }

         document.body.appendChild(form);
  form.submit();
};
;


  post ('/order.html', {name: 'test'});

  document.getElementById('test').textContent = param; */
  /* 
         form.addEventListener("submit", function (e) {
             e.preventDefault();
             var order = toJSONString(this) + storageCart;
             output.innerHTML += json;
             output.innerHTML += products;

            console.log(contact);
         }, false);
 */
  



    
