function onCanvas(){
  $('#show-search').on('click', function(){
    $('body').toggleClass('show-search');
  });

  $('#show-login').on('click', function(){
    $('body').toggleClass('show-login');
  });
  // $('#show-login').on('click', function(){
  //   $('body').removeClass('show-login, show-search');
  // };
}
