export const cart = [];

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
}