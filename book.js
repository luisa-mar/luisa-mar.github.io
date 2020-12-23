let images = [
    "img/book/book1.jpg",    
    "img/book/book2.jpg",
    "img/book/a-out-007.jpg",
    "img/book/b-out-000.jpg",
    "img/book/book3.jpg",
    "img/book/b-out-002.jpg",
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