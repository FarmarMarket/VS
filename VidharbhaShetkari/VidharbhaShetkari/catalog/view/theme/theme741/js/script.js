var gl_path = jQuery('#gl_path').html(),
scripts = document.getElementsByTagName("script"),
scriptsList = [];

for ( var index in scripts ) {
	if ( scripts[index].src && scripts[index].getAttribute('src').split(gl_path + '/').length == 2 ) {
		scriptsList.push(scripts[index].getAttribute('src').split(gl_path + '/')[1]);
	}
}

function include(scriptUrl) {
	if ( scriptsList.indexOf(scriptUrl) == -1 ) {
		document.write('<script src="catalog/view/theme/' + gl_path + '/' + scriptUrl + '"><\/script>');
		scriptsList.push(scriptUrl);
	}
}


/* Replace Buttons
========================================================*/
$(document).ready(function () {
	$('a.btn-primary, button.btn-primary, .nnewsletter-popup-btn, .banners > div .s-desc .btn, .tm-deal-banner .btn, .newsletter-popup .btn').each(function(){
		var title = $(this).html();
		$(this).html(title+'<span class="over">'+title+'</span><span class="out">'+title+'</span>').addClass('ani');
	});
});


/**
* @function      isIE
* @description   checks if browser is an IE
* @returns       {number} IE Version
*/
function isIE() {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

;(function ($) {
	if (isIE() && isIE() < 11) {
		$('html').addClass('lt-ie11');
	}
})(jQuery);


/* jquery easing lib
========================================================*/
;
(function ($) {
	include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.easing.1.3.html');
})(jQuery);


/* Unveil
========================================================*/
;
(function ($) {
	var o = $('.lazy img');
	if (o.length > 0) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.unveil.min.html');
		$(document).ready(function () {
			$(o).unveil(0, function () {
				$(this).load(function () {
					$(this).parent().addClass("lazy-loaded");
				});
			});
		});
		$(window).load(function () {
			$(window).trigger('lookup.unveil');
			if ($('.nav-tabs').length) {
				$('.nav-tabs').find('a[data-toggle="tab"]').click(function () {
					setTimeout(function () {
						$(window).trigger('lookup.unveil');
					}, 400);
				});
			}
		});
	}
})(jQuery);


/**
* @module       ToTop
* @description  Enables ToTop Plugin
*/
;
(function ($) {
	var o = $('html');
	if (o.hasClass('desktop')) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.ui.totop.min.html');
		$(document).ready(function () {
			$().UItoTop({
				easingType: 'easeOutQuart',
				containerClass: 'ui-to-top fa fa-angle-up'
			});
		});
	}
})(jQuery);


/**
* @module       Page Preloader
* @description  Enables Page Preloader
*/
;(function ($) {
	var o = $('#page-preloader');
	if (o.length > 0) {
		$(window).on('load', function () {
			$('#page-preloader').removeClass('visible');
		});
	}
})(jQuery);


/* Stick up menus
========================================================*/
;(function ($) {
	var o = $('html');
	var menu = $('#stuck');
	if (o.hasClass('desktop') && menu.length) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/scrollfix.min.html');
		$(window).load(function () {
			menu.scrollFix({
				style: false
			});
		});
	}
})(jQuery);


/* Toggle
========================================================*/
;
(function ($) {
	var o = $('.toggle');
	$(document).ready(function () {
		$('.toggle').click(function (e) {
			e.preventDefault();
			var tmp = $(this);
			o.each(function () {
				if ($(this).hasClass('active') && !$(this).is(tmp)) {
					$(this).parent().find('.toggle_cont').slideToggle();
					$(this).removeClass('active');
				}
			});
			$(this).toggleClass('active');
			$(this).parent().find('.toggle_cont').slideToggle();
		});
		$(document).on('click touchstart', function (e) {
			var container = $(".toggle-wrap");
			var removeBtnWrap = $('#cart .btn-remove-wrap');
			if (!container.is(e.target) && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) { 
				container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle();
				if (removeBtnWrap.length > 0 ) {
					removeBtnWrap.fadeOut();
				}
			}
		});
	});
})(jQuery);


/* Cart Remove Button
========================================================*/
;(function ($) {
	$(document).on('click touchstart', '#cart [data-action]', function(){
		$this = $(this);
		switch ($this.data('action')) {
			case 'show':
			$this.parent().find('.btn-remove-wrap').fadeIn();
			break;
			case 'cancel':
			$this.parents('.btn-remove-wrap').fadeOut();
			break;
		}
	});
})(jQuery);


