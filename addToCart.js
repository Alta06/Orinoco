var numberOfproduct = 1;

addToCart.addEventListener('click', function (event) {
  
            cart.push(id);
            document.getElementById('cartIco').textContent = cart.length;
        
        numberOfproduct++;
    
    localStorage.setItem('cart', JSON.stringify(cart));
});
console.log(cart);