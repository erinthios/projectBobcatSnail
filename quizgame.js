
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

function randomNumber(x, y) {
    return Math.floor(Math.random() * ((y - x) + 1) + x);
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
    players: [],
    currentQuestionNumber: 0,
    roundNumber: 1,
    selectedPlayer: 1,
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
    setNames: function () {
        for (var i = 1; i <= 3; i++) {
            $quizgame.players[i - 1].name = $('#player-name-input-' + i).val();
            $quizgame.players[i - 1].avatar = $('#player-avatar-input-' + i).val();
            $('#player-image-' + i).attr('src', 'playericons/' + $quizgame.players[i - 1].avatar + '.png');
            $quizgame.textfit($('#player-name-' + i).text($('#player-name-input-' + i).val()));
        }
    },
	happyImage: function($img, imagenum) {
		$img.attr('src', 'playericons/' + imagenum + '_happy.gif');
	},
	sadImage: function($img, imagenum) {
		$img.attr('src', 'playericons/' + imagenum + '_sad.gif');
	},
	defaultImage: function ($img, imagenum){
		$img.attr('src', 'playericons/' + imagenum + '.png');
	},
    openAvatar: function () {
        $('.avatar-select').css('background-image', 'url("playericons/bga.png")');
        var playerName = $ ('#player-name-input-' + $quizgame.selectedPlayer).val ();
        $ ('#avatarSelectTitle').text (playerName + "'s Avatar Selection");
        $('#pointLayout').fadeOut();
        $('#playerSelect').delay(500).fadeIn();
    },
    closeAvatar: function () {
        $('.avatar-select').css('background-image', 'url("playericons/bga.png")');
        $('#playerSelect').fadeOut();
        $('#pointLayout').delay(500).fadeIn();
    },
    nextRound: function (path) {
        var num = randomNumber(0, 5);
        switch(num) {
            case 0:
                $('#quiz-round-text').text("Next Up: A Round of Drawbage!");
                break;
            case 1:
                $('#quiz-round-text').text("Next Up: Win! Lose! Drawbage!");
                break;
            case 2:
                $('#quiz-round-text').text("Next Up: Drawbage, or how I learned to stop worrying and draw a nude Dr. Wily.");
                break;
            case 3:
                $('#quiz-round-text').text("Next Up: Drawing Sign!!?! Wait, I mean Round!?!!!");
                break;
            case 4:
                $('#quiz-round-text').text("Next Up: People drawing poor artwork.");
                break;
            case 5:
                $('#quiz-round-text').text("Next Up: Stuff to laugh at. Or with. But probably at. Drawbage.");
                break;
            default:
                $('#quiz-round-text').text("Next Up: Drawbage!");
                break;
        }
        $('#pointTable').fadeOut();
        $('.quizzler-image').fadeOut();
        $('.completed-answers').fadeOut();
        $('.round').fadeOut();
        $('.question-bubble').fadeOut();
        $('#finalRoundTable').fadeOut();
        $('#sidebar-2').fadeOut();
        setTimeout(function() {
            $quizgame.loadNewGame(path, true);
            $quizgame.clearAndReturn();
            $quizgame.roundNumber = $quizgame.roundNumber + 1;
            $('#roundNumber').text('Round ' + $quizgame.roundNumber);
        }, 400);
        $('#bonusRound').delay(500).fadeIn();
        $('#bonusRound').delay(5000).fadeOut();
        $('#pointTable').delay(6500).fadeIn();
        $('#sidebar-2').delay(6500).fadeIn();
        $('.quizzler-image').delay(6500).fadeIn();
        $('.completed-answers').delay(6500).fadeIn();
        $('.round').delay(6500).fadeIn();
        $('.question-bubble').delay(6500).fadeIn();
    },
    newRound: function(path) {
        $('#pointTable').fadeOut();
        $('.completed-answers').fadeOut();
        $('.quizzler-image').fadeOut();
        $('.round').fadeOut();
        $('#finalRoundTable').fadeOut();
        $('#sidebar-2').fadeOut();
        setTimeout(function() {
            $quizgame.loadNewGame(path);
            $quizgame.clearAndReturn();
        }, 400);
        $('#pointTable').delay(500).fadeIn();
        $('#sidebar-2').delay(500).fadeIn();
        $('.quizzler-image').delay(500).fadeIn();
        $('.completed-answers').delay(500).fadeIn();
        $('.round').delay(500).fadeIn();
        $('.question-bubble').delay(500).fadeIn();
    },
    finalRound: function (path) {
        $('#pointTable').fadeOut();
        $('.completed-answers').fadeOut();
        $quizgame.clearAndReturn();
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
    loadNewGame: function (path, keepPoints) {
        if (!isCalled) {
            $quizgame.clearAndReturn();
            isCalled = true;
			if(!keepPoints){
            $quizgame.roundNumber = 1;
            $quizgame.players = [];
            $quizgame.resetQuestionBubbles();
				for (var i = 1; i <= 3; i++) {
					$('#player-points-' + i).text('0');
					var player = {name: $('#player-name-' + i).text(), points: 0, avatar: $('#player-avatar-input-' + i).val(),avatarNum: i};
					$quizgame.players[i - 1] = player;
				}
            $('#roundNumber').text('Round 1');
			}
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
	playRight() {
		$('#right-sound').clone()[0].play();
	},
	playWrong() {
		$('#wrong-sound').clone()[0].play();
	},
	playClose() {
		$('#close-sound').clone()[0].play();
	},
	addManualPoints: function() {
		var player = $quizgame.players[$quizgame.selectedPlayer - 1];
		player.points = player.points + parseInt($('#manual-points').val());
		$('#player-points-' + $quizgame.selectedPlayer).text(player.points);
	},
    isCorrect: function (correct, timeup, isFinal) {
        var player = $quizgame.players[$quizgame.selectedPlayer - 1];
        $('[data-correct="false"]').addClass("show-wrong");
        $('[data-correct="true"]').addClass("show-correct");
        var questionTd = $('td[data-question-number=' + $('#question').attr("data-selected-question") + ']');
        var pointValue = (questionTd.parent().children().index(questionTd) + 1) * $('#question-point-multiplier').val();
        if (correct) {
            $('#right-sound').clone()[0].play();
            player.points = player.points + pointValue;
            $('#player-points-' + $quizgame.selectedPlayer).text(player.points);
			$quizgame.happyImage($('#player-image-' + $quizgame.selectedPlayer), player.avatarNum);
            $('#question-bubble-' + $quizgame.currentQuestionNumber).toggleClass("show-correct");
            $('.right-answer-choice').fadeIn();
        } else {
            $('#wrong-sound').clone()[0].play();
			if(pointValue > 2) {
				pointValue = 2;
			}
			$quizgame.sadImage($ ('#player-image-' + $quizgame.selectedPlayer), player.avatarNum);
            player.points = player.points - pointValue;
            $('#player-points-' + $quizgame.selectedPlayer).text(player.points);
            $('#question-bubble-' + $quizgame.currentQuestionNumber).toggleClass("show-wrong");
            $('.wrong-answer-choice').fadeIn();
        }

        if (player.points === 0) {
            $('#player-points-' + $quizgame.selectedPlayer).css('color', 'white');
        }
        else if (player.points >= 1) {
            $('#player-points-' + $quizgame.selectedPlayer).css('color', 'cyan');
        } else if (player.points <= -1) {
            $('#player-points-' + $quizgame.selectedPlayer).css('color', 'red');
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
        $quizgame.currentQuestionNumber = $quizgame.currentQuestionNumber + 1;
        $('#question').fadeOut();
        if (isFinal) {
            $('#completed-answers').delay(800).fadeOut();
            $('#finalRoundTable').delay(800).fadeIn();  
        }
        else {
            if (!correct || $quizgame.currentQuestionNumber >= 4) {
                $quizgame.resetQuestionBubbles();
            }
            $('#pointTable').delay(800).fadeIn();
        }
        $('.wrong-answer-choice').fadeOut();
        $('.right-answer-choice').fadeOut();
        $('.answer').removeClass("show-wrong");
        $('.answer').removeClass("show-correct");
    },
    resetQuestionBubbles: function () {
        $quizgame.currentQuestionNumber = 0;
        for (var i = 0; i <= 4; i++) {
            $('#question-bubble-' + i).removeClass("show-correct");
            $('#question-bubble-' + i).removeClass("show-wrong");
        }
    },
    clearAndReturn: function () {
        $('.answer').removeClass("show-wrong");
        $('.answer').removeClass("show-correct");
        $('td').removeClass('answered-right');
        $('td').removeClass('answered-wrong');
        $quizgame.resetQuestionBubbles();
        
    }
}