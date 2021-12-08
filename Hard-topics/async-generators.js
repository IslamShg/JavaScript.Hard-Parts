function doWhenDataReceived(value) {
  returnNextElement.next(value)
}

// async generator
function* createFlow() {
  const data = yield fetch('http://twitter.com/will/tweets/1')
  console.log(data)
  // in 'data' constant will be the passed to next method value
}

const returnNextElement = createFlow() // will return a special it-e generator object with method - next()
const returnFutureData = returnNextElement.next() // will return a pending promise

returnFutureData().then(doWhenDataReceived)


//* with async/await 
async function createFlowAsyncAwait() {
  const data = await fetch('https://twitter.com/will/tweets/1')  
  console.log(data)
}