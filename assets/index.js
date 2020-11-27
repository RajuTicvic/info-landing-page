$(".dropdown-menu a").click(function(){
    var selText = $(this).text();
    $(this).parents('.dropdown').find('.landing-select').html(selText);
    $('.dropdown-item').removeClass('active');
    $(this).toggleClass('active');
  });