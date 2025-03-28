document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (!scrollTopBtn) return;

    // Throttle scroll event to improve performance
    function toggleScrollButton() {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }

    window.addEventListener("scroll", toggleScrollButton);

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});