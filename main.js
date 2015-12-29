"use strict";

$(document).ready(init)

var $detached; 
var moves =0; 

function init(){
	$(".disks").on("change", setDifficulty);
	$(".startGame").on("click", hideDiskSelect);
	$(".quit").on("click", reset);
	$(".tower").on("click", moveDisk);
}

function hideDiskSelect () {
	event.preventDefault();
	var difficulty = Number($("form").children(":checked").val()) - 2;
	if (difficulty){
		$(".difficulty").text("Difficulty: " + difficulty ).css("color", "red");
		$(".disks , label, .startGame").addClass("invisible");
		$(".quit").removeClass("invisible");
	}
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
	//	$div.attr("data-value", i );
// change to have css generate a random color
		$div.css("background-color", "pink" );
		$row.data("value", i)
		$row.append($div);
		$("#s1").append($row);
	}
}

function moveDisk (event) {
	$(".moves").text("Moves: " + moves)
	var $selectedTower = $(this);
	var $selectedStack = $selectedTower.find("div.stack");
	var $selectedDisk = $selectedStack.children().first();
// dont allow pieces to be moved until start game has been clicked
	  if ($(".quit").hasClass("invisible"))
	  	return
		if ($(".disksSelection").hasClass("diskDetached")){
				moves ++;
			if(Number($detached.data("value")) < Number($selectedDisk.data("value")) || !$selectedDisk.data("value")){
				$selectedStack.prepend($detached);
				$(".diskDetached").removeClass("diskDetached");
				console.log("s3 length" , $("#s3").find("div.gameDisk").length);
				console.log("numb of disks", $(".towers").find("div.gameDisk").length);
				if($("#s3").find("div.gameDisk").length === $(".towers").find("div.gameDisk").length){
					win();
				}
				return	
			} else {
				flashScreen();
				return 
			}
	}
		$(".disksSelection").addClass("diskDetached");
		$detached = $selectedDisk;
		$detached.detach();
}

function flashScreen(){
	$("*").addClass("black");
	setTimeout(function(){
	$("*").removeClass("black");
	},200);
}

function win (){
	var $winner = $('<h1 class="row">')
	$winner.text("YOU WON!");
	$(".towers").addClass("invisible")
	$("form").prepend($winner);
}

function reset(){
	location.reload();
}


