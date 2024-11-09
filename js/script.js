$(function () {
	$('#burger').on('click', function () {
			$('#burger').toggleClass('active');
			$('nav').fadeToggle();
		
	});

});