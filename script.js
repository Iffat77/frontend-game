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


let formBtn = document.querySelector("#form")
let inputText = document.querySelector(".inputText")
let wordArray = []
let wordTxt = document.querySelector("#wordTxt")

// listener for form submission 
formBtn.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries());
  let { word } = data
  wordArray = word.toLowerCase().split("")
  console.log(wordArray)

  
  formBtn.reset()
})

// .filer
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

