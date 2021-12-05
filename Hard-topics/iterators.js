const createFC = (arr) => {
  let i = 0
  return () => {
    const element = arr[i]
    i++
    return element
  }
}

const returnNextEl = createFC([1, 2, 3, 4])
const returnNextEl2 = createFC([1, 2, 3, 4])

// console.log(returnNextEl2())

// make non iterable object iterable
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

for (let prop of personProps) {
  console.log(prop)
}
