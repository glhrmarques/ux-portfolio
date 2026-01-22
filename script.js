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

// Initialize menu functionality
document.addEventListener('DOMContentLoaded', async function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentContainer = document.getElementById('content-container');
    
    // Load default content (first menu item)
    const defaultMenuId = menuItems[0].getAttribute('data-menu-item');
    contentContainer.innerHTML = await loadContent(defaultMenuId);
    
    // Add click event to all menu items
    menuItems.forEach(item => {
        item.addEventListener('click', async function() {
            const menuId = this.getAttribute('data-menu-item');
            
            // Remove active class from all items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update content with fade effect
            contentContainer.style.opacity = '0';
            
            setTimeout(async () => {
                contentContainer.innerHTML = await loadContent(menuId);
                contentContainer.style.opacity = '1';
                // Scroll to top of content area when switching
                contentContainer.parentElement.scrollTop = 0;
            }, 150);
        });
    });
});
