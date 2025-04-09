// Ouvrir la modale
const modal = document.getElementById("contactModal");
const openButton = document.getElementById("openContactForm");
const closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fermer la modale
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer la modale si on clique en dehors de la boîte
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
