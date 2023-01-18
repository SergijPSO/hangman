const getPuzzle = (wordCount,  callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('Unable to fetch data', undefined)
    }
  })
  request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}

const getCountry = (countryCode, callback) => {
  
  const countryRequest = new XMLHttpRequest()

  countryRequest.addEventListener('readystatechange', (e) => { 
    
    if(e.target.readyState === 4 && e.target.status === 200){

      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.cca2 === countryCode)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback('Unavle to fetch data')
    }

  })

  countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
  countryRequest.send()
}
