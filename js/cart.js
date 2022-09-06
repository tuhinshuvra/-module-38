const getInputNameById = nameId => {
    const productNameField = document.getElementById(nameId);
    const nameValue = productNameField.value;

    return nameValue;
}

const addProduct = () => {
    const product = getInputNameById('product-name-field');
    const quantity = getInputNameById('product-quantity-field');

    addProductToDisplay(product, quantity);

    saveItemToLoalStorage(product, quantity);
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLoalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringified);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `ItemName-${product}, Qauntity-${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProduct = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        addProductToDisplay(product, quantity);
    }
}

displayStoredProduct();