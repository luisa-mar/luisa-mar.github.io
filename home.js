let images = [
    "img/schweben/Schweben-Close.jpeg",
    "img/schweben/Wasserfarbe1.jpeg",
    "img/schweben/Wasserfarbe2.jpeg",
    "img/schweben/Wasserfarbe3.jpeg",
    "img/schweben/Schweben.jpg",
    "img/schweben/Sommersee.jpeg",
    "img/schweben/IMG_5_schweben.png",
    "img/schweben/IMG_6_schweben.png",
    "img/schweben/Ausstellungswand.png",


];

let currentImage = 0;

function showImg(difference) {
    let newImageIndex = (currentImage + difference);
    // Make sure it's between 0 and images.count
    newImageIndex = (images.length + newImageIndex) % images.length;
    console.log(newImageIndex);
    currentImage = newImageIndex;
    $(".frontimage").attr("src", images[currentImage]);
}

$(".arrow-left").click(function() {
    showImg(-1);
});

$(".arrow-right").click(function() {
    showImg(+1);
});