$(document).ready(function() {

	$('.watch-more').click(function(e) {
		e.preventDefault();	
		$(this).parents('.cat-item').find('.cat-item-inner').find('.catalog-list').html($(this).parents('.catid').find('.catalog-list'));
		$(this).parents('.cat-item').find('.cat-item-inner').fadeIn();
		//$(this).parents('.cat-item_one').find('.catalog-list').html($(this).parents('.cat-item_one').find('.catalog-list-absolute').html());
		//$(this).parents('.cat-item_one').find('.catalog-list').css('position','absolute');
		//$(this).parents('.cat-item_one').find('.catalog-list').css('top','150px');
		//$(this).parents('.cat-item_one').find('.catalog-list').css('left','0px');
		//alert($(this).parents('.cat-item_one').find('.catalog-list-absolute').height());
		var height = $(this).parents('.cat-item_one').find('.catalog-list-absolute').height()+150;
		$('.catalog .modal-close').css({'display':'block'});

		//$(this).parents('.cat-item_one').css('height',height);
		//$(this).parents('.cat-item_one').find('.catalog-list').css('height',height);
				//$(this).parents('.cat-item_one').next('.catalog-list-absolute').fadeIn();1
		//var height = $(this).parents('.cat-item_one').find('.catalog-list-absolute').height()+110;
		//var width =  $(this).parents('.cat-item').width();
		
		//$(this).parents('.cat-item').addClass('catalog-active');
		//$(this).parents('.cat-item').css('width',width);
		//$(this).parents('.cat-item').css('height',height);
	});
	// $top_catalog = $('.catalog div:nth-child(3)').outerHeight(true);
	// $('.catalog div:nth-child(4)').css({'top': $top_catalog});

	// $('.catalog-list').each(function() {

	// 	var li = $(this).find('li').size();
	// 	if( li > 13 ){
	// 		$(this).find('li').slice(13, li).hide();
	// 	}
	// });

	// $('.catalog').find('div').children('.watch-more').click(function() {
	// 	$(this).parent().find('li').slice(13,100).css({'display':'block'});
	// 	$(this).parent().css({'padding-bottom':'0','box-shadow':'1px 5px 40px -5px rgba(0,0,0,0.75)'});
	// 	$(this).parent().find('.catalog-list').css({'height':'auto'});
	// 	$(this).css({'display':'none'});
	// 	return false;
	// });

});