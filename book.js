let images = [
"img/portfolio_2021/Matura/front-page.jpg",
"img/portfolio_2021/Matura/eating.jpg",
"img/portfolio_2021/Matura/aua.jpg",
"img/portfolio_2021/Matura/fire.jpg",
"img/portfolio_2021/Matura/fly.jpg",
"img/portfolio_2021/Matura/traktor.jpg",
];

let currentImage = 0;

function showImg(difference) {
    let newImageIndex = (currentImage + difference);
    // Make sure it's between 0 and images.count
    newImageIndex = (images.length + newImageIndex) % images.length;
    console.log(newImageIndex);
    currentImage = newImageIndex;
    $(".flip-book").attr("src", images[currentImage]);
}

$(".arrow-left").click(function() {
    showImg(-1);
});

$(".arrow-right").click(function() {
    showImg(+1);
});