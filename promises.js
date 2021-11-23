//Operação assíncrona
// let randomNumber = 9

// setTimeout(() => {
//   randomNumber += 100
//   console.log(randomNumber)
// }, 2000)

// console.log(randomNumber)

//Promise
// const aPromise = new Promise((resolve, reject) => {
//   const aNumber = 37

//   // resolve(aNumber)
//   reject(aNumber)
// })

// aPromise
//   .then((value) => value)
//   .then((value) => {
//     console.log(value)
//   })
//   .catch((rejectValue) =>
//     console.log({ rejectValue })
//   })

const url = 'https://dog.ceo/api/breeds/image/random'
const dogImage = document.querySelector('[data-js="dog"]')

const validateHttpStatus = (dogData) => {
  if (!dogData.ok) {
    throw new Error(`HTTP error, status ${dogData.status}`)
  }
  return dogData.json()
}

const setDogImage = ({ message: url }) => {
  dogImage.setAttribute('src', url)
}

const handleRequestError = (error) => {
  console.log(error.message)
}

fetch(url) //requisição http
  .then(validateHttpStatus)
  .then(setDogImage)
  .catch(handleRequestError)
