// Undefined and null will never be an Object

// Primitive values - string, number, boolean, null, undefined

//Prototype chain
//Object: myObject --> Object.prototype. --> null
//Array: myArray --> Array.prototype --> Object.prototype. --> null
//Function: myFunction  --> Function.prototype --> Object.prototype. --> null
//String: myString --> String.prototype --> Object.prototype. --> null
//Number: myNumber --> Number.prototype --> Object.prototype. --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype. --> null

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Caterpillar', 'Caterpillar'.length - 2 )

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.statusMessage)
console.log(game1.gameStatus)

window.addEventListener('keypress', function(e) {
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	puzzleEl.textContent = game1.puzzle
	guessesEl.textContent = game1.statusMessage
})