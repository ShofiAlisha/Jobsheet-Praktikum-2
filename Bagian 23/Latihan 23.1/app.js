function getProducts() {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                resolve([
                    { id: 1, title: "Laptop", price: 1200 },
                    { id: 2, title: "Smartphone", price: 800 },
                    { id: 3, title: "Keyboard", price: 50 }
                ]);
            } else {
                reject("Gagal mengambil data produk.");
            }
        }, 1000);
    });
}

async function loadProducts() {
    try {
        console.log("Mengambil data produk...");

        const products = await getProducts();

        console.log("Data berhasil diambil:");
        console.log(products);
    } catch (error) {
        console.error("Terjadi error:", error);
    } finally {
        console.log("Proses selesai.");
    }
}

loadProducts();