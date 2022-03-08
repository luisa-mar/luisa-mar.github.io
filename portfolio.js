let images = [
 
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_01.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_02.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_03.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_04.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_05.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_06.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_07.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_08.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_09.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_10.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_11.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_12.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_13.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_14.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_15.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_16.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_17.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_18.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_19.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_20.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_21.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_22.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_23.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_24.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_25.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_26.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_27.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_28.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_29.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_30.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_31.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_32.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_33.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_34.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_35.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_36.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_37.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_38.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_39.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_40.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_41.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_42.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_43.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_44.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_45.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_46.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_47.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_48.png",
"img/portfolio_2021/Portfolio/png/Blom_Luisa_Page_49.png",
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