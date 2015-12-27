/* Square definitions */
/* Supported properties:
 * - text: text to display in the square when revealed
 * - sound: sound file to play when square revealed
 */
var startSquare = { text: "" }
var goalSquare = { text: "%", sound: "Finish", isGoal: true }
var otherSquares = [
{ text: "",pointSquare:false},
{ text: "",pointSquare:false},
{ text: "w", sound: "Good",pointSquare:false},
{ text: "T", sound: "Good",pointSquare:false},
{ text: "S", sound: "Good",pointSquare:false},
{ text: "J", sound: "Good",pointSquare:false},
{ text: "E", sound: "Good",pointSquare:false},
{ text: "",pointSquare:false},
{ text: "",pointSquare:false},
{ text: "+",sound: "BigGood",pointSquare:false},
{ text: "+10 Points", sound: "BigGood",pointSquare: true},
{ text: "+10 Points", sound: "BigGood",pointSquare: true},
{ text: "+5 Points",pointSquare: true, sound: "Good"},
{ text: "+5 Points",pointSquare: true, sound: "Good"},
{ text: "+5 Points",pointSquare: true, sound: "Good"},
{ text: "+5 Points",pointSquare: true, sound: "Good"},
{ text: "x2 Points", sound: "BigGood", pointSquare: true},
{ text: "x2 Points", sound: "BigGood", pointSquare: true},
];

/* Indices the goal square is allowed to be at, with 0 in the upper left and moving right, then down. */
/* Current setting: rightmost two columns */
var allowedGoalIndices = [9,13,14,17,18,19];

/* opacity value for a revealed square (0.0-1.0) */
var revealedSquareOpacity = 0.60;


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
  if(context.pointSquare == true)
  {
    node.style.fontFamily = "sans-serif";
    node.style.fontSize = "20px";
  }
  else
  {
    node.style.fontFamily = "webdings";
    node.style.fontSize = "52px";
  }
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
