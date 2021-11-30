const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['MEX', 'LAX'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['MEX', 'LOS'],
  ['LIM', 'BKK'],
]

class Graph {
  // #vertices = new Set()
  #adjacencyList = new Map()

  addNode(airport) {
    this.#adjacencyList.set(airport, new Set())
  }

  addEdge(origin, destination) {
    this.#adjacencyList.get(origin).add(destination)
    this.#adjacencyList.get(destination).add(origin)
  }
}

const graph = new Graph()

airports.forEach(val => graph.addNode(val))
routes.forEach(route => graph.addEdge(...route))

console.log(graph)