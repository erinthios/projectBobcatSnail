function clickMapSquare(obj)
{
  /* move marker */
  var marker = document.getElementsByTagName("marker")[0];
  marker.style.top = obj.offsetTop+(obj.offsetHeight-marker.offsetHeight)/2;
  marker.style.left = obj.offsetLeft+(obj.offsetWidth-marker.offsetWidth)/2;

  /* uncover square */
  obj.style.opacity=1;
}

function resetMapSquare(obj)
{
  /* cover square */
  obj.style.opacity=0.0;
}

var startSquare = { text: "START" }
var goalSquare = { text: "GOAL", isGoal: true }
var otherSquares = [
{ text: "+10 POINTS" },
{ text: "+10 POINTS" },
{ text: "+40 POINTS" },
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

function setSquareContext(node, context)
{
  node.dataContext = context;
  node.textContent = context.text;
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
      var allowedGoalIndices = [3,4,8,9,13,14,18,19];
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
