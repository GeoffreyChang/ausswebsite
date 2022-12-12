
var images = ["/images/sponsors.jpg", "/images/beginner.jpg", "/images/events.jpg", "/images/group.jpg", "/images/womens.jpg"];

function changeBackground(n) {
    document.body.style.backgroundImage = "url(" + images[n] + ")";
}