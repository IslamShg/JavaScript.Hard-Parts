class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  printListData() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  insertLast(data) {
    const node = new Node(data, null)
    this.size++ 
    if (!this.head) return (this.head = node)

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = new Node(data, null)
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) return this.insertLast(data)
    if (index === 0 || this.size === 0) return this.insertFirst(data)

    const node = new Node(data, null)
    let count = 0
    let previous
    let current = this.head

    while (count < index) {
      previous = current
      count++
      current = current.next
    }

    node.next = current
    previous.next = node
    this.size++
  }

  getAt(index) {
    let count = 0
    let current = this.head

    while(current) {
      if (count === index) return current.data
      current = current.next
      count++
    }

    return
  }

  reverseList() {
    if (this.size < 2) return

    let cur = this.head
    let second = this.head.next
    let count = 0

    while(count < this.size) {
      cur.next = cur
      cur = second
      count++
    }
  }

  removeAt(index) {
    if (index > 0 && index >= this.size) return
    if (index === 0) return this.head = this.head.next

    let current = this.head
    let prev
    let count = 0

    while(count < index) {
      prev = current
      current = current.next
      count++
    }

    prev.next = current.next
    this.size--
  }

  removeFirst() {
    if (this.size === 0 || this.size === 1) return this.head === null
    this.head = this.head.next
  }

  removeLast() {
    if (this.size === 0) return
    if (this.size === 1) return this.removeFirst()
    
    let count = 0
    let current = this.head
    while(count < this.size - 2) {
      current = current.next
      count++
    }

    current.next = null
    this.size--
  }

  clearList() {
    this.head = null
    this.size = 0
  }
}

const ll = new LinkedList()

// ll.insertAt(1, 0)
// ll.insertAt(2, 1)
// ll.reverseList()
// ll.printListData()
// console.log(ll)


