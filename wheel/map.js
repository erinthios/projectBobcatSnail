
// sound pool names
var goodSoundPool = "Good";
var bigGoodSoundPool = "BigGood";
var finishSoundPool = "Finish";
var emptySoundPool = "Empty";
var testYourSmiteSoundPool = "TestYourSmite";

/* Square definitions */
/* Supported properties:
 * - text: text to display in the square when revealed
 * - sound: sound file to play when square revealed
 * - soundPool: sound pool name to play a random entry from when square revealed
 * - cssClass: CSS class name to set on the square
 */
var startSquare = { text: "★", cssClass: "start" };
var goalSquare = { image: "images/wd trophy.png", soundPool: finishSoundPool, cssClass: "goal", isGoal: true };
var otherSquares = [
	newEmptySquare(),
	newEmptySquare(),
	newEmptySquare(),
	newTestYourSmiteSquare(),
	newDummyPrizeSquare(),
	newDummyPrizeSquare(),
	newDummyPrizeSquare(),
	newSpecialPrizeSquare(),
	newBigPointsSquare(),
	newBigPointsSquare(),
	newSmallPointsSquare(),
	newSmallPointsSquare(),
	newSmallPointsSquare(),
	newSmallPointsSquare(),
	newConsumableSquare(),
	newConsumableSquare(),
	newMultipliedPointsSquare(),
	newMultipliedPointsSquare()
];

