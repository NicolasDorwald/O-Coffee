
function initBurgerMenu() {
  const menuNavbar = document.getElementById("menu-navbar");
  const menuButton = document.getElementById("menu-button");
  
  if (!menuNavbar || !menuButton) return;
  
  menuButton.addEventListener("click", () => {
    //console.log("Le menu a été cliqué !");
    menuNavbar.classList.toggle("expanded");
  });
}

initBurgerMenu();







