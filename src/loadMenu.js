export { loadMenu }; 

function loadMenu() {
    console.log('loading menu.....')

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content div

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';
    contentDiv.appendChild(menuTitle);

    const menuItems = [
        { name: 'Krabby Patty', price: '$5.99' },
        { name: 'Double Krabby Patty', price: '$8.99' },
        { name: 'Triple Krabby Patty', price: '$11.99' },
        // Add more menu items as needed
    ];

    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = `${item.name}: ${item.price}`;
        menuList.appendChild(menuItem);
    });

    contentDiv.appendChild(menuList);
}

    