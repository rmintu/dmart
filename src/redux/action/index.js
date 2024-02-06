
// For Add Item to Cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        PAYlOAD: product
    }
}

// For delete item from cart

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}