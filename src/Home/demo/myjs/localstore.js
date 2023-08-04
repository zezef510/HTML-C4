class MyLocalData{
    products = []
    
    findProductByCode(code){
        let foundProduct = this.products.find(card => card.code === code);
        return foundProduct;
    }

    searchProduct(search){
        let result = [];
        if (search.length > 3) {
            result = this.products.filter(product => product.code.includes(search));
        } 
        else {
            result = this.products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) ||  product.name.includes(search));
        }
        // for (let i = 0; i < this.products.length; i++) {
        //     let product = this.products[i];

        //     if (product.name.toLowerCase().includes(search.toLowerCase()) ||  product.name.includes(search) )
        //     {
        //         result.push(product);
        //     }
        // }
        return result;
    }

    getProducts(){
        return this.products;
    }

    addNewProduct(product){
        this.products.push(product);
        this.saveProducts();
    }

    loadProducts(){
        let localData = localStorage.getItem('cards');
        let data = JSON.parse(localData);
        if (data != null) {
            this.products = data;
        }
    }

    removeProductByCode(code){
        for (let i = 0; i < this.products.length; i++) {
            let product = this.products[i];

            if ( product.code == code) {
                this.products.splice(i, 1); 
            }
        }
        this.saveProducts();
    }

    saveProducts(){
        let sProducts = JSON.stringify(this.products);
        localStorage.setItem('cards', sProducts);
    }
}

const myLocal = new MyLocalData();

