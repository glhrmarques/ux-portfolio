// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('menu-backdrop');
    const menuItems = document.querySelectorAll('.menu-item');
    
    function openMenu() {
        sidebar.classList.add('mobile-open');
        sidebar.classList.remove('mobile-closing');
        backdrop.classList.remove('hidden');
        backdrop.classList.add('visible');
        hamburgerBtn.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        sidebar.classList.add('mobile-closing');
        backdrop.classList.remove('visible');
        hamburgerBtn.classList.remove('open');
        document.body.style.overflow = '';
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            sidebar.classList.remove('mobile-open', 'mobile-closing');
            backdrop.classList.add('hidden');
        }, 300);
    }
    
    // Toggle menu on hamburger click
    hamburgerBtn?.addEventListener('click', () => {
        if (sidebar.classList.contains('mobile-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu on close button click
    closeMenuBtn?.addEventListener('click', closeMenu);
    
    // Close menu on backdrop click
    backdrop?.addEventListener('click', closeMenu);
    
    // Close menu when clicking a menu item on mobile
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 768 && sidebar.classList.contains('mobile-open')) {
                closeMenu();
            }
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
            closeMenu();
        }
    });
    
    // Handle window resize - close menu if resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && sidebar.classList.contains('mobile-open')) {
            sidebar.classList.remove('mobile-open', 'mobile-closing');
            backdrop.classList.add('hidden');
            backdrop.classList.remove('visible');
            hamburgerBtn.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

// Cache for loaded content to avoid repeated fetches
const contentCache = {};

// Load content from HTML file
async function loadContent(menuId) {
    if (contentCache[menuId]) {
        return contentCache[menuId];
    }
    
    try {
        const response = await fetch(`/content/${menuId}.html`);
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

function getMenuIdFromPath() {
    return window.location.pathname.replace(/^\//, '').replace(/\/$/, '') || null;
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
    setupMobileMenu();

    const menuItems = document.querySelectorAll('.menu-item');
    const contentContainer = document.getElementById('content-container');
    const validMenuIds = Array.from(menuItems).map(mi => mi.getAttribute('data-menu-item'));

    // Backward compat: redirect legacy hash URLs to clean paths
    const hash = window.location.hash.replace('#', '');
    if (hash && validMenuIds.includes(hash)) {
        history.replaceState(null, '', `/${hash}`);
    }

    const pathMenuId = getMenuIdFromPath();
    const initialMenuId = (pathMenuId && validMenuIds.includes(pathMenuId))
        ? pathMenuId
        : validMenuIds[0];

    // Ensure the URL reflects the active section
    if (!pathMenuId || !validMenuIds.includes(pathMenuId)) {
        history.replaceState(null, '', `/${initialMenuId}`);
    }

    // Set active menu item
    menuItems.forEach(mi => mi.classList.remove('active'));
    const activeItem = document.querySelector(`[data-menu-item="${initialMenuId}"]`);
    if (activeItem) activeItem.classList.add('active');

    // Load initial content
    contentContainer.innerHTML = await loadContent(initialMenuId);
    applyStaggeredAnimation(contentContainer);
    setupScrollReveal();
    setupPasswordForm();

    async function switchContent(menuId, animate) {
        menuItems.forEach(mi => mi.classList.remove('active'));
        const item = document.querySelector(`[data-menu-item="${menuId}"]`);
        if (item) item.classList.add('active');

        if (animate) {
            contentContainer.style.opacity = '0';
            contentContainer.style.transform = 'translateY(12px)';
            await new Promise(r => setTimeout(r, 200));
        }

        contentContainer.innerHTML = await loadContent(menuId);
        contentContainer.style.opacity = '';
        contentContainer.style.transform = '';
        applyStaggeredAnimation(contentContainer);
        setupScrollReveal();
        setupPasswordForm();
        contentContainer.closest('article').scrollTop = 0;
    }

    menuItems.forEach(item => {
        item.addEventListener('click', async function() {
            const menuId = this.getAttribute('data-menu-item');
            history.pushState(null, '', `/${menuId}`);
            await switchContent(menuId, true);
        });
    });

    window.addEventListener('popstate', async () => {
        const menuId = getMenuIdFromPath();
        if (menuId && validMenuIds.includes(menuId)) {
            await switchContent(menuId, false);
        }
    });
});
