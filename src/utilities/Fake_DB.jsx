
const cartToDB = id => {
    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {}
    }

    // Add quantity
    let quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else {
        // localStorage.setItem(id,'1')
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDB = id =>{

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        localStorage.removeItem(storedCart[id])
    }
    else{
        console.log('Nothing to do');
    }

    console.log('working', id);
}



export { cartToDB , removeFromDB }