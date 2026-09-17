const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        category: "phones"
    },
    {
        id: 3,
        title: "Keyboard",
        price: 50,
        rating: 4.0,
        category: "electronics"
    },
    {
        id: 4,
        title: "Monitor",
        price: 300,
        rating: 4.3,
        category: "electronics"
    },
    {
        id: 5,
        title: "Headphones",
        price: 100,
        rating: 4.6,
        category: "audio"
    }
];

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "success"
};

function render() {
    let result = [...state.products];

    if (state.search !== "") {
        result = result.filter(product =>
            product.title.toLowerCase().includes(state.search.toLowerCase())
        );
    }

    if (state.category !== "all") {
        result = result.filter(product =>
            product.category === state.category
        );
    }

    if (state.sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    console.log("State:");
    console.log(state);

    console.log("Hasil render:");
    console.log(result);
}

render();

state.search = "phone";
render();

state.search = "";
state.category = "electronics";
render();

state.category = "all";
state.sortBy = "price-asc";
render();