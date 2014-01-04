$(document).ready(function(){
	console.log("Script included!");
});


$(document).ready(function(){
	$('img.mountainbowl').click(function(){
		$(this).hide('slow');
	});
	$('img.mountainbowlcore').click(function(){
		$(this).hide('slow');
	});
	$('img.dressing').click(function(){
		$(this).hide('slow');
	});
});

$(document).ready(function(){
	$('#Ingredients1').click(function (event) {
		var property = $(event.target).css("text-decoration");
		if (property === 'none solid rgb(0, 0, 0)')
			$(event.target).css('text-decoration', 'line-through');
		else
			$(event.target).css('text-decoration', '');
			
	});
});

$(document).ready(function(){
	$('ol').mouseenter(function(){
		$(this).focus();
	});
	$('ol').mouseleave(function(){
		$(this).focus();
	});
});

