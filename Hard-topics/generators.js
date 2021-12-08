//* creating iterable object
function generateSequense() {
  let i = 0
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (i > 4) return { done: true }
          const value = i
          i++
          return { value, done: false }
        },
      }
    },
  }
}
const generator1 = generateSequense()
for (let item of generator1) {
  // console.log(item)
}

//* creating iterable object using generators
function* generateSequenceWithGenerator() {
  yield 1
  yield 2
  yield 3
  yield 4
}
const generator2 = generateSequenceWithGenerator()
for (let item of generator2) {
  // console.log(item)
}

//* making object iterable using generator
const personProps = {
  name: "Islam",
  surname: "Shagaev",
  age: 18,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key]
    }
  },
}
for (const key of personProps) {
  // console.log(key)
}
