function addToCart(name, price, image, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let product = {
        name: name,
        price: price,
        image: image,
        quantity: parseInt(quantity)  // نحول الكمية لرقم صحيح
    };

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = "cart.html"; // يوديك على صفحة السلة
}