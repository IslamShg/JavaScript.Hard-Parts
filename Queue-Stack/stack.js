class Stack {
  constructor(val) {
    this.items = []
    this.count = 0
    }

  push(element) {
    this.items[this.count] = element
    this.count++
    return this.count - 1
  }

  pop() {
    if (!this.count) return null
    const deletedItem = this.items[this.count - 1]
    this.count--
    return deletedItem
  }

  get peek() {
    if (!this.count) return null
    return this.items[this.count - 1]
  }  

  get isEmpty() {
    return this.count === 0
  }

  get checkSize() { 
    return this.count
  }

  get print() {
    return this.items.join(' ')
  }

  clear() {
    this.items = []
    this.count = 0
    return this.items 
  }
}   

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

   