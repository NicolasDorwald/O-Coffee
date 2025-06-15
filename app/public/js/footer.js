// Ouverture de la modale formulaire de contact
const contactModal = document.getElementById("contactModal");
const openButton = document.getElementById("openContactForm");
const closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", () => {
    contactModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll page
});

// Obtention les éléments de CGV 
const cgvModal = document.getElementById("cgv-modal");
const cgvLink = document.getElementById("cgv-link");
const cgvClose = document.getElementById("cgv-close");

// Ouverture de la modale des CGV quand on clique sur le lien
cgvLink.onclick = function(e) {
    e.preventDefault();
    cgvModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll page
}

// Obtention les éléments mentions légales
const mlModal = document.getElementById("mlegal-modal");
const mlLink = document.getElementById("ml-link");
const mlClose = document.getElementById("ml-close");

// Ouverture de la modale des CGV quand on clique sur le lien
mlLink.onclick = function(e) {
    e.preventDefault();
    mlModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll page
}

// Obtention les éléments de privacy 
const privacyModal = document.getElementById("privacy-modal");
const privacyLink = document.getElementById("privacy-link");
const privacyClose = document.getElementById("privacy-close");

// Ouverture de la modale privacy quand on clique sur le lien
privacyLink.onclick = function(e) {
    e.preventDefault();
    privacyModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll page
}



// factorisation de la fermeture des modals avec la croix
const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // On suppose que la modale est l'ancêtre direct avec la classe "modal"
    const modal = btn.closest(".modal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Restaure le scroll page
    }
  });
});
// factorisation de la fermeture des modals si on clique en dehors des modals
const modals = [cgvModal, mlModal, privacyModal, contactModal];

window.onclick = function(event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Restaure le scroll page
    }
  });
};

