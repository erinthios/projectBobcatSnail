
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

var isCalled = false;
	function HasNotBeenSeen(value) {
		return value.HasSeen == false;
	}
	function DiffOne(value) {
	    return value.Difficulty == "1";
	}
	function DiffTwo(value) {
	    return value.Difficulty == "2";
	}
	function DiffThree(value) {
	    return value.Difficulty == "3";
	}
	function DiffFour(value) {
	    return value.Difficulty == "4";
	}
var $quizgame = {
    questions: [],
    previousQuestions: [],
    loadJSON: function(path, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', path, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    },
    loadGame: function (path) {
        if (!isCalled) {
            isCalled = true;
            $quizgame.loadJSON(path, function (response) {
                var first_json = JSON.parse(response);
				var actual_JSON = first_json.filter(HasNotBeenSeen);
                $('#startGame').fadeOut();
                $('#pointLayout').fadeIn();
				
				
				var questions = [];
				for(var i = 0; i < 12; i++)
				{
					var randomAnswer = Math.floor(Math.random() * (actual_JSON.length - 1) + 1);
					questions.push(actual_JSON[randomAnswer]);
				}
				
                var table = document.getElementById('pointTable').getElementsByTagName('tbody')[0];
                var tableRow = 0;
                for (var i = 0; i < $quizgame.questions.length; i++) {
                    var cellNumber = i % 4;
                    if (i % 4 == 0) {
                        var row = table.insertRow(tableRow);
                        tableRow++;
                    }

                    var cell = row.insertCell(cellNumber);
                    cell.innerText = $quizgame.questions[i].GameTitle;
                    cell.setAttribute("class", "game-select-question");
                    cell.setAttribute("data-question-number", i);
                }

                $(".answer").click(function () {
                    var correct = $(this).attr("data-correct") === "true";
                    $quizgame.isCorrect(correct, false);
                    cdreset();
                });

                $(".game-select-question").click(function () {
                    var questionNumber = $(this).attr("data-question-number");
                    $quizgame.loadQuestion(questionNumber, $quizgame.questions[questionNumber], false);
                });
            });
        }
    },
    nextRound: function(path) {
        $('#pointTable').fadeOut();
        $('#finalRoundTable').fadeOut();
        setTimeout(function () { $quizgame.loadNewGame(path); }, 400);
        $('#bonusRound').delay(500).fadeIn();
        $('#bonusRound').delay(5000).fadeOut();
        $('#pointTable').delay(6500).fadeIn();
    },
    newRound: function(path) {
        $('#pointTable').fadeOut();
        $('#finalRoundTable').fadeOut();
        setTimeout(function () { $quizgame.loadNewGame(path); }, 400);
        $('#pointTable').delay(500).fadeIn();
    },
    finalRound: function(path) {
        $('#pointTable').fadeOut();
        setTimeout(function () { 
           $quizgame.loadJSON(path, function (response) {
                var first_json = JSON.parse(response);
                var actual_JSON = first_json.filter(HasNotBeenSeen);
                if($quizgame.questions.length > 0) {
                   $quizgame.previousQuestions = _.union($quizgame.previousQuestions, $quizgame.questions);
                   actual_JSON = _.difference(actual_JSON, $quizgame.previousQuestions);
                }
                
                var diffThree = actual_JSON.filter(DiffThree);
                var diffFour = actual_JSON.filter(DiffFour);
                $('#startGame').fadeOut();

				// shuffle question arrays
				shuffle(diffThree);
				shuffle(diffFour);

				// get first three questions from each difficulty
                $quizgame.questions = [];
				$quizgame.questions.push(diffThree[0]);
				$quizgame.questions.push(diffThree[1]);
                $quizgame.questions.push(diffThree[2]);
                $quizgame.questions.push(diffThree[3]);
                $quizgame.questions.push(diffThree[4]);
				$quizgame.questions.push(diffFour[0]);
				$quizgame.questions.push(diffFour[1]);
                $quizgame.questions.push(diffFour[2]);
                $quizgame.questions.push(diffFour[3]);
                shuffle($quizgame.questions);
                
                var table = document.getElementById('finalRoundTable').getElementsByTagName('tbody')[0];
                var tableRow = 0;
                for (var i = 0; i < $quizgame.questions.length; i++) {
                    $("#final-question-" + i)[0].innerText = $quizgame.questions[i].GameTitle;
                    $quizgame.textfit($("#final-question-" + i));
                }
                $(".answer").unbind();
                $(".answer").click(function () {
                    var correct = $(this).attr("data-correct") === "true";
                    $quizgame.isCorrect(correct, false, true);
                    cdreset();
                });
                $(".game-select-question").unbind();
                $(".game-select-question").click(function () {
                    var questionNumber = $(this).attr("data-question-number");
                    $quizgame.loadQuestion(questionNumber, $quizgame.questions[questionNumber], true);
                });
            });
        }, 400);
        $('#finalRoundTable').delay(500).fadeIn();
    },
    loadNewGame: function (path) {
        if (!isCalled) {
            isCalled = true;
            $quizgame.loadJSON(path, function (response) {
                var first_json = JSON.parse(response);
                var actual_JSON = first_json.filter(HasNotBeenSeen);
                if($quizgame.questions.length > 0) {
                   $quizgame.previousQuestions = _.union($quizgame.previousQuestions, $quizgame.questions);
                   actual_JSON = _.difference(actual_JSON, $quizgame.previousQuestions);
                }
                
                var diffOne = actual_JSON.filter(DiffOne);
                var diffTwo = actual_JSON.filter(DiffTwo);
                var diffThree = actual_JSON.filter(DiffThree);
                var diffFour = actual_JSON.filter(DiffFour);
                $('#startGame').fadeOut();
                $('#pointLayout').fadeIn();
				
				// shuffle question arrays
				shuffle(diffOne);
				shuffle(diffTwo);
				shuffle(diffThree);
				shuffle(diffFour);

				// get first three questions from each difficulty
                $quizgame.questions = [];
				$quizgame.questions.push(diffOne[0]);
				$quizgame.questions.push(diffOne[1]);
                $quizgame.questions.push(diffOne[2]);
				$quizgame.questions.push(diffTwo[0]);
				$quizgame.questions.push(diffTwo[1]);
                $quizgame.questions.push(diffTwo[2]);
				$quizgame.questions.push(diffThree[0]);
				$quizgame.questions.push(diffThree[1]);
                $quizgame.questions.push(diffThree[2]);
				$quizgame.questions.push(diffFour[0]);
				$quizgame.questions.push(diffFour[1]);
                $quizgame.questions.push(diffFour[2]);
                
                var table = document.getElementById('pointTable').getElementsByTagName('tbody')[0];
                var tableRow = 0;
                for (var i = 0; i < $quizgame.questions.length; i++) {
                    $("#question-" + i)[0].innerText = $quizgame.questions[i].GameTitle;
                    $quizgame.textfit($("#question-" + i));
                }
                
                $(".answer").unbind();
                $(".answer").click(function () {
                    var correct = $(this).attr("data-correct") === "true";
                    $quizgame.isCorrect(correct, false, false);
                    cdreset();
                });
                $(".game-select-question").unbind();
                $(".game-select-question").click(function () {
                    var questionNumber = $(this).attr("data-question-number");
                    $quizgame.loadQuestion(questionNumber, $quizgame.questions[questionNumber], false);
                });
            });
            isCalled = false;
        }
    },
	// based on https://github.com/nbrunt/TextFit
	// modified to require a max-height
    textfit: function (node) {
		node[0].style["font-size"] = null;
        var fs = parseInt(node.css("font-size"), 10);
        var mh = parseInt(node.css("max-height"), 10);
        while (node.height() > mh) {
            node.css("font-size", --fs + "px");
        }
	},
    isCorrect: function (correct, timeup, isFinal) {
        $('[data-correct="false"]').addClass("show-wrong");
        $('[data-correct="true"]').addClass("show-correct");
        if (correct) {
            $('.right-answer-choice').fadeIn();
        } else {
            $('.wrong-answer-choice').fadeIn();
        }

        setTimeout(function () { $quizgame.setAnswerClearAndReturn(correct, isFinal) }, 2000);
    },
    loadQuestion: function (questionNumber, question, isFinal) {
        if(isFinal) {
            $('#finalRoundTable').fadeOut();
        }
        else{
           $('#pointTable').fadeOut(); 
        }
        $('#question').attr("data-selected-question", questionNumber);

        if (typeof question.Submitter === 'undefined' || question.Submitter == "") {
            $('.submitter-text').hide();
        } else {
            $('.submitter-text').show();
            $('#submitter-text').text(question.Submitter);
        }

        $('#question-text').text(question.Question);
        $('#question-number').text(question.QKEY);
        $('#question-comment').text(question.Comments);

        var randomCorrectAnswerBank = Math.floor(Math.random() * (4 - 1) + 1);
        $("#" + randomCorrectAnswerBank).attr("data-correct", true);
        $("#" + randomCorrectAnswerBank).text(question.CorrectAnswer);

        var wrongAnswerBanks = [];
        for (var i = 1; i < 5; i++) {
            if (i != randomCorrectAnswerBank) {
                wrongAnswerBanks.push(i);
            }
        }

        $("#" + wrongAnswerBanks[0]).attr("data-correct", false);
        $("#" + wrongAnswerBanks[0]).text(question.FakeAnswer1);

        $("#" + wrongAnswerBanks[1]).attr("data-correct", false);
        $("#" + wrongAnswerBanks[1]).text(question.FakeAnswer2);

        $("#" + wrongAnswerBanks[2]).attr("data-correct", false);
        $("#" + wrongAnswerBanks[2]).text(question.FakeAnswer3);

        $('#question').delay(800).fadeIn();

		// after fadeIn starts, fit text
		setTimeout(function()
		{
			$quizgame.textfit($('#question-text'));
			$quizgame.textfit($('#1'));
			$quizgame.textfit($('#2'));
			$quizgame.textfit($('#3'));
			$quizgame.textfit($('#4'));
		}, 800);
    },
    setDefaultPointValues: function() {
        for (var i = 0; i < 4; i++) {
            $('#points-' + i).text($('#points-' + i).attr('default-points') * $('#question-point-multiplier').val());
        }
    },
    setAnswerClearAndReturn: function (correct, isFinal) {
        $('td[data-question-number=' + $('#question').attr("data-selected-question") + ']').removeClass('answered-right');
        $('td[data-question-number=' + $('#question').attr("data-selected-question") + ']').removeClass('answered-wrong');
        if (correct) {
            $('td[data-question-number=' + $('#question').attr("data-selected-question") + ']').addClass("answered-right");

        } else {
            $('td[data-question-number=' + $('#question').attr("data-selected-question") + ']').addClass("answered-wrong");
        }
        $('#question').fadeOut();
        if(isFinal) {
            $('#finalRoundTable').delay(800).fadeIn();  
        }
        else{
            $('#pointTable').delay(800).fadeIn();
        }
        $('.wrong-answer-choice').fadeOut();
        $('.right-answer-choice').fadeOut();
        $('.answer').removeClass("show-wrong");
        $('.answer').removeClass("show-correct");
    },
    clearAndReturn: function () {
        $('#question').fadeOut();
        $('#pointTable').delay(800).fadeIn();
        $('.wrong-answer-choice').fadeOut();
        $('.right-answer-choice').fadeOut();
        $('.answer').removeClass("show-wrong");
        $('.answer').removeClass("show-correct");
    }
}