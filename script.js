// Menu content data
const menuContent = {
    'rep-sales': {
        title: 'Rep Sales App',
        description: 'A comprehensive sales application designed for sales representatives to manage their clients, orders, and performance metrics efficiently.'
    },
    'seller-platform': {
        title: 'Seller Platform',
        description: 'An intuitive platform for sellers to manage their inventory, track sales, and communicate with customers seamlessly.'
    },
    'marketplace': {
        title: 'B2B Marketplace',
        description: 'A robust B2B marketplace connecting businesses with suppliers, featuring advanced search, filtering, and transaction capabilities.'
    },
    'project-one': {
        title: 'Project One',
        description: 'An innovative side project showcasing creative solutions and experimental features.'
    },
    'project-two': {
        title: 'Project Two',
        description: 'Another exciting side project exploring new technologies and design patterns.'
    }
};

// Initialize menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentContainer = document.getElementById('content-container');
    
    // Add click event to all menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const menuId = this.getAttribute('data-menu-item');
            
            // Remove active class from all items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update content with fade effect
            if (menuContent[menuId]) {
                contentContainer.style.opacity = '0';
                
                setTimeout(() => {
                    contentContainer.innerHTML = `
                        <h2 class="text-[24px] font-semibold mb-4">${menuContent[menuId].title}</h2>
                        <p class="text-[16px] mb-3">${menuContent[menuId].description}</p>
                    `;
                    contentContainer.style.opacity = '1';
                }, 150);
            }
        });
    });
});