/* Owl Carousel
========================================================*/
;
(function ($) {
	var o1 = $('.testimonials'),
	o2 = $('.box-carousel');
	o3 = $('.box-carousel-blog');
	o4 = $('.mobile-carousel');
	if (o1.length > 0 || o2.length > 0 || o3.length > 0 || o4.length > 0) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/owl.carousel/owl.carousel.min.html');
		var settings = {
			nav: true,
			navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
			navText: ['', ''],
			rtl: $('html').attr('dir') == 'rtl' ? true : undefined
		};
		function init(el) {
			el.addClass('owl-carousel');
			if (el.parents('aside').length) {
				el.owlCarousel($.extend({}, settings, {
					items: 1,
					responsive: {
						0: {
							items: 1
						},
						480: {
							items: 2
						},
						768: {
							items: 1
						}
					}
				}));
			} else if (el.parents('.col-sm-9').length){
				el.owlCarousel($.extend({}, settings, {
					responsive: {
						0: {
							items: 1
						},
						480: {
							items: 2
						},
						768: {
							items: 3
						}
					}
				}));
			} else if (el.parents('.col-sm-6').length){
				el.owlCarousel($.extend({}, settings, {
					responsive: {
						0: {
							items: 1
						},
						480: {
							items: 2
						}
					}
				}));
			} else {
				el.owlCarousel($.extend({}, settings, {
					responsive: {
						0: {
							items: 1
						}
					}
				}));
			}
		}
		function destroy(el) {
			el
			.trigger('destroy.owl.carousel')
			.removeClass('owl-carousel');
		}
	}
	if (o1.length > 0) {
		o1.addClass('owl-carousel');
		$(document).ready(function () {
			o1.owlCarousel($.extend({}, settings, {
				items: 1
			}));
		});
	}	
	if (o2.length > 0) {
		o2.addClass('owl-carousel');
		$(document).ready(function () {
			$.each(o2, function () {
				if ($(this).parents('aside').length) {
					$(this).owlCarousel($.extend({}, settings, {
						items: 1,
						responsive: {
							0: {
								items: 1
							},
							480: {
								items: 2
							},
							768: {
								items: 1
							}
						}
					}));
				} else if ($(this).parents().hasClass('col-sm-9') || $(this).parents().hasClass('bottom-block')){
					$(this).owlCarousel($.extend({}, settings, {
						responsive: {
							0: {
								items: 1
							},
							480: {
								items: 2
							},
							1200: {
								items: 3
							}
						}
					}));
				} else if ($(this).parents().hasClass('bottom-block1')){
					$(this).owlCarousel($.extend({}, settings, {
						responsive: {
							0: {
								items: 1
							},
							480: {
								items: 3
							},
							1200: {
								items: 4
							}
						}
					}));
				} else if ($(this).parents().hasClass('col-sm-6')){
					$(this).owlCarousel($.extend({}, settings, {
						responsive: {
							0: {
								items: 1
							},
							480: {
								items: 2
							}
						}
					}));
				} else {
					$(this).owlCarousel($.extend({}, settings, {
						responsive: {
							0: {
								items: 1
							},
							480: {
								items: 2
							},
							768: {
								items: 3
							},
							1200: {
								items: 4
							}
						}
					}));
				}
			});
		});
	}
	if (o3.length > 0) {		
		o3.addClass('owl-carousel');
		$(document).ready(function () {
			o3.owlCarousel($.extend({}, settings, {	
				autoplay:true,
				loop:true,
				autoplayHoverPause:true,
				autoplayTimeout:5000,
				responsive: {
					0: {
						items: 1
					},
					1200: {
						items: 1
					}
				}
			}));
		});
	}
	if (o4.length > 0) {
		$(document).ready(function(){
			var flag;
			if ($(window).width() < 768){
				o4.each(function(){
					init(o4);
					o4.removeClass('row');
					if (o4.find('.product-thumb').length && o4.find('.product-thumb').parent().hasClass('product-layout')) {
						o4.find('.product-thumb').unwrap();
					}
				});
				flag = true;
			} else {
				flag = false;
			}
			$(window).on('resize', function(){
				if ($(window).width() > 767 && flag) {
					destroy(o4);
					if (o4.find('.product-thumb').length) {
						o4.find('.product-thumb').wrap("<div class='product-layout col-lg-4 col-md-4 col-sm-4 col-xs-12'></div>");
					}
					o4.each(function(){
						if ($(this).find('.product-layout').length){
							var i = 0;
							$(this).find('.product-layout').each(function(){
								i++;
								if (i%3 == 0) {
									$(this).attr('data-clear', '');
								}
							});
						}
					});
					o4.addClass('row');
					flag = false;
				} else if ($(window).width() < 768 && !flag){
					o4.each(function(){
						init(o4);
						o4
						.addClass('owl-carousel')
						.removeClass('row');
						if (o4.find('.product-thumb').length && o4.find('.product-thumb').parent().hasClass('product-layout')) {
							o4.find('.product-thumb').unwrap();
						}
					});
					flag = true;
				}
			});
		});
	}
})(jQuery);


