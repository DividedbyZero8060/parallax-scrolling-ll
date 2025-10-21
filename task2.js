// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero');
const parallaxLayers = document.querySelectorAll('.parallax-layer');
const floatingElements = document.querySelectorAll('.floating-element');

// Mouse Parallax for Hero
heroSection.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    floatingElements.forEach((el, index) => {
        const speed = (index + 1) * 20;
        el.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
    });
});

// Hero Scroll Parallax
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Hero parallax layers
    parallaxLayers.forEach(layer => {
        const speed = layer.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

// Background Image Parallax Effect for All Sections
function updateSectionBackgrounds() {
    const sections = document.querySelectorAll('.section[data-section]');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const bg = section.querySelector('.section-bg');
        if (!bg) return;
        
        const bgImage = bg.querySelector('img');
        const overlay = bg;
        
        // Calculate scroll progress through the section
        // 0 = section just entering viewport from bottom
        // 0.5 = section centered in viewport
        // 1 = section exiting from top
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        
        if (scrollProgress > 0 && scrollProgress < 1) {
            // Section is visible
            
            // Scale effect: grows from 1.2 to 1 as it enters, then stays
            let scale;
            if (scrollProgress < 0.3) {
                // Growing phase (entering viewport)
                scale = 1.2 - (scrollProgress / 0.3) * 0.2;
            } else if (scrollProgress > 0.7) {
                // Growing phase (exiting viewport) 
                scale = 1 + ((scrollProgress - 0.7) / 0.3) * 0.2;
            } else {
                scale = 1;
            }
            
            // Overlay darkness: dark when entering, lighter in middle, dark when exiting
            let overlayOpacity;
            if (scrollProgress < 0.3) {
                // Lightening as it enters
                overlayOpacity = 0.7 - (scrollProgress / 0.3) * 0.4;
            } else if (scrollProgress > 0.7) {
                // Darkening as it exits
                overlayOpacity = 0.3 + ((scrollProgress - 0.7) / 0.3) * 0.4;
            } else {
                overlayOpacity = 0.3;
            }
            
            // Overall section opacity for fade out
            let sectionOpacity = 1;
            if (scrollProgress > 0.85) {
                sectionOpacity = 1 - ((scrollProgress - 0.85) / 0.15);
            } else if (scrollProgress < 0.15) {
                sectionOpacity = scrollProgress / 0.15;
            }
            
            bgImage.style.transform = `scale(${scale})`;
            overlay.style.opacity = sectionOpacity;
            
            // Apply overlay through pseudo-element
            const rgbaValue = `rgba(0, 0, 0, ${overlayOpacity})`;
            bg.style.setProperty('--overlay-bg', rgbaValue);
        } else {
            // Section not visible - reset or hide
            if (scrollProgress >= 1) {
                overlay.style.opacity = 0;
            } else {
                overlay.style.opacity = 0;
            }
        }
    });
}

// Update on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateSectionBackgrounds();
            ticking = false;
        });
        ticking = true;
    }
});

// Apply CSS custom properties for overlay
document.querySelectorAll('.section-bg').forEach(bg => {
    const style = document.createElement('style');
    style.textContent = `
        .section-bg::before {
            background: var(--overlay-bg, rgba(0, 0, 0, 0.7)) !important;
        }
    `;
    document.head.appendChild(style);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with .observe class
document.querySelectorAll('.observe').forEach(el => {
    observer.observe(el);
});

// Smooth parallax on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    updateSectionBackgrounds();
});

// Initial update
updateSectionBackgrounds();