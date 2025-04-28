// قراءة الـ Wishlist من localStorage وعرض المنتجات
function renderWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistContainer = document.querySelector('.table tbody');

    wishlistContainer.innerHTML = ''; // تنظيف الحاوية أولاً

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<tr><td colspan='5'>Your wishlist is empty</td></tr>";
    } else {
        wishlist.forEach((item, index) => {
            let productRow = document.createElement('tr');
            productRow.innerHTML = `
                <td class="product-col">
                    <div class="product">
                        <figure class="product-media">
                            <a href="#">
                                <img src="${item.image}" alt="Product image">
                            </a>
                        </figure>
                        <h3 class="product-title"><a href="#">${item.name}</a></h3>
                    </div>
                </td>
                <td class="price-col">${item.price}</td>
                <td class="action-col">
                    <button class="btn btn-block btn-outline-primary-2">
                        <i class="icon-cart-plus"></i>Add to Cart
                    </button>
                </td>
                <td class="remove-col">
                    <button class="btn-remove" onclick="removeFromWishlist(${index})">
                        <i class="icon-close"></i>
                    </button>
                </td>
            `;
            wishlistContainer.appendChild(productRow);
        });
    }
}

// دالة لحذف المنتجات من الـ Wishlist
function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1); // إزالة المنتج من المصفوفة
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); // تحديث الـ localStorage
    renderWishlist(); // إعادة عرض الـ Wishlist
}

// استعراض الـ Wishlist عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    renderWishlist();
});
