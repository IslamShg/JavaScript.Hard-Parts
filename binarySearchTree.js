class BSTNode {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BST {
  constructor(value) {
    this.root = new BSTNode(value)
    this.count = 0
  }

  insert(value) {
    const newNode = new BSTNode(value)

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) node.left = newNode
        else searchTree(node.left)
      } else {
        if (!node.right) node.right = newNode
        else searchTree(node.right)
      }
    }

    searchTree(this.root)
    this.count++
  }

  get size() {
    return this.count
  }

  get min() {
    let currentNode = this.root

    while (currentNode.left) currentNode = currentNode.left
    return currentNode
  }

  get max() {
    let currentNode = this.root

    while (currentNode.right) currentNode = currentNode.right
    return currentNode
  }

  contains(value) {
    let currentNode = this.root

    while (currentNode) {
      if (value === currentNode.value) return currentNode
      else if (value < currentNode.left) currentNode = currentNode.left
      else currentNode = currentNode.right
    }

    return false
  }

  dfsPostOrder() {
    const result = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if (node.right) traverse(node.right)
    }
    
    traverse(this.root)
    return result
  }

  dfsPreOrder() {
    const result = []

    const traverse = (node) => {
      result.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }

  dfsInOrder() {
    const result = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.value)
    }
  
    traverse(this.root)
    return result
  }

  bfs() {
    const result = []
    const queue = [this.root]

    while (queue.length) {
      const curNode = queue.shift()
      result.push(queue)
      curNode.right && queue.push(curNode.right)
      curNode.left && queue.push(curNode.left)
    }
    return result
  }
}

const bst = new BST(15)
bst.insert(36)
bst.insert(39)
bst.insert(3)
bst.insert(2)
bst.insert(28)
bst.insert(12)

// console.log(bst.contains(12))
// console.log(bst)
// console.log(bst.contains(12))
// console.log(bst.dfsPreOrder())
