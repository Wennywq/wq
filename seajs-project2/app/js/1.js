define(function(require, exports, module){
   $(function(){
   $('.news p img').on('mouseover',function(){
        $(this).animate({scale:1.4});
   });
   $('.news p img').on('mouseout',function(){
        $(this).animate({scale:1});
   });
   $('.img .imgBox img').on('mouseover',function(){
        $(this).animate({scale:1.2,opacity:1},1000);
   });
   $('.img .imgBox img').on('mouseout',function(){
        $(this).animate({scale:1,opacity:0.6},1000);
   });
});
});