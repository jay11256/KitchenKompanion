// Popup functionality
const overlay = document.getElementById("popup-overlay");

function openPopup(id) {
    // hide any popup that's already showing
    document.querySelectorAll(".popup").forEach(p => p.classList.remove("open"));

    document.getElementById(id).classList.add("open");
    overlay.classList.add("open");
}

function closePopup() {
    overlay.classList.remove("open");
    document.querySelectorAll(".popup").forEach(p => p.classList.remove("open"));
}

// clicking the dark background (but not the popup itself) closes it
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        closePopup();
    }
});