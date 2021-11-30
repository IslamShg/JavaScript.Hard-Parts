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


console.log(returnNextEl())
console.log(returnNextEl())
console.log(returnNextEl())
console.log(returnNextEl())
console.log(returnNextEl2())
