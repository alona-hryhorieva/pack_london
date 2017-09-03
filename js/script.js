jQuery(function(){
	jQuery( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'}).datepicker('setDate', '2017-08-31');
	jQuery('.bxslider').bxSlider();
	jQuery('.bx-prev, .bx-next').text('');
	jQuery('.bxslider_news').bxSlider({
		slideSelector: 'li.item',
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 4,
		pager: false
	});
	jQuery(".navbar-nav, .footer_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = jQuery(this).attr('href'),
            top = jQuery(id).offset().top;
        jQuery('body,html').animate({scrollTop: top}, 1500);
    });

});