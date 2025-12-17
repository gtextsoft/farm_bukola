// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'tomato-premium-lagos';
}

// Load product data
function loadProductData() {
    const productId = getProductIdFromURL();
    const product = getProductById(productId);

    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Update page title
    document.title = `${product.title} | FarmMarket`;
    document.querySelector('meta[name="description"]').content = product.description;

    // Update breadcrumb
    document.getElementById('breadcrumb-product-title').textContent = product.title;

    // Update main image
    const mainImage = document.getElementById('product-main-image');
    mainImage.src = product.image;
    mainImage.alt = product.title;

    // Update thumbnails
    const thumbnailsContainer = document.getElementById('product-thumbnails');
    thumbnailsContainer.innerHTML = '';
    [product.thumbnail1, product.thumbnail2, product.thumbnail3].forEach((thumb, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `product-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbDiv.innerHTML = `<img src="${thumb}" alt="${product.title} view ${index + 1}">`;
        thumbnailsContainer.appendChild(thumbDiv);
    });

    // Update badges
    const badgesContainer = document.getElementById('product-badges');
    badgesContainer.innerHTML = '';
    product.badges.forEach(badge => {
        const badgeSpan = document.createElement('span');
        badgeSpan.className = `badge badge-${badge.type}`;
        badgeSpan.textContent = badge.text;
        badgesContainer.appendChild(badgeSpan);
    });

    // Update title
    document.getElementById('product-title').textContent = product.title;

    // Update description
    document.getElementById('product-description').textContent = product.description;

    // Update location and volume
    document.getElementById('product-location').textContent = product.location;
    document.getElementById('product-volume').textContent = product.volume;

    // Update price
    const priceContainer = document.getElementById('product-price');
    priceContainer.innerHTML = '';
    const priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.textContent = `${product.price}/kg`;
    priceContainer.appendChild(priceSpan);

    if (product.priceOld) {
        const oldPriceSpan = document.createElement('span');
        oldPriceSpan.className = 'price-old';
        oldPriceSpan.textContent = `${product.priceOld}/kg`;
        priceContainer.appendChild(oldPriceSpan);
    }

    if (product.priceSave) {
        const saveSpan = document.createElement('span');
        saveSpan.className = 'price-save';
        saveSpan.textContent = product.priceSave;
        priceContainer.appendChild(saveSpan);
    }

    // Update stock
    document.getElementById('product-stock').textContent = product.stock;

    // Update features
    const featuresContainer = document.getElementById('product-features');
    featuresContainer.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });

    // Update full description
    const fullDescContainer = document.getElementById('product-full-description');
    fullDescContainer.innerHTML = product.fullDescription.split('\n').map(p => `<p>${p}</p>`).join('');

    // Update specifications
    const specContainer = document.getElementById('product-specifications');
    specContainer.innerHTML = '';
    Object.entries(product.specifications).forEach(([key, value]) => {
        const dt = document.createElement('dt');
        dt.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1') + ':';
        const dd = document.createElement('dd');
        dd.textContent = value;
        specContainer.appendChild(dt);
        specContainer.appendChild(dd);
    });

    // Update shipping
    const shippingContainer = document.getElementById('product-shipping');
    shippingContainer.innerHTML = '';
    product.shipping.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        shippingContainer.appendChild(li);
    });

    // Re-initialize thumbnail click handlers
    initializeThumbnails();
}

// Initialize thumbnail switching
function initializeThumbnails() {
    document.querySelectorAll('.product-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            const imgSrc = thumb.querySelector('img').src;
            document.getElementById('product-main-image').src = imgSrc;
        });
    });
}

// Tab functionality
function initializeTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Quantity selector
function initializeQuantitySelector() {
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById('quantity');
            const currentValue = parseInt(input.value);
            const max = parseInt(input.max);
            const min = parseInt(input.min);
            
            if (btn.textContent === '+' && currentValue < max) {
                input.value = currentValue + 1;
            } else if (btn.textContent === '-' && currentValue > min) {
                input.value = currentValue - 1;
            }
        });
    });
}

// Initialize all functionality when page loads
window.addEventListener('DOMContentLoaded', () => {
    loadProductData();
    initializeTabs();
    initializeQuantitySelector();
});

