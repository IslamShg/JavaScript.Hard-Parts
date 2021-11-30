//! merge Sort

const arr = [1, 3, 5, 6, 7, 4]

//* return new sorted arr
const sort = (arr) => {
  if (arr.length < 2) return arr

  let mid = Math.floor(arr.length / 2)
  let leftHalf = arr.slice(0, mid)
  let rightHalf = arr.slice(mid)

  const left_side = sort(leftHalf)
  const right_side = sort(rightHalf)

  return merge(left_side, right_side)
}

const merge = (arr1, arr2) => {
  const mergedArr = []

  let i = (j = k = 0)
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr[k] = arr1[i]
      i++
    } else {
      mergedArr[k] = arr2[j]
      j++
    }
    k++
  }

  while (i < arr1.length) {
    mergedArr[k] = arr1[i]
    i++
    k++
  }

  while (j < arr2.length) {
    mergedArr[k] = arr2[j]
    j++
    k++
  }

  return mergedArr
}
// console.log(sort(arr))


//* mutate arr
const sortM = (arr) => {
  if (arr.length < 2) return arr

  let mid = Math.floor(arr.length / 2)
  let leftHalf = arr.slice(0, mid)
  let rightHalf = arr.slice(mid)

  sortM(leftHalf)
  sortM(rightHalf)

  let i = (j = k = 0)
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      arr[k] = leftHalf[i]
      i++
    } else {
      arr[k] = rightHalf[j]
      j++
    }
    k++
  }

  while (i < leftHalf.length) {
    arr[k] = leftHalf[i]
    i++
    k++
  }

  while (j < rightHalf.length) {
    arr[k] = rightHalf[j]
    j++
    k++
  }

  return arr
}

sortM(arr)    
// console.log(arr)