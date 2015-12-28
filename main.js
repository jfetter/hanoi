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
	var diskRow = [];
		//make diskCount disks of increasing in size upto the full width of their container (12)
	for (var i =1 ; i < diskCount; i ++){
		var $div = $('<div class="row gameDisk">');
		// change to have blocks sized and stacked appropriately;
		$div.addClass("col-sm-" + i*2 + "offset-" + 12 - (i*2) );
		$div.attr("data-value", i );
		// change to have css generate a random color
		$div.css("background-color", "pink" );
		$("#s1").append($div);
		// I dont think I'll need the array; 
		diskRow.push($div)
		console.log(diskRow);
		//$(".gameDisk").on("click", removeDisk);
		//$(".tower").on("click", tryToPlaceDisk);
	}
}

//removeDisk;

//tryToPlace;


function reset(){
	location.reload();
}