/* sound pools */
var soundPools = {};
soundPools[goodSoundPool] = [
	"sounds/Good1.ogg",
	"sounds/Good2.ogg",
	"sounds/Good3.ogg",
	"sounds/Good4.ogg",
	"sounds/Good5.ogg",
	"sounds/Good6.ogg",
	"sounds/Good7.ogg",
	"sounds/Good8.ogg",
	"sounds/Good9.ogg",
	"sounds/Good10.ogg",
	"sounds/Good11.ogg",
	"sounds/Good12.ogg",
	"sounds/Good13.ogg",
	"sounds/Good14.ogg",
	"sounds/Good15.ogg",
	"sounds/Good16.ogg",
	"sounds/Good17.ogg",
	"sounds/Good18.ogg",
	"sounds/Good19.ogg",
	"sounds/Good20.ogg",
	"sounds/Good21 Zelda Recorder.ogg",
	"sounds/Good22 ctbell.ogg",
	"sounds/oct1 - Crowd Clapping.ogg",
	"sounds/oct1 - F-Zero start.ogg",
	"sounds/oct1 - GenericFanfare.ogg",
	"sounds/oct1 - jellyboy.ogg",
	"sounds/oct1 - Wonderful Ding.ogg",
	"sounds/oct3 - duck hunt got ducks.ogg",
	"sounds/oct3 - duck hunt start.ogg",
	"sounds/dec - bases loaded.ogg",
	"sounds/dec - castlevania clear.ogg",
	"sounds/dec - ice climbers.ogg",
	"sounds/dec - ninja gaiden interlude.ogg",
	"sounds/dec - RC Pro Am race end.ogg",
	"sounds/dec - stage 6 clear.ogg",
	"sounds/dec - startropics.ogg",
	"sounds/dec - TMNT victory.ogg",
	"sounds/dec - wizwar.ogg",
	"sounds/small prize medi.ogg",
	"sounds/small prize medi 2.ogg",
	"sounds/small prize medi 3.ogg",
	"sounds/small prize medi 4.ogg"
];
soundPools[bigGoodSoundPool] = [
	"sounds/BigGood1.ogg",
	"sounds/BigGood2.ogg",
	"sounds/BigGood3.ogg",
	"sounds/BigGood4.ogg",
	"sounds/BigGood5.ogg",
	"sounds/BigGood6.ogg",
	"sounds/BigGood7.ogg",
	"sounds/BigGood8.ogg",
	"sounds/BigGood9.ogg",
	"sounds/BigGood10 MegaMan4.ogg",
	"sounds/BigGood11.ogg",
	"sounds/BigGood12.ogg",
	"sounds/BigGood13.ogg",
	"sounds/BigGood14.ogg",
	"sounds/BigGood15.ogg",
	"sounds/BigGood16.ogg",
	"sounds/BigGood17.ogg",
	"sounds/BigGood18.ogg",
	"sounds/BigGood19.ogg",
	"sounds/BigGood20.ogg",
	"sounds/BigGood21 Zelda Fanfare 2.ogg",
	"sounds/BigGood22 Zelda Fanfare.ogg",
	"sounds/oct1 - Contra 3 Pattern Clear.ogg",
	"sounds/oct1 - FF3 Item Get.ogg",
	"sounds/oct1 - Suikoden 2 victory.ogg",
	"sounds/oct1 - Suikoden Fanfare.ogg",
	"sounds/oct1 - Super C Game Over.ogg",
	"sounds/oct1 - Super C Win.ogg",
	"sounds/oct1 - wild arms ac clear.ogg",
	"sounds/oct1 - FF3 Piano Practice.ogg",
	"sounds/oct3 - duck hunt round clear.ogg",
	"sounds/oct3 - duck hunt title.ogg",
	"sounds/dec - duck tales remastered win.ogg",
	"sounds/dec - HOMM2 win.ogg",
	"sounds/dec - nomad tents.ogg",
	"sounds/dec - tecmo interception.ogg",
	"sounds/dec - vandal hearts level up.ogg",
	"sounds/big prize medi.ogg",
	"sounds/double super jackpot.ogg",
	"sounds/prize medi.ogg",
	"sounds/prize oldblitz.ogg"
];
soundPools[finishSoundPool] = [
	"sounds/Finish1.ogg",
	"sounds/Finish2.ogg",
	"sounds/Finish3.ogg",
	"sounds/Finish4.ogg",
	"sounds/Finish5.ogg",
	"sounds/Finish6.ogg",
	"sounds/Finish7.ogg",
	"sounds/Finish8.ogg",
	"sounds/Finish9.ogg",
	"sounds/Finish10.ogg",
	"sounds/Finish11.ogg",
	"sounds/Finish12.ogg",
	"sounds/Finish13.ogg",
	"sounds/Finish14.ogg",
	"sounds/Finish15.ogg",
	"sounds/Finish16.ogg",
	"sounds/Finish17.ogg",
	"sounds/Finish18.ogg",
	"sounds/Finish19.ogg",
	"sounds/Finish20.ogg",
	"sounds/dec - double dragon 2 win.ogg",
	"sounds/dec - dracula x clear.ogg"
];
soundPools[emptySoundPool] = [
"sounds/Horn.ogg",
"sounds/smb2 nothing happened.ogg",
"sounds/StoogesScream.ogg",
"sounds/MM3 Protowhistle.ogg",
"sounds/nothing-Bubsy-hair.ogg",
"sounds/ctlavosscream.ogg",
"sounds/Bubsy Dies.ogg",
"sounds/oct1 - BK2000 GiveMeYourMoney.ogg",
"sounds/oct1 - BK2000 I am the Black Knight.ogg",
"sounds/oct1 - Kefka.ogg",
"sounds/oct1 - Mario Fantastic.ogg",
"sounds/oct1 - Mario Good Player.ogg",
"sounds/oct1 - Suikoden nope.ogg",
"sounds/oct1 - duckhunt laugh.ogg",
"sounds/oct3 - duck hunt failed.ogg",
"sounds/dec - nes game over.ogg",
"sounds/dec - roger rabbit.ogg",
"sounds/dec - turtle captured.ogg",
"sounds/nothing-Bubsy-out.ogg",
"sounds/nothing-Bubsy-whoa.ogg"
];
soundPools[testYourSmiteSoundPool] = [
	"sounds/Test_Your_Smite_madi.ogg",
	"sounds/Test_Your_Smite_cats1.ogg",
	"sounds/Test_Your_Smite_cats2.ogg",
	"sounds/Test_Your_Smite_cats3.ogg",
	"sounds/Test_Your_Smite_psych.ogg",
	"sounds/Test_Your_Smite_FF.ogg"
];

