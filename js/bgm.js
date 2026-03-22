const bgm = document.getElementById("bgm");
const bgmBtn = document.getElementById("bgmBtn");

bgmBtn.addEventListener("click", function () {
    if (bgm.paused) {
        bgm.play();
        bgmBtn.src = "assets/volume-on.png";
    } else {
        bgm.pause();
        bgmBtn.src = "assets/volume-off.png";
    }
});