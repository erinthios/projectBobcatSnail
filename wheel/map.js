
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
var lootboxPool = [
	newLootboxSquare("Shiny Medal", "sounds/SmightMedal.mp3"),
	newLootbox2Square("Artwork by Doc", "images/lootbox_beast.gif", "sounds/lootboxart.mp3"),
	newLootboxSquare("Super Names", "sounds/supernames.mp3"),
	newLootboxSquare("Cool Stripes", "sounds/coolstripes.mp3"),
	newLootbox2Square("Lootbox in a lootbox?", "images/lootbox_turducken.gif", "sounds/lootboxinsidelootbox.mp3")/*,
	newLootboxSquare("Golden Rims", "sounds/goldenrims.mp3"),
	newLootboxSquare("Ultra Reskin!", "sounds/ultraskin.mp3"),
	*/
];
var otherSquares = [];
function initOtherSquares() {
	shuffle(lootboxPool);
	otherSquares = [
		newEmptySquare(),
		newEmptySquare(),
		lootboxPool[0],
		newTestYourSmiteSquare(),
		lootboxPool[1],
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
	shuffle(otherSquares);
}

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
"sounds/nothing-Bubsy-whoa.ogg",
"sounds/nowaydude.ogg"
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
function newLootboxSquare(txt, sound)
{
	return { html: "<span>"+txt+"</span>", text: txt, sound: sound, cssClass: "lootbox"};
}
function newLootbox2Square(txt, img, sound)
{
	return { html: "<span>"+txt+"</span>", text: txt, image: img, sound: sound, cssClass: "lootbox2"};
}
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
		if (hiddenSquares.length === 0)
		{
			/* no allowed spaces, fall back on replacing anything */
			for (var i=0; i<elements.length; ++i)
			{
				var node = elements[i];
				if ((obj == null || node !== obj) && !node.isShown)
				{
					hiddenSquares.push(elements[i]);
				}
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
	
	if (obj.dataContext.cssClass === "lootbox")
	{
		// clear contents
		obj.innerHTML = '';
		// zoom (empty) square
		obj.className += " zoomed";

		// show large lootbox, pop name in after it opens
		var div = document.getElementById("lootbox");
		var img = document.getElementById("lootboxImage");
		var text = document.getElementById("lootboxText");
		
		div.className = "";
		img.src = "images/lootbox.gif";
		
		window.setTimeout(function() {
			text.innerText = obj.dataContext.text;
			text.setAttribute('style', 'animation: lootboxOpenText 2s linear forwards;');
			$(obj).sparkleh({ color: ['#ffffff', '#ffec3a'] });
		}, 2650);
		window.setTimeout(function() {
			div.className = "hidden"; img.src = ""; text.innerText = ""; text.setAttribute('style', '');
			/* unzoom square */
			obj.className = obj.className.replace(" zoomed", "");
			obj.innerHTML = obj.dataContext.html;
		}, 6000);
	}
	else if (obj.dataContext.cssClass === "lootbox2")
	{
		// clear contents
		obj.innerHTML = '';
		// zoom (empty) square
		obj.className += " zoomed";

		// show large lootbox, pop name in after it opens
		var div = document.getElementById("lootbox");
		var img = document.getElementById("lootboxImage");
		
		div.className = "";
		img.src = obj.dataContext.image;
		obj.style.backgroundImage = null;
		
		window.setTimeout(function() {
			$(obj).sparkleh({ color: ['#ffffff', '#ffec3a'] });
		}, 2650);
		window.setTimeout(function() {
			div.className = "hidden"; img.src = "";
			/* unzoom square */
			obj.className = obj.className.replace(" zoomed", "");
			obj.innerHTML = obj.dataContext.html;
		}, obj.dataContext.text.includes("Artwork") ? 8000 : 7000);
	}
	else if (obj.dataContext !== startSquare && obj.dataContext.cssClass !== "empty")
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
	if (context.html)
	{
		node.innerHTML = context.html;
	}
	else
	{
		node.textContent = context.text;
	}
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
	
	/* init squares */
	initOtherSquares();

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

/* based on https://codepen.io/simeydotme/pen/jgcvi */
$.fn.sparkleh = function( options ) {
    
  return this.each( function(k,v) {
    
    var $this = $(v)/*.css("position","relative")*/;
    
    var settings = $.extend({
      width: $this.outerWidth(),
      height: $this.outerHeight(),
      color: "#FFFFFF",
      count: 30,
      overlap: 0,
      speed: 1
    }, options );
    
    var sparkle = new Sparkle( $this, settings );
	sparkle.over();
    
  });
  
}




function Sparkle( $parent, options ) {
  this.options = options;
  this.init( $parent );
}

Sparkle.prototype = {
  
  "init" : function( $parent ) {
    
    var _this = this;
    
    this.$canvas = 
      $("<canvas>")
        .addClass("sparkle-canvas")
        .css({
          position: "absolute",
          top: "-"+_this.options.overlap+"px",
          left: "-"+_this.options.overlap+"px",
          "pointer-events": "none"
        })
        .appendTo($parent);
    
    this.canvas = this.$canvas[0];
    this.context = this.canvas.getContext("2d");
    
    this.sprite = new Image();
    this.sprites = [0,6,13,20];
    this.sprite.src = this.datauri;
    
    this.canvas.width = this.options.width + ( this.options.overlap * 2);
    this.canvas.height = this.options.height + ( this.options.overlap * 2);
    
    
    this.particles = this.createSparkles( this.canvas.width , this.canvas.height );
    
    this.anim = null;
    this.fade = false;
    
  },
  
  "createSparkles" : function( w , h ) {
    
    var holder = [];
    
    for( var i = 0; i < this.options.count; i++ ) {
      
      var color = this.options.color;
      
      if( this.options.color == "rainbow" ) {
        color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      } else if( $.type(this.options.color) === "array" ) {
        color = this.options.color[ Math.floor(Math.random()*this.options.color.length) ];
      }

      holder[i] = {
        position: {
          x: Math.floor(Math.random()*w),
          y: Math.floor(Math.random()*h)
        },
        style: this.sprites[ Math.floor(Math.random()*4) ],
        delta: {
          x: Math.floor(Math.random() * 1000) - 500,
          y: Math.floor(Math.random() * 1000) - 500
        },
        size: parseFloat((Math.random()*2).toFixed(2)),
        color: color
      };
            
    }
    
    return holder;
    
  },
  
  "draw" : function( time, fade ) {
        
    var ctx = this.context;
    
    ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
          
    for( var i = 0; i < this.options.count; i++ ) {

      var derpicle = this.particles[i];
      var modulus = Math.floor(Math.random()*7);
      
      if( Math.floor(time) % modulus === 0 ) {
        derpicle.style = this.sprites[ Math.floor(Math.random()*4) ];
      }
      
      ctx.save();
      ctx.globalAlpha = derpicle.opacity;
      ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);
      
      if( this.options.color ) {  
        
        ctx.globalCompositeOperation = "source-atop";
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = derpicle.color;
        ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);
        
      }
      
      ctx.restore();

    }
    
        
  },
  
  "update" : function() {
    
     var _this = this;
    
     this.anim = window.requestAnimationFrame( function(time) {

       for( var i = 0; i < _this.options.count; i++ ) {

         var u = _this.particles[i];
         
         var randX = ( Math.random() > Math.random()*2 );
         var randY = ( Math.random() > Math.random()*3 );
         
         if( randX ) {
           u.position.x += ((u.delta.x * _this.options.speed) / 1500); 
         }        
         
         if( !randY ) {
           u.position.y -= ((u.delta.y * _this.options.speed) / 800);
         }

         if( u.position.x > _this.canvas.width ) {
           u.position.x = -7;
         } else if ( u.position.x < -7 ) {
           u.position.x = _this.canvas.width; 
         }

         if( u.position.y > _this.canvas.height ) {
           u.position.y = -7;
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         } else if ( u.position.y < -7 ) {
           u.position.y = _this.canvas.height; 
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         }
         
         if( _this.fade ) {
           u.opacity -= 0.02;
         } else {
           u.opacity -= 0.005;
         }
         
         if( u.opacity <= 0 ) {
           u.opacity = ( _this.fade ) ? 0 : 1;
         }
         
       }
       
       _this.draw( time );
       
       if( _this.fade ) {
         _this.fadeCount -= 1;
         if( _this.fadeCount < 0 ) {
           window.cancelAnimationFrame( _this.anim );
         } else {
           _this.update(); 
         }
       } else {
         _this.update();
       }
       
     });

  },
  
  "cancel" : function() {
    
    this.fadeCount = 100;

  },
  
  "over" : function() {
    
    window.cancelAnimationFrame( this.anim );
    
    for( var i = 0; i < this.options.count; i++ ) {
      this.particles[i].opacity = Math.random();
    }
    
    this.fade = false;
    this.update();

  },
  
  "out" : function() {
    
    this.fade = true;
    this.cancel();
    
  },
  
  
  
  "datauri" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="

}; 
