export let cart = JSON.parse(localStorage.getItem('cart')) ||
    [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
    }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1
    }];

export function addToCart(productId) {
    const quantitySelect = Number(document.querySelector(`.quantity-selector-${productId}`).value);

    let matchingItem;
    cart.forEach((cartItem) => {
        // if a matching product is found, it's stored in matchingItem variable
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    // if a matching product is found, increase its quantity by 1, otherwise, add a new item to the cart array with quantity 1
    if (matchingItem) {
        matchingItem.quantity += quantitySelect;
    } else {
        cart.push({
            productId: productId,
            quantity: quantitySelect
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (productId !== cartItem.productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
