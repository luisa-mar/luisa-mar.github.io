let images = [
    "img/Einladung.png",
    "img/portfolio_2021/vernissage/DSCN9179 2-min.JPG",
    "img/portfolio_2021/vernissage/7F35F07C-D47D-45DB-8887-BEB8D39991E6-min.JPG",
/*  "img/portfolio_2021/vernissage/27E5F9AE-3C58-4CA4-A53F-2527CF9B5B1F-min.JPG",  
    "img/portfolio_2021/vernissage/50C30397-22EF-4816-9FB4-4DCB0A80EE5C-min.JPG",*/ 
    "img/portfolio_2021/vernissage/44732b18-1870-4e83-8e23-565ba8b6e886-min.jpg",
    "img/portfolio_2021/vernissage/DSCN9186-min.JPG",
    "img/portfolio_2021/vernissage/Image-infront-floating.JPG",
    "img/portfolio_2021/vernissage/DSCN9188-min.JPG",
/*  "img/portfolio_2021/vernissage/DSCN9192 2-min.JPG",*/
    "img/portfolio_2021/vernissage/DSCN9198-min.JPG",
/*  "img/portfolio_2021/vernissage/DSCN9204-min.JPG",*/
    "img/portfolio_2021/vernissage/DSCN9209-min.JPG",
    "img/portfolio_2021/vernissage/FB0E5CF5-EFAD-4C34-8213-B7005E3A952E-min.JPG",
    "img/portfolio_2021/vernissage/IMG_0001-min.JPG",
/*  "img/portfolio_2021/vernissage/IMG_0078-min.JPG",*/   
    "img/portfolio_2021/vernissage/IMG_0079-min.JPG",
/*  "img/portfolio_2021/vernissage/IMG_0082-min.JPG",*/
    "img/portfolio_2021/vernissage/IMG_0350-min.jpeg",
    "img/portfolio_2021/vernissage/IMG_0355-min.jpeg",
    "img/portfolio_2021/vernissage/IMG_0357 2-min.jpeg",
    "img/portfolio_2021/vernissage/IMG_0364-min.jpeg",
    "img/portfolio_2021/vernissage/IMG_6081-min.jpeg",
];

let currentImage = 0;

function showImg(difference) {
    let newImageIndex = (currentImage + difference);
    // Make sure it's between 0 and images.count
    newImageIndex = (images.length + newImageIndex) % images.length;
    console.log(newImageIndex);
    currentImage = newImageIndex;
    $(".exhibition_js").attr("src", images[currentImage]);
}

$(".exhibition-arrow-left").click(function() {
    showImg(-1);
});

$(".exhibition-arrow-right").click(function() {
    showImg(+1);
});