$(document).ready(function(){
    $('#img_old_1').width(500);
    $('#img_old_1').mouseover(function()
    {
       $(this).css("cursor","pointer");
       $(this).animate({width: "600px"}, 'slow');
    });
 
 $('#img_old_1').mouseout(function()
   {   
       $(this).animate({width: "500px"}, 'slow');
    });
});

$(document).ready(function(){
    $('#img_old_2').width(500);
    $('#img_old_2').mouseover(function()
    {
       $(this).css("cursor","pointer");
       $(this).animate({width: "600px"}, 'slow');
    });
 
 $('#img_old_2').mouseout(function()
   {   
       $(this).animate({width: "500px"}, 'slow');
    });
});