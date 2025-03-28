console.log("JavaScript loaded from main.js");

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const revealElements = document.querySelectorAll(".reveal");

    // Function to reveal elements on scroll
    const revealOnScroll = () => {
        revealElements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    };

    // Function to show/hide scroll-to-top button
    const toggleScrollButton = () => {
        if (scrollTopBtn) {
            scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Attach event listeners
    window.addEventListener("scroll", () => {
        requestAnimationFrame(revealOnScroll);
        requestAnimationFrame(toggleScrollButton);
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", scrollToTop);
    }

    // Initial checks on load
    revealOnScroll();
    toggleScrollButton();
});