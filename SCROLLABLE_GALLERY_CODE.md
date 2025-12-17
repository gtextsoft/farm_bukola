# Scrollable Image Gallery - Complete Code

## HTML

```html
<!-- Scrollable Image Gallery -->
<section class="section image-gallery-section">
    <div class="image-gallery-wrapper">
        <div class="image-gallery-scroll">
            <div class="image-gallery-item">
                <img src="img/farmerpicking.png" alt="Farmer picking produce" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/farmerpicking_2.png" alt="Farmer picking produce" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/vegetable_picking.png" alt="Vegetable picking" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/industry_picking.png" alt="Industry picking" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/packing_fruit.png" alt="Packing fruits" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/fruit_group.png" alt="Fruit group" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/group_fruit_2.png" alt="Fruit group" class="gallery-image">
            </div>
            <div class="image-gallery-item">
                <img src="img/fruits.png" alt="Fresh fruits" class="gallery-image">
            </div>
        </div>
    </div>
</section>

<!-- Include the JavaScript file before closing </body> tag -->
<script src="gallery-carousel.js"></script>
```

## CSS

```css
/* Image Gallery Section */
.image-gallery-section {
  padding: var(--space-12) 0;
  background: var(--color-bg-secondary);
  position: relative;
}

.image-gallery-wrapper {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Hide scrollbar */
  -ms-overflow-style: none; /* Hide scrollbar IE/Edge */
  -webkit-overflow-scrolling: touch;
  position: relative;
  --left-overlay-opacity: 1;
  --right-overlay-opacity: 1;
  will-change: scroll-position;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.image-gallery-wrapper::-webkit-scrollbar {
  display: none;
}

.image-gallery-section::before,
.image-gallery-section::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  z-index: 3;
  pointer-events: none;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.image-gallery-section::before {
  left: 0;
  background: linear-gradient(to right, var(--color-bg-secondary) 0%, var(--color-bg-secondary) 30%, transparent 100%);
  opacity: var(--left-overlay-opacity, 1);
}

.image-gallery-section::after {
  right: 0;
  background: linear-gradient(to left, var(--color-bg-secondary) 0%, var(--color-bg-secondary) 30%, transparent 100%);
  opacity: var(--right-overlay-opacity, 1);
}

.image-gallery-scroll {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-4);
  max-width: 1400px;
  margin: 0 auto;
  min-width: min(1400px, 100%);
  will-change: transform;
}

.image-gallery-item {
  flex: 0 0 auto;
  width: 300px;
  height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--duration-medium) var(--ease-out), opacity var(--duration-medium) var(--ease-out);
  animation: fadeInFromRight 0.6s ease-out backwards;
}

.image-gallery-item:nth-child(1) { animation-delay: 0.1s; }
.image-gallery-item:nth-child(2) { animation-delay: 0.2s; }
.image-gallery-item:nth-child(3) { animation-delay: 0.3s; }
.image-gallery-item:nth-child(4) { animation-delay: 0.4s; }
.image-gallery-item:nth-child(5) { animation-delay: 0.5s; }
.image-gallery-item:nth-child(6) { animation-delay: 0.6s; }
.image-gallery-item:nth-child(7) { animation-delay: 0.7s; }
.image-gallery-item:nth-child(8) { animation-delay: 0.8s; }

.image-gallery-item:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes fadeInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .image-gallery-item {
    width: 250px;
    height: 350px;
  }
  
  .image-gallery-section::before,
  .image-gallery-section::after {
    width: 60px;
  }
}
```

## JavaScript (gallery-carousel.js)

```javascript
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
```

## Features

- ✅ **Seamless infinite loop** - Images duplicate and reset seamlessly
- ✅ **Auto-scroll animation** - Continuous right-to-left scrolling
- ✅ **Hidden scrollbar** - Clean, modern appearance
- ✅ **Overlay fade effect** - Synced with background color
- ✅ **Hover pause** - Animation pauses on hover
- ✅ **Smooth transitions** - Uses requestAnimationFrame for smooth animation
- ✅ **Responsive design** - Adapts to mobile screens
- ✅ **Fade-in animation** - Images fade in from right on load

## Required CSS Variables

Make sure you have these CSS variables defined in your stylesheet:

```css
:root {
  --space-4: 1rem;
  --space-12: 3rem;
  --color-bg-secondary: #F5F5F5; /* Your background color */
  --radius-lg: 1rem;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --duration-normal: 200ms;
  --duration-medium: 300ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

## Usage

1. Copy the HTML into your HTML file
2. Copy the CSS into your CSS file (or components.css)
3. Save the JavaScript as `gallery-carousel.js` and include it in your HTML
4. Update image paths to match your image folder structure
5. Adjust CSS variables to match your design system

