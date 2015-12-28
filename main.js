"use strict";

$(document).ready(init)

function init(){
	$(".disks").on("change", setDifficulty);
	$(".startGame").on("click", hideDiskSelect);
	$(".quit").on("click", reset);
}

function hideDiskSelect () {
	event.preventDefault();
	$(".disks , label, .startGame").addClass("invisible");
	$(".quit").removeClass("invisible");
	var difficulty = Number($("form").children(":checked").val()) - 2;
	if (difficulty)
	$(".difficulty").text("Difficulty: " + difficulty).css("color", "red");
}

function setDifficulty(event){
	var diskCount = Number($("form").children(":checked").val());
	generateDisks(diskCount);
}

function generateDisks(diskCount){
	$("#s1").empty();
	console.log("generating " + diskCount + " disks");
	diskCount ++;
//make diskCount disks of increasing in size upto the full width of their container (12)
	for (var i =1 ; i < diskCount; i ++){
		var $row = $('<div class="row">')
		var $div = $('<div class="gameDisk">');
		$div.addClass("col-sm-" + i*2 );
		$div.attr("data-value", i );
// change to have css generate a random color
		$div.css("background-color", "pink" );
		$row.append($div);
		$("#s1").append($row);

		//$(".gameDisk").on("click", removeDisk);
		//$(".tower").on("click", tryToPlaceDisk);
	}
}

//removeDisk;

//tryToPlace;


function reset(){
	location.reload();
}


