$('.shoppingbtn').click(function(event) {
    $('.basket').show();
    var imgtag = $(event.target).closest('.card').find('img');
    var imgurl = imgtag.attr('src');
    var img = $('<img>', {'src': imgurl});
    // Make the img-cart div
    var img_cart_div = $('<div>', {'class': 'img-cart'});
    // Add the img to the div
    img_cart_div.append(img);

    var titletag = $(event.target).closest(".card").find("h1");
    var title = titletag.text();
    var title_cart_div = $("<div>", {"class": "title-cart"});
    var title_cart_p = $("<p>");
    title_cart_p.text(title);
    title_cart_div.append(title_cart_p);
    
    var info_cart_div = $("<div>", {"class": "info-cart"});
    info_cart_div.append(title_cart_div);


    var descrtag = $(event.target).closest(".card").find(".text-card")
    var descr = descrtag.text();
    var descr_cart_div = $("<div>", {"class": "descr-card"});
    var descr_cart_p = $("<p>");
    descr_cart_p.text(descr);
    descr_cart_div.append(descr_cart_p);
    info_cart_div.append(descr_cart_div);

    var pricetag = $(event.target).closest(".card").find(".price");
    var price = pricetag.text();
    var price_cart_div = $("<div>", {"class": "price-cart"});
    price_cart_div.text(price);
    


    // Make the cart-element div
    var cart_elem_div = $('<div>', {'class': 'cart-element'});
    cart_elem_div.append(img_cart_div);
    cart_elem_div.append(info_cart_div);
    cart_elem_div.append(price_cart_div);
   var checkoutbutton = $("<img>", {"class": "shoppingbtn",
                                       "src": "img/shopping-cart.png"});

    cart_elem_div.append(checkoutbutton);

    checkoutbutton.click (function(){
    //    a href=cart.html;
    })

    var removebutton =  $("<button>", {"class": "remove"});
    removebutton.text(" X")
    cart_elem_div.append(removebutton); 
    
    removebutton.click (function() {
        cart_elem_div.remove()
    })
    
    // Add the div to the HTML tree
    $('.basket').append(cart_elem_div);

    //----
});