// Search Management System

// Open search sidebar
function openSearch() {
    const searchSidebar = document.getElementById('search-sidebar');
    const searchOverlay = document.getElementById('search-overlay');
    
    if (searchSidebar && searchOverlay) {
        searchSidebar.classList.add('active');
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus on search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        }
    }
}

// Close search sidebar
function closeSearch() {
    const searchSidebar = document.getElementById('search-sidebar');
    const searchOverlay = document.getElementById('search-overlay');
    
    if (searchSidebar && searchOverlay) {
        searchSidebar.classList.remove('active');
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = '';
        }
        
        // Clear results
        clearSearchResults();
    }
}

// Perform search
function performSearch(query) {
    if (!query || query.trim().length === 0) {
        clearSearchResults();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const results = [];
    
    // Search through products data
    if (typeof productsData !== 'undefined' && Array.isArray(productsData)) {
        productsData.forEach(product => {
            const searchableText = `
                ${product.title} 
                ${product.description} 
                ${product.location} 
                ${product.fullDescription || ''}
            `.toLowerCase();
            
            if (searchableText.includes(searchTerm)) {
                results.push(product);
            }
        });
    }
    
    renderSearchResults(results, searchTerm);
}

// Render search results
function renderSearchResults(results, searchTerm) {
    const resultsContainer = document.getElementById('search-results');
    const noResults = document.getElementById('search-no-results');
    const resultsCount = document.getElementById('search-results-count');
    
    if (!resultsContainer || !noResults || !resultsCount) return;
    
    // Show/hide no results message
    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        noResults.style.display = 'flex';
        resultsCount.style.display = 'none';
    } else {
        resultsContainer.style.display = 'grid';
        resultsContainer.style.gridTemplateColumns = '1fr';
        noResults.style.display = 'none';
        resultsCount.style.display = 'block';
        resultsCount.textContent = `${results.length} ${results.length === 1 ? 'product' : 'products'} found for "${searchTerm}"`;
        
        // Render results
        resultsContainer.innerHTML = results.map(product => {
            return `
                <div class="search-result-item">
                    <div class="search-result-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="search-result-details">
                        <h4 class="search-result-title">${product.title}</h4>
                        <p class="search-result-location">${product.location}</p>
                        <div class="search-result-price">${product.price}/kg</div>
                    </div>
                    <div class="search-result-actions">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary btn-sm" onclick="closeSearch()">View Details</a>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Clear search results
function clearSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    const noResults = document.getElementById('search-no-results');
    const resultsCount = document.getElementById('search-results-count');
    
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
    if (resultsCount) resultsCount.style.display = 'none';
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add click handler for search icon (handle both mobile and desktop buttons)
    const searchIcons = document.querySelectorAll('.search-icon-btn, #search-btn');
    searchIcons.forEach(searchIcon => {
        if (searchIcon) {
            searchIcon.addEventListener('click', openSearch);
        }
    });
    
    // Close search when clicking overlay
    const searchOverlay = document.getElementById('search-overlay');
    if (searchOverlay) {
        searchOverlay.addEventListener('click', closeSearch);
    }
    
    // Close search when clicking close button
    const searchClose = document.getElementById('search-close');
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    
    // Prevent search sidebar from closing when clicking inside it
    const searchSidebar = document.getElementById('search-sidebar');
    if (searchSidebar) {
        searchSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    // Search input handler
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300); // Debounce search
        });
        
        // Search on Enter key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(e.target.value);
            }
        });
    }
    
    // Close search on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const searchSidebar = document.getElementById('search-sidebar');
            if (searchSidebar && searchSidebar.classList.contains('active')) {
                closeSearch();
            }
        }
    });
});
