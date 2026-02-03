// Feature Flags
const FEATURE_FLAGS = {
    showSideProjects: false  // Set to true to display side projects publicly
};

// Cache for loaded content to avoid repeated fetches
const contentCache = {};

// Load content from HTML file
async function loadContent(menuId) {
    // Return cached content if available
    if (contentCache[menuId]) {
        return contentCache[menuId];
    }
    
    try {
        const response = await fetch(`content/${menuId}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load content: ${response.status}`);
        }
        const html = await response.text();
        contentCache[menuId] = html;
        return html;
    } catch (error) {
        console.error(`Error loading content for ${menuId}:`, error);
        return `<p class="text-[16px] text-red-500">Failed to load content.</p>`;
    }
}

// Apply staggered fade-in animation to content elements
function applyStaggeredAnimation(container) {
    // Remove animation class to reset
    container.classList.remove('stagger-fade-in');
    // Force reflow to restart animation
    void container.offsetWidth;
    // Add staggered animation class
    container.classList.add('stagger-fade-in');
}

// Setup password form handler (for protected pages)
function setupPasswordForm() {
    const form = document.getElementById('password-form');
    const toast = document.getElementById('toast');
    
    if (form && toast) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show toast
            toast.style.display = 'block';
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
            
            // Clear the input
            document.getElementById('password-input').value = '';
        });
    }
}

// Intersection Observer for scroll-triggered animations
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (revealElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally stop observing after reveal
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
    });
    
    revealElements.forEach(el => {
        el.classList.remove('revealed'); // Reset state
        observer.observe(el);
    });
}

// Initialize menu functionality
document.addEventListener('DOMContentLoaded', async function() {
    // Apply feature flags
    const sideProjectsSection = document.getElementById('side-projects');
    if (sideProjectsSection && !FEATURE_FLAGS.showSideProjects) {
        sideProjectsSection.style.display = 'none';
    }

    const menuItems = document.querySelectorAll('.menu-item');
    const contentContainer = document.getElementById('content-container');
    
    // Load default content (first menu item)
    const defaultMenuId = menuItems[0].getAttribute('data-menu-item');
    contentContainer.innerHTML = await loadContent(defaultMenuId);
    
    // Apply staggered fade-in animation to initial content
    applyStaggeredAnimation(contentContainer);
    
    // Setup scroll reveal for initial content
    setupScrollReveal();
    
    // Setup password form if present
    setupPasswordForm();
    
    // Add click event to all menu items
    menuItems.forEach(item => {
        item.addEventListener('click', async function() {
            const menuId = this.getAttribute('data-menu-item');
            
            // Remove active class from all items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Fade out current content
            contentContainer.style.opacity = '0';
            contentContainer.style.transform = 'translateY(12px)';
            
            setTimeout(async () => {
                contentContainer.innerHTML = await loadContent(menuId);
                // Reset inline styles and apply staggered animation
                contentContainer.style.opacity = '';
                contentContainer.style.transform = '';
                applyStaggeredAnimation(contentContainer);
                // Setup scroll reveal for new content
                setupScrollReveal();
                // Setup password form if present
                setupPasswordForm();
                // Scroll to top of content area when switching
                contentContainer.parentElement.scrollTop = 0;
            }, 200);
        });
    });
});
