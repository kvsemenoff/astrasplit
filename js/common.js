

$(document).ready(function(){

	$("form[name='popup_form']").submit(function() {
			$data = $(this).serialize();
			 $.ajax({
			    type: "POST", 
			    url: "../sendmessage.php", 
			    data: $data,
			    success: function() {
			     cleanTnanks(this);
			    }
			   });
			 return false;
		});
    $("form[name='contact_form']").submit(function() {
        $data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "../sendmessage.php",
            data: $data,
            success: function() {
                cleanTnanks(this);
            }
        });
        return false;
    });
		 function cleanTnanks(form){
		  $("form[name='popup_form']").parent().parent().hide();
		  $("input[type=text]").val("");
		  $("input[type=tel]").val("");
		  $("textarea").val("");
		  $('a[href="#thanks"]').trigger('click');
		    // location = "thanks.php";
		   };
	

	$(".switch__number .switch__button").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		}
		else {
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find("input").val(newVal);

		var quantity = $('#quantity').val();
		var total = itemprice*quantity;
		$('#total').val(total);
	});
	// END Переключатель кол-ва товара в корзине (legatkani)

	
	
	var owlcart = $(".slider-owl-carousel");
	owlcart.owlCarousel({
		loop:true,
		nav:true,
		autoplay:false,
		smartSpeed:1000,
		margin:10,
		mouseDrag:false,
		touchDrag: false,
		center:false,
		navText:['<span class="prev-left"></span>','<span class="next-right"></span>'],
		responsive:{
			0:{
				items:1
			},
			320:{
				items:1
			},
			750:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});

	$('.js-phone').mask("+7(999)999-99-99?");



	var owlproduct = $(".owl-slidergalery");
	owlproduct.owlCarousel({
		loop:true,
		nav:true,
		autoplay:false,
		smartSpeed:1000,
		margin:15,
		mouseDrag:false,
		touchDrag: false,
		center:false,
		navText:['<span class="prevleft"></span>','<span class="nextright"></span>'],
		responsive:{
			0:{
				items:1
			},
			320:{
				items:2
			},
			750:{
				items:2
			},
			992:{
				items:3
			}
		}
	});

	var owlsimilar = $(".owl-productsimilar");
	owlsimilar.owlCarousel({
		loop:true,
		nav:true,
		autoplay:false,
		smartSpeed:1000,
		margin:20,
		mouseDrag:false,
		touchDrag: false,
		center:false,
		navText:['<span class="prevleft"></span>','<span class="nextright"></span>'],
		responsive:{
			0:{
				items:1
			},
			550:{
				items:2
			},
			750:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});


	// $('.tovar-item__buttons .button_tranparent').on('click', function(event) {
	// 	event.preventDefault();
	// 	$(this).parent('.tovar-item__buttons').prev('.tovar-item__characteristic').slideToggle(100);
	// 	$(this).parents('.tovar-item').toggleClass('tovar-item__active');
	// });
	$('.tovar-item').hover(function() {
		$(this).find('.tovar-item__characteristic').slideDown(200);
		$(this).addClass('tovar-item__active');
	}, function () {
		$(this).find('.tovar-item__characteristic').slideUp(200);
		$(this).removeClass('tovar-item__active');
	});
	$('.leftsidebar__box .leftsidebar__cap').on('click', function(event) {
		event.preventDefault();
		$(this).next('.leftsidebar__block').slideToggle();
		$(this).toggleClass('leftsidebar__cap_active');
	});
	$('.leftsidebar__mobilebutton').on('click', function(event) {
		event.preventDefault();
		$('.leftsidebar__box, .leftsidebar__button').slideToggle(250);
		$(this).toggleClass('leftsidebar__cap_active');
	});

	$('.product__tabslinks a').on('click', function(e) {
        e.preventDefault();
        $('.product__tabslinks a').removeClass('product__tabactive');
        $(this).addClass('product__tabactive');
        var tab = $(this).attr('href');
        tab = '.' + tab;
        $('.product__tabbox').not(tab).css({'display':'none'});
        $(tab).css({'display':'block'});
    });
	// galery on product page
	$('.owl-slidergalery a').on('click',function(evt) { 
		evt.preventDefault();     		
		var imgPath = $(this).attr('href');         
		var oldImage = $('.product__galery_img img');              
		var newImage = $('<img src="' + imgPath +'">' );
		$('.owl-slidergalery a').removeClass('product__galerybox-active');
		$(this).addClass('product__galerybox-active');
		$(this).parents('.product__galery_leftbox').find('.product__galery_img').html(newImage);      
		// $(this).parents('.product__leftbox').find('.product__imgbox a').attr('href', imgPath);      
	});
	////////////

	$("#range").ionRangeSlider({
		hide_min_max: true,
		hide_from_to:true,
		keyboard: true,
		min: 1000,
		max: 50500,
		from: 1344,
		to: 50500,
		type: 'double',
		step: 10,
		prefix: "",
		grid: false,            
		onChange:  function (data) {			
			$('.sidebarchangeprice').val(data.from);
			$('.sidebartotalprice').val(data.to);			
		},
	});


	/* Header-top Menu */
	$('a.hamburger').on("click", function (e){
		e.preventDefault();
		$('.header_menu').css("display", "block");
		$('.header_menu').css("transition", "0.5s");
	});
	$('a.arrowed').on("click", function (e){
        e.preventDefault();
		$(this).parent().find("ul.header_submenu").slideToggle();
		$(this).parent().find(".header_menu__link").toggleClass("on_slide");
	});
	$('a.close_btn').on("click", function (e){
		e.preventDefault();
		$(this).parent().hide();
	});

	/* Yandex Map */
    ymaps.ready(init);

    function init() {
        var center = [46.361049, 48.053696];
        var myMap = new ymaps.Map('mape', {
            center: center,
            controls: [],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Анри Барбюса 34',
            hintContent: 'улица Анри Барбюса 34'
        }, {
            // Опции.
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);
    }

    /* Slider */
    var owlSlider = $(".owl-carousel");
    owlSlider.owlCarousel({
		items: 1,
        loop:true,
        nav:true,
        dots: true,
        smartSpeed:1000,
        autoWidth: false,
        mouseDrag:false,
        touchDrag: false,
        center:false,
        navText:['<span class="prev-left"></span>','<span class="next-right"></span>'],
    });
	$('.main_slider .owl-controls').addClass('container');
	$('.main_slider .owl-nav').width($('.main_slider .owl-nav').parent('.container').width());
});
