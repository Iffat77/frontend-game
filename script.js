

let formBtn = document.querySelector("#form")
let inputText = document.querySelector(".inputText")
let wordArray = []
let wordTxt = document.querySelector("#wordTxt")
let letters = document.querySelectorAll(".letter")
let wordOfTheGame = "" 
let newWord = []
let emptyWrd = document.querySelector(".emptyWrd") 
// listener for submit event
// taking the word from input and returning it as an array of srtings stored in the variable wordArray 
formBtn.addEventListener("submit", (e) => {
  e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    let { word } = data
    console.log(word)
    wordArray = word.toLowerCase().split("")
    formBtn.reset()
    creatingBlank()
})

 // created a function for refrencing the length of the input word 
 // and adding dashes corresponding to that length.
function creatingBlank() {                     
  console.log(wordArray.length)
  for (let i = 0; i < wordArray.length; i++) {
  wordOfTheGame += "-" 
  }
  //emptywrd refrencing class in header and assigning it the value from function 
  // this was done to represent the amount of characters in the word thats selected
  emptyWrd.innerHTML = wordOfTheGame
  newWord = wordOfTheGame.split("")
  // console.log(newWord)
  console.log(wordOfTheGame.length)
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
    console.log(letter.innerHTML)
    // iterating through results to know where to go
    // replacing at those indexes with the corresponding letter 
    results.forEach(index => newWord.splice(index, 1, letter.innerHTML))
    console.log(newWord)
    // using join to concatenate the items in newWrd array into emptyWrd
    emptyWrd.innerHTML = newWord.join("")
    //removing selected letter
    letter.remove()
  } else if (!wordArray.includes(letter.innerHTML)) {
  console.log("go get a job!")
  }
  // console.log(wordArray.includes(letter.innerHTML ))
}))




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

