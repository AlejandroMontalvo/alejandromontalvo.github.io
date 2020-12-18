console.log("If you're interested in the code, you can find this site on my github projects here:");

function myFunction() {
  var x = document.getElementById("mobile-menu");
  if (x.name === "menu-sharp"){
    x.setAttribute("name","close-sharp")
    openNav();
  }else{
    x.setAttribute("name","menu-sharp")
    closeNav();
  }
}

function openNav() {
  document.getElementById("mobile-nav").style.width = "50%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
}