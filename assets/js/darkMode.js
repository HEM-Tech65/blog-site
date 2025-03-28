document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check user preference for dark or light mode
    const darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
    const lightModeEnabled = localStorage.getItem("light-mode") === "enabled";

    // Apply saved theme
    if (darkModeEnabled) {
        body.classList.add("dark-mode");
    } else if (lightModeEnabled) {
        body.classList.add("light-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        // Toggle dark and light modes
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Save preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            localStorage.removeItem("light-mode");
        } else {
            localStorage.setItem("light-mode", "enabled");
            localStorage.removeItem("dark-mode");
        }

        // Update button icon dynamically
        darkModeToggle.innerHTML = body.classList.contains("dark-mode")
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });
});