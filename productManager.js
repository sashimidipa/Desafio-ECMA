class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        // Validacion campos obligatorios
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            console.error("All fields are required.");
            return;
        }

        // Validacion que no se repite "code"
        if (this.products.some((p) => p.code === product.code)) {
            console.error("There is already a product with the same code.");
            return;
        }

        //id autoincrementable
        product.id = this.nextId++;
        this.products.push(product);
    }

    getProducts() {
    return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            console.error("Not found.");
        }
        return product;
    }
}



//Testing

const productManager = new ProductManager();

const productsBeforeAdd = productManager.getProducts();
console.log(productsBeforeAdd)

productManager.addProduct({
    title: "producto prueba",
    description:"Este es un producto prueba",
    price:200,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25

});

const productsAfterAdd = productManager.getProducts();
console.log(productsAfterAdd);

productManager.addProduct({
    title: "otro producto",
    description: "Este es otro producto",
    price: 150,
    thumbnail: "Otra imagen",
    code: "abc123",
    stock: 30,
});

const productNotFound = productManager.getProductById(100);
const productFound = productManager.getProductById(1);
console.log(productFound);