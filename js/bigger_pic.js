const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

const images = document.querySelectorAll(".clickable-img");

let currentLink = "";

images.forEach(function (img) {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = img.src;

        currentLink = img.dataset.link;
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modalImg.addEventListener("click", function () {
    if (currentLink) {
        window.location.href = currentLink;
    }
});