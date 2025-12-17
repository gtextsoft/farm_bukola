// Image gallery auto-scroll and overlay effect - Modern seamless loop
document.addEventListener('DOMContentLoaded', function() {
    const galleryWrapper = document.querySelector('.image-gallery-wrapper');
    const gallerySection = document.querySelector('.image-gallery-section');
    const galleryScroll = document.querySelector('.image-gallery-scroll');
    
    if (galleryWrapper && gallerySection && galleryScroll) {
        let scrollSpeed = 1.5; // Smooth speed for modern feel
        let animationFrameId = null;
        let isPaused = false;
        
        // Duplicate images for seamless loop
        const duplicateImages = () => {
            const items = galleryScroll.querySelectorAll('.image-gallery-item');
            items.forEach(item => {
                const clone = item.cloneNode(true);
                galleryScroll.appendChild(clone);
            });
        };
        
        // Duplicate images for seamless infinite scroll
        duplicateImages();
        
        // Update overlay opacity based on scroll position - sync with background
        const updateOverlay = () => {
            const scrollLeft = galleryWrapper.scrollLeft;
            const scrollWidth = galleryWrapper.scrollWidth;
            const clientWidth = galleryWrapper.clientWidth;
            const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
            
            // Smooth fade based on scroll position
            const leftOpacity = scrollPercentage < 0.1 ? scrollPercentage * 10 : 1;
            const rightOpacity = scrollPercentage > 0.9 ? (1 - scrollPercentage) * 10 : 1;
            
            // Apply opacity to overlays - synced with background
            gallerySection.style.setProperty('--left-overlay-opacity', Math.max(0.3, leftOpacity));
            gallerySection.style.setProperty('--right-overlay-opacity', Math.max(0.3, rightOpacity));
        };
        
        // Auto-scroll animation - seamless infinite loop
        const autoScroll = () => {
            if (isPaused) {
                animationFrameId = requestAnimationFrame(autoScroll);
                return;
            }
            
            const scrollLeft = galleryWrapper.scrollLeft;
            const scrollWidth = galleryWrapper.scrollWidth;
            const clientWidth = galleryWrapper.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            const halfScroll = maxScroll / 2;
            
            // Seamless loop - when reaching halfway, reset to start
            if (scrollLeft >= halfScroll) {
                galleryWrapper.scrollLeft = scrollLeft - halfScroll;
            } else {
                galleryWrapper.scrollLeft += scrollSpeed;
            }
            
            // Update overlay
            updateOverlay();
            
            // Continue animation
            animationFrameId = requestAnimationFrame(autoScroll);
        };
        
        // Pause on hover
        galleryWrapper.addEventListener('mouseenter', () => {
            isPaused = true;
        });
        
        galleryWrapper.addEventListener('mouseleave', () => {
            isPaused = false;
        });
        
        // Initial update
        updateOverlay();
        
        // Start auto-scroll after a brief delay
        setTimeout(() => {
            autoScroll();
        }, 300);
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        });
    }
});

