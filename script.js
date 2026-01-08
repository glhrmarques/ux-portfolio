// Menu content data
const menuContent = {
    'rep-sales': {
        title: 'Rep Sales App',
        description: `
            <p class="text-[16px] mb-4">A comprehensive sales application designed for sales representatives to manage their clients, orders, and performance metrics efficiently.</p>
            
            <p class="text-[16px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            
            <p class="text-[16px] mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <h3 class="text-[20px] font-semibold mb-3 mt-6">Key Features</h3>
            <p class="text-[16px] mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            
            <p class="text-[16px] mb-4">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
            
            <h3 class="text-[20px] font-semibold mb-3 mt-6">Technical Implementation</h3>
            <p class="text-[16px] mb-4">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            
            <p class="text-[16px] mb-4">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
            
            <p class="text-[16px] mb-4">Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        `
    },
    'seller-platform': {
        title: 'Seller Platform',
        description: '<p class="text-[16px] mb-4">An intuitive platform for sellers to manage their inventory, track sales, and communicate with customers seamlessly.</p>'
    },
    'marketplace': {
        title: 'B2B Marketplace',
        description: '<p class="text-[16px] mb-4">A robust B2B marketplace connecting businesses with suppliers, featuring advanced search, filtering, and transaction capabilities.</p>'
    },
    'project-one': {
        title: 'Project One',
        description: '<p class="text-[16px] mb-4">An innovative side project showcasing creative solutions and experimental features.</p>'
    },
    'project-two': {
        title: 'Project Two',
        description: '<p class="text-[16px] mb-4">Another exciting side project exploring new technologies and design patterns.</p>'
    }
};

// Initialize menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentContainer = document.getElementById('content-container');
    
    // Load default content (first menu item)
    const firstMenuItem = menuItems[0];
    const defaultMenuId = firstMenuItem.getAttribute('data-menu-item');
    if (menuContent[defaultMenuId]) {
        contentContainer.innerHTML = `
            <h2 class="text-[24px] font-semibold mb-4">${menuContent[defaultMenuId].title}</h2>
            ${menuContent[defaultMenuId].description}
        `;
    }
    
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
                        ${menuContent[menuId].description}
                    `;
                    contentContainer.style.opacity = '1';
                    // Scroll to top of content area when switching
                    contentContainer.parentElement.scrollTop = 0;
                }, 150);
            }
        });
    });
});
