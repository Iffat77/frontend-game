//Have a player enter a word that will be guessed during the game.
// The word is then hidden and represented by blank spaces.
//The second player then chooses letters,
// which are revealed if present.



//start
//<------->
// create input for player one and hide it
// display alphabet on screen or create letter bank
//begin game logic
//<-------->
//player2 guesses letters for word
//if the letters match the input letter is revealed
//if letters do not match add a point
//while this happens if player2 score reaches 6 they loose 
//if all letters of input word are revealed before player2 reaches 6 they win.


//players have an option to input the whole word


let enterBtn = document.querySelector("#form", ".enterBtn")
let inputText = document.querySelector(".inputText")
let wordPick = ""
let log = document.querySelector("#log")

// listener for form submission 
enterBtn.addEventListener("submit", (e) => {
  e.preventDefault()
  
  
})
// function to hold the value of the word player 1 picks in a variable
// inputText.addEventListener("change", (e) => {
//   e.preventDefault()
//     wordPick = e.target.value
//       console.log(wordPick)
// })

inputText.addEventListener("change", theWord)

function theWord(e) {
  log.textContent = e.target.value.hidden

  console.log(e.target.value)
}

// guessingBtn.addEventListener("submit", (e) => {
//   e.preventDefault(e)

// })

// guessingInput.addEventListener("change", (e) => {
//   e.preventDefault()
//     guessPick = e.target.value
// })
// console.log(guessPick)



// if (guessPick !== wordPick) {
//   console.log("Your on the right track")
// } else {
//   console.log( "YESS")
// } 
