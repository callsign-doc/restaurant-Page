(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"b72169121aba8a67ec10.jpeg";function n(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="Welcome to The Krusty Krab",e.appendChild(n);const o=document.createElement("img");o.src=t,o.alt="The Krusty Krab",o.style.width="100%",o.style.maxWidth="600px",o.style.height="auto",e.appendChild(o);const r=document.createElement("p");r.textContent="Come on down to The Krusty Krab, where we serve the tastiest Krabby Patties in Bikini Bottom! Dive into a sea of flavor with our secret formula and enjoy the undersea atmosphere that's fun for the whole family.",e.appendChild(r)}const o=document.getElementById("home-tab"),r=document.getElementById("menu-tab"),a=document.getElementById("about-tab");console.log("We are here, we are waiting bros."),n(),o.addEventListener("click",n),r.addEventListener("click",(function(){console.log("loading menu.....");const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h2");t.textContent="Our Menu",e.appendChild(t);const n=document.createElement("ul");[{name:"Krabby Patty",price:"$5.99"},{name:"Double Krabby Patty",price:"$8.99"},{name:"Triple Krabby Patty",price:"$11.99"}].forEach((e=>{const t=document.createElement("li");t.textContent=`${e.name}: ${e.price}`,n.appendChild(t)})),e.appendChild(n)})),a.addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("h2");t.textContent="About Us",e.appendChild(t);const n=document.createElement("p");n.textContent="The Krusty Krab is the most famous fast food restaurant in Bikini Bottom. \n    It was founded by Eugene H. Krabs and has been serving delicious Krabby Patties to satisfied customers for years.",e.appendChild(n);const o=document.createElement("h3");o.textContent="Our Staff",e.appendChild(o);const r=document.createElement("ul");["Eugene H. Krabs (Owner)","SpongeBob SquarePants (Fry Cook)","Squidward Tentacles (Cashier)","Patrick Star (Janitor)"].forEach((e=>{const t=document.createElement("li");t.textContent=e,r.appendChild(t)})),e.appendChild(r)}))})();