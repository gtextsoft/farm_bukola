/**
 * Load UI Components
 * Dynamically loads the UI components HTML file and injects it into the page
 */
(function() {
    'use strict';

    // Check if components are already loaded
    if (document.getElementById('app-loader')) {
        return;
    }

    // Load UI components HTML
    fetch('ui-components.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load UI components');
            }
            return response.text();
        })
        .then(html => {
            // Create a temporary container to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html.trim();

            // Append all components to the body
            while (tempDiv.firstChild) {
                document.body.appendChild(tempDiv.firstChild);
            }

            // Initialize event listeners after components are loaded
            initializeUIComponents();
        })
        .catch(error => {
            console.error('Error loading UI components:', error);
            // Fallback: create components inline if fetch fails
            createComponentsInline();
            initializeUIComponents();
        });

    /**
     * Initialize event listeners for UI components
     */
    function initializeUIComponents() {
        // Success modal close handlers
        const successModal = document.getElementById('success-modal');
        const successClose = document.getElementById('success-modal-close');
        const successOverlay = successModal?.querySelector('.modal-backdrop');
        
        if (successClose) {
            successClose.addEventListener('click', () => {
                if (typeof hideSuccessModal === 'function') {
                    hideSuccessModal();
                }
            });
        }
        if (successOverlay) {
            successOverlay.addEventListener('click', () => {
                if (typeof hideSuccessModal === 'function') {
                    hideSuccessModal();
                }
            });
        }
        
        // Error modal close handlers
        const errorModal = document.getElementById('error-modal');
        const errorClose = document.getElementById('error-modal-close');
        const errorOverlay = errorModal?.querySelector('.modal-backdrop');
        
        if (errorClose) {
            errorClose.addEventListener('click', () => {
                if (typeof hideErrorModal === 'function') {
                    hideErrorModal();
                }
            });
        }
        if (errorOverlay) {
            errorOverlay.addEventListener('click', () => {
                if (typeof hideErrorModal === 'function') {
                    hideErrorModal();
                }
            });
        }
        
        // Warning modal close handlers
        const warningModal = document.getElementById('warning-modal');
        const warningClose = document.getElementById('warning-modal-close');
        const warningOverlay = warningModal?.querySelector('.modal-backdrop');
        
        if (warningClose) {
            warningClose.addEventListener('click', () => {
                if (typeof hideWarningModal === 'function') {
                    hideWarningModal();
                }
            });
        }
        if (warningOverlay) {
            warningOverlay.addEventListener('click', () => {
                if (typeof hideWarningModal === 'function') {
                    hideWarningModal();
                }
            });
        }
        
        // Info modal close handlers
        const infoModal = document.getElementById('info-modal');
        const infoClose = document.getElementById('info-modal-close');
        const infoOverlay = infoModal?.querySelector('.modal-backdrop');
        
        if (infoClose) {
            infoClose.addEventListener('click', () => {
                if (typeof hideInfoModal === 'function') {
                    hideInfoModal();
                }
            });
        }
        if (infoOverlay) {
            infoOverlay.addEventListener('click', () => {
                if (typeof hideInfoModal === 'function') {
                    hideInfoModal();
                }
            });
        }
        
        // Close modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (successModal?.classList.contains('active') && typeof hideSuccessModal === 'function') {
                    hideSuccessModal();
                }
                if (errorModal?.classList.contains('active') && typeof hideErrorModal === 'function') {
                    hideErrorModal();
                }
                if (warningModal?.classList.contains('active') && typeof hideWarningModal === 'function') {
                    hideWarningModal();
                }
                if (infoModal?.classList.contains('active') && typeof hideInfoModal === 'function') {
                    hideInfoModal();
                }
            }
        });
    }

    /**
     * Fallback: Create components inline if fetch fails
     */
    function createComponentsInline() {
        const componentsHTML = `
            <div id="app-loader" class="app-loader">
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <p class="loader-message" id="loader-message">Loading...</p>
                </div>
            </div>
            <div id="success-modal" class="success-modal">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="success-modal-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h2 class="success-modal-title" id="success-modal-title">Success!</h2>
                    <p class="success-modal-message" id="success-modal-message">Operation completed successfully.</p>
                    <button class="btn btn-primary" id="success-modal-close">Close</button>
                </div>
            </div>
            <div id="error-modal" class="error-modal">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="error-modal-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 8V12M12 16H12.01" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <h2 class="error-modal-title" id="error-modal-title">Error</h2>
                    <p class="error-modal-message" id="error-modal-message">Something went wrong. Please try again.</p>
                    <button class="btn btn-primary" id="error-modal-close">Close</button>
                </div>
            </div>
            <div id="warning-modal" class="warning-modal">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="warning-modal-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h2 class="warning-modal-title" id="warning-modal-title">Warning</h2>
                    <p class="warning-modal-message" id="warning-modal-message">Please review this information carefully.</p>
                    <button class="btn btn-primary" id="warning-modal-close">Close</button>
                </div>
            </div>
            <div id="info-modal" class="info-modal">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="info-modal-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 16V12M12 8H12.01" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <h2 class="info-modal-title" id="info-modal-title">Information</h2>
                    <p class="info-modal-message" id="info-modal-message">Here's some important information for you.</p>
                    <button class="btn btn-primary" id="info-modal-close">Close</button>
                </div>
            </div>
        `;
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = componentsHTML.trim();
        while (tempDiv.firstChild) {
            document.body.appendChild(tempDiv.firstChild);
        }
    }
})();

