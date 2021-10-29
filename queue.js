class Queue {
  constructor() {
    this.queue = []
    this.first = 0
    this.count = 0
  }

  add(data) {
    this.queue[this.count] = data
    this.count++
  }

  remove() {
    this.first++
  }

  get isEmpty() {
    return this.first === this.count
  }

  get print() {
    return this.queue.join(' ')
  }

  get getLast() {
    if (this.isEmpty) return null
    return this.queue[this.count - 1]
  }

  get getFirst() {
    if (this.isEmpty) return null
    return this.queue[this.first]
  }
}

const queue = new Queue()

queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(3)
queue.add(5)
queue.add(6)

queue.remove()
queue.remove()
queue.remove()
queue.remove()
queue.remove()


// console.log(queue.print)
// console.log(queue)
// console.log(queue.getFirst)
