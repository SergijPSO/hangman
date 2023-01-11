
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.gameStatus = 'playing'
  }
  
  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    if (this.remainingGuesses === 0) {
      this.gameStatus = 'failed'
    } else if (finished) {
      this.gameStatus = 'finished'
    } else {
      this.gameStatus = 'playing'
    }
  }

  get statusMessage() {
    switch(this.gameStatus) {
      case 'playing':
        return `Left guesses: ${this.remainingGuesses}`
      
      case 'finished':
        return `Great work! You guesss the word - "${this.word.join('')}" `

      case 'failed':
        return `Nicetry try!  You should try once again! The word was: "${this.word.join('')}" `  
    } 
  }

  get puzzle(){ 
    let puzzle = ''
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
  
    if (this.gameStatus !== 'playing') {
      return
    }
  
    if (isUnique) {
      this.guessedLetters.push(guess)
    }
  
    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }

    this.calculateStatus()
  }
}