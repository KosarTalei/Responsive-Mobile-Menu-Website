"use strict"
// Activate "strict mode" in JavaScript

/* 
  Different ways of creating JS variables:
  1. const  - new as of ES2015 - block-scoped constant (unchangeable)
  2. let    - new as of ES2015 - block-scoped variable (changeable)
  3. var    - since the dawn of JS - global variable
 */

/* 

  // Logging to the console in DevTools
  console.time("Random test")
  console.log("Log message")
  console.info("Info message")
  console.warn("Warning message")
  console.error("Error message")
  console.debug("Debug message")
  console.timeEnd("Random test")

  let randomObject = {
    name: "Mike",
    age: 176
  }

  console.log(randomObject)
  console.table(randomObject)

 */



// Algorithm = procedure (series of steps) to solve a problem
// I plan my code (document my algorithm) using comments as placeholders/headings and then implement the code for each comment/step.


// Get the menu toggle and menu (from the DOM)
const menuToggle = document.querySelector("#menu-toggle")
// const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

// Useful debugging technique - wrap variables in an object
// console.log({menuToggle, menu})

// Cancel if elements DON'T exist (menu and menu toggle) - refactored way of writing the if statement below
// if (menuToggle === null || menu === null)
// if (!(menuToggle && menu)) return

// Check that the elements exist (menu and menu toggle)
if (menuToggle && menu) {
  
  // Hide the menu by default - remove the "show" class added in the HTML
  // We don't need this if we're using the "no-js" class on the <html> element!!  😊
  // menu.classList.remove("show")

  // Add helpful ARIA attributes to the menu toggle (very good for accessibility 😊)
  // aria-expanded="false" aria-controls="menu"
  menuToggle.setAttribute("aria-expanded", "false")
  menuToggle.setAttribute("aria-controls", "menu")


  // Add click event listener to the menu toggle
  menuToggle.addEventListener("click", () => {

    // Toggle (add/remove) the "show" class on the menu
    // (condition) ? true : false;
    // menu.classList.contains("show") ? menu.classList.remove("show") : menu.classList.add("show")
    // menu.classList.toggle("show")

    // Check if menu is showing/hiding
    if (menu.classList.contains("show")) {

      // Hide the menu
      menu.classList.remove("show")
      menuToggle.setAttribute("aria-expanded", "false")
      
    } else  {
      
      // Show the menu
      menu.classList.add("show")
      menuToggle.setAttribute("aria-expanded", "true")

    }

  })

}

// function menuToggleClick() {
//   console.log("Stop clicking me!! 😱")
// }