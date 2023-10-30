const defBox = document.getElementById("definitionBox");
const userInput = document.getElementById("userInput");
const searchButton = document.getElementById("searchButton");

//objects for the different words
const yes = {
    word: "yes",
    partOfSpeech: "noun",
    definitions: ["Used to give an affirmative response.",
                    "Used as a response to someone addressing one or otherwise trying to attract one's attention."]
}
const panacea = {
    word: "panacea",
    partOfSpeech: "noun",
    definitions: ["An answer or solution for all problems or difficulties."]
}
const concatenation = {
    word: "concatenation",
    partOfSpeech: "noun",
    definitions: ["A series of interconnected or interdependent things or events."]
}
const saw = {
    word: "saw",
    partOfSpeech: "verb",
    definitions: ["Cut (something) using a saw.",
                    "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
}
const found = {
    word: "found",
    partOfSpeech: "adjective",
    definitions: ["Having been discovered by chance or unexpectedly.", 
                    "(of a ship) Equipped; Supplied."]
}
const crane = {
    word: "crane",
    partOfSpeech: "verb",
    definitions: ["Stretch out one's body or neck in order to see something.",
                "Move (a heavy object) with a crane."]
}
const minute = {
    word: "minute",
    partOfSpeech: "noun",
    definitions: ["A period of time equal to sixty seconds or a sixtieth of an hour.",
                    "A sixtieth of a degree of angular measurement (symbol: ʹ)"]
}
const grotesque = {
    word: "grotesque",
    partOfSpeech: "adjective",
    definitions: ["Comically or repulsively ugly or distorted."]
}
const label = {
    word: "label",
    partOfSpeech: "noun",
    definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
}
const debacle = {
    word: "debacle",
    partOfSpeech: "noun",
    definitions: ["A sudden and ignominious failure; a fiasco."]
}    


//array to store all word objects
var allWords = [yes, panacea, concatenation, saw, found, crane, minute, grotesque, label, debacle];

//function searches word in the allWords array and creates the definition elements
function searchWord(){
    defBox.replaceChildren();
    var input = userInput.value.toLowerCase();
    for (var i = 0; i < allWords.length; i++){
        if (allWords[i].word === input){
        var searchedWord = document.createElement("h1");
        searchedWord.innerText = input;

        var part = document.createElement("h3");
        part.innerText = allWords[i].partOfSpeech; 

        var def = document.createElement("p");

        //checks if there's multiple definitions
        if (allWords[i].definitions.length > 1){
            for(var j = 0; j < allWords[i].definitions.length; j++){
                def.innerText = def.innerText + "\n\n" + (j+1) + ". " + allWords[i].definitions[j];
            }
        }
        else{
            def.innerText = allWords[i].definitions;
        }
     
        defBox.appendChild(searchedWord);
        defBox.appendChild(part);
        defBox.appendChild(def);
        return;
        }
        //if the word is not in the dictionary
        else if (i === allWords.length - 1){
            var notFound = document.createElement("h3");
            notFound.innerText = "Sorry, \"" + input + "\" is not in the dictionary.";
            defBox.appendChild(notFound);
            return;
        }
    }
    
}

//searches the user's word once the search button is clicked
searchButton.addEventListener("click", searchWord);