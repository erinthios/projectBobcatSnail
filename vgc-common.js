function getConsoleNameForId(id) {
	switch (id) {
		case 0:
			return "GEN";
		case 1:
			return "SNES";
		case 2:
			return "NES";
		case 3:
			return "GBA";
		default:
			return "???";
	}
}

function isSaveState(value) {
	return value["SaveStateDownloadLocation"] === "";
}
function isRelay(value) {
	return value["Relay"] > 0;
}
function isNotOnlyRelay(value) {
	return value["Relay"] != 2;
}
function isHard(value) {
	return value["Difficulty"] >= 4;
}
function isEasy(value) {
	return !isHard(value);
}
function isRare(value) {
	return value["Rare"] > 0;
}

function markIdAsSeen(id) {
	// don't actually mark if in debug mode
	var isDebug = window.location.href.includes('erinthios.com'); // test server, always debug
	var querystring = window.location.href.split('?')[1];
	if (querystring) {
		var queryParams = new URLSearchParams(querystring);
		var debug = queryParams.get('debug');
		if (debug) {
			isDebug = true;
		}
	}
	if (isDebug) {
		console.log('markIdAsSeen('+id+') called in debug mode (no POST)');
		return;
	}
	
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('POST', 'https://arcadepit.net/api/gamebler/hasseen?id='+id, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			console.log('markIdAsSeen('+id+') response: '+xobj.responseText);
		}
	};
	xobj.send(null);
}