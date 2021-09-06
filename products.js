$(".open-on-hover").hover(function(event){
$(".card").show();
var imgtag = $(event.target).closest('.card').find('img');
    var imgurl = imgtag.attr('src');
    var img = $('<img>', {'src': imgurl});
    card.append(img);
})