/* selectbox Replacement
========================================================*/
;(function ($) {
	var o = $('#accordion'),
	o1 = $('select'),
	o2 = $('.radio'),
	o3 = $('label.radio-inline'),
	o4 = $('.checkbox'),
	o5 = $('input[name=\'agree\'][type=\'checkbox\']'),
	o6 = $('.checkbox-inline'),
	o7 = $('textarea');
	if (o.length || o1.length) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.selectbox-0.2.min.html');
	}
	$(window).load(function () {
		// Accordion fix
		if (o.length) {
			$('body').delegate('.accordion-toggle', 'click', replaceForm);
			$('.accordion-toggle').trigger('click');
		}
		// Radio Replacement
		if (o2.length) {
			var o2Input;
			var o2ArrVal = [];
			o2.each(function (i) {
				o2Input = $(this).find('input[type="radio"]');
				if ($.inArray(o2Input.attr('name') + o2Input.attr('value'), o2ArrVal) == -1) {
					o2Input.attr('id', o2Input.attr('name') + o2Input.attr('value'))
					o2Input.insertBefore($(this).find('label').attr('for', o2Input.attr('name') + o2Input.attr('value')));
					o2ArrVal.push(o2Input.attr('name') + o2Input.attr('value'))
				} else {
					o2Input.attr('id', o2Input.attr('name') + o2Input.attr('value') + i.toString());
					o2Input.insertBefore($(this).find('label').attr('for', o2Input.attr('name') + o2Input.attr('value') + i.toString()));
					o2ArrVal.push(o2Input.attr('name') + o2Input.attr('value') + i.toString());
				}
			});
		}
	});
	$(document).ready(function () {
		// Select Replacement
		if (o1.length) {
			o1.removeClass('form-control');
			o1.selectbox({
				effect: "slide",
				speed: 400
			});
		}
		// Radio Replacement
		if (o3.length) {
			var o3Input;
			o3.each(function () {
				o3Input = $(this).find('input[type="radio"]');
				o3Input.attr('id', o3Input.attr('name') + o3Input.attr('value'))
				o3Input.insertBefore($(this).attr('for', o3Input.attr('name') + o3Input.attr('value')));
			});
		}
		// Checkbox Replacement
		if (o4.length) {
			var o4Input;
			var o4ArrVal = [];
			o4.each(function (i) {
				o4Input = $(this).find('input[type="checkbox"]');
				if ($.inArray(o4Input.attr('name') + o4Input.attr('value'), o4ArrVal) == -1) {
					o4Input.attr('id', o4Input.attr('name') + o4Input.attr('value'))
					o4Input.insertBefore($(this).find('label').attr('for', o4Input.attr('name') + o4Input.attr('value')));
					o4ArrVal.push(o4Input.attr('name') + o4Input.attr('value'))
				} else {
					o4Input.attr('id', o4Input.attr('name') + o4Input.attr('value') + o4Input.attr('value') + i.toString())
					o4Input.insertBefore($(this).find('label').attr('for', o4Input.attr('name') + o4Input.attr('value') + o4Input.attr('value') + i.toString()));
					o4ArrVal.push(o4Input.attr('name') + o4Input.attr('value') + i.toString());
				}
			});
		}
		// Checkbox Replacement
		if (o5.length) {
			o5.attr('id', o5.attr('name') + o5.attr('value'));
			o5.parent().append('<label for="' + o5.attr('name') + o5.attr('value') + '"></label>');
			$('label[for="' + o5.attr('name') + o5.attr('value') + '"]').insertAfter(o5);
		}
		// Checkbox Replacement
		if (o6.length) {
			var o6Input;
			o6.each(function (i) {
				o6Input = $(this).find('input[type="checkbox"]');
				o6Input.attr('id', o6Input.attr('name') + o6Input.attr('value'))
				o6Input.insertBefore($(this).attr('for', o6Input.attr('name') + o6Input.attr('value')));
			});
		}
		if (o7.length) {
			o7.removeClass('form-control');
		}
	});
})(jQuery);

