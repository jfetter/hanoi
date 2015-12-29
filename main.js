"use strict";

$(document).ready(init)

var $detached; 

function init(){
	$(".disks").on("change", setDifficulty);
	$(".startGame").on("click", hideDiskSelect);
	$(".quit").on("click", reset);
	$(".tower").on("click", moveDisk);
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
	}
}

function moveDisk (event) {
	var $selectedTower = $(this);
	var $selectedStack = $selectedTower.find("div.stack");
	var $selectedDisk = $selectedStack.children().first();
// dont allow pieces to be moved until start game has been clicked
  if ($(".quit").hasClass("invisible"))
  	return
	if ($(".disksSelection").hasClass("diskDetached")){
		//if(Number($detached.attr("data-value")) < Number($selectedDisk.attr("data-value")) || !$selectedDisk){
			$selectedStack.prepend($detached)
			$(".diskDetached").removeClass("diskDetached")
			return	
	//	} else {
			return flashScreen();
		}
	$(".disksSelection").addClass("diskDetached");
	$detached = $selectedDisk
	$detached.detach();
}

function flashScreen(){
	$("*").addClass("black");
	$("*").removeClass("black");
}

function reset(){
	location.reload();
}


