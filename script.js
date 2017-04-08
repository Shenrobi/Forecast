var main = function() {
  $('.day').click(function() {
    $(this).next().toggle();
    $(this).find('.weekday span').toggleClass('glphicon-minus');
  });
};

$(document).ready(main);