/* Square definitions */
/* Supported properties:
 * - text: text to display in the square when revealed
 * - sound: sound file to play when square revealed
 * - soundPool: sound pool name to play a random entry from when square revealed
 * - cssClass: CSS class name to set on the square
 */
var startSquare = { text: "" }
var goalSquare = { text: "%", soundPool: "Finish", cssClass: "goal", isGoal: true }
var otherSquares = [
{ text: "a", soundPool: "Empty", cssClass: "empty"},
{ text: "a", soundPool: "Empty", cssClass: "empty"},
{ text: "a", soundPool: "Empty", cssClass: "empty"},
{ text: "a", soundPool: "Empty", cssClass: "empty"},
{ text: "a", soundPool: "Empty", cssClass: "empty"},
{ text: "a", soundPool: "Empty", cssClass: "empty"},
{ text: "-", soundPool: "Good", cssClass: "dummyPrizeImage"},
{ text: "-", soundPool: "Good", cssClass: "dummyPrizeImage"},
{ text: "-", soundPool: "Good", cssClass: "dummyPrizeImage"},
{ text: "+", soundPool: "BigGood", cssClass: "prize"},
{ text: "+10", soundPool: "BigGood", cssClass: "bigPoints"},
{ text: "+10", soundPool: "BigGood", cssClass: "bigPoints"},
{ text: "+5", soundPool: "Good", cssClass: "smallPoints"},
{ text: "+5", soundPool: "Good", cssClass: "smallPoints"},
{ text: "+5", soundPool: "Good", cssClass: "smallPoints"},
{ text: "+5", soundPool: "Good", cssClass: "smallPoints"},
{ text: "x2", soundPool: "BigGood", cssClass: "multiplier"},
{ text: "x2", soundPool: "BigGood", cssClass: "multiplier"},
];

/* sound pools */
var soundPoolGood = [
	"sounds/Good1.wav",
	"sounds/Good2.wav",
	"sounds/Good3.wav",
	"sounds/Good4.wav",
	"sounds/Good5.wav",
	"sounds/Good6.wav",
	"sounds/Good7.wav",
	"sounds/Good8.wav",
	"sounds/Good9.wav",
	"sounds/Good10.wav",
	"sounds/Good11.wav",
	"sounds/Good12.wav",
	"sounds/Good13.wav",
	"sounds/Good14.wav",
];
var soundPoolBigGood = [
	"sounds/BigGood1.wav",
	"sounds/BigGood2.wav",
	"sounds/BigGood3.wav",
	"sounds/BigGood4.wav",
	"sounds/BigGood5.wav",
	"sounds/BigGood6.wav",
	"sounds/BigGood7.wav",
	"sounds/BigGood8.wav",
	"sounds/BigGood9.wav",
	"sounds/BigGood10.wav",
	"sounds/BigGood11.wav",
	"sounds/BigGood12.wav",
	"sounds/BigGood13.wav",
	"sounds/BigGood14.wav",
];
var soundPoolFinish = [
	"sounds/Finish1.wav",
	"sounds/Finish2.wav",
	"sounds/Finish3.wav",
	"sounds/Finish4.wav",
	"sounds/Finish5.wav",
	"sounds/Finish6.wav",
	"sounds/Finish7.wav",
	"sounds/Finish8.wav",
	"sounds/Finish9.wav",
	"sounds/Finish10.wav",
	"sounds/Finish11.wav",
	"sounds/Finish12.wav",
	"sounds/Finish13.wav",
	"sounds/Finish14.wav",
];
var soundPoolEmpty = [];

/* dummy "prize" text (Webdings characters) */
var dummyPrizes = ["!","@","&","w","e","t","o","j","k","b",",","Q","E","T","Y","I","P","S","H","J","L","Z","C","M","²","µ","Ä","ä","å","ç"];

/* dummy "prize" images */
var dummyPrizeImages = [
	"images/smite_alcoholism.png",
	"images/smite_bee.png",
	"images/smite_book.png",
	"images/smite_bread.png",
	"images/smite_cat.png",
	"images/smite_chicken_leg.png",
	"images/smite_crow.png",
	"images/smite_dolphin.png",
	"images/smite_garbage_can.png",
	"images/smite_grave.png",
	"images/smite_gun.png",
	"images/smite_lost.png",
	"images/smite_poison.png",
	"images/smite_skull.png",
	"images/smite_toilet.png",
	"images/smite_whale.png",
];


/* Indices the goal square is allowed to be at, with 0 in the upper left and moving right, then down. */
/* Current setting: squares 6+ moves from start */
var allowedGoalIndices = [9,13,14,17,18,19];

/* move # after which to place a goal square in any allowed space (moving to start counts as 1) */
/* 0 = set on init, use allowedGoalIndices for placement */
/* 1+ = set on given move (moving to the start space counts as a move) */
var placeGoalAfterNumMoves = 11;

