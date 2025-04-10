// Ouvrir la modale formulaire de contact
const modal = document.getElementById("contactModal");
const openButton = document.getElementById("openContactForm");
const closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fermer la modale formulaire de contact
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer la modale de contact si on clique en dehors de la boîte
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});




// Obtenir les éléments de CGV 
const cgvModal = document.getElementById("cgv-modal");
const cgvLink = document.getElementById("cgv-link");
const cgvClose = document.getElementById("cgv-close");

// Ouvrir la modale des CGV quand on clique sur le lien
cgvLink.onclick = function() {
    cgvModal.style.display = "block";
}

// Fermer la modale des CGV quand on clique sur la croix
cgvClose.onclick = function() {
    cgvModal.style.display = "none";
}

// Fermer la modale si on clique en dehors de la modale
window.onclick = function(event) {
    if (event.target == cgvModal) {
        cgvModal.style.display = "none";
    }
}



// Obtenir les éléments mentions légales
const mlModal = document.getElementById("mlegal-modal");
const mlLink = document.getElementById("ml-link");
const mlClose = document.getElementById("ml-close");

// Ouvrir la modale des CGV quand on clique sur le lien
mlLink.onclick = function() {
    mlModal.style.display = "block";
}

// Fermer la modale des ml quand on clique sur la croix
mlClose.onclick = function() {
    mlModal.style.display = "none";
}




// Obtenir les éléments de privacy 
const privacyModal = document.getElementById("privacy-modal");
const privacyLink = document.getElementById("privacy-link");
const privacyClose = document.getElementById("privacy-close");

// Ouvrir la modale privacy quand on clique sur le lien
privacyLink.onclick = function() {
    privacyModal.style.display = "block";
}

// Fermer la modale privacy quand on clique sur la croix
privacyClose.onclick = function() {
    privacyModal.style.display = "none";
}



// Fermer les modales si on clique en dehors des modale 
window.onclick = function(event) {
    if (event.target == cgvModal) {
        cgvModal.style.display = "none";  
    } 
    if (event.target == mlModal) {
        mlModal.style.display = "none";  
    }
    if (event.target == privacyModal) {
        privacyModal.style.display = "none"; 
    }
}

