/* Square definitions */
/* Supported properties:
 * - text: text to display in the square when revealed
 * - sound: sound file to play when square revealed
 * - cssClass: CSS class name to set on the square
 */
var startSquare = { text: "" }
var goalSquare = { text: "%", sound: "Finish", cssClass: "goal", isGoal: true }
var otherSquares = [
{ text: "r", cssClass: "empty"},
{ text: "r", cssClass: "empty"},
{ text: "r", cssClass: "empty"},
{ text: "r", cssClass: "empty"},
{ text: "-", sound: "Good", cssClass: "dummyPrize"},
{ text: "-", sound: "Good", cssClass: "dummyPrize"},
{ text: "-", sound: "Good", cssClass: "dummyPrize"},
{ text: "-", sound: "Good", cssClass: "dummyPrize"},
{ text: "-", sound: "Good", cssClass: "dummyPrize"},
{ text: "+", sound: "BigGood", cssClass: "prize"},
{ text: "+10", sound: "BigGood", cssClass: "bigPoints"},
{ text: "+10", sound: "BigGood", cssClass: "bigPoints"},
{ text: "+5", sound: "Good", cssClass: "smallPoints"},
{ text: "+5", sound: "Good", cssClass: "smallPoints"},
{ text: "+5", sound: "Good", cssClass: "smallPoints"},
{ text: "+5", sound: "Good", cssClass: "smallPoints"},
{ text: "x2", sound: "BigGood", cssClass: "multiplier"},
{ text: "x2", sound: "BigGood", cssClass: "multiplier"},
];

/* dummy "prize" text */
var dummyPrizes = ["!","@","#","&","w","e","t","o","j","k","b",",","Q","E","T","Y","I","P","S","H","J","L","Z","C","M","²","µ","Ä","ä","å","ç"];

/* Indices the goal square is allowed to be at, with 0 in the upper left and moving right, then down. */
/* Current setting: squares 6+ moves from start */
var allowedGoalIndices = [9,13,14,17,18,19];

/* opacity value for a revealed square (0.0-1.0) */
var revealedSquareOpacity = 0.60;

var markerFaceLeftTransform = "scaleX(1)";
var markerFaceRightTransform = "scaleX(-1)";


/***** Functions ******/

function clickMapSquare(obj)
{
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

  /* uncover square */
  obj.style.opacity = revealedSquareOpacity;

  /* play sound */
  if (obj.dataContext.sound != null)
  {
    var location = "sounds/" + obj.dataContext.sound + ((Math.floor(Math.random() * 14))+1) + ".wav";
    var sound = new Audio(location);
    sound.play();
  }
}

function resetMapSquare(obj)
{
  /* cover square */
  obj.style.opacity=0.0;
}

function setSquareContext(node, context)
{
  node.dataContext = context;
  node.textContent = context.text;
  node.className = context.cssClass;
}

function hideAllSquares()
{
  var elements = document.getElementsByTagName("ms");
  for (var i=0; i<elements.length; ++i)
  {
    resetMapSquare(elements[i]);
  }
}

function initMap()
{
  /* shuffle squares */
  shuffle(otherSquares);

  /* set up dummy prize text */
  shuffle(dummyPrizes);
  var dummyPrizesUsed = 0;
  for (var i=0; i<otherSquares.length; ++i)
  {
    if (otherSquares[i].class == "dummyPrize")
    {
      otherSquares[i].text = dummyPrizes[dummyPrizesUsed++];
    }
  }

  /* set up squares */
  var elements = document.getElementsByTagName("ms");
  for (var i=0; i<elements.length; ++i)
  {
    var node = elements[i];
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
      setSquareContext(goalNode, goalSquare);
    }
    resetMapSquare(node);
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
