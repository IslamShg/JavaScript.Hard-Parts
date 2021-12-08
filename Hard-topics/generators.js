function* generateSequence() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const generator = generateSequence()

// for (let item of generator) {
//   console.log(item)
// }

//* making object iterable
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
  console.log(key)
}
