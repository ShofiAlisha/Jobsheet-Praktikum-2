import { state } from "./state.js";
import { products as localProducts } from "./data.js";
import { fetchProducts } from "./api.js";
import { renderProducts } from "./ui.js";
import {
    linearSearch,
    groupByCategory,
    sortProducts
} from "./algorithms.js";

async function init() {
    try {
        state.status = "loading";

        // Menggunakan data lokal untuk testing
        state.products = localProducts;

        state.status = "success";

        renderProducts(state.products);

        console.log("Linear Search ID 3:");
        console.log(linearSearch(
            state.products.map(product => product.id),
            3
        ));

        console.log("Group by Category:");
        console.log(groupByCategory(state.products));

        console.log("Sort by Price:");
        console.log(sortProducts(state.products, "price-asc"));

        // Contoh penggunaan API DummyJSON:
        // const apiProducts = await fetchProducts();
        // console.log("Data dari DummyJSON:", apiProducts);

    } catch (error) {
        state.status = "error";

        console.error(error);
    }
}

init();