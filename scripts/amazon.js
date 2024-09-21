import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
import { productsHTML } from '../data/products.js';

/* iterates over each product in the products array, generating the html for each product in the array,
and adds it to the products-grid div aka productsHTML*/
products.forEach((product) => {
    const html = 
    `<div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select class="quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart"
            <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary"
            data-product-id="${product.id}"> 
                Add to Cart
            </button>
    </div>`
    // data-product-id attribute is used to uniquely identify the product being added to the cart
    productsHTML.innerHTML += html;
});

document.querySelectorAll('.add-to-cart-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            // retrieved the product ID from the data-product-id attribute, stored in productId variable
            const { productId } = button.dataset;
            addToCart(productId);
            updateCart();
    });
});

function addToCart(productId) {
    const quantitySelect = Number(document.querySelector(`.quantity-selector-${productId}`).value);
    let matchingItem;
    cart.forEach((item) => {
        // if a matching product is found, it's stored in matchingItem variable
        if (productId === item.productId) {
            matchingItem = item;
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

function updateCart() {
    let cartQuantity = 0;

    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });
    document.querySelector('.cart-quantity').textContent = cartQuantity;

    console.log(cart);
}