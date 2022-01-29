// Variable
var menu = document.querySelector("#menu"),
    menu_content = document.querySelector("#nav_content"),
    overlay = document.querySelector(".overlay"),
    list_heading = document.querySelectorAll(".list_heading"),
    list_content = document.querySelectorAll(".list_content");


// Work when the DOM is finished
window.addEventListener("DOMContentLoaded", () => {

    // Toggle menu
    menu.addEventListener("click", () => {
        toggleMenu();
    });
    overlay.addEventListener("click", () => {
        toggleMenu();
    });
    list_heading.forEach(list_head => {
        list_head.addEventListener("click", (e) => {
            toggleMenuContent(e);
        })
    })
})

// Function to close and open the menu & view and hide the overlay
function toggleMenu() {
    menu.classList.toggle("menu_close");
    menu_content.classList.toggle("hide");
    overlay.classList.toggle("hide");
}

// Function to open menu content
var click = 0;
function toggleMenuContent(e) {
    let el_att = e.target.getAttribute('data-head') // get the clicked element attribute
    let el = document.querySelector(`[data-head='${el_att}']`)
    let all_el = document.querySelectorAll("[data-head]")
    
    let all_ch = document.querySelectorAll("[data-content]")
    
    // Function to return menu content to its default
    function returnToDefault() {
        // add hide class to all element
        all_ch.forEach(chiled => {
            chiled.classList.add("hide")
        })
        // remove open_span class to all element
        all_el.forEach(span => {
            span.children[0].classList.remove("open_span")
        })
    }
    returnToDefault();

    for (var i = 0; i < list_content.length; i++) {
        
        let ch_att = list_content[i].getAttribute('data-content') // get the clicked element child attribute
        let ch = document.querySelector(`[data-content='${ch_att}']`)

        if (el_att === ch_att) {
            // remove hide of the clicked element's child
            ch.classList.remove("hide");
            el.children[0].classList.add("open_span")
            click += 1;
        }
        
        // close menu if click again
        if (!ch.classList.contains("hide")) {
            if (click >= 2) {
                returnToDefault();
                click = 0;
            }
        }
    }
}