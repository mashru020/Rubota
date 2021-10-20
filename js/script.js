$(document).ready(function() {
	var hide = true;
	$(document).on('click', '.navbar-btn', function(){	
		$('.navitem').removeClass('show');
		$('.navitem').removeClass('hide');
		if(hide){
			$('.navitem').addClass('show');
			hide = false;
		}
		else if(!hide){
			$('.navitem').removeClass('show');
			 hide = true;
		}
	});
	$(document).on('click', '.navitem a', function() {
		if(!hide){
			$('.navitem').addClass('hide');
			hide = true;
		}
	});
	var win = $(window).width();
	var x=4;
	if(win <= 480){
		x=1;
	}
	else if(win <= 1080){
		x = 3;
	}
	
	$('.client-slide').slick({
	  slidesToShow: x,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  dots: true,
	});

	var fv = $('#fullview').fullView({
		navbar: '#navbar',
		dots: true,
		dotsPosition: 'left',
		dotsTooltip: true,
		backToTop: true,
		keyboardScrolling: true,
		onScrollEnd: function (currentView, previousView, direction) {

		},
		onScrollStart: function(currentView, destinationView, direction) {
			console.log("Direction", direction)
			console.log("Current", currentView)
			console.log("Destination", destinationView)
		},
	});
	$('#down').click(function() {
		fv.data('fullView').scrollDown();
	});
	$("#select").change(function() {
		fv.data('fullView').scrollTo($(this).val());
	});
	$(document).on('click','.light', function() {
		$('.menu-btn').addClass('dark-nav-btn');
		$('section:nth-child(odd)').css('background-color', '#ffffff');
		$('section:nth-child(even)').css('background-color', '#f2f6fe');
		$('.boxbg').css('background-color', '#ffffff');
		$('h1, h5, .txt-reg, .text, .language a, .contact-bottom ul a, .contact form button, .testimonial-text p.none').css('color', '#07335d');
		$('.logo img').attr('src','images/Logoblack.png');
		$('.menu-btn::after').css('border-top-color', '#07335d');
		$('#fv-dots ul li a span').css('border-color', '#5a7797');
		$('.contact').css('background-image', 'linear-gradient(rgba(69,74,89,.0) 68%, #ffffff 32%),url(images/contactbg2.jpg)');
		$('.blog-image-label').css('background-color', '#f2f6fe');
		/*$('.client-card:nth-child(1)').css('background-color', '#000000');*/
		

	});
	$(document).on('click','.dark', function() {
		$('.menu-btn').removeClass('dark-nav-btn');
		$('section:nth-child(odd)').css('background-color', '#192633');
		$('section:nth-child(even)').css('background-color', '#131d27');
		$('.boxbg').css('background-color', '#192633');
		$('h1,h5, .txt-reg, .text, .language a, .contact-bottom ul a, .contact form button, .testimonial-text p.none').css('color', '#ffffff');
		$('.logo img').attr('src','images/Logo.png');
		$('.contact').css('background-image', 'linear-gradient(rgba(69,74,89,.0) 68%, #192633 32%),url(images/contactbg2.jpg)');
		$('.blog-image-label').css('background-color', '#131d27');
	});
});