function replaceForm() {
	var o = $('.radio');
	var input;
	o.each(function (i) {
		input = $(this).find('input[type="radio"]');
		input.attr('id', input.attr('name') + input.attr('value') + i.toString());
		input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value') + i.toString()));
	});
	o = $('label.radio-inline');
	o.each(function (i) {
		input = $(this).find('input[type="radio"]');
		input.attr('id', input.attr('name') + input.attr('value') + i.toString());
		input.insertBefore($(this).attr('for', input.attr('name') + input.attr('value') + i.toString()));
	});
	o = $('.checkbox');
	o.each(function (i) {
		input = $(this).find('input[type="checkbox"]');
		input.attr('id', input.attr('name') + input.attr('value') + i.toString());
		input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value') + i.toString()));
	});
	o = $('input[name=\'agree\'][type=\'checkbox\']');
	if (o.length) {
		o.attr('id', o.attr('name') + o.attr('value'));
		o.parent().append('<label for="' + o.attr('name') + o.attr('value') + '"></label>');
		$('label[for="' + o.attr('name') + o.attr('value') + '"]').insertAfter(o);
	}
	o = $('select');
	o.selectbox({
		effect: "slide",
		speed: 400
	});
	var o = $('textarea');
	o.removeClass('form-control'); 
}


/* Breadcrumb Last element replacement
========================================================*/
$(document).ready(function () {
	if ($('.breadcrumb').length) {
		var o = $('.breadcrumb li:last-child > a');
		o.replaceWith('<span>' + o.html() + '</span>');
	}
});

/* Top-Links Active
========================================================*/
;(function ($) {
	$(document).ready(function(){
		var pgurl = window.location.href;
		$("#top-links a").each(function(){
			if($(this).attr("href") == pgurl || $(this).attr("href") == '' ) {
				$(this).addClass("current");
			}
		});
	});
})(jQuery);


/* Bx Slider
========================================================*/
;(function ($) {
	var o = $('#productGallery');
	var o1 = $('#productZoom');
	var o2 = $('#productFullGallery');
	if (o.length) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.bxslider/jquery.bxslider.html');
		$(document).ready(function () {
			o
			.bxSlider({
				mode: 'vertical',
				pager: false,
				controls: true,
				slideMargin: 13,
				minSlides: 4,
				maxSlides: 4,
				slideWidth: o.attr('data-slide-width') ? o.attr('data-slide-width') : undefined,
				nextText: '<i class="material-design-drop25"></i>',
				prevText: '<i class="material-design-drop27"></i>',
				infiniteLoop: false,
				adaptiveHeight: true,
				moveSlides: 1
			})
			.find('li:first-child > a').addClass('zoomGalleryActive');
		});
	}
	if (o1.length) {
		o1
		.elevateZoom({
			gallery:'productGallery',
			responsive: true,
			cursor: o1.data('zoom-type')          == 1 ? 'crosshair' : 'pointer',
			zoomType: o1.data('zoom-type')        == 1 ? 'inner' : (o1.data('zoom-type') == 2 || o1.data('zoom-type') == 3) ? 'lens' : undefined,
			lensShape: o1.data('zoom-type')       == 2 ? 'round' : undefined,
			constrainType: o1.data('zoom-type')   == 3 ? 'height' : undefined,
			containLensZoom: o1.data('zoom-type') == 3 ? true : undefined
		})
		.bind("click", function(e) {
			$.fancybox(o1.data('elevateZoom').getGalleryList());
			return false;
		});
	}
	if (o2.length) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/photo-swipe/klass.min.html');
		include('../../static.livedemo00.template-help.com/opencart_63371/js/photo-swipe/code.photoswipe-3.0.5.min.html');
		$(document).ready(function () {
			o2
			.bxSlider({
				pager: false,
				controls: true,
				minSlides: 1,
				maxSlides: 1,
				infiniteLoop: false,
				moveSlides: 1
			})
			.find('a').photoSwipe({
				enableMouseWheel: false,
				enableKeyboard: false,
				captionAndToolbarAutoHideDelay: 0
			});
		});
	}
})(jQuery);


