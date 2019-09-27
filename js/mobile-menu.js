var viewport = window.matchMedia('(max-width: 999px)');
var items = $('.menu-item');

$(window).resize(function(){
  location.reload();
});

// mobile
if(viewport.matches){
  var nav = $('.navigation');
  var btn = $('.btn-menubar');
  var menu = $('.menu');
  var lists = $('.menu-list');

  items.addClass('icon-plus');
  items.attr('role', 'button');
  items.attr('aria-haspopup', 'true');
  items.attr('aria-expanded', 'false');
  items.attr('aria-pressed', 'false');

  btn.on('click', function(e){
    e.preventDefault();
    nav.toggleClass('nav-act');
    if(nav.hasClass('nav-act')){
      btn.attr('aria-label', '메인메뉴 닫기');
    }else{
      btn.attr('aria-label', '메인메뉴 열기');
    }
  });

  items.on('click', function(e){
    var parent = $(this).parent();
    var child = $(this);
    if (parent.hasClass('menu-act')) {
      parent.removeClass('menu-act');
      child.removeClass('icon-minus');
      child.addClass('icon-plus');
      child.attr('aria-expanded', 'false');
      child.attr('aria-pressed', 'false');
    } else {
      parent.addClass('menu-act');
      child.addClass('icon-minus');
      child.removeClass('icon-plus');
      child.attr('aria-expanded', 'true');
      child.attr('aria-pressed', 'true');
    }
  });

  menu.on('focusin', function() {
    nav.addClass('nav-act');
  });
  menu.on('focusout', function() {
    nav.removeClass('nav-act');
  });
}
// desktop
else {
  items.attr('role', 'presentation');
  var bar = $('.bar');
  bar.attr('aria-hidden', 'true');
}