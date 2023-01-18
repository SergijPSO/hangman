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
const game1 = new Hangman('Request', 5)

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

getPuzzle('2',(error, puzzle) => {
	if(error) {
		console.log(`Error is ${error}}`)
	} else {
		console.log(puzzle)
	}
})

getCountry('UA', (error, country) => {
	if(error) {
		console.log(error)
	} else {
		console.log(`Country name: ${country.name.common}`)
	}
})

// Making http request 
// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e) => {
// 	if (e.target.readyState === 4 && e.target.status === 200) {
// 		const data = JSON.parse(e.target.responseText)
// 		console.log(data)
// 	} else if (e.target.readyState === 4) {
// 		console.log('Unable to fetch data')
// 	}
// })


// const countryCode = 'UA'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
	
// 	if(e.target.readyState === 4 && e.target.status === 200){

// 		const data = JSON.parse(e.target.responseText)
// 		const country = data.find((country) => country.cca2 === countryCode)
// 			console.log(country.name.common)
// 	} else if (e.target.readyState === 4) {
// 			console.log('Unable to fetch data')
// 	}

// })

// countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
// countryRequest.send()
