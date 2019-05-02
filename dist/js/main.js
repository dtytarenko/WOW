$(".main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: true,                    
  keyboard: true,                
  responsiveFallback: 1280,        
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
    if (oldValue >= 1) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }

  $button.parent().find("input").val(newVal);

});

});

$(function() {
  $(".services__boostlist-item .info").on("click", function() {
    $(this).siblings('.infoblock').slideToggle('fast');
    $(this).siblings('.infoblock').css('display', 'flex');
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


  $(".coockies__accept").on("click", function() {
    $('.cookies__block').css('display', 'none');
  });

});

(function($) {
$(function() {
 
  $('ul.services__herolist').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.services-wrap').find('div.services__list-wrap').removeClass('active').eq($(this).index()).addClass('active');
  });


 
});
})(jQuery);






$('.services__btn-wrap').on('click', 'div:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.services__list-wrap').find('ul.services__boostlist').removeClass('active').eq($(this).index()).addClass('active');
});