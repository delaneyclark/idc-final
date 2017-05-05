var elementDefns = {
    "fire":  { "combos": {"earth":"lava", "air":"energy"}},
    "air":   {"combos": {"water":"steam", "earth":"dust"}},
    "water": {"combos": {"air":"steam", "earth":"swamp"}},
    "earth": {"combos": {"water":"swamp", "fire":"lava"}},
    
    "lava": {"combos": {"water":"stone"}},
};

var elementNames = [
    {"element":"water"},
    {"element":"fire"},
    {"element":"air"},
    {"element":"earth"}
];

var items = [];

var coreElements =
    [
	["water"],
	["fire"],
	["air"],
	["earth"]
    ];

var createdElements =
    [
	["lava"]
    ];

window.onload = function loadImg() {
    
    for (var i=0,  tot=coreElements.length; i < tot; i++) {

	var elementName = elementNames[i].element;
	var coreElementDeck = document.getElementById("center");
	var img = document.createElement('img');

	img.className = "element";
	img.id = elementName;
	img.src = "img/" + coreElements[i] + ".png";
	coreElementDeck.appendChild(img);

    }
};

$(function () { // this somehow needs to include the randomize function in it,

    $('#arrange').click(function () {
	started = true;
	var decks = ['#deck1', '#deck2'];
	$('#center').children().each(function (i) {
	    $(decks[i % decks.length]).append(this);

	})
	$('#arrange').text("submit two elements");

	$('#arrange').click(board);

	$('#teeste').click(board);
	$('.element').click(function () {
	    if (started == true) {
		$('#board').append(this);
	    }
	});
	
    })

    function board()
    {
	if ($('#board > *').length == 2)
	    {
		var buttonPlace = document.getElementById('center');
		var placeButton = document.createElement('button');
		placeButton.style.height= "50px";
		placeButton.style.width= "100px";
		placeButton.style.backgroundColor = "##8eacbb";
		placeButton.id = "checkCombo";
		placeButton.innerHTML = "combine elements";
		buttonPlace.appendChild(placeButton);

 		$('#checkCombo').click(function () {

		    var elementOne = $("#board img:first-child").attr('id'); 
		    var elementTwo = $("#board img:last-child").attr('id');
		    
		    newCard(elementOne, elementTwo);
		})

		var restartPlace = document.getElementById('center');
		var restart = document.createElement('button');
		restart.style.height = "30px";
		restart.style.width = "80px";
		restart.style.backgroundColor = "black";
		restart.id = "restart";
		restartPlace.appendChild(restart);
		var decks = ['#deck1', '#deck2'];

		$('#restart').click(function () {
		    $('#board').children().each(function (i) {
			$(decks[i % decks.length]).append(this);
		    })
		})

	    } else {
		console.log("less than one children");
	    }
    }
    
});

function newCard(elementOne, elementTwo) {

    console.log(elementOne);
    console.log(elementTwo);
    console.log(elementDefns[elementOne].combos[elementTwo]);

    var playersDecks = document.getElementsByClassName("player");    

    var newElementName = elementDefns[elementOne].combos[elementTwo]; // steam, lava...
    console.log(newElementName);


    if (newElementName === undefined) {
	
	alert("those don't combine!");
	
    } else {
	for(var a = 0; a < playersDecks.length; a++) {
			
	    var img = document.createElement('img');
	    img.className = "element";
	    img.id = newElementName;
	    img.src = "img/" + newElementName + ".png";
	    playersDecks[a].appendChild(img);
	}
    }
}



