const categories = [
    {
        name: "Electronics",
        children: [
            {
                name: "Computers",
                children: [
                    {
                        name: "Laptop",
                        children: []
                    },
                    {
                        name: "Desktop",
                        children: []
                    }
                ]
            },
            {
                name: "Phone",
                children: []
            }
        ]
    }
];

function printCategories(categories, depth = 0) {
    for (const category of categories) {
        console.log(" ".repeat(depth) + category.name);

        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}

printCategories(categories);