/* Resize
========================================================*/
var flag = true;
function respResize() {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if ( $('#column-left').length ) {
		var columnLeft = $('#column-left'),
		columnContent = $('#column-content');
	} else if ( $('.common-home .column-left').length && $('.common-home .column-content').length ) {
		var columnLeft = $('.common-home .column-left').parent(),
		columnContent = $('.common-home .column-content').parent();
	} else {
		return false;
	}
	if (width > 767) {
		if (!flag) {
			flag = true;
			columnLeft.insertBefore(columnContent);
			if (window.twttr != undefined){
				twtrefresher.doRefresh();
			}
		}
	} else if (flag) {
		flag = false;
		columnLeft.insertAfter(columnContent);
		if (window.twttr != undefined){
			twtrefresher.doRefresh();
		}
	}
}
$(window).load(respResize);
$(window).resize(function () {
	clearTimeout(this.id);
	this.id = setTimeout(respResize, 500);
});

var flag1 = true;
function respResize1() {	
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (width > 767) {
			if (!flag1) {
				flag1 = true;
				$('.col-sm-6 .box-heading').unbind("click");
				$('.col-sm-6 .box-content').each(function () {
					if ($(this).is(":hidden")) {
						$(this).slideToggle();
					}
				});
			}
		} else if (flag1) {
			flag1 = false;
			$('.col-sm-6 .box-content').each(function () {
				if (!$(this).is(":hidden")) {
					$(this).parent().find('.box-heading').addClass('active');
				}
			});
			$('.col-sm-6 .box-heading').bind("click", function () {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active').parent().find('.box-content').slideToggle();
				}else {
					$(this).addClass('active');
					$(this).parent().find('.box-content').slideToggle();
				}
			});
		}
}
$(window).load(respResize1);
$(window).resize(function () {
	clearTimeout(this.id);
	this.id = setTimeout(respResize1, 500);
});


/* DatetimePicker
========================================================*/
;(function ($) {
	var o1 = $('.date'),
	o2 = $('.datetime'),
	o3 = $('.time');
	if (o1.length || o2.length || o3.length) {
		document.write('<script src="../../static.livedemo00.template-help.com/opencart_63371/catalog/view/javascript/jquery/datetimepicker/moment.js"><\/script>');
		document.write('<script src="../../static.livedemo00.template-help.com/opencart_63371/catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js"><\/script>');
	}

	$(document).ready(function () {

		if (o1.length) {
			o1.datetimepicker({
				pickTime: false
			});
		}
		if (o2.length) {
			$('.datetime').datetimepicker({
				pickDate: true,
				pickTime: true
			});
		}
		if (o3.length) {
			$('.time').datetimepicker({
				pickDate: false
			});
		}

		
		$('.date,.datetime,.time').each(function () {
			var $this = $(this);
			$(this).find('.btn').click(function () {
				var body = $('body');
				if (body.hasClass('ajax-overlay-open')) {
					var open;
					setTimeout(function () {
						open = $('body').find('.bootstrap-datetimepicker-widget.picker-open');
						if (open.hasClass('top')) {
							open.css('bottom', $(window).height() - ($this.offset().top - $('.ajax-overlay').offset().top));
						}
					}, 10);
				}
			});
		});
	});
	$(document).ready(function () {
		$('.date, .datetime, .time').on('dp.show', function () {
			$('.date, .datetime, .time').not($(this)).each(function () {
				if ($(this).data("DateTimePicker")) {
					$(this).data("DateTimePicker").hide();
				}
			});
		});
		$(this).on('click touchstart', function () {
			$('.date, .datetime, .time').each(function () {
				if ($(this).data("DateTimePicker")) {
					$(this).data("DateTimePicker").hide();
				}
			});
		});
	});

})(jQuery);


