import navSearch from "../components/navSearch.js";
import { home } from "../components/home.js";
import { makeApiCall, appendData } from "./async.js";
import logoImg from "../svg/svgImg.js";

document.querySelector("#searchBar").innerHTML = navSearch();
document.querySelector(".logoImg").innerHTML = logoImg();
document.querySelector("#homePage").innerHTML = home();

let search_term = localStorage.getItem("search_term");

let key = "IbQfsT5hSUQZzIi1vvRrSMZJ2Tbk8W6wd7lOEFIDR2Y";
let url = `https://api.unsplash.com/search/photos?per_page=100&query=${search_term}&client_id=${key}`;

let search = document.querySelector(".home02");

let res = await makeApiCall(url);
console.log("Res", res);

appendData(res.results, search);

//Search Bar
let input = document.getElementById("Searchbar");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input_value = document.getElementById("Searchbar").value;

    localStorage.setItem("search_term", input_value);
    window.location.href = "navSearch.html";
  }
});
