var NORMAL = 1, RANDOM = 2, FADE = 3;
var mode = NORMAL;

$(document).ready(function(){
	var gridSize = 16;
	$("body").append(generateGrid(gridSize));
	optimizeSize(gridSize);

	$(document).on('mouseenter', '.square', function(){
		if(mode === NORMAL){
			$(this).css('background-color', 'black');
	  } else if(mode === RANDOM){
	  	var newColor = getRandomColor();
	  	$(this).css('background-color', newColor);
	  	$(this).data('color', newColor);
	  } else if(mode === FADE){
	  	updateColors($(this));
	  }
	});

	$(document).on('mouseleave', '.square', function(){
		if(mode === NORMAL){
		  $(this).css('background-color', $(this).data('color'));
		}
	});

	$('#clear').click(function(){
		var maxSize = 100;
		var size    = prompt("Enter new grid size(2 - " + maxSize + ")");
		if(typeof(parseInt(size)) === 'number' && size >= 2 && size <= maxSize){
			resetGrid(size);
		} else {
			alert("Invalid input '" + size.toString() + "'. Using default value, 16");
			resetGrid(16);
		}
		resetStepCount();
	});

	$('#normal').click(function(){
		mode = NORMAL;
	});
	$('#random').click(function(){
		mode = RANDOM;
	});
	$('#fade').click(function(){
		mode = FADE;
		resetStepCount();
	});
});

var updateColors = function($div){
	var currentColor = $div.data('color');
	var stepCount = $div.data('stepCount');

	if(stepCount === 0) { return; }
	var newRed   = updateAColor(currentColor.substr(1, 2), stepCount);
	var newGreen = updateAColor(currentColor.substr(3, 2), stepCount);
	var newBlue  = updateAColor(currentColor.substr(5, 2), stepCount);
	var newColor = '#' + newRed + newGreen + newBlue;

	$div.data('color', newColor);
	$div.css('background-color', newColor);
	$div.data('stepCount', stepCount - 1)

};

var updateAColor = function(aColor, stepCount){
	var colorDec    = parseInt(aColor, 16);
	var reduceByDec = parseInt(colorDec / stepCount);
	var newColor    = (colorDec - reduceByDec).toString(16);

  if (newColor.length === 1) { 
  	newColor = '0' + newColor; 
  } // Zero pad.
  return newColor;
};

var resetStepCount = function(){
	var numberOfSteps = 10;
	var squares = $('.square');
	for (var i = 0; i < squares.length; i++) {
		$(squares[i]).data('stepCount', numberOfSteps);
	}
};

var resetGrid = function(size){
	$('.wrapper').remove();
	$("body").append(generateGrid(size));
	optimizeSize(size);
};

var generateGrid = function(size){
	var initialColor = '#f8f8f8';

	$table = $("<table></table>");
	for (var i = 0; i < size; i++) {
		$tr = $("<tr></tr>");
		for (var j = 0; j < size; j++) {
			$div = $("<div class='square'></div>");
			$div.data('color', initialColor);
			$div.css('background-color', initialColor);
			$tr.append($("<td></td>").append($div));
		}
		$table.append($tr);
	}
	optimizeSize(size);

	return $("<div class='wrapper'></div>").append($table);
};

var optimizeSize = function(size){
	var totalWidth   = $(window).width();
	var totalHeight  = $(window).height();
	var minDimension = Math.min(totalWidth, (totalHeight - 70));
	var optimumSize  =  parseInt(minDimension / size) - 2

	$('.square').css({'height': optimumSize + 'px', 'width': optimumSize + 'px'});
};

var getRandomColor = function(){
	var hex   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * hex.length)];
	}
	return color;
};
