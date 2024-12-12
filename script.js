// hiding the navigation bar on small screens
var menu_hide = true;
var menu_icons = document.getElementById("nav_bar_id");
var btn = document.getElementById("menu_id");

//  Highlight active page
// const activePage= window.location.pathname;
// const navLinks = document.querySelectorAll(".header .nav_bar ul li a").
// forEach(link => {
  // if(link.href.includes(`${activePage}`)){
  //  link.classList.add('active');
  // }
// });

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
