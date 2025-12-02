let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

document.getElementById("prevBtn").addEventListener("click", function () {
    index = (index === 0) ? slides.length - 1 : index - 1;
    showSlide(index);
});

document.getElementById("nextBtn").addEventListener("click", function () {
    index = (index === slides.length - 1) ? 0 : index + 1;
    showSlide(index);
});
