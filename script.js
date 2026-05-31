window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".glass-nav");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.3)";
    }
});