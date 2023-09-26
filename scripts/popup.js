function openPopup() {
    document.querySelector(".popup").style.display = "block";

    // Add a click event listener to the popup overlay
    document
        .querySelector(".popup")
        .addEventListener("click", closePopupOutside);
}

function closePopup() {
    document.querySelector(".popup").style.display = "none";

    // Remove the click event listener when the popup is closed
    document
        .querySelector(".popup")
        .removeEventListener("click", closePopupOutside);
}

// Function to close the popup when clicking outside of it
function closePopupOutside(event) {
    if (event.target.classList.contains("popup")) {
        closePopup();
    }
}

// Show the popup on page load (you can trigger this event as needed)
window.addEventListener("load", openPopup);