/* Ajax-Add-to-Cart Upload File
========================================================*/
;(function ($) {
	$(document).on('click', 'button[id^=\'button-upload\']', function(){
		var node = this;
		$('#form-upload').remove();
		$('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');
		$('#form-upload input[name=\'file\']').trigger('click');
		if (typeof timer != 'undefined') {
			clearInterval(timer);
		}
		timer = setInterval(function() {
			if ($('#form-upload input[name=\'file\']').val() != '') {
				clearInterval(timer);
				$.ajax({
					url: 'index.php?route=tool/upload',
					type: 'post',
					dataType: 'json',
					data: new FormData($('#form-upload')[0]),
					cache: false,
					contentType: false,
					processData: false,
					beforeSend: function() {
						$(node).button('loading');
					},
					complete: function() {
						$(node).button('reset');
					},
					success: function(json) {
						$('.text-danger').remove();

						if (json['error']) {
							$(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
						}
						if (json['success']) {
							alert(json['success']);

							$(node).parent().find('input').attr('value', json['code']);
						}
					},
					error: function(xhr, ajaxOptions, thrownError) {
						alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
					}
				});
			}
		}, 500);
	});
})(jQuery);


/* Disable Mobile layout
========================================================*/
;(function ($) {
	var o = $('html');
	if (o.hasClass('mobile-responsive-off') && !o.hasClass('desktop')) {
		$('meta[name="viewport"]').prop('content', 'width=1200, initial-scale=1');
	}
})(jQuery);


/* Quantity Counter
========================================================*/
;(function ($) {
	$(document).on('click', '.counter-minus, .counter-plus', function(e) {
		e.preventDefault();
		var input = $(this).parent().find('input[name*="quantity"]'),
		value = 1;
		if ($(this).hasClass('counter-minus') && input.val() > 1) {
			value = parseInt(input.val()) - 1;
		} else if ($(this).hasClass('counter-plus')) {
			value = parseInt(input.val()) + 1;
		}
		input.val(value);
	});
})(jQuery);


/* Quick View
========================================================*/
;(function ($) {
	var selector = $('.quickview'),
	selector2 = $('#productZoom');
	if (selector.length > 0 || selector2.length > 0) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.selectbox-0.2.min.html');
		include('../../static.livedemo00.template-help.com/opencart_63371/js/fancybox/jquery.fancybox.html');
	}

	$(document).ready(function(){
		if (selector.length > 0) {
			$(document).on("click", '.quickview', function (e) {
				e.preventDefault();
				$.ajax({
					type: "POST",
					cache: false,
					url: 'index.php?route=extension/module/tm_ajax_quick_view',
					data: {
						product_id: $(this).data('product'),
						image_width: $(this).data('image-width'),
						image_height: $(this).data('image-height')
					},
					beforeSend: function(){
						$('.ajax-quickview-overlay').addClass('visible');
					},
					success: function (data) {
						$('.ajax-quickview-overlay').removeClass('visible');
						$.fancybox(data, {
							maxWidth: '90%',
							maxHeight: '90%',
							fitToView: false,
							width: '1070',
							height: '683',
							autoSize: false,
							closeClick: false,
							openEffect: 'fade',
							closeEffect: 'fade',
							openSpeed: 600,
							closeSpeed: 600,
							scrolling: 'no',
							padding: 0
						});

						var selection = $('.ajax-quickview input[name=\'quantity\']');
						if (selection.length > 0) {
							selection.on('keypress', function(e){
								e = e || event;
								if (e.ctrlKey || e.altKey || e.metaKey) return;
								var chr = getChar(e);
								if (chr == null) return;
								if (chr < '0' || chr > '9') {
									return false;
								}
							});
						}

						replaceForm();

						$('.ajax-quickview-images > ul > li:first').addClass('active');

						$('.ajax-quickview .date').length > 0 ? $('.ajax-quickview .date').datetimepicker( { pickTime: false } ) : null;
						$('.ajax-quickview .datetime').length > 0 ? $('.ajax-quickview .datetime').datetimepicker( { pickDate: true, pickTime: true } ) : null;
						$('.ajax-quickview .time').length > 0 ? $('.ajax-quickview .time').datetimepicker( { pickDate: false } ) : null;
					},
					error: function(){
						$('.ajax-quickview-overlay').removeClass('visible');
					}
				});
			});
		}
	});

	$(document).on('click', '.prev-img, .next-img', function(e) {
		e.preventDefault();
	});

	$(document).on('click', '.prev-img', function(e) {
		changeImg(-1);
	});

	$(document).on('click', '.next-img', function(e) {
		changeImg(1);
	});

	function changeImg(index) {
		var viewBlock     = $('.ajax-quickview-images > ul'),
		viewBlockItems    = viewBlock.find('li').size(),
		visibleImage      = viewBlock.find('li.active'),
		visibleImageIndex = (visibleImage.index() + 1 + index);

		visibleImage.removeClass('active');
		if (visibleImageIndex > viewBlockItems) {
			viewBlock.find('li:first').addClass('active');
		} else if (visibleImageIndex == 0 ) {
			viewBlock.find('li:last').addClass('active');
		} else {
			viewBlock.find('li:nth-child(' + visibleImageIndex + ')').addClass('active');
		}
	}

	function getChar(event) {
		if (event.which == null) {
			if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode)
		}
		if (event.which != 0 && event.charCode != 0) {
			if (event.which < 32) return null;
			return String.fromCharCode(event.which)
		}
		return null;
	}
})(jQuery);


