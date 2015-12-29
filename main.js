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
	}
	$(".tower").on("click", moveDisk);
	
}

function moveDisk (event) {
  if ($(".quit").hasClass("invisible"))
  	return
	var $selectedTower = $(this)
	var $selectedStack = $("div.stack");
	var $selectedDisk = $selectedTower.find($selectedStack).children().first()
$selectedDisk.detach();
	//if anything on the page is currently detached
	// if ($(this).find(".detached")){
	// 	console.log($("detached", ".detached"))
	// 	//place disk on top of the stack (if its value is smaller... or blink screen if its not smaller)
	// } else {
	//if there is no disks in the column clicked -- flash the screen	
// $selectedDisk.addClass("detached");
// console.log("THIS ONE IS DETACHED", $(".detached"))
// $(".detached").detach()
	//}
}

// function detach	(event){
// 	console.log("detached" + $(this))
// }



function reset(){
	location.reload();
}


