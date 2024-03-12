import { loadHomePage } from "./home";
import { loadMenu } from "./loadMenu";
import { loadAbout } from "./loadAbout";

const homeBtn = document.getElementById('home-tab')
const menuBtn = document.getElementById('menu-tab');
const aboutBtn = document.getElementById('about-tab');


console.log('We are here, we are waiting bros.');

loadHomePage();

homeBtn.addEventListener('click', loadHomePage);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);



