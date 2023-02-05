
const productArray = [
    {
        id: "1",
        title: "coffee",
        price: 5.99
    },
    {
        id: "2",
        title: "sunglass",
        price: 9.99
    },
    {
        id: "3",
        title: "camera",
        price: 29.99
    }
];

function getProductData(id) {
    let productData = productArray.find(product => product.id === id);
    
    if ( productData == undefined) {
        // console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productArray, getProductData };