/* dummy "prize" images */
var dummyPrizeImages = [
	"images/alcoholism.png",
	"images/bee.png",
	"images/magic_book.png",
	"images/bread.png",
	"images/cat.png",
	"images/chicken_leg.png",
	"images/crow.png",
	"images/dolphin.png",
	"images/garbage.png",
	"images/grave.png",
	"images/gun.png",
	"images/lost.png",
	"images/poison.png",
	"images/skull.png",
	"images/toilet.png",
	"images/whale.png",
	"images/ant.png",
	"images/cake.png",
	"images/magic_wand.png",
	"images/navi_the_fairy.png",
	"images/potted_plant.png",
	"images/rainbow.png",
	"images/rubber_duck.png",
	"images/sexy_cupcake.png",
	"images/spider.png",
	"images/toilet_paper_roll2.png",
	"images/treasure_chest.png",
	"images/a_wolfshirt.png",
	"images/broken_trophy.png",
	"images/plunger.png",
	"images/tamagotchi.png",
	"images/vcr_tape.png",
	"images/wily_ship.png",
	"images/madilion.png",
	"images/wd bike.png",
	"images/wd boat.png",
	"images/wd camping.png",
	"images/wd city.png",
	"images/wd condemned.png",
	"images/wd desert trip.png",
	"images/wd eye.png",
	"images/wd flowers.png",
	"images/wd forest.png",
	"images/wd gift.png",
	"images/wd golf.png",
	"images/wd home.png",
	"images/wd magnifying glass.png",
	"images/wd medal.png",
	"images/wd megaphone.png",
	"images/wd mountain.png",
	"images/wd nothing 1.png",
	"images/wd nothing 2.png",
	"images/wd nothing 3.png",
	"images/wd nothing 4.png",
	"images/wd oasis.png",
	"images/wd plane.png",
	"images/wd police.png",
	"images/wd satellite.png",
	"images/wd stadium.png",
	"images/wd suburbs.png",
	"images/wd sunglasses.png",
	"images/wd train tracks.png",
	"images/wd train.png",
	"images/wd vacation.png",
	"images/wd yacht.png",
	/*Game icons added Sept 11*/
	"images/banknote.png",
	"images/bear-head.png",
	"images/bottled-bolt.png",
	"images/brass-knuckles.png",
	"images/brick-wall.png",
	"images/cake-slice.png",
	"images/cash.png",
	"images/centipede.png",
	"images/chainsaw.png",
	"images/coins.png",
	"images/crown-coin.png",
	"images/gold-mine.png",
	"images/grapes.png",
	"images/graveyard.png",
	"images/ham-shank.png",
	"images/locked-chest.png",
	"images/meat.png",
	"images/metroid.png",
	"images/money-stack.png",
	"images/nunchaku.png",
	"images/parrot-head.png",
	"images/pie-slice.png",
	"images/pineapple.png",
	"images/police-badge.png",
	"images/praying-mantis.png",
	"images/sai.png",
	"images/shiny-apple.png",
	"images/sperm-whale.png",
	"images/stomp.png",
	"images/strawberry.png",
	"images/unlit-bomb.png",
	"images/wolf-howl.png",
	"images/yv.png",
	/*Game icons added Sept 17*/
	"images/gi-astro.png",
	"images/gi-batteries.png",
	"images/gi-comet.png",
	"images/gi-dragon.png",
	"images/gi-ghost.png",
	"images/gi-golly.png",
	"images/gi-goshrock.png",
	"images/gi-jaws.png",
	"images/gi-lamp.png",
	"images/gi-loco.png",
	"images/gi-meteor.png",
	"images/gi-potion.png",
	"images/gi-potion2.png",
	"images/gi-rocket.png",
	"images/gi-rocket2.png",
	"images/gi-scroll.png",
	"images/gi-stomp.png",
	"images/gi-twister.png",
	"images/gi-viking.png",
	"images/gi-yell.png",
	"images/gi-zeppelin.png"
	];


/* Indices the goal square is allowed to be at (if placing immediately), with 0 in the upper left and moving right, then down. */
/* Current setting: squares 6+ moves from start */
var allowedGoalIndices = [9,13,14,17,18,19];
/* Square classes the goal square is allowed to replace (if not placing immediately) */
var allowedGoalClasses = ['empty', 'dummyPrize', 'smallPoints', 'bigPoints'];

/* move # after which to place a goal square in any allowed space (moving to start counts as 1) */
/* 0 = set on init, use allowedGoalIndices for placement */
/* 1+ = set on given move (moving to the start space counts as a move) */
var placeGoalAfterNumMoves = 12;

/* automatically show the goal square when it's placed */
var showGoalWhenPlaced = false;

/* milliseconds to delay before showing square */
var msDelayToRevealSquare = 3000;
/* milliseconds to delay before unzooming square */
var msDelayToUnzoomSquare = 5500;

/* sound to play when marker moves on map */
var markerMoveSoundPath = null;


/* potential map/marker images */
var mapSets = [
	{ map: "images/map 1 west madi.gif", marker: "images/map snail.gif" },
	{ map: "images/map 2 castle madi.gif", marker: "images/map snail and belmont.gif" },
	{ map: "images/map 3 ocean madi.gif", marker: "images/map snail.gif" },
	{ map: "images/map 4 japan madi.gif", marker: "images/map snail in car.gif" },
	{ map: "images/map 5 space madi.gif", marker: "images/map snail in space.gif" },
	{ map: "images/map 6 egypt staghorn.gif", marker: "images/map snail.gif" },
	{ map: "images/map 7 sky madi.gif", marker: "images/map snail in plane.gif" },
	{ map: "images/map 8 city madi.gif", marker: "images/map snail in car.gif" }
];


