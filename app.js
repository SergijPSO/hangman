// Undefined and null will never be an Object

// Primitive values - string, number, boolean, null, undefined

//Prototype chain
//Object: myObject --> Object.prototype. --> null
//Array: myArray --> Array.prototype --> Object.prototype. --> null
//Function: myFunction  --> Function.prototype --> Object.prototype. --> null
//String: myString --> String.prototype --> Object.prototype. --> null
//Number: myNumber --> Number.prototype --> Object.prototype. --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype. --> null

//HTTP(Hypertext Transfer Protocol)
//request - what we want to do
//Response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', function(e) {
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	render()
})

const render = () => {
	puzzleEl.textContent = game1.puzzle
	guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
	const puzzle = await getPuzzle('2')
	game1 = new Hangman(puzzle, 5)
	render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()