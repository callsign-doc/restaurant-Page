export { loadHomePage };
import krustyKrabImg from "./assets/krustyKrab.jpeg"

function loadHomePage() {

    const contentDiv = document.getElementById('content');

    // Clear previous content (if necessary)
    contentDiv.innerHTML = '';
    
    // Create and append the headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to The Krusty Krab';
    contentDiv.appendChild(headline);
    
    // Create and append the image
    const image = document.createElement('img');
    image.src = krustyKrabImg;
    image.alt = 'The Krusty Krab';
    image.style.width = '100%';
    image.style.maxWidth = '600px';
    image.style.height = 'auto';
    contentDiv.appendChild(image);
    
    // Create and append the paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Come on down to The Krusty Krab, where we serve the tastiest Krabby Patties in Bikini Bottom! Dive into a sea of flavor with our secret formula and enjoy the undersea atmosphere that\'s fun for the whole family.';
    contentDiv.appendChild(paragraph);
}