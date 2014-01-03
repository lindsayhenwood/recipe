$(document).ready(function(){
	console.log("Script included!");
});


$(document).ready(function(){
	$("#li").click(function(){
		addCheckbox($('Ingredients').val());
	});
});

function addCheckbox('Ingredients'){
	var container = $("#li"),
	var inputs = container.find('input');
	var id = inputs.length+1;

	$('<input/>', {type: 'checkbox', id: 'cb'+id, value: name}).appendTo(container);
	$)'<label/>', {'for': 'cb'+id, text: name})appendTo(container);
});

$(document).ready(function(){
	$('img.mountainbowl').mouseenter(function(){
		$(this).hide('slow', 1);
	});
	$('img.mountainbowlcore').mouseenter(function(){
		$(this).hide('slow', 1);
	});
	$('img.dressing').mouseenter(function(){
		$(this).hide('slow', 1);
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

