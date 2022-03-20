# <strong>  [Guess Work](https://iffat77.github.io/frontend-game/)</strong>

![wireframe](https://res.cloudinary.com/dsk8h1adc/image/upload/v1647814424/Screen_Shot_2022-03-20_at_6.13.19_PM_hn3r28.png)
<br>
<br>

# Project Overview

I created a variation of hangman called "Guess Work", one player has the option to enter a word which will be guessed by the second player. There is on on screen guess counter which stars at 6 and begins to decrement after incorrect guesses.
If a player runs out of guesses they loose the game, if they can guess the word before the counter reaches 0 they win.

## Thought Process
- My approach to this project was to first build out the skeleton in HTML, then focus on getting all the logic necessary for the mvp working in javascript. Styling was the last focus and I wanted to make sure there was a clean and easy to understand UI.

## MVP & Post MPV

### MVP
- Have a player enter a word which will be guessed
- The word is hidden and represented by dashes
- The second player then chooses letters, which are revealed if present 

### Post MVP
- Added a guess counter which decrements after each incorrect guess
- Added alerts if a player wins or looses
- Added random word button which gets words from a random word API
- Word is revealed when player looses

## Challenges
- I was really challenged in the post MVP. This was because I decided to add a "random" button which would allow a player to generate a random word to guess. For me the difficulty was in connecting the random button to work with my exsisting code. I was able to fund a solution by incorporating the code that was in my exsisting eventlister into the getWord function.

## Built With
 - HTML
 - CSS
 - Javascript

 
