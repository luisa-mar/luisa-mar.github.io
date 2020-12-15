let images = [
    "img/schweben/Schweben-Close.jpeg",
    "img/schweben/Schweben3.jpeg",
    "img/schweben/schweben4.jpeg",
    "img/schweben/Schweben.jpg",
    "img/schweben/Sommer See.jpg",
    "img/schweben/IMG_5_schweben.png",
    "img/schweben/IMG_6_schweben.png",
    "img/schweben/IMG_4104.jpeg",
    "img/schweben/IMG_4074.jpeg",


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