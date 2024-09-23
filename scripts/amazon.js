import { cart, addToCart } from '../data/cart.js';
import { products, productsHTML } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
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
            $${formatCurrency(product.priceCents)}
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

function updateCart() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.cart-quantity').textContent = cartQuantity;

    console.log(cart);
}
