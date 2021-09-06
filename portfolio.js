let images = [
    "img/merge/portfoliocover.jpg",
    "img/portfolio_2021/Portfolio/2-min.pdf",
    "img/portfolio_2021/Portfolio/3-min.pdf",
    "img/portfolio_2021/Portfolio/4-min.pdf",
    "img/portfolio_2021/Portfolio/5-min.pdf",
    "img/portfolio_2021/Portfolio/6-min.pdf",
    "img/portfolio_2021/Portfolio/7-min.pdf",
    "img/portfolio_2021/Portfolio/8-min.pdf",
    "img/portfolio_2021/Portfolio/9-min.pdf",
    "img/portfolio_2021/Portfolio/10-min.pdf",
    "img/portfolio_2021/Portfolio/11-min.pdf",
    "img/portfolio_2021/Portfolio/12-min.pdf",
    "img/portfolio_2021/Portfolio/13-min.pdf",
    "img/portfolio_2021/Portfolio/14-min.pdf",
    "img/portfolio_2021/Portfolio/15-min.pdf",
    "img/portfolio_2021/Portfolio/16-min.pdf",
    "img/portfolio_2021/Portfolio/17-min.pdf",
    "img/portfolio_2021/Portfolio/18-min.pdf",
    "img/portfolio_2021/Portfolio/19-min.pdf",
    "img/portfolio_2021/Portfolio/20-min.pdf",
    "img/portfolio_2021/Portfolio/21-min.pdf",
    "img/portfolio_2021/Portfolio/22-min.pdf",
    "img/portfolio_2021/Portfolio/23-min.pdf",
    "img/portfolio_2021/Portfolio/24-min.pdf",
    "img/portfolio_2021/Portfolio/25-min.pdf",
    "img/portfolio_2021/Portfolio/26-min.pdf",
    "img/portfolio_2021/Portfolio/27-min.pdf",
    "img/portfolio_2021/Portfolio/28-min.pdf",
    "img/portfolio_2021/Portfolio/29-min.pdf",
    "img/portfolio_2021/Portfolio/30-min.pdf",
    "img/portfolio_2021/Portfolio/31-min.pdf",
    "img/portfolio_2021/Portfolio/32-min.pdf",
    "img/portfolio_2021/Portfolio/33-min.pdf",
    "img/portfolio_2021/Portfolio/34-min.pdf",
    "img/portfolio_2021/Portfolio/35-min.pdf",
    "img/portfolio_2021/Portfolio/36-min.pdf",
    "img/portfolio_2021/Portfolio/37-min.pdf",
    "img/portfolio_2021/Portfolio/38-min.pdf",
    "img/portfolio_2021/Portfolio/39-min.pdf",
    "img/portfolio_2021/Portfolio/40-min.pdf",
    "img/portfolio_2021/Portfolio/41-min.pdf",
    "img/portfolio_2021/Portfolio/42-min.pdf",
    "img/portfolio_2021/Portfolio/43-min.pdf",
    "img/portfolio_2021/Portfolio/44-min.pdf",
    "img/portfolio_2021/Portfolio/45-min.pdf",
    "img/portfolio_2021/Portfolio/46-min.pdf",
    "img/portfolio_2021/Portfolio/47-min.pdf",
    "img/portfolio_2021/Portfolio/48-min.pdf",
    "img/portfolio_2021/Portfolio/49-min.pdf",
];

let currentImage = 0; /* start with img 0 */

function showImg(difference)/* -1 or +1 */ {
    let newImageIndex = (currentImage + difference);
    // Make sure it's between 0 and images.count
    newImageIndex = (images.length + newImageIndex) % images.length;
    console.log(newImageIndex);
    currentImage = newImageIndex;
    $(".portfolio_js").attr("src", images[currentImage]);
}

$(".portfolio-arrow-left").click(function() {
    showImg(-1);
});

$(".portfolio-arrow-right").click(function() {
    showImg(+1);
});