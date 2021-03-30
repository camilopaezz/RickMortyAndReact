const MAX_NUMBER = 671

export default function getRandomNumbers (many) {
  const arrNumber = []
  for (let i = 0; i < many; i++) {
    const xNumber = Math.floor(Math.random() * MAX_NUMBER)
    arrNumber.push(xNumber)
  }
  return arrNumber
}
