const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if(response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get data')
  }
}

const getCurrentCountry = async () => {
	const location = await getLocation()
  return getCountry(location.country)
  // const country = await getCountry(location.country)
  // return country
}

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  if(response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.cca2 === countryCode)
  } else {
    throw new Error('Unable to fetch data')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c')

  if(response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch location')
  }

}
