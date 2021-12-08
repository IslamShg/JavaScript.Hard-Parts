//* simple iterator
const createFC = (arr) => {
  let i = 0
  return () => {
    const element = arr[i]
    i++
    return element
  }
}
const returnNextEl = createFC([1, 2, 3, 4])

//* analog of built-in iterator
const personProps = {
  name: "Islam",
  surname: "Shagaev",
  age: 18,
  [Symbol.iterator]() {
    const thisVal = this
    const keys = Object.keys(this)
    let i = 0
    return {
      next() {
        if (i < keys.length) {
          const returnObj = { value: thisVal[keys[i]], done: false }
          i++
          return returnObj
        }
        return { done: true }
      },
    }
  },
}

//* object is iterable now
for (let prop of personProps) {
  console.log('Object Value: ', prop)
}

//* calling built-in iterator 
const name = "Islam"
const iterator = name[Symbol.iterator]()
//* returns { value, done } object
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())