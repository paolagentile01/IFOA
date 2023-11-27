let navbar = document.querySelector(".nav-bar-tag");
let button = document.querySelector(".button-link a");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 350) {
        navbar.classList.add("topMenu");
        button.classList.add("topButton");
    } else {
        navbar.classList.remove("topMenu"); 
        button.classList.remove("topButton"); 
    }
});