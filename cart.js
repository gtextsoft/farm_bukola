// Cart Management System
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart UI
function initCart() {
    updateCartCount();
    updateCartIcon();
}

// Add item to cart
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: quantity,
            location: product.location,
            volume: product.volume
        });
    }

    // Save to localStorage
    saveCart();
    
    // Update UI
    updateCartCount();
    updateCartIcon();
    
    // Show success message
    showCartNotification('Item added to cart!');
}

// Quick order (add to cart and open cart)
function quickOrder(productId, quantity = 1) {
    addToCart(productId, quantity);
    openCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCartIcon();
    renderCartItems();
}

// Update item quantity in cart
function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCartItems();
        }
    }
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    updateCartIcon();
    renderCartItems();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Get cart total
function getCartTotal() {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
        return total + (price * item.quantity);
    }, 0);
}

// Get cart item count
function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart count badge
function updateCartCount() {
    const count = getCartItemCount();
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        if (count > 0) {
            cartBadge.textContent = count;
            cartBadge.style.display = 'flex';
        } else {
            cartBadge.style.display = 'none';
        }
    }
}

// Update cart icon
function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon-btn');
    if (cartIcon) {
        const count = getCartItemCount();
        if (count > 0) {
            cartIcon.classList.add('has-items');
        } else {
            cartIcon.classList.remove('has-items');
        }
    }
}

// Open cart sidebar
function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCartItems();
    }
}

// Close cart sidebar
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartEmptyElement = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        if (cartEmptyElement) cartEmptyElement.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'none';
        if (cartTotalElement) cartTotalElement.textContent = '₦0.00';
        return;
    }
    
    if (cartEmptyElement) cartEmptyElement.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';
    
    cartItemsContainer.innerHTML = cart.map(item => {
        const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
        const subtotal = price * item.quantity;
        
        return `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-meta">${item.location}</p>
                    <div class="cart-item-price">${item.price}/kg</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
                        <span class="cart-qty-value">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                    </div>
                    <div class="cart-item-subtotal">₦${subtotal.toFixed(2)}</div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4L12 12M12 4L4 12" />
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    const total = getCartTotal();
    if (cartTotalElement) {
        cartTotalElement.textContent = `₦${total.toFixed(2)}`;
    }
}

// Show cart notification
function showCartNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('cart-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'cart-notification';
        notification.className = 'cart-notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize cart when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    
    // Add click handlers for cart icon
    const cartIcon = document.querySelector('.cart-icon-btn');
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }
    
    // Close cart when clicking overlay
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    // Close cart when clicking close button
    const cartClose = document.getElementById('cart-close');
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    // Prevent cart sidebar from closing when clicking inside it
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

