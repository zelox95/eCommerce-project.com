
    const brandFilter = document.getElementById("brandFilter");
    const colorFilter = document.getElementById("colorFilter");
    const priceFilter = document.getElementById("priceFilterRange");
    const priceValue = document.getElementById("priceValue");

    const allBoxes = document.querySelectorAll(".product-box");

    function filterProducts() {
      const brand = brandFilter.value;
      const color = colorFilter.value;
      const maxPrice = parseFloat(priceFilter.value);
      priceValue.textContent = maxPrice;
    
      allBoxes.forEach(box => {
        const boxBrand = box.dataset.brand;
        const boxColor = box.dataset.color;
        const boxPrice = parseFloat(box.dataset.price);
    
        const matchesBrand = brand === "all" || boxBrand === brand;
        const matchesColor = color === "all" || boxColor === color;
        const matchesPrice = isNaN(maxPrice) || boxPrice <= maxPrice;
    
        if (matchesBrand && matchesColor && matchesPrice) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }
    

    brandFilter.addEventListener("change", filterProducts);
    colorFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("input", filterProducts);
    priceFilter.addEventListener("input", filterProducts);
  