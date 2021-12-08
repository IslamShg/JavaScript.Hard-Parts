//* closure example, persists the value
const makeCounter = () => {
  let count = 0

  return () => {
    return count++
  }
}

const counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())