/* automatically show the goal square when it's placed */
var showGoalWhenPlaced = false;

/* milliseconds to delay before showing square */
var msDelayToRevealSquare = 3000;
/* milliseconds to delay before unzooming square */
var msDelayToUnzoomSquare = 5500;

/* opacity value for a revealed square (0.0-1.0) */
var revealedSquareOpacity = 1.0;

/* sound to play when marker moves on map */
var markerMoveSoundPath = "sounds/walking.mp3";

var markerFaceLeftTransform = "scaleX(1)";
var markerFaceRightTransform = "scaleX(-1)";


/***** Functions ******/

var numMoves = 0;
var markerMoveSound = null;
function clickMapSquare(obj)
{
  /* increment moves */
  if (obj.isShown == false)
  {
    ++numMoves;
  }
  
  /* play marker move sound */
  if (markerMoveSoundPath && obj.dataContext != startSquare)
  {
    if (!markerMoveSound)
	{
      markerMoveSound = new Audio(markerMoveSoundPath);
	}
	markerMoveSound.play();
  }
  
  /* move marker */
  var marker = document.getElementsByTagName("marker")[0];
  marker.style.top = obj.offsetTop+(obj.offsetHeight-marker.offsetHeight)/2;
  var newLeft = obj.offsetLeft+(obj.offsetWidth-marker.offsetWidth)/2;
  if (newLeft > marker.offsetLeft)
  {
    /* snail faces right */
    marker.style.transform = markerFaceRightTransform;
  }
  else
  {
    /* snail faces left */
    marker.style.transform = markerFaceLeftTransform;
  }
  marker.style.left = newLeft;

  /* wait, then uncover square */
  window.setTimeout(showMapSquare, msDelayToRevealSquare, obj);
  
  if (numMoves == placeGoalAfterNumMoves)
  {
    /* place goal */
    var hiddenSquares = [];
    var elements = document.getElementsByTagName("ms");
    for (var i=0; i<elements.length; ++i)
    {
      var node = elements[i];
      if (node != obj && node.isShown == false && node.className != "prize" && node.className != "multiplier")
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
  obj.style.opacity=0.0;
  obj.isShown = false;
}

function getRandomSoundFromPoolName(poolName)
{
	var pool = null;
	switch (poolName)
	{
		case "Good":
			pool = soundPoolGood;
			break;
		
		case "BigGood":
			pool = soundPoolBigGood;
			break;
		
		case "Finish":
			pool = soundPoolFinish;
			break;
		
		case "Empty":
			pool = soundPoolEmpty;
			break;
	}
	
	if (!pool)
	{
		return null;
	}
	
	var randomIndex = Math.floor(Math.random() * pool.length)
	var path = pool[randomIndex];
	return path;
}

function showMapSquare(obj)
{
  /* reveal square */
  obj.style.opacity = revealedSquareOpacity;
  obj.isShown = true;

  /* show in 'current square' location */
  setCurrentSquare(obj);

  /* play sound */
  if (obj.dataContext.sound != null)
  {
    var sound = new Audio(obj.dataContext.sound);
    sound.play();
  }
  else if (obj.dataContext.soundPool)
  {
    var location = getRandomSoundFromPoolName(obj.dataContext.soundPool);
    var sound = new Audio(location);
    sound.play();
  }
  
  if (obj.dataContext != startSquare && obj.dataContext.cssClass != "empty")
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
    node.style.backgroundImage = "url("+context.image+")";
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

function initMap()
{
  /* reset counters */
  numMoves = 0;
  
  /* shuffle squares */
  shuffle(otherSquares);

  /* set up dummy prize text */
  shuffle(dummyPrizes);
  shuffle(dummyPrizeImages);
  var dummyPrizesUsed = 0;
  var dummyPrizeImagesUsed = 0;
  for (var i=0; i<otherSquares.length; ++i)
  {
    if (otherSquares[i].cssClass == "dummyPrize")
    {
      otherSquares[i].text = dummyPrizes[dummyPrizesUsed++];
    }
    else if (otherSquares[i].cssClass == "dummyPrizeImage")
    {
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
    if (i == 0)
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
      if (selectedIndex != i)
      {
        /* move selected goal square's context to this final square */
        setSquareContext(node, goalNode.dataContext);
      }
      if (placeGoalAfterNumMoves == 0)
      {
        placeGoal(goalNode);
      }
      else
      {
        /* last square, use new blank square */
        setSquareContext(goalNode, { text: "a", soundPool: "Empty", cssClass: "empty"});
      }
    }
  }
  

  /* move marker */
  var marker = document.getElementsByTagName("marker")[0];
  marker.style.top = 230;
  marker.style.left = 270;
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

