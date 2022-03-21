
let formBtn = document.querySelector("#form")
let inputText = document.querySelector(".inputText")
let wordArray = []
let wordTxt = document.querySelector("#wordTxt")
let letters = document.querySelectorAll(".letter")
let wordOfTheGame = "" 
let newWord = []
let emptyWrd = document.querySelector(".emptyWrd") 
let strikeCount = document.querySelector(".strikeCount")
let strikeCountInc = 6
let keyBoard = document.querySelector(".keyBoard")
let randomBtn = document.querySelector(".randomBtn")
let reveal = document.querySelector(".reveal")
let randomWord = []
let gameResult = document.querySelector(".gameResult")
let resetBtn = document.querySelector(".reset")
let howTo = document.querySelector(".howTo")
keyBoard.classList.add("hidden")
strikeCount.classList.add("hidden")
resetBtn.classList.add("hidden")


howTo.innerHTML = "Enter a word and hit start game to begin, or choose random word"


resetBtn.addEventListener("submit", (e) => { })

// asyn await function to grab data from word api
let getWord = async () => {
  let response = await axios.get("https://random-word-api.herokuapp.com/word");
  randomWord = response.data[0];
  wordArray = randomWord.toLowerCase().split("")
  keyBoard.classList.remove("hidden")
  strikeCount.classList.remove("hidden")
  formBtn.classList.add("hidden")
  randomBtn.classList.add("hidden")
  creatingBlank()
}
randomBtn.addEventListener("click", getWord)

strikeCount.innerHTML = "6 guesses remaining"
// listener for submit event
// taking the word from input and returning it as an array of strings stored in the variable wordArray 

formBtn.addEventListener("submit", (e) => {
  e.preventDefault()
  howTo.classList.add("hidden")
  keyBoard.classList.remove("hidden")
  strikeCount.classList.remove("hidden")
  randomBtn.classList.add("hidden")  
  const data = Object.fromEntries(new FormData(e.target).entries());
  let { word } = data
    wordArray = word.toLowerCase().split("")
    formBtn.reset()
    creatingBlank()
  formBtn.classList.add("hidden")
})
 // created a function to find the length of the input word 
 // and adding dashes corresponding to that length.
function creatingBlank() {                     
  for (let i = 0; i < wordArray.length; i++) {
  wordOfTheGame += "-" 
  }
  // emptywrd refrencing class in header and assigning it the value from function 
  // this was done to represent the amount of characters in the word thats selected
  emptyWrd.innerHTML = wordOfTheGame
  newWord = wordOfTheGame.split("")
}

//listening for click event on letters 
letters.forEach(letter => letter.addEventListener("click", (e) => {
  e.preventDefault() 
  if (wordArray.includes(letter.innerHTML)) {
    function find(letter, wordArray) {
      results = [];
      let index = wordArray.indexOf(letter.innerHTML);
      while (index != -1) {
          results.push(index);
          index = wordArray.indexOf(letter.innerHTML, index + 1);
      } 
      return results;
    }
    find(letter, wordArray)
    // iterating through results to know where to go
    // replacing at those indexes with the corresponding letter 
    results.forEach(index => newWord.splice(index, 1, letter.innerHTML))
    // using join to concatenate the items in newWrd array into emptyWrd
    emptyWrd.innerHTML = newWord.join("")
    //removing selected letter
    letter.classList.add("hidden")
   
    // created variable 
  } else if (!wordArray.includes(letter.innerHTML)) {
    strikeCountInc--
    strikeCount.innerHTML = strikeCountInc + " guesses remaining"
    letter.classList.add("hidden")
    if (strikeCountInc === 3) {
      // alert("hint: its a number")
    }
    else if (strikeCountInc === 0) {
      keyBoard.classList.add("hidden")
      gameResult.innerHTML = "You Lost!"
      resetBtn.classList.remove("hidden")
      reveal.innerHTML = "The word is " + randomWord
      reveal.innerHTML = "The word is " + wordArray.join("")
      strikeCount.classList.add("hidden")
      }
    
  }
  if (newWord.join() === wordArray.join()) {
    keyBoard.classList.add("hidden")
    resetBtn.classList.remove("hidden")
    gameResult.innerHTML = "You Win!"
    strikeCount.classList.add("hidden")
  }
}))

