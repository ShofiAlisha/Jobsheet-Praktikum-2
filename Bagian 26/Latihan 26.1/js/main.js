import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import {
    searchProducts,
    filterByCategory,
    sortProducts,
    getStatistics,
    getCategories,
    buildProductMap,
    hasProducts,
    allProductsValid
} from "./algorithms.js";

import {
    renderStatus,
    renderCategories,
    renderStatistics,
    renderProducts
} from "./ui.js";


function render() {
    let result = [...state.products];

    // Search
    if (state.search !== "") {
        result = searchProducts(
            result,
            state.search
        );
    }

    // Filter category
    result = filterByCategory(
        result,
        state.category
    );

    // Sorting
    result = sortProducts(
        result,
        state.sortBy
    );

    // Empty state
    if (result.length === 0) {
        renderStatus("success");
        renderStatistics({
            totalProducts: 0,
            averagePrice: 0,
            totalStock: 0,
            averageRating: 0
        });

        renderProducts([]);
        return;
    }

    renderStatus(state.status);

    renderStatistics(
        getStatistics(result)
    );

    renderProducts(result);
}


async function loadProducts() {
    state.status = "loading";
    renderStatus(state.status);

    try {
        const products = await fetchProducts();

        state.products = products;

        state.status = "success";

        const categories = getCategories(
            state.products
        );

        renderCategories(categories);

        // Membuat Map untuk lookup product
        const productMap = buildProductMap(
            state.products
        );

        console.log("Product Map:", productMap);

        // Contoh penggunaan some()
        console.log(
            "Ada produk dengan stok?",
            hasProducts(state.products)
        );

        // Contoh penggunaan every()
        console.log(
            "Semua data produk valid?",
            allProductsValid(state.products)
        );

        render();

    } catch (error) {
        state.status = "error";
        renderStatus(state.status);
    }
}


// Search
document
    .querySelector("#search-input")
    .addEventListener("input", event => {

        state.search = event.target.value;

        render();
    });


// Category
document
    .querySelector("#category-select")
    .addEventListener("change", event => {

        state.category = event.target.value;

        render();
    });


// Sorting
document
    .querySelector("#sort-select")
    .addEventListener("change", event => {

        state.sortBy = event.target.value;

        render();
    });


loadProducts();