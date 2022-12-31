const products = [];

const addProduct = (ele)=>{
    products.push(ele)
}

const getAllProduct = (product)=>{
    return products
}

module.exports = {
    products,
    addProduct,
    getAllProduct
}