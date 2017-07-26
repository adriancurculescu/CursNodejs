
exports.config = module.exports.config = {
    mongoClient: null,
    mongoUrl: ""
}


exports.createProduct = module.exports.createProduct = function createProduct() {
    console.log("products createProduct");
};

exports.updateProduct = module.exports.updateProduct = function updateProduct() {
    console.log("products updateProduct");
};

exports.listProducts = module.exports.listProducts = function listProducts() {


    console.log("products listProducts");

    var mongoClient = this.config.mongoClient; 
    var mongoUrl    = this.config.mongoUrl;

    mongoClient.connect(mongoUrl, function (err, db) {
        if (err) {
            throw err;
        }
        console.log("Database connected!");
        var productList = db.collection("products").find({});

        console.log("Product List : ", productList);
        db.close();
    });
};

exports.getProduct = module.exports.getProduct = function getProduct() {
    console.log("products getProduct");
};

exports.deleteProduct = module.exports.deleteProduct = function deleteProduct() {
    console.log("products deleteProduct");
};