/* Lookbook
========================================================*/
;(function ($) {
	var collection = $('.lookbook--collection'),
	collectionImg = $('.lookbook--collection img[usemap]'),
	resetPosition = {top: '', 'bottom': '', left: '', right: ''},
	element, mapid, coords;

	if (collectionImg.length > 0) {
		collectionImg.mapTrifecta({'strokeColor' : rgb2hex($('[data-marker] > i').css("background-color"))});
	}

	if (collection.length > 0) {
		$(window).on('load resize', function(){
			collection.each(function(){
				element = $(this);
				element.find('area').each(function(){
					mapid = $(this).data('mapid');
					if ( mapid !== undefined ) {
						coords = calculateCenterPoint($(this));
						element
						.find('[data-marker="' + mapid + '"]')
						.css(coords.marker)
						.end()
						.find('[data-marker-cnt="' + mapid + '"]')
						.css($.extend({}, resetPosition, coords.popup));
					}
				});
			});
		});
		function calculateCenterPoint(areas) {
			var maxX     = maxY = i = 0,
			minX         = minY = Infinity,
			coords       = areas[0].getAttribute('coords').split(','),
			shape        = areas[0].getAttribute('shape'),
			moduleWidth  = areas.parents('.lookbook__img').outerWidth(),
			moduleHeight = areas.parents('.lookbook__img').outerHeight(),
			popupPosX, popupPosY, result = {};

			if ( shape == 'circle' ) {
				maxX = parseInt((coords[0]), 10) + parseInt((coords[2]), 10),
				minX = parseInt((coords[0]), 10) - parseInt((coords[2]), 10),
				maxY = parseInt((coords[1]), 10) + parseInt((coords[2]), 10),
				minY = parseInt((coords[1]), 10) - parseInt((coords[2]), 10);

				result.marker = {
					left: parseInt((coords[0]), 10),
					top: parseInt((coords[1]), 10)
				}
			} else {
				while (i < coords.length) {
					var x = parseInt(coords[i++], 10),
					y = parseInt(coords[i++], 10);

					if (x < minX) minX = x;
					else if (x > maxX) maxX = x;

					if (y < minY) minY = y;
					else if (y > maxY) maxY = y;
				}

				var closest = getClosestNumber(coords, minX + ((maxX - minX) / 2), minY + ((maxY - minY) / 2));

				result.marker = {
					left: closest.x,
					top: closest.y
				}
			}

			if ( ( minX + (maxX - minX) / 2 ) > ( moduleWidth / 2 ) ) {
				popupPosX   = 'right';
			} else {
				popupPosX   = 'left';
			}
			if ( ( minY + ( maxY - minY ) / 2 ) > ( moduleHeight / 2 ) ) {
				popupPosY   = 'bottom';
			} else {
				popupPosY   = 'top';
			}

			if ( shape == 'circle' ) {
                result.popup = JSON.parse('{'
                    + '"' + popupPosX + '" : ' + ( popupPosX == 'left' ? - parseInt((coords[2]), 10) : parseInt((coords[2]), 10) ) + ', '
                    + '"' + popupPosY + '" : ' + ( - (maxY - minY) / 2 ) + '}')
            } else {
                result.popup = JSON.parse('{'
                    + '"' + popupPosX + '" : ' + ( popupPosX == 'left' ? (maxX - closest.x) : ((maxX - minX) - (maxX - closest.x)) ) + ', '
                    + '"' + popupPosY + '" : ' + ( popupPosY == 'top' ? - ((maxY - minY) - (maxY - closest.y)) : - (maxY - closest.y) ) + '}')
            }

			return result;
		}

		function getClosestNumber(array, x, y) {
			var i = 0,
			minDiffX = Infinity,
			minDiffY = Infinity,
			ans;
			while (i < array.length) {
				var mX = Math.abs( x - array[i++] ),
				mY = Math.abs( y - array[i++] );
				if ( mX < minDiffX && mY < minDiffY ) {
					minDiffX = mX;
					minDiffY = mY;
					ans = [array[i - 2], array[i - 1]];
				}
			}
			return {
				x: parseInt(ans[0]),
				y: parseInt(ans[1])
			}
		}
	}

	function rgb2hex(rgb) {
		if ( rgb.search("rgb") == -1 ) {
			return rgb;
		} else {
			rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
			function hex(x) {
				return ("0" + parseInt(x).toString(16)).slice(-2);
			}
			return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}
	}
})(jQuery);


