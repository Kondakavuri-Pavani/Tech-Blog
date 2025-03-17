// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Tutorial Search
document.getElementById("searchInput").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    document.querySelectorAll(".tutorial-item").forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
});

// Projects Search
document.getElementById("searchProjects").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    document.querySelectorAll(".project-item").forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
});
