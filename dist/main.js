(()=>{"use strict";function e(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Welcome to The Krusty Krab",e.appendChild(t);const n=document.createElement("img");n.src="krusty-krab.jpg",n.alt="The Krusty Krab",n.style.width="100%",n.style.maxWidth="600px",n.style.height="auto",e.appendChild(n);const o=document.createElement("p");o.textContent="Come on down to The Krusty Krab, where we serve the tastiest Krabby Patties in Bikini Bottom! Dive into a sea of flavor with our secret formula and enjoy the undersea atmosphere that's fun for the whole family.",e.appendChild(o)}const t=document.getElementById("home-tab"),n=document.getElementById("menu-tab"),o=document.getElementById("about-tab");console.log("We are here, we are waiting bros."),e(),t.addEventListener("click",e),n.addEventListener("click",(function(){console.log("loading menu.....");const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h2");t.textContent="Our Menu",e.appendChild(t);const n=document.createElement("ul");[{name:"Krabby Patty",price:"$5.99"},{name:"Double Krabby Patty",price:"$8.99"},{name:"Triple Krabby Patty",price:"$11.99"}].forEach((e=>{const t=document.createElement("li");t.textContent=`${e.name}: ${e.price}`,n.appendChild(t)})),e.appendChild(n)})),o.addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h2");t.textContent="About Us",e.appendChild(t);const n=document.createElement("p");n.textContent="The Krusty Krab is the most famous fast food restaurant in Bikini Bottom. \n    It was founded by Eugene H. Krabs and has been serving delicious Krabby Patties to satisfied customers for years.",e.appendChild(n);const o=document.createElement("h3");o.textContent="Our Staff",e.appendChild(o);const a=document.createElement("ul");["Eugene H. Krabs (Owner)","SpongeBob SquarePants (Fry Cook)","Squidward Tentacles (Cashier)","Patrick Star (Janitor)"].forEach((e=>{const t=document.createElement("li");t.textContent=e,a.appendChild(t)})),e.appendChild(a)}))})();