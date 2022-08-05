import { home1 } from "../components/home.js";
import navSearch from "../components/navSearch.js";
import { makeApiCall, appendData } from "./async.js";
import logoImg from "../svg/svgImg.js";

document.getElementById("searchView").innerHTML = navSearch();
document.querySelector(".logoImg").innerHTML = logoImg();

document.getElementById("photos").innerHTML = home1();

let photo = document.querySelector(".home04");

let setPhoto = JSON.parse(localStorage.getItem("setPhoto"));

appendData(setPhoto, photo);

//Search Bar
let input = document.getElementById("Searchbar");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input_value = document.getElementById("Searchbar").value;

    localStorage.setItem("search_term", input_value);
    window.location.href = "navSearch.html";
  }
});
