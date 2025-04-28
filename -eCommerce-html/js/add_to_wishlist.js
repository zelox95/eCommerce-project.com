function addToWishlist(name, price, image) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // تعريف الكائن الخاص بالمنتج
    let product = {
        name: name,
        price: price,
        image: image
    };

    // إضافة المنتج إلى الـ Wishlist
    wishlist.push(product);

    // تحديث localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // إظهار رسالة للمستخدم بأن المنتج تم إضافته
    alert(`${name} has been added to your wishlist!`);}