document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    //Check user preference for dark or light mode
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

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
        darkModeIcon.classList.replace("fa-moon", "fa-sun");
    }

    // Toggle Dark Mode on Click
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
            darkModeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
            darkModeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});
