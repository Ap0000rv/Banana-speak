var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-box");

function clickHandler() {
	if (txtInput.value === "") return;
	else {
		outputDiv.innerText = "Banana Translation is: " + txtInput.value;
	}
}

btnTranslate.addEventListener("click", clickHandler);
