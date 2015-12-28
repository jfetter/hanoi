"use strict";

$(document).ready(init)

function init(){
	$("#newGame").on("click", unHideDisks)
	$(".disks").on("change", generateDisks);
}

function unHideDisks () {
	$("diskSelection").removeClass("invisible");
}

function generateDisks(event){
	// number of disks to use
	var diskCount = Number($("form").children(":checked").val());
	console.log(diskCount)
	//makeDisk().repeat(diskCount)
}


function makeDisk (diskCount) {
	
		//return makeDisk()
}


