// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

import navbar from "./src/components/navBar.js";
import logoImg from "./src/svg/svgImg.js";
import { home } from "./src/components/home.js";
import { makeApiCall, appendData } from "./src/script/async.js";

document.querySelector("#head-nav").innerHTML = navbar();

document.querySelector(".logoImg").innerHTML = logoImg();

document.querySelector("#homePage").innerHTML = home();

let key = "IbQfsT5hSUQZzIi1vvRrSMZJ2Tbk8W6wd7lOEFIDR2Y";
let url = `https://api.unsplash.com/photos/?client_id=${key}`;

let image_data = document.querySelector(".home02");
let image_data1 = document.querySelector(".home01");

let res = await makeApiCall(url);
console.log("Res", res);

appendData(res, image_data);
appendData(res, image_data1);

//Search Bar
let input = document.getElementById("Searchbar");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input_value = document.getElementById("Searchbar").value;

    localStorage.setItem("search_term", input_value);
    window.location.href = "./src/html/navSearch.html";
  }
});
