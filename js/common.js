
$('.btn-click-heid-menu').on('click', function(){
	$(this).toggleClass('activ-mobail-menu');
	$('.wrapp-mobail-menu').toggleClass('menu-min');
	// $('.wrapp-mobail-menu').css({'display':'none'});
})
$('.btn-mobail-distop').on('click', function(){
	$('.wrapp-click-serch').toggleClass('serch-open');
});

$('.main').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
//         // infinite: true,
//         // slidesToShow: 1,
//         // slidesToScroll: 1,
        prevArrow: '<img class="lefts" src="img/backward.png">',  // стрелки
        nextArrow: '<img class="righets" src="img/before.png">'  // стрелки
    });


// подключение липкого меню

 // jQuery(function(){
 //        jQuery(window).scroll(function() {
 //            if(jQuery(this).scrollTop() >= 10) {
 //                jQuery('header').addClass('wrapp-fix-menu-scrol');
 //                var heit = jQuery('header').height();
 //                jQuery('.header-wrapp').css({"height":heit});

 //            }
 //            else{
 //                jQuery('header').removeClass('wrapp-fix-menu-scrol');
 //            }

 //        });
 //    });

  var heit = jQuery('header').height();
    jQuery('.privu').css({"paddingTop":heit+142});
    console.log(heit);




// Конец подключение липкого меню

// прилоадер

// document.body.onload = function () {
//     setTimeout(function(){
//         var preloared = document.getElementById('page-preloader');
//         if(!preloared.classList.contains('done')){
//            preloared.classList.add('done');
//         }
//     }, 1000);
// }


var 
images              = document.images;
images_total_count  = images.length;
images_loaded_count = 0;
preloared           = document.getElementById('page-preloader');
perc_display        = document.getElementById('prochnt');

for( var i = 0; i < images_total_count; i++){
    image_clone = new Image();
    console.log(image_clone);
    image_clone.onload  = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src     = images[i].src;
}

function image_loaded(){
    images_loaded_count++;
    perc_display.innerHTML = (( (100 / images_total_count ) * images_loaded_count ) << 0) + '%';

    if(images_loaded_count >= images_total_count ){

        document.body.onload = function () {
    setTimeout(function(){
        
        if(!preloared.classList.contains('done')){
           preloared.classList.add('done');
        }
    }, 1000);
}

    }
}

var heit = jQuery('header').height();
jQuery('.header-wrapp').css({"height":heit});


// страница описание продукта

widthBody = $('body').width();
if(widthBody > 978){
    var heit = jQuery('.wrapp_block_teh').height();
heit = heit+37+'px';
jQuery('.wrapp_img img').css({"top":'-'+heit});
console.log(heit);
}else{
   jQuery('.wrapp_img img').css({"top":'0px'}); 
}



// конец

// Конец прилоадера

// таблица продукта

(function () {

var li = $('.wtapp_table');
  
  for (var i=li.length; i--;) {
     if(i & 1){
         // var p2 = p[p.length - 1];
        li[i].className = ' nechet wtapp_table ';
     }else{

         li[i].className = ' chet wtapp_table';   
  }

     }

})();


$('.wrapp_Send_an_application a').on('click', function(event){
    event.preventDefault();
    $('.wrapp_section_form').fadeIn("slow");

    $('.wrapp_clouz').on('click', function(){
    $('.wrapp_section_form').fadeOut("slow");
});



});
var widthBody;

     widthBody = $('body').width();

           //      if (widthBody < '1000'){
           // $('.wrapp_blue_bg_text').css("paddingTop", "30px");
           // $('.wrapp_input_form').css("paddingTop", "50px 20px 20px 20px");
           //  }

           //       if (widthBody < '656'){
           // $('.wrapp_blue_bg_text').css("paddingTop", "15px");
           //  $('.wrapp_input_form').css("padding", "20px");
           //  }

// конец