/***** Square creation ******/

/* Supported properties:
 * - text: text to display in the square when revealed
 * - sound: sound file to play when square revealed
 * - soundPool: sound pool name to play a random entry from when square revealed
 * - cssClass: CSS class name to set on the square
 */
function newEmptySquare()
{
	return { image: "images/wd checkmark.png", soundPool: emptySoundPool, cssClass: "empty"};
}
function newDummyPrizeSquare()
{
	return { soundPool: goodSoundPool, cssClass: "dummyPrize"};
}
function newSpecialPrizeSquare()
{
	return { image: "images/wd wildcard.png", soundPool: bigGoodSoundPool, cssClass: "prize"};
}
function newSmallPointsSquare()
{
	return { text: "+5", soundPool: goodSoundPool, cssClass: "smallPoints"};
}
function newBigPointsSquare()
{
	return { text: "+10", soundPool: bigGoodSoundPool, cssClass: "bigPoints"};
}
function newMultipliedPointsSquare()
{
	return { image: "images/x2.png", soundPool: bigGoodSoundPool, cssClass: "multiplier"};
}
function newTestYourSmiteSquare()
{
	return { image: "images/Test_Your_Smite.png", soundPool: testYourSmiteSoundPool, cssClass: "tys"};
}
function newConsumableSquare()
{
	return { image: "images/rolling-dice.png", soundPool: bigGoodSoundPool, cssClass: "consumable"};
}


/***** Functions ******/

var numMoves = 0;
var markerMoveSound = null;
function clickMapSquare(obj)
{
	/* increment moves */
	if (!obj.isShown)
	{
		++numMoves;
	}
	
	/* play marker move sound */
	if (markerMoveSoundPath && obj.dataContext !== startSquare)
	{
		if (!markerMoveSound)
		{
			markerMoveSound = new Audio(markerMoveSoundPath);
		}
		markerMoveSound.play();
	}
	
	/* move marker */
	var marker = document.getElementsByTagName("marker")[0];
	marker.style.top = obj.offsetTop+(obj.offsetHeight-marker.offsetHeight)/2+"px";
	var newLeft = obj.offsetLeft+(obj.offsetWidth-marker.offsetWidth)/2;
	if (newLeft > marker.offsetLeft+1)
	{
		/* face marker right */
		marker.className = "faceRight";
	}
	else if (newLeft < marker.offsetLeft-1)
	{
		/* face marker left */
		marker.className = "faceLeft";
	}
	marker.style.left = newLeft+"px";

	/* wait, then uncover square */
	window.setTimeout(showMapSquare, msDelayToRevealSquare, obj);
	
	if (numMoves === placeGoalAfterNumMoves)
	{
		/* place goal */
		var hiddenSquares = [];
		var elements = document.getElementsByTagName("ms");
		for (var i=0; i<elements.length; ++i)
		{
			var node = elements[i];
			if (node !== obj && !node.isShown && allowedGoalClasses.indexOf(node.className) > -1)
			{
				hiddenSquares.push(elements[i]);
			}
		}
		shuffle(hiddenSquares);
		placeGoal(hiddenSquares[0]);
	}
}

function zoomSquare(obj)
{
	/* add zoomed class */
	obj.className += " zoomed";
	
	/* wait then unzoom */
	window.setTimeout(unzoomSquare, msDelayToUnzoomSquare, obj);
}

function unzoomSquare(obj)
{
	/* remove zoomed class */
	obj.className = obj.className.replace(" zoomed", "");
}

function hideMapSquare(obj)
{
	/* cover square */
	obj.className = obj.className.replace(" shown", "");
	obj.isShown = false;
}

function getRandomSoundFromPoolName(poolName)
{
	var pool = audioPools[poolName];
	if (!pool)
	{
		return null;
	}
	
	var randomIndex = Math.floor(Math.random() * pool.length);
	var path = pool[randomIndex];
	return path;
}

