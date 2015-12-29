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
// dont allow pieces to be moved until start game has been clicked
  if ($(".quit").hasClass("invisible"))
  	return
	var $selectedTower = $(this);
	console.log("tower", $selectedTower.attr("id"))
	var stack = $("div.stack");
	var $selectedStack = $selectedTower.find(stack);
	console.log("stack" ,$selectedStack.attr("id"))
	var $selectedDisk = $selectedStack.children().first();
	console.log("Disk", $detached)
	if ($(".disksSelection").hasClass("diskDetached")){
console.log("DETACHED 2", $(".detached"))
console.log("SELECTEDSTACK", $selectedStack.attr("id"))
		$selectedStack.append($detached)
		//$("diskDetached").removeClass("diskDetached")
		return
	}
	$(".disksSelection").addClass("diskDetached");
	$detached = $selectedDisk.addClass("detached")
	console.log("detached one", $detached)
	$(".detached").detach();
}




function reset(){
	location.reload();
}


