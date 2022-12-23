const products = [];

class ProductManager {
    static id = 1;
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        ProductManager.id;
    }
    addProduct(){
        // Agrega producto
        const product = ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
            id: ProductManager.id
        })

        const checkeo = products.find(element => element.code === product.code );

        if(checkeo){
            console.log("Ocurrio un error, se encontro un codigo igual");
        }else{
            products.push(product);
            ProductManager.id++;
        }

        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock){
            throw new Error('Todos los campos deben ser obligatorios!')
        }
    }
}

const getProducts = () =>{
    // Devuelve el arreglo con todos los productos creados hasta el momento
    console.log(products)
}

const getProductById = (id) =>{
    // Busca en el arreglo el producto que coincida con id
    const search = products.find(element => element.id === id);

    if(search == undefined){
        console.log("Not found");
    }else{
        console.log(search);
    }
}

const prod1 = new ProductManager('Colchoneta', 'Colchoneta Inflable', 300, '###', 134, 12);
const prod2 = new ProductManager('Tobogan', 'Tobogan Deslisante', 600, '##', 200, 500);
//const prod3 = new ProductManager('Elemento Error');

prod1.addProduct();
prod2.addProduct();
//prod3.addProduct();

getProducts();

getProductById(1);