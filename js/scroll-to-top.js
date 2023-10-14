document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".arrow");

    // Show/hide the button based on the user's scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});