function showMapSquare(obj)
{
	/* reveal square */
	obj.className += " shown";
	obj.isShown = true;

	/* show in 'current square' location */
	setCurrentSquare(obj);

	/* play sound */
	if (obj.dataContext.sound)
	{
		var sound = new Audio(obj.dataContext.sound);
		sound.play();
	}
	else if (obj.dataContext.soundPool)
	{
		var sound = getRandomSoundFromPoolName(obj.dataContext.soundPool);
		if (sound) sound.play();
	}
	
	if (obj.dataContext !== startSquare && obj.dataContext.cssClass !== "empty")
	{
		zoomSquare(obj);
	}
}

function setCurrentSquare(obj)
{
	/* update current square display */
	setSquareContext(document.getElementsByTagName("currentSquare")[0], obj.dataContext);
}

function setSquareContext(node, context)
{
	node.dataContext = context;
	node.textContent = context.text;
	node.className = context.cssClass;
	if (context.image)
	{
		node.style.backgroundImage = "url('"+context.image+"')";
	}
	else
	{
		node.style.backgroundImage = null;
	}
}

function hideAllSquares()
{
	var elements = document.getElementsByTagName("ms");
	for (var i=0; i<elements.length; ++i)
	{
		hideMapSquare(elements[i]);
	}
}

function placeGoal(node)
{
	setSquareContext(node, goalSquare);
	if (showGoalWhenPlaced)
	{
		showMapSquare(node);
	}
}

var audioPools = {};
var numAudioToPreload = 0;
var numAudioPreloaded = 0;
function initAudio()
{
	if (Object.keys(audioPools).length > 0)
	{
		return;
	}
	
	// count audio to preload
	for (var key in soundPools)
	{
		numAudioToPreload += soundPools[key].length;
	}
	document.getElementsByTagName("loadIndicator")[0].innerText = "0";
	// create audio objects
	for (var key in soundPools)
	{
		var soundPaths = soundPools[key];
		var audios = [];
		for (var i=0; i<soundPaths.length; ++i)
		{
			var audio = new Audio();
			audio.addEventListener('canplaythrough', audioPreloaded, false);
			audio.src = soundPaths[i];
			audios.push(audio);
		}
		audioPools[key] = audios;
	}
}
function audioPreloaded()
{
	++numAudioPreloaded;
	document.getElementsByTagName("loadIndicator")[0].innerText = 
			numAudioPreloaded < numAudioToPreload ? 
				"Audio: "+Math.round(100*numAudioPreloaded/numAudioToPreload)+"%" :
				"Audio: Ready";
}

function initMap()
{
	/* set up map image */
	var set = mapSets[Math.floor(mapSets.length*Math.random())];
	document.getElementById("mapImage").src = set.map;
	document.getElementById("markerImage").src = set.marker;
	
	/* set up audio */
	initAudio();
	
	/* reset counters */
	numMoves = 0;
	
	/* shuffle squares */
	shuffle(otherSquares);

	/* set up dummy prize text */
	shuffle(dummyPrizeImages);
	var dummyPrizeImagesUsed = 0;
	for (var i=0; i<otherSquares.length; ++i)
	{
		if (otherSquares[i].cssClass.startsWith("dummyPrize"))
		{
			otherSquares[i].cssClass = "dummyPrizeImage";
			otherSquares[i].text = null;
			otherSquares[i].image = dummyPrizeImages[dummyPrizeImagesUsed++];
		}
	}

	/* set up squares */
	var elements = document.getElementsByTagName("ms");
	for (var i=0; i<elements.length; ++i)
	{
		var node = elements[i];
		hideMapSquare(node);
		node.onclick = function () { clickMapSquare(this); };
		if (i === 0)
		{
			/* first square always start square */
			setSquareContext(node, startSquare);
		}
		else if (i < elements.length-1)
		{
			/* pick the next square from the deck */
			setSquareContext(node, otherSquares[i-1]);
		}
		else
		{
			/* last square, swap the goal in somewhere legal */
			var selectedIndex = allowedGoalIndices[Math.floor(Math.random() * allowedGoalIndices.length)];
			var goalNode = elements[selectedIndex];
			if (selectedIndex !== i)
			{
				/* move selected goal square's context to this final square */
				setSquareContext(node, goalNode.dataContext);
			}
			if (placeGoalAfterNumMoves === 0)
			{
				placeGoal(goalNode);
			}
			else
			{
				/* last square, use new blank square */
				setSquareContext(goalNode, newEmptySquare());
			}
		}
	}
	

	/* move marker */
	var marker = document.getElementsByTagName("marker")[0];
	marker.style.top = 338+"px";
	marker.style.left = 270+"px";
}

function resetMap()
{
	hideAllSquares();
	window.setTimeout(initMap, 1000);
}

/* http://stackoverflow.com/a/2450976 */
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
