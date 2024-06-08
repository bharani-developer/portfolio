window.onload = function() {
	var viewportMetaTag = document.querySelector('meta[name="viewport"]');
	if (viewportMetaTag) {
		var contentValue = viewportMetaTag.getAttribute('content');
		if (contentValue.indexOf('maximum-scale=2.5') !== -1) {
			console.log('Viewport meta tag with maximum-scale=2.5 found.');
		} else {
			console.log('Viewport meta tag with maximum-scale=2.5 not found.');
		}
	} else {
		console.log('Viewport meta tag not found.');
	}
};

(function ($) {
  'use strict';
  
	//  Clarity tracking code for https://bharani-dev.netlify.app/
	(function (c, l, a, r, i, t, y) {
		c[a] =
			c[a] ||
			function () {
				(c[a].q = c[a].q || []).push(arguments);
			};
		t = l.createElement(r);
		t.async = 1;
		t.src = 'https://www.clarity.ms/tag/' + i + '?ref=bwt';
		y = l.getElementsByTagName(r)[0];
		y.parentNode.insertBefore(t, y);
	})(window, document, 'clarity', 'script', 'mkeldofdtn');
	document.cookie = 'SameSite=None; Secure';

	document.addEventListener('DOMContentLoaded', () => {
		const sections = document.querySelectorAll('.section');
		const canonicalLink = document.querySelector('link[rel="canonical"]');

		const updateCanonical = (target) => {
			const url = `http://127.0.0.1:5500/#${target}`;
			canonicalLink.setAttribute('href', url);
		};

		sections.forEach((section) => {
			const sectionId = section.id;
			const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

			sectionLink.addEventListener('click', () => {
				updateCanonical(sectionId);
			});
		});
	});

	const now = new Date();
	document.getElementById('updated').innerHTML = now;
	new Typed('#element', {
		strings: ["<span style='color:#1263F3'> XAMP </span>Developer", "<span style='color:#1263F3'>MERN </span>Developer", "<span style='color:#1263F3'>Flutter </span>Developer"],
		typeSpeed: 100,
		backSpeed: 25,
		backdelay: 0,
		loop: true
	});
	// Check if LinkedIn badge script loaded successfully

	document.addEventListener('DOMContentLoaded', function () {
		// Check if LinkedIn badge script loaded successfully
		var badgeContainer = document.querySelector('.badge-container');
		if (!badgeContainer) {
			console.error('LinkedIn badge container not found.');
		} else {
			var badgeScript = document.querySelector('script[src^="https://platform.linkedin.com"]');
			if (!badgeScript) {
				console.error('LinkedIn badge script not loaded.');
			} else {
				// LinkedIn badge script is loaded, handle cookie management
				var acceptCookiesButton = document.getElementById('acceptCookies');

				acceptCookiesButton.addEventListener('click', function () {
					// Set a cookie to indicate user consent for LinkedIn badge cookies
					document.cookie = 'linkedin_badge_consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

					// Hide cookie consent banner or perform any other actions
					document.getElementById('cookieConsent').style.display = 'none';
				});

				// Check if user has previously accepted LinkedIn badge cookies
				var linkedinBadgeConsent = getCookie('linkedin_badge_consent');
				if (linkedinBadgeConsent === 'true') {
					// User has previously accepted LinkedIn badge cookies
					// Hide cookie consent banner or perform any other actions
					document.getElementById('cookieConsent').style.display = 'none';
				}
			}
		}
	});

	// Function to get cookie value by name
	function getCookie(cookieName) {
		var name = cookieName + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var cookieArray = decodedCookie.split(';');
		for (var i = 0; i < cookieArray.length; i++) {
			var cookie = cookieArray[i];
			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) === 0) {
				return cookie.substring(name.length, cookie.length);
			}
		}
		return '';
	}

	new Swiper('.swiper-container.swiper-full-mobile', {
		slidesPerView: 4,
		spaceBetween: 0,
		slideToClickedSlide: true,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		effect: 'coverflow',
		grabCursor: true,

		coverflowEffect: {
			rotate: -10,
			stretch: 10,
			depth: 100,
			modifier: 1,
			slideShadows: true
		},

		loop: true,
		autoplay: {
			delay: 50
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},

		breakpoints: {
			640: {
				freemode: true,
				slidesPerView: 3,
				spaceBetween: 20
			},
			320: {
				freemode: true,
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
	if ($('.headrooma').length != 0) {
		var myElement = document.querySelector('.headrooma');
		var headroom = new Headroom(myElement);
		headroom.init();
	}

	$('.softskill_list').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		dots: true,
		nav: true,
		navText: ["<i class='fa fa-arrow-left''></i>", "<i class='fa fa-arrow-right''></i>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 3
			},
			1920: {
				items: 3
			}
		}
	});

	/*--
    	One Page Nav
    ----------------------------------- */
	var top_offset = $('.bharani_main_menu').height() - 100;
	$('.bharani_main_menu .bharani_menu .nav_scroll').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1000,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});

	/* Portfolio Isotope  */

	$('.image_load').imagesLoaded(function () {
		if ($.fn.isotope) {
			var $portfolio = $('.image_load');

			$portfolio.isotope({
				itemSelector: '.grid-item',

				filter: '*',

				resizesContainer: true,

				layoutMode: 'masonry',

				transitionDuration: '0.8s'
			});
			$('.menu-filtering li').on('click', function () {
				$('.menu-filtering li').removeClass('current_menu_item');

				$(this).addClass('current_menu_item');

				var selector = $(this).attr('data-filter');

				$portfolio.isotope({
					filter: selector
				});
			});
		}
	});

	// Venubox

	$('.venobox').venobox({
		numeratio: true,

		infinigall: true
	});

	/*---------------------
    counterUp
    --------------------- */
	$('.counter_text h1').counterUp({
		delay: 10,
		time: 1000
	});

	$('.nav_scroll > li:first-child').addClass('current');
	/* sticky nav 1 */
	// $('.one_page').scrollToFixed({
	// 	preFixed: function () {
	// 		$(this).find('.scroll_fixed').addClass('prefix');
	// 	},
	// 	postFixed: function () {
	// 		$(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
	// 	}
	// });
	//Portfolio Load More
	$('.prt_loadmore').slice(0, 3).show();
	$('#loadMore').on('click', function (e) {
		e.preventDefault();
		$('.prt_loadmore:hidden').slice(0, 5).slideDown();
		if ($('.prt_loadmore:hidden').length == 0) {
			$('#load').fadeOut('slow');
		}
	});
})(jQuery);
