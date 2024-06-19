const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase(); // Use .value to get input value
    const productContainer = document.querySelector(".product-list"); // Correct class name selection
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toUpperCase(); // Get product name

        if (productName.includes(searchbox)) { // Check if search term is in product name
            product.style.display = ""; // Show product if it matches
        } else {
            product.style.display = "none"; // Hide product if it doesn't match
        }
    });
}
