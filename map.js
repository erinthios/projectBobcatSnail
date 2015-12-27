/* Square definitions */
/* Supported properties:
 * - text: text to display in the square when revealed
 * - sound: sound file to play when square revealed
 */
var startSquare = { text: "START" }
var goalSquare = { text: "GOAL", sound: "sounds/Audience_Applause-Matthiew11-1206899159.mp3", isGoal: true }
var otherSquares = [
{ text: "+10 POINTS", sound: "sounds/Cha_Ching_Register-Muska666-173262285.mp3" },
{ text: "+10 POINTS", sound: "sounds/Cha_Ching_Register-Muska666-173262285.mp3" },
{ text: "+40 POINTS", sound: "sounds/Cha_Ching_Register-Muska666-173262285.mp3" },
{ text: "EATEN BY A SHARK" },
{ text: "DO A SILLY DANCE" },
{ text: "TAKE A DRINK" },
{ text: "GET WRECKED" },
{ text: "MAGIC 8-BALL" },
{ text: "DO A LAP" },
{ text: "" },
{ text: "" },
{ text: "" },
{ text: "" },
{ text: "" },
{ text: "" },
{ text: "" },
{ text: "" },
{ text: "" },
];

/* Indices the goal square is allowed to be at, with 0 in the upper left and moving right, then down. */
/* Current setting: rightmost two columns */
var allowedGoalIndices = [3,4,8,9,13,14,18,19];

/* opacity value for a revealed square (0.0-1.0) */
var revealedSquareOpacity = 0.9;


/***** Functions ******/

function clickMapSquare(obj)
{
  /* move marker */
  var marker = document.getElementsByTagName("marker")[0];
  marker.style.top = obj.offsetTop+(obj.offsetHeight-marker.offsetHeight)/2;
  marker.style.left = obj.offsetLeft+(obj.offsetWidth-marker.offsetWidth)/2;

  /* uncover square */
  obj.style.opacity = revealedSquareOpacity;

  /* play sound */
  if (obj.dataContext.sound != null)
  {
    var sound = new Audio(obj.dataContext.sound);
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
      setSquareContext(node, goalNode.dataContext);
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
