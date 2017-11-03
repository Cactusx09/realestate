jQuery(document).ready(function($) {

"use strict";

	//popups
	var popup = $('.popup'),
		popup_h = popup.outerHeight(),
		popup_w = popup.outerWidth() + 20,
		h = $(window).height(),
		px = window.pageYOffset + h/2 - popup_h/2;
	popup.css({
		'top': px+'px',
		'margin-left': '-'+ popup_w/2 +'px',
	});
	$('._open_pop').click(function(e){
		e.preventDefault();
		var name = $(this).data('name'),
			popup = $('.popup_'+name),
			popup_h = popup.outerHeight(),
			popup_w = popup.outerWidth() + 20,
			h = $(window).height(),
			px = window.pageYOffset + h/2 - popup_h/2;
		popup.css({
			'top': px-40+'px',
			'margin-left': '-'+ popup_w/2 +'px',
		});
		popup.find('form').trigger( 'reset' );
		var txt = $(this).data('txt');
		popup.find('h2').html(txt);
		txt = txt.replace(/<\/?[^>]+(>|$)/g, "");
		popup.find('input[name="form"]').val(txt);
		$('.popup.popup_'+name+', .overlay').addClass('_visible');
	});
	$('.overlay, ._close_pop').click(function(e){
		e.preventDefault();
		$('.popup._visible').addClass('_back');
		setTimeout(function(){
			$('.popup._visible, .overlay').removeClass('_visible _back');
		},250);
	});
	//inputs
	$('input, textarea').change(function(){
		if($(this).val()==''){
			$(this).removeClass('_active');
		}else{
			$(this).addClass('_active');
		}
	});

	// validate
	$(".s_contact__form").each(function () {
		var it = $(this);
		it.validate({
			rules: {
				form: {required: true},
				contact_name: {required: true},
				contact_phone: {required: false},
				contact_mail: {required: true},
				contact_category: {required: true},
				contact_message: {required: false}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				var data = new FormData(it[0]);
				$.ajax({
					url: 'mail.php',
					type: 'POST',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					success: function( respond, textStatus, jqXHR ){
						$('.popup').removeClass('_visible');
						var name = 'thnx'
						popup = $('.popup_'+name),
							popup_h = popup.outerHeight(),
							popup_w = popup.outerWidth(),
							h = $(window).height(),
							px = window.pageYOffset + h/2 - popup_h/2;
						popup.css({
							'top': px+'px',
							'margin-left': '-'+ popup_w/2 +'px',
						});
						$('.popup.popup_'+name+', .overlay').addClass('_visible');
						setTimeout(function () {
							if ($('.popup_thnx').hasClass('_visible')) {
								$('.popup_thnx, .overlay').removeClass('_visible');
							}
						}, 2000);
						$("form").trigger( 'reset' );
					},
					error: function( jqXHR, textStatus, errorThrown ){
						console.log('ОШИБКИ AJAX запроса: ' + textStatus );
					}
				});
			},
			success: function () {},
			highlight: function (element, errorClass) {
				$(element).addClass('_error');
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('_error');
			}
		});
	});
	// validate
	$(".popup_cma__form").each(function () {
		var it = $(this);
		it.validate({
			rules: {
				form: {required: true},
				cma_name: {required: true},
				cma_phone: {required: false},
				cma_mail: {required: true},
				cma_subj_address: {required: true},
				cma_subj_city: {required: true},
				cma_subj_state: {required: true},
				cma_subj_zip: {required: true},
				cma_plan: {required: true},
				cma_reason: {required: true},
				cma_contacted: {required: false}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				var data = new FormData(it[0]);
				$.ajax({
					url: 'mail.php',
					type: 'POST',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					success: function( respond, textStatus, jqXHR ){
						$('.popup').removeClass('_visible');
						var name = 'thnx'
						popup = $('.popup_'+name),
							popup_h = popup.outerHeight(),
							popup_w = popup.outerWidth(),
							h = $(window).height(),
							px = window.pageYOffset + h/2 - popup_h/2;
						popup.css({
							'top': px+'px',
							'margin-left': '-'+ popup_w/2 +'px',
						});
						$('.popup.popup_'+name+', .overlay').addClass('_visible');
						setTimeout(function () {
							if ($('.popup_thnx').hasClass('_visible')) {
								$('.popup_thnx, .overlay').removeClass('_visible');
							}
						}, 2000);
						$("form").trigger( 'reset' );
					},
					error: function( jqXHR, textStatus, errorThrown ){
						console.log('ОШИБКИ AJAX запроса: ' + textStatus );
					}
				});
			},
			success: function () {},
			highlight: function (element, errorClass) {
				$(element).addClass('_error');
				if($(element).next('.chosen-container').length){
					$(element).next('.chosen-container').find('.chosen-single').addClass('_error');
				}
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('_error');
				if($(element).next('.chosen-container').length){
					$(element).next('.chosen-container').find('.chosen-single').removeClass('_error');
				}
			}
		});
	});
	// validate
	$(".subheader__slider").validate({
			rules: {
				form: {required: true},
				buy_city: {required: true},
				buy_comm: {required: false},
				buy_school: {required: false},
				buy_zip: {required: false},
				buy_other: {required: false},
				buy_style: {required: false},
				buy_budget: {required: false},
				buy_timeframe: {required: false},
				sell_street: {required: false},
				sell_address: {required: false},
				sell_zip: {required: false},
				sell_other: {required: false},
				sell_style: {required: false},
				sell_timeframe: {required: false},
				sell_budget: {required: false},
				name: {required: true},
				phone: {required: false},
				mail: {required: true}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				var data = new FormData($(this)[0]);
				$.ajax({
					url: 'mail.php',
					type: 'POST',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					success: function( respond, textStatus, jqXHR ){
						$('.subheader__item._thnx').addClass('_current').siblings().removeClass('_current');
						$('.subheader__item_name').text($('.subheader__item._final input[type="text"]').val());
						setTimeout(function () {
							if($('.subheader__item._thnx').hasClass('_current')){
								$('.subheader__item').first().addClass('_current').siblings().removeClass('_current');
							}
						}, 6000);
						$("form").trigger( 'reset' );
					},
					error: function( jqXHR, textStatus, errorThrown ){
						console.log('AJAX error: ' + textStatus );
					}
				});
			},
			success: function () {

			},
			highlight: function (element, errorClass) {
				$(element).addClass('_error');
				if($(element).next('.chosen-container').length){
					$(element).next('.chosen-container').find('.chosen-single').addClass('_error');
				}
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('_error');
				if($(element).next('.chosen-container').length){
					$(element).next('.chosen-container').find('.chosen-single').removeClass('_error');
				}
			}
	});
	/***************************************************************************/
	//MAIN MENU SUB MENU TOGGLE
	/***************************************************************************/
	$('.nav.navbar-nav > li.menu-item-has-children > a').on('click', function(event){
		event.preventDefault();
		$(this).parent().find('.sub-menu').toggle();
		$(this).parent().find('.sub-menu li .sub-menu').hide();
	});

	$('.nav.navbar-nav li .sub-menu li.menu-item-has-children > a ').on('click', function(event){
		event.preventDefault();
		$(this).parent().find('.sub-menu').toggle();
	});

	/***************************************************************************/
	//TABS
	/***************************************************************************/
	$( function() {
	    $( ".tabs" ).tabs({
			create: function(event, ui) {
				$(this).fadeIn();
			}
		});
	});

	/***************************************************************************/
	//ACTIVATE CHOSEN
	/***************************************************************************/
	$("select").chosen({disable_search_threshold: 11}).change(function() {
		$(this).next('.chosen-container').find('.chosen-single').removeClass('_error');
	});

	/***************************************************************************/
	//ACCORDIONS
	/***************************************************************************/
	$(function() {
	    $( "#accordion" ).accordion({
	    	heightStyle: "content",
	    	closedSign: '<i class="fa fa-minus"></i>',
  			openedSign: '<i class="fa fa-plus"></i>'
	    });
	});


	/***************************************************************************/
	//MAIN SLIDER FORM SLIDER
	/***************************************************************************/
	var bothFlag = false;
	$('.subheader__itemNext').click(function(){
		var item = $(this).closest('.subheader__item'),
			next = item.next();
		item.removeClass('_current');
		next.addClass('_current');
	});
	$('.subheader__itemBtns_buy').click(function(){
		var item = $(this).closest('.subheader__item'),
			next = item.nextAll('._buy').first();
		item.removeClass('_current');
		next.addClass('_current');
	});
	$('.subheader__itemBtns_sell').click(function(){
		var item = $(this).closest('.subheader__item'),
			next = item.nextAll('._sell').first();
		item.removeClass('_current');
		next.addClass('_current');
	});
	$('.subheader__itemBtns_both').click(function(){
		var item = $(this).closest('.subheader__item'),
			next = item.nextAll('._sell').first();
		item.removeClass('_current');
		next.addClass('_current');
		bothFlag = true;
	});
	$('.subheader__itemBtns_final').click(function(){
		var item = $(this).closest('.subheader__item'),
			next = item.nextAll('._final');
		item.removeClass('_current')
		if(bothFlag){
			$('.subheader__item').eq(2).addClass('_current');
			bothFlag = false;
		}else{
			next.addClass('_current');
		}
	});
	$('.subheader__itemBtns_back').click(function(){
		var item = $(this).closest('.subheader__item');
		item.removeClass('_current');
		$('.subheader__item').eq(1).addClass('_current');
		bothFlag = false;
	});
	/***************************************************************************/
	//SLICK SLIDER - SIMPLE SLIDER
	/***************************************************************************/
	$('.slider.slider-simple').slick({
		prevArrow: $('.slider-nav-simple-slider .slider-prev'),
		nextArrow: $('.slider-nav-simple-slider .slider-next'),
		adaptiveHeight: true,
		fade: true
	});

	/***************************************************************************/
	//SLICK SLIDER - FEATURED PROPERTIES
	/***************************************************************************/
	$('.slider.slider-featured').slick({
		prevArrow: $('.slider-nav-properties-featured .slider-prev'),
		nextArrow: $('.slider-nav-properties-featured .slider-next'),
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 990,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 589,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

	/***************************************************************************/
	//SLICK SLIDER - TESTIMONIALS
	/***************************************************************************/
	$('.slider.slider-testimonials').slick({
		prevArrow: $('.slider-nav-testimonials .slider-prev'),
		nextArrow: $('.slider-nav-testimonials .slider-next'),
		adaptiveHeight: true
	});

	/***************************************************************************/
	//SLICK SLIDER - PROPERTY GALLERY
	/***************************************************************************/
	$('.slider.slider-property-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		fade: true,
		infinite:false,
		asNavFor: '.property-gallery-pager'
	});

	$('.property-gallery-pager').on('init', function(event, slick){
		$('.slide-counter').text('1 / ' + slick.slideCount);
	});

	$('.property-gallery-pager').slick({
		prevArrow: $('.slider-nav-property-gallery .slider-prev'),
		nextArrow: $('.slider-nav-property-gallery .slider-next'),
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider.slider-property-gallery',
		dots: false,
		focusOnSelect: true,
		infinite:false
	});

	$('.property-gallery-pager').on('afterChange', function(event, slick, currentSlide, nextSlide){
		currentSlide = currentSlide + 1;
		var counter = currentSlide + ' / ' + slick.slideCount;
		$('.slide-counter').text(counter);
	});

	//INITIATE SLIDES
	$('.slide').addClass('initialized');

	/***************************************************************************/
	//FIXED HEADER
	/***************************************************************************/
	var navToggle = $('.header-default .navbar-toggle');
	var mainMenuWrap = $('.header-default .main-menu-wrap');

	if ($(window).scrollTop() > 140) {
		navToggle.addClass('fixed');
		mainMenuWrap.addClass('fixed');
	}


	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 140) {
		    navToggle.addClass('fixed');
		    mainMenuWrap.addClass('fixed');
		} else {
		    navToggle.removeClass('fixed');
		    mainMenuWrap.removeClass('fixed');
		}
	});


	/***************************************************************************/
	//INITIALIZE BLOG CREATIVE
	/***************************************************************************/
	$('.grid-blog').isotope({
	  itemSelector: '.col-lg-4'
	});

	/***************************************************************************/
	//INITIALIZE PRICE RANGE SLIDER
	/***************************************************************************/
	var sliders = document.getElementsByClassName('price-slider');
	var count = 0;

	for ( var i = 0; i < sliders.length; i++ ) {

		noUiSlider.create(sliders[i], {
			connect: true,
			start: [ 150000, 600000 ],
			step: 1000,
			margin:1000,
			range: {
				'min': [  2000 ],
				'max': [ 1000000 ]
			},
			tooltips: true,
			format: wNumb({
				decimals: 0,
				thousand: ',',
				prefix: '$',
			})
		});

		count = count + 1;
	}

	/***************************************************************************/
	//FILTER TOGGLE (ON GOOGLE MAPS)
	/***************************************************************************/
	$('.filter-toggle').on('click', function() {
		$(this).parent().find('form').stop(true, true).slideToggle();
	});

	/***************************************************************************/
	//MULTIPAGE FORM
	/***************************************************************************/
	$('.multi-page-form .form-next').on('click', function() {

		//validate required fields
		var errors = [];
		$('.multi-page-form').find('.error').remove();
		$( ".multi-page-form .multi-page-form-content.active input.required" ).each(function( index ) {
			if(!$(this).val()) {
				$(this).parent().find('label').append('<span class="error"> This field is required</span>');
				errors.push(index);
			}
		});

		//if no errors
		if (errors.length === 0) {

			var active = $(this).parent().parent().find('.multi-page-form-content.active');

			$(this).parent().parent().find('.form-nav .form-nav-item.completed').next().addClass('completed');
			$(this).parent().parent().find('.form-nav .form-nav-item.completed span').html('<i class="fa fa-check"></i>');

			if(active.next('.multi-page-form-content').next('.multi-page-form-content').length > 0) {
			    active.removeClass('active');
				active.next().addClass('active');
			}
			else {
				active.removeClass('active');
				active.next().addClass('active');
			}
		}
	});

	$('.multi-page-form .form-prev').on('click', function() {
		var active = $(this).parent().parent().find('.multi-page-form-content.active');

		var lastCompleted = $(this).parent().parent().find('.form-nav .form-nav-item.completed').last();
		lastCompleted.removeClass('completed');
		lastCompleted.find('span').html(lastCompleted.index() + 1);

		if(active.prev('.multi-page-form-content').prev('.multi-page-form-content').length > 0) {
		    active.removeClass('active');
			active.prev().addClass('active');
		}
		else {
			active.removeClass('active');
			active.prev().addClass('active');
		 	$(this).addClass('show-none');
		 	$(this).parent().find('.disabled').show();
		}
	});
	//inputs
	$('.multirow__add input,.multirow__add textarea').change(function(){
		if($(this).val()==''){
			$(this).removeClass('_active');
		}else{
			$(this).addClass('_active');
		}
	});

	$('.multirow__add').click(function(){
		var input = $(this).prevAll('input'),
			wrp = input.closest('.multirow'),
			rows = wrp.find('.multirow__rows');
		input.clone().appendTo(rows);
		input.val('').removeClass('_active');
		$('.multirow__rows input[type="text"]').keyup(resizeInput).each(resizeInput);
	});

	function resizeInput() {
		$(this).attr('size', $(this).val().length);
		if($(this).val().length==0){
			$(this).remove();
		}
	}

	$('.multirow__rows input[type="text"]')
	// event handler
		.keyup(resizeInput)
	// resize on page load
		.each(resizeInput);

	/******************************************************************************/
	/** SUBMIT PROPERTY - ADDITIONAL IMAGES  **/
	/******************************************************************************/
	var files_count = $('.additional-img-container .additional-image').length + 1;
    $('.add-additional-img').on('click', function() {
        files_count++;
        $('.additional-img-container').append('<table><tr><td><div class="media-uploader-additional-img"><input type="file" class="additional_img" name="additional_img'+ files_count +'" value="" /><span class="delete-additional-img appended right"><i class="fa fa-trash"></i> Delete</span></div></td></tr></table>');
    });

    $('.additional-img-container').on("click", ".delete-additional-img", function() {
        $(this).parent().parent().parent().parent().parent().remove();
    });

    /******************************************************************************/
	/** SUBMIT PROPERTY - OWNER INFO **/
	/******************************************************************************/
	$('#owner-info input[type="radio"]').on('click', function() {
		var input = $(this).val();
		$('#owner-info .form-block-agent-options').hide();
		if(input === 'agent') {
			$('#owner-info .form-block-select-agent').slideDown('fast');
		}
		if(input === 'custom') {
			$('#owner-info .form-block-custom-agent').slideDown('fast');
		}
	});

	/***************************************************************************/
	//AJAX CONTACT FORM
	/***************************************************************************/
	<!--//--><![CDATA[//><!--
    $(document).on('submit', 'form#contact-us', function() {
            $('form#contact-us .error').remove();
            var hasError = false;
            $('.requiredField').each(function() {
                if($.trim($(this).val()) === '') {
                    $(this).parent().find('label').append('<span class="error">This field is required!</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                } else if($(this).hasClass('email')) {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if(!emailReg.test($.trim($(this).val()))) {
                        $(this).parent().find('label').append('<span class="error">Sorry! You\'ve entered an invalid email.</span>');
                        $(this).addClass('inputError');
                        hasError = true;
                    }
                }
            });
            if(!hasError) {
                var formInput = $(this).serialize();
                $.post($(this).attr('action'),formInput, function(data){
                    $('form#contact-us').slideUp("fast", function() {
                        $(this).before('<p class="alert-box success"><i class="fa fa-check icon"></i><strong>Thanks!</strong> Your email has been delivered!</p>');
                    });
                });
            }

            return false;
    });
    //-->!]]>

});
