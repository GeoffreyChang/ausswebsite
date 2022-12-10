
var images = ["/images/sponsors.jpg", "/images/img1.JPG", "image3.jpg"];

function changeBackground(n) {
    document.body.style.backgroundImage = "url(" + images[n] + ")";
}