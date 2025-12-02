// Trigger fade-in animation when sections enter the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
        }
    });
});

document.querySelectorAll(".fade-in").forEach((section) => {
    observer.observe(section);
});
