!function(o){"use strict";setTimeout(function(){o("#spinner").length>0&&o("#spinner").removeClass("show")},1),new WOW().init(),o(window).scroll(function(){o(this).scrollTop()>660?o(".navbar").addClass("sticky-top shadow-lg"):o(".navbar").removeClass("sticky-top shadow-sm")});let t=o(".dropdown"),a=o(".dropdown-toggle"),e=o(".dropdown-menu"),n="show";o(window).on("load resize",function(){this.matchMedia("(min-width: 992px)").matches?t.hover(function(){let t=o(this);t.addClass(n),t.find(a).attr("aria-expanded","true"),t.find(e).addClass(n)},function(){let t=o(this);t.removeClass(n),t.find(a).attr("aria-expanded","false"),t.find(e).removeClass(n)}):t.off("mouseenter mouseleave")}),o(window).scroll(function(){o(this).scrollTop()>500?o(".back-to-top").fadeIn("slow"):o(".back-to-top").fadeOut("slow")}),o(".back-to-top").click(function(){return o("html, body").animate({scrollTop:0},1700,"easeInOutExpo"),!1}),o('[data-toggle="counter-up"]').counterUp({delay:10,time:2e3}),o(document).ready(function(){var t;o(".btn-play").click(function(){t=o(this).data("src")}),console.log(t),o("#videoModal").on("shown.bs.modal",function(a){o("#video").attr("src",t+"?autoplay=1&amp;modestbranding=1&amp;showinfo=0")}),o("#videoModal").on("hide.bs.modal",function(a){o("#video").attr("src",t)})}),o(".testimonial-carousel").owlCarousel({autoplay:!0,smartSpeed:1e3,center:!0,margin:24,dots:!0,loop:!0,nav:!1,responsive:{0:{items:1},768:{items:2},992:{items:3}}})}(jQuery);

const countEll = document.getElementById('CounterVisitorNo');

viewVisitCount();

function viewVisitCount() {
	fetch('https://api.countapi.xyz/get/mgm/visits/')
	.then(res => res.json())
	.then(res => {
		countEll.innerHTML = res.value;
	})
};
