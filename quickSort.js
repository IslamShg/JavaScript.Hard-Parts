
//* no mutation
// const quickSort = arr => {
//   if (arr.length < 2) return arr

//   let pivot = arr[0]
//   const left = []
//   const right = []

//   for (let i = 1; i < arr.length; i++) {
//     arr[i] <= pivot
//       ? left.push(arr[i])
//       : right.push(arr[i])
//   }

//   return quickSort(left).concat(pivot, quickSort(right))
// }
// const sorted = sortColors(arrToSort)
// console.log(sorted)

//* mutation
const items = [5, 3, 7, 6, 2, 9]
function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex]

  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right //right pointer

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j) //sawpping two elements
      i++
      j--
    }
  }
  return i
}

function quickSort(items, left, right) {
  let index
  if (items.length > 1) {
    index = partition(items, left, right) //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right)
    }
  }

  return items
}

quickSort(items, 0, items.length - 1)
