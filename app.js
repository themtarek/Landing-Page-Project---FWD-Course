/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.getElementsByTagName("section");
let ul = document.querySelector("#navbar__list");
let nav = document.querySelector(".navbar__menu");
let a = nav.getElementsByTagName("a");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const section of sections) {
    const title = section.querySelector("h2").textContent;
    const navItem = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = title;
    a.style.cssText = "cursor: pointer; text-decoration: none; color: #000;"
    a.setAttribute("href", `#${section.id}`);
    ul.appendChild(navItem);
    navItem.appendChild(a);
}


// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function() {
    for (const section of sections) {
        if (isInViewport(section)) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
})


// Scroll to anchor ID using scrollTO event
for(const element of a){
element.addEventListener("click", function(e){
    e.preventDefault();
    let href = element.href.slice(element.href.length - 8);
    let target = document.getElementById(href);
    target.scrollIntoView({ behavior: 'smooth'});
})
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to top
let btn = document.querySelector(".scrollTop");
let header = document.querySelector("body");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    header.scrollIntoView({behavior: 'smooth'});
})
