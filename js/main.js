!function(o) {
    "use strict";

    // Remove spinner immediately after page load
    if(o("#spinner").length > 0) {
        o("#spinner").removeClass("show");
    }

    // Initialize WOW.js
    new WOW().init();

    // Sticky navbar on scroll
    o(window).scroll(function() {
        if (o(this).scrollTop() > 660) {
            o(".navbar").addClass("sticky-top shadow-lg");
        } else {
            o(".navbar").removeClass("sticky-top shadow-sm");
        }
    });

    // Dropdown hover functionality (only for large screens)
    let dropdown = o(".dropdown"),
        dropdownToggle = o(".dropdown-toggle"),
        dropdownMenu = o(".dropdown-menu"),
        showClass = "show";

    o(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            dropdown.hover(function() {
                let dropdownItem = o(this);
                dropdownItem.addClass(showClass);
                dropdownItem.find(dropdownToggle).attr("aria-expanded", "true");
                dropdownItem.find(dropdownMenu).addClass(showClass);
            }, function() {
                let dropdownItem = o(this);
                dropdownItem.removeClass(showClass);
                dropdownItem.find(dropdownToggle).attr("aria-expanded", "false");
                dropdownItem.find(dropdownMenu).removeClass(showClass);
            });
        } else {
            dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    o(window).scroll(function() {
        if (o(this).scrollTop() > 500) {
            o(".back-to-top").fadeIn("slow");
        } else {
            o(".back-to-top").fadeOut("slow");
        }
    });

    o(".back-to-top").click(function() {
        return o("html, body").animate({scrollTop: 0}, 1700, "easeInOutExpo"), false;
    });

    // Counter-up functionality
    o('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Video modal handling
    var videoSrc;
    o(".btn-play").click(function() {
        videoSrc = o(this).data("src");
    });

    console.log(videoSrc); // Just to check the value
    o("#videoModal").on("shown.bs.modal", function(n) {
        o("#video").attr("src", videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    o("#videoModal").on("hide.bs.modal", function(n) {
        o("#video").attr("src", videoSrc);
    });

    // Initialize testimonial carousel
    o(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Fetch and display visit count (this part was commented out in your original code)
    const countEll = document.getElementById("CounterVisitorNo");

    function viewVisitCount() {
        fetch("https://api.countapi.xyz/get/mgm/visits/")
            .then(o => o.json())
            .then(o => {
                countEll.innerHTML = o.value;
            })
            .catch(err => console.error("Error fetching visit count:", err));
    }

    // Call the viewVisitCount function to display the current visit count
    viewVisitCount();

}(jQuery);
