export {loadAbout};

function loadAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content div

    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Us';
    contentDiv.appendChild(aboutTitle);

    const aboutText = document.createElement('p');
    aboutText.textContent = `The Krusty Krab is the most famous fast food restaurant in Bikini Bottom. 
    It was founded by Eugene H. Krabs and has been serving delicious Krabby Patties to satisfied customers for years.`;
    contentDiv.appendChild(aboutText);

    const staffTitle = document.createElement('h3');
    staffTitle.textContent = 'Our Staff';
    contentDiv.appendChild(staffTitle);

    const staffList = document.createElement('ul');
    const staffMembers = [
        'Eugene H. Krabs (Owner)',
        'SpongeBob SquarePants (Fry Cook)',
        'Squidward Tentacles (Cashier)',
        'Patrick Star (Janitor)',
        // Add more staff members as needed
    ];
    staffMembers.forEach(member => {
        const staffItem = document.createElement('li');
        staffItem.textContent = member;
        staffList.appendChild(staffItem);
    });
    contentDiv.appendChild(staffList);
}