/* Product Timers
========================================================*/
(function ($) {
	var o = $('.product-countdown');
	if (o.length) {
		include('../../static.livedemo00.template-help.com/opencart_63371/js/jquery.countdown.min.html');
		$(document).ready(function(){
			o.each(function(){
				$(this).countdown($(this).data('date'), function(event){
					$(this).find('.days > .number').html(event.strftime('%D'));
					$(this).find('.hours > .number').html(event.strftime('%H'));
					$(this).find('.minutes > .number').html(event.strftime('%M'));
					$(this).find('.seconds > .number').html(event.strftime('%S'));
				});
			});
		});
	}
})(jQuery);


/**
* @module       Vide
* @description  Enables Vide.js Plugin
*/
;
(function ($) {
	var o = $(".vide");
	if (o.length) {
		$(document).ready(function () {
			o.wrapInner('<div class="vide__body"></div>');
		});
	}
})(jQuery);

/**
* @module       Swiper Slider
* @description  Enables Swiper Plugin
*/
;
(function ($, undefined) {
	var o = $(".swiper-slider");
	if (o.length) {
		function getSwiperHeight(object, attr) {
			var val = object.attr("data-" + attr),
			dim;
			if (!val) {
				return undefined;
			}
			dim = val.match(/(px)|(%)|(vh)$/i);
			if (dim.length) {
				switch (dim[0]) {
					case "px":
					return parseFloat(val);
					case "vh":
					return $(window).height() * (parseFloat(val) / 100);
					case "%":
					return object.width() * (parseFloat(val) / 100);
				}
			} else {
				return undefined;
			}
		}
		function toggleSwiperInnerVideos(swiper) {
			var prevSlide = $(swiper.slides[swiper.previousIndex]),
			nextSlide = $(swiper.slides[swiper.activeIndex]),
			videos;
			prevSlide.find("video").each(function () {
				this.pause();
			});
			videos = nextSlide.find("video");
			if (videos.length) {
				videos.get(0).play();
			}
		}
		function toggleSwiperCaptionAnimation(swiper) {
			var prevSlide = $(swiper.container),
			nextSlide = $(swiper.slides[swiper.activeIndex]);
			prevSlide
			.find("[data-caption-animate]")
			.each(function () {
				var $this = $(this);
				$this
				.removeClass("animated")
				.removeClass($this.attr("data-caption-animate"))
				.addClass("not-animated");
			});
			nextSlide
			.find("[data-caption-animate]")
			.each(function () {
				var $this = $(this),
				delay = $this.attr("data-caption-delay");
				setTimeout(function () {
					$this
					.removeClass("not-animated")
					.addClass($this.attr("data-caption-animate"))
					.addClass("animated");
				}, delay ? parseInt(delay) : 0);
			});
		}
		$(document).ready(function () {
			o.each(function () {
				var s = $(this);
				var pag = s.find(".swiper-pagination"),
				next = s.find(".swiper-button-next"),
				prev = s.find(".swiper-button-prev"),
				bar = s.find(".swiper-scrollbar"),
				h = getSwiperHeight(o, "height"), mh = getSwiperHeight(o, "min-height");
				s.find(".swiper-slide")
				.each(function () {
					var $this = $(this),
					url;
					if (url = $this.attr("data-slide-bg")) {
						$this.css({
							"background-image": "url(" + url + ")",
							"background-size": "cover"
						})
					}
				})
				.end()
				.find("[data-caption-animate]")
				.addClass("not-animated")
				.end()
				.swiper({
					autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
					effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
					speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
					keyboardControl: s.attr('data-keyboard') === "true",
					mousewheelControl: s.attr('data-mousewheel') === "true",
					mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
					nextButton: next.length ? next.get(0) : null,
					prevButton: prev.length ? prev.get(0) : null,
					pagination: pag.length ? pag.get(0) : null,
					paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
					paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					} : null : null,
					scrollbar: (bar.length) ? bar.get(0) : null,
					scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
					scrollbarSnapOnRelease: true,
					scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
					loop: s.attr('data-loop') !== "false",
					onTransitionStart: function (swiper) {
						toggleSwiperInnerVideos(swiper);
					},
					onTransitionEnd: function (swiper) {
						toggleSwiperCaptionAnimation(swiper);
					},
					onInit: function (swiper) {
						toggleSwiperInnerVideos(swiper);
						toggleSwiperCaptionAnimation(swiper);
					}
				});
				$(window)
				.on("resize", function () {
					var mh = getSwiperHeight(s, "min-height"),
					h = getSwiperHeight(s, "height");
					if (h) {
						s.css("height", mh ? mh > h ? mh : h : h);
					}
				})
				.trigger("resize");
			});
		});
	}
})(jQuery);