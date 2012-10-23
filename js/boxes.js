var counter = 0;

$(document).click(function(e) {

	counter++;

	var x = e.pageX;
	var y = e.pageY;

	$('<div id="d' + counter + '"></div>').appendTo("body");
	$("#d" + counter).css({left: x, top: y});

	$("#d" + counter).mouseenter(shake);
});