

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

keyBoard.classList.add("hidden")
strikeCount.classList.add("hidden")




// fetch("https://random-word-api.herokuapp.com/word")
//   .then(response => response.json())
//   .then(data => {
//     renderResults(data)
//   })


// asyn await function to grab data from word api
let getWord = async () => {
  let response = await axios.get("https://random-word-api.herokuapp.com/word");
  let randomWord = response.data[0];
  wordArray = randomWord.toLowerCase().split("")
  keyBoard.classList.remove("hidden")
  strikeCount.classList.remove("hidden")
  formBtn.classList.add("hidden")
  randomBtn.classList.add("hidden")
  creatingBlank()

  console.log(wordArray)
}

// function creatingBlank2() {                     
//   console.log(randoms.length)
//   for (let i = 0; i < randoms.length; i++) {
//   wordOfTheGame += "-" 
//   } 
//   emptyWrd.innerHTML = wordOfTheGame
//   newWord = wordOfTheGame.split("")
  
//   console.log(wordOfTheGame.length)

// }

// calling async function on click event for randomBtn

randomBtn.addEventListener("click", getWord)


strikeCount.innerHTML = "6 guesses remaining"
// listener for submit event
// taking the word from input and returning it as an array of strings stored in the variable wordArray 

formBtn.addEventListener("submit", (e) => {
  e.preventDefault()
  keyBoard.classList.remove("hidden")
  strikeCount.classList.remove("hidden")
    
  const data = Object.fromEntries(new FormData(e.target).entries());
  let { word } = data
    wordArray = word.toLowerCase().split("")
    formBtn.reset()
    creatingBlank()
    formBtn.classList.add("hidden")
})

 // created a function for refrencing the length of the input word 
 // and adding dashes corresponding to that length.
function creatingBlank() {                     
  console.log(wordArray.length)
  for (let i = 0; i < wordArray.length; i++) {
  wordOfTheGame += "-" 
  }
  // emptywrd refrencing class in header and assigning it the value from function 
  // this was done to represent the amount of characters in the word thats selected
  emptyWrd.innerHTML = wordOfTheGame
  newWord = wordOfTheGame.split("")
  // console.log(newWord)
  console.log(wordOfTheGame.length)


}
//<----------------------------------------------------------------------------->
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
    console.log(letter.innerHTML)
    // iterating through results to know where to go
    // replacing at those indexes with the corresponding letter 
    results.forEach(index => newWord.splice(index, 1, letter.innerHTML))
    console.log(newWord)
    console.log(wordArray)
    // using join to concatenate the items in newWrd array into emptyWrd
    emptyWrd.innerHTML = newWord.join("")
    //removing selected letter
    letter.classList.add("hidden")
    
    // created variable 
  } else if (!wordArray.includes(letter.innerHTML)) {
    strikeCountInc--
    console.log(strikeCountInc)
    strikeCount.innerHTML = strikeCountInc + " guesses remaining"
    letter.remove()
    console.log("go get a job!")
    if (strikeCountInc === 3) {
      // 
      // alert("hint: its a number")
    }
    else if (strikeCountInc === 0) {
    keyBoard.classList.add("hidden")
        alert("YOU LOSE")
      }
    
  }
  console.log(newWord, wordArray)
  if (newWord.join() === wordArray.join()) {
    keyBoard.classList.add("hidden")
    window.alert("Yeah you're smart ....")
  }
}))

// 2 settimeouts with hidden


// find all the indices where the letters exsist
// store an array in new variable to hold wordOfTheGame 
// use splice to substitute what you need 
// then join to array wordOfTheGame
// update letters that do match in the UI




// if the letter matches replace the "-" in wordoOfTheGame with letter.innerHTML and remove that letter from LETTERS


// else increment score by 1 and removive that letter from LETTERS










// console.log(letters[3].innerText)

// compare letters in wordArray to letter clicked 

// function compareLetter() {
//   if(DataTransfer.letter ===)
// }



// document.getElementById("hidden").style.display = "none";

// .filer543
// find index of each 

// create blank space with underline to hold wordArray
// nested arrays to hold keyboard choices 
// event listener & query all on keyboard to listen for letter choice 
// - conditional 
// if selected letter exists in wordaArray then display visible 
// selected letters are no longer clickable on keyboard 
// -- clicked keys can be stored in a new variable 
// else if add a strike to player score 
// create while looop stating 
// after each input - while player score is less than 6 
// continue 
//else player looses 
//

