const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.body.className = button.dataset.theme;
    });
});