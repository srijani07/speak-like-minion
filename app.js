var userInput = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#translate-btn");
var outputArea = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function generateURL(text) {
return serverURL + "?text=" + text;
}

function errorHandler(error) {
    alert("Sorry, there are some issues at our end :(");
    console.log("Error occured. "+error);

}
function clickHandler() {
    var inputText = userInput.value;
    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputArea.innerHTML = json.contents.translated;

        })
    .catch(errorHandler);
}


btnTranslate.addEventListener("click", clickHandler);