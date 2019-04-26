

$(".main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: 1280,        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});




(function($) {
  $(function() {
   
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
   
  });
})(jQuery);

$(function() {

$(".button").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().find("input").val(newVal);

});

});

$(function() {
  $(".services__boostlist-item .info").on("click", function() {
    $(this).siblings('.infoblock').slideToggle('fast');
  });

  $(".infoblock-close").on("click", function() {
    $(this).parent('.infoblock').slideToggle('fast');
  });

  $(".services__boostlist-item--footer .buy").on("click", function() {
    $('.overlay, .popup').slideToggle('fast');
  });

  $(".overlay, .popup__close").on("click", function() {
    $('.overlay, .popup').slideToggle('fast');
  });
});

(function($) {
$(function() {
 
  $('ul.services__herolist').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.services-wrap').find('ul.services__boostlist').removeClass('active').eq($(this).index()).addClass('active');
  });


 
});
})(jQuery);



document.addEventListener("DOMContentLoaded", function(event) {
  var introLink = document.getElementById('intro__link'); 
  var servicesBlock = document.getElementById('services');

  function handleButtonClick() {
    servicesBlock.scrollIntoView({block: "start", behavior: "smooth"});
  }

  introLink.addEventListener('click', handleButtonClick);
});


