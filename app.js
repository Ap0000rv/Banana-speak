var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-box");

// var serverURL = "https://api.funtranslations.com/translate/minion.json";

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTransitionalURL(input) {
	return serverURL + "?text=" + input
}

function errorHandler(error) {
	console.log("Error Occurs ", error);
}

function clickHandler() {
	var inputText = txtInput.value;

	fetch(getTransitionalURL(inputText))
		.then(response => response.json())
		.then(json => {
			outputDiv.innerText = json.contents.translated;
		})
		.catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
