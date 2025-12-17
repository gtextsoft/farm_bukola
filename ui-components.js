// UI Components - Loader, Modals, and State Messages

// ============================================
// LOADER
// ============================================

/**
 * Show loading spinner
 * @param {string} message - Optional loading message
 */
function showLoader(message = 'Loading...') {
    const loader = document.getElementById('app-loader');
    const loaderMessage = document.getElementById('loader-message');
    
    if (loader) {
        if (loaderMessage) {
            loaderMessage.textContent = message;
        }
        loader.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Hide loading spinner
 */
function hideLoader() {
    const loader = document.getElementById('app-loader');
    if (loader) {
        loader.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// SUCCESS MODAL
// ============================================

/**
 * Show success modal
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {Function} onClose - Optional callback when modal closes
 */
function showSuccessModal(title, message, onClose = null) {
    const modal = document.getElementById('success-modal');
    const modalTitle = document.getElementById('success-modal-title');
    const modalMessage = document.getElementById('success-modal-message');
    
    if (modal && modalTitle && modalMessage) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Store callback
        if (onClose) {
            modal.dataset.onClose = 'true';
            modal._onClose = onClose;
        }
    }
}

/**
 * Hide success modal
 */
function hideSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Execute callback if exists
        if (modal._onClose) {
            modal._onClose();
            delete modal._onClose;
        }
    }
}

// ============================================
// ERROR MODAL
// ============================================

/**
 * Show error modal
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {Function} onClose - Optional callback when modal closes
 */
function showErrorModal(title, message, onClose = null) {
    const modal = document.getElementById('error-modal');
    const modalTitle = document.getElementById('error-modal-title');
    const modalMessage = document.getElementById('error-modal-message');
    
    if (modal && modalTitle && modalMessage) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Store callback
        if (onClose) {
            modal._onClose = onClose;
        }
    }
}

/**
 * Hide error modal
 */
function hideErrorModal() {
    const modal = document.getElementById('error-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Execute callback if exists
        if (modal._onClose) {
            modal._onClose();
            delete modal._onClose;
        }
    }
}

// ============================================
// WARNING MODAL
// ============================================

/**
 * Show warning modal
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {Function} onClose - Optional callback when modal closes
 */
function showWarningModal(title, message, onClose = null) {
    const modal = document.getElementById('warning-modal');
    const modalTitle = document.getElementById('warning-modal-title');
    const modalMessage = document.getElementById('warning-modal-message');
    
    if (modal && modalTitle && modalMessage) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Store callback
        if (onClose) {
            modal._onClose = onClose;
        }
    }
}

/**
 * Hide warning modal
 */
function hideWarningModal() {
    const modal = document.getElementById('warning-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Execute callback if exists
        if (modal._onClose) {
            modal._onClose();
            delete modal._onClose;
        }
    }
}

// ============================================
// INFO MODAL
// ============================================

/**
 * Show info modal
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {Function} onClose - Optional callback when modal closes
 */
function showInfoModal(title, message, onClose = null) {
    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('info-modal-title');
    const modalMessage = document.getElementById('info-modal-message');
    
    if (modal && modalTitle && modalMessage) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Store callback
        if (onClose) {
            modal._onClose = onClose;
        }
    }
}

/**
 * Hide info modal
 */
function hideInfoModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Execute callback if exists
        if (modal._onClose) {
            modal._onClose();
            delete modal._onClose;
        }
    }
}

// ============================================
// GENERIC MODAL (for custom use)
// ============================================

/**
 * Show generic modal
 * @param {string} type - Modal type: 'success', 'error', 'warning', 'info'
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {Function} onClose - Optional callback when modal closes
 */
function showModal(type, title, message, onClose = null) {
    switch (type) {
        case 'success':
            showSuccessModal(title, message, onClose);
            break;
        case 'error':
            showErrorModal(title, message, onClose);
            break;
        case 'warning':
            showWarningModal(title, message, onClose);
            break;
        case 'info':
            showInfoModal(title, message, onClose);
            break;
        default:
            console.error('Invalid modal type:', type);
    }
}

// ============================================
// NOTE: Event listeners are initialized in load-ui-components.js
// after the components are dynamically loaded into the page
// ============================================

