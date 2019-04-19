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

