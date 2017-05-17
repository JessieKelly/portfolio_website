var main = function() {
  $('body').scrollspy({ target: '.navbar' })

$('.popup').click(function() {
	$(this).next('.modal').show();
	$('.modal-content').show();
	$('.overlay').show();
});

$('.glyphicon-remove-sign').click(function (e) {
  e.preventDefault();
	$('.modal').hide();
	$('.modal-content').hide();
	$('.overlay').hide();
});

  };

$(document).ready(main);
