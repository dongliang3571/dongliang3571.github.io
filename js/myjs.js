$(function(){
    $smallimage = $("a.smallimage");

    $smallimage.on('click', function(event){
      var imgurl = $(this).attr('href');
      event.preventDefault();
      var display_image = '<div class="blackback"></div><div class="popimage"><a class="close"><span class="glyphicon glyphicon-remove"></span></a></div>';

      $('body').prepend(display_image);
      $('div.popimage').css('background-image', 'url(' + imgurl + ')');
      $a_close = $("a.close");
      $a_close.on('click', function(){
        $('div.popimage').remove();
        $('div.blackback').remove();
      });

      $('div.blackback').on('click', function(){
        $('div.popimage').remove();
        $('div.blackback').remove();
      });

    });
    PDFObject.embed("resume.pdf", "#resume");

});
