

$(document).ready(function(){
	

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

	$('.tovar-item__buttons .button_tranparent').on('click', function(event) {
		event.preventDefault();
		$(this).parent('.tovar-item__buttons').prev('.tovar-item__characteristic').slideToggle(100);
		// $(this).parents('.tovar-item').css('max-height', 'none');
		$(this).parents('.tovar-item').toggleClass('tovar-item__active');
	});

	$('.leftsidebar__box .leftsidebar__cap').on('click', function(event) {
		event.preventDefault();
		$(this).next('.leftsidebar__block').slideToggle();
		$(this).toggleClass('leftsidebar__cap_active');
	});


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
});
