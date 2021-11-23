// //Higher Order Functions
// document.addEventListener('click', handleDocumentClick)

// function handleDocumentClick() {
//   console.log('Clicou no documento!')
// }

//-------------- // --------------------

// function getMultiplier(multiplier) {
//   return function (aNumber) {
//     return aNumber * multiplier
//   }
// }
const getMultiplier = (multiplier) => (aNumber) => aNumber * multiplier

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(double(1))

//--------------- // ---------------------
//ARRAY FUNCTIONS (MAP)(FILTER)(REDUCE)

//MAP()
const number = [1, 2, 3]
const squareNumbers = number.map((item) => item ** 2)

//---
const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: "The Handmaid's Tale", releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Breaking Bad', releaseYear: 2019 },
]

const showNames = tvShows.map(({ name }) => name)
console.log(showNames)

//-------------------//--------------------

//FILTER()
const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter((item) => item > 37)

console.log(numbersGreaterThan37)

//--
const tarantinoMovies = [
  { name: 'Bastardos Inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro irmãos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era Uma Vez Em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'A Prova da Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 },
]

const moviesBefore2000 = tarantinoMovies.filter(
  ({ release }) => release < 2000
)
console.log(moviesBefore2000)

//--
const firstTravelerCities = [
  'Sydney',
  'Berlin',
  'Lisboa',
  'Sófia',
  'Praga',
  'Bali',
  'Florianópolis',
]

const secondTravelerCities = [
  'Praga',
  'Roma',
  'Chiang Mai',
  'Lisboa',
  'Zagreb',
]

const commonCities = firstTravelerCities.filter((city) =>
  secondTravelerCities.includes(city)
)

console.log(commonCities)

//--------------------------//-------------------------

//REDUCE
const numbers = [1, 2, 3]
const sum = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sum)

//--
//transformando objeto de um array em string formatado em lista
const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.9 },
  { name: 'Dark Souls III', price: 149.99 },
]

const productList = cart.reduce(
  (accumulator, { name }) => `${accumulator}- ${name}\n`,
  ''
)

console.log(productList)

//--
const people = [
  { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 5, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 13, name: 'Aline', age: 19, federativeUnit: 'Brasilia' },
]

const ageFrequency = people.reduce((accumulator, { age }) => {
  accumulator[age] = accumulator[age] + 1 || 1

  return accumulator
}, {})

console.log(ageFrequency)
//resultado desejado: {18: 3, 19: 2, 20: 1}

//--------------------//--------------

// Explorando a combinação dos três métodos encadeados
const topBrazilMovies = [
  {
    title: 'Vingadores: Ultimato',
    peopleAmount: 19_686_119,
    distributedBy: 'Disney',
  },
  {
    title: 'Titanic',
    peopleAmount: 17_050_000,
    distributedBy: 'Paramount / 20th Century',
  },
  {
    title: 'O Rei Leão',
    peopleAmount: 16_267_649,
    distributedBy: 'Disney',
  },
  {
    title: 'Vingadores: Guerra Infinita',
    peopleAmount: 14_572_181,
    distributedBy: 'Disney',
  },
  {
    title: 'Tubarão',
    peopleAmount: 13_035_00,
    distributedBy: 'Universal',
  },
  {
    title: 'Nada a Perder',
    peopleAmount: 11_944985_119,
    distributedBy: 'Paris Filmes',
  },
  {
    title: 'Os Dez Mandamentos',
    peopleAmount: 11_259_536,
    distributedBy: 'Paris / Downtown Filmes',
  },
  {
    title: 'Tropa de Elite 2',
    peopleAmount: 11_204_815,
    distributedBy: 'Zazen',
  },
  {
    title: 'Vingadores',
    peopleAmount: 10_968_065,
    distributedBy: 'Disney',
  },
  {
    title: 'Vingadores: Ultimato',
    peopleAmount: 10_735_524,
    distributedBy: 'Embrafilme',
  },
]

console.log(
  topBrazilMovies
    .filter(({ distributedBy }) => distributedBy === 'Disney')
    .reduce(
      (accumulator, { peopleAmount }) => accumulator + peopleAmount,
      0
    )
)

//--
//Qual a idade dos cães em idade humana
const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' },
]

const getDogs = ({ type }) => type === 'Dog'

const convertToHumanAge = ({ name, age }) => ({
  name,
  convertedAge: age * 7,
})

console.log(pets.filter(getDogs).map(convertToHumanAge))
