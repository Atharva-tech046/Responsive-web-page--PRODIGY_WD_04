// script.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const shopNowButton = document.getElementById("shop-now");
    const colorBoxes = document.querySelectorAll(".color-box");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Button click effect
    shopNowButton.addEventListener("click", function () {
        alert("Explore our exclusive watch collection now!");
        window.location.href = "https://www.harrods.com/en-in"; // Replace with actual shopping link
    });

    // Add hover effect to watch items
    const watchItems = document.querySelectorAll(".watch-item");
    watchItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "0.3s";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Add hover effect to color options
    colorBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.border = "2px solid #000";
            box.style.transition = "0.3s";
        });
        box.addEventListener("mouseout", () => {
            box.style.border = "none";
        });
    });
});
