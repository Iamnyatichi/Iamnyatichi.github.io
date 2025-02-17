//navigation links highlighting when selected

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("#nav_bar_id a");

  // Get the current page pathname (excluding query parameters & hashes)
  var currentPage = window.location.pathname;
  var activeNav = localStorage.getItem("activeNav");

  function highlightLink(linkHref) {
    // Remove 'active' class from all links before highlighting the new one
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Find the matching link and add 'active' class
    var activeLink = document.querySelector(
      `#nav_bar_id a[href="${linkHref}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  //  Don't keep "Home" highlighted when another link is selected
  if (activeNav && activeNav !== "/" && activeNav !== "index.html") {
    highlightLink(activeNav);
  } else {
    // If no activeNav is stored, highlight based on the current page
    navLinks.forEach(function (link) {
      if (!link.hash && link.pathname === currentPage) {
        highlightLink(link.getAttribute("href"));
      }
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var linkHref = this.getAttribute("href");

      // Ensure only one link is highlighted
      highlightLink(linkHref);

      // Store the clicked link in localStorage (even if clicked from a different section)
      localStorage.setItem("activeNav", linkHref);

      // Handle hash links (e.g., #contact, #about) properly
      if (this.hash) {
        event.preventDefault(); // Prevent full page reload
        window.location.hash = this.hash; // Ensure smooth scrolling works

        // Scroll to the section smoothly
        var section = document.querySelector(this.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Ensure correct link is active when the page loads with a hash (e.g., #contact, #about)
  if (window.location.hash) {
    highlightLink(window.location.hash);
  }
});

// hiding the navigation bar on small screens
var menu_hide = true;
var menu_icons = document.getElementById("nav_bar_id");
var btn = document.getElementById("menu_id");

// custom header and footer
class SpecialHeader extends HTMLElement {
  connectedCallback() {}
}

// function for nav bar
function show() {
  if (menu_hide == true) {
    menu_icons.classList.add("add_cls");
    btn.innerHTML = "&times;";
    btn.style.fontSize = "50px";

    menu_hide = false;
  } else {
    menu_icons.classList.remove("add_cls");
    btn.innerHTML = "&#9776;";
    btn.style.fontSize = "30px";

    menu_hide = true;
  }
}

// function for portifolio page buttons
function collectAll() {}

// portfolio page buttons call

document.addEventListener("DOMContentLoaded", function () {
  filterSelection("all"); // Show all items by default

  function filterSelection(category) {
    let items = document.getElementsByClassName("portfolio_item");

    for (let i = 0; i < items.length; i++) {
      if (category === "all") {
        items[i].style.display = "block";
      } else {
        if (items[i].classList.contains(category)) {
          items[i].style.display = "block";
        } else {
          items[i].style.display = "none";
        }
      }
    }
    updateActiveButton(category);
  }

  function updateActiveButton(category) {
    let buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active-button");
    }
    document
      .querySelector(`[onclick="filterSelection('${category}')"]`)
      .classList.add("active-button");
  }

  let buttonElements = document.querySelectorAll(".buttons");
  buttonElements.forEach((button) => {
    button.addEventListener("click", function () {
      let category = this.getAttribute("onclick").match(/'([^']+)'/)[1];
      filterSelection(category);
    });
  });
});

// index/homepage projects pop-up
// initialize swipper
new Swiper(".card-wrapper", {
  loop: false,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


