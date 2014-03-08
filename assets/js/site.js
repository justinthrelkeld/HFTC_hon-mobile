function onCanvas(){
  $('#show-search').on('click', function(e){
    $('body').toggleClass('show-search');
    e.stopPropagation();
  });

  $('#show-menu').on('click', function(e){
    $('body').toggleClass('show-menu');
    e.stopPropagation();
  });
  $('#main').on('click', function(e){
    $('body').removeClass('show-menu show-search');
    e.stopPropagation();
  });
}
