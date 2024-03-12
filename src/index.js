import { loadHomePage } from "./home";
import { loadMenu } from "./loadMenu";

const menuBtn = document.getElementById('menu-tab');


console.log('We are here, we are waiting bros.');

loadHomePage();
menuBtn.addEventListener('click', loadMenu);


