class TreeNode {
  constructor(data) {
    this.data = data
    this.children = []
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  add(data, toNodeData) {
    const node = new TreeNode(data)
    const parent = toNodeData ? this.findBFS(toNodeData) : null

    if (!this.root) this.root = node
    else if (parent) parent.children.push(node)
  }

  findBFS(data) {
    // const queue = [this.root]
    let _node = null

    this.traverseBFS((node) => {
      if (node.data === data) {
        _node = node
      }
    })

    return _node
  }

  traverseBFS(cb) {
    if (!cb) return 
    const queue = [this.root]
  
    while (queue.length) {
      const node = queue.shift()
      cb(node)

      for (const child of node.children) {
        queue.push(child)
      }
    }
  }
} 


(function test() {
  const tree = new Tree()
  tree.add('Node1')
  tree.add('Node2', 'Node1')
  tree.add('Node3', 'Node2')

  tree.traverseBFS((node) => console.log(`Current node ${node.data}`))

  console.log(tree)
})()