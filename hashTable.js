const hashStringToInt = (s, tableSize) => {
  let hash = 3

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize
  }

  return hash
}

class HashTable {
  table = new Array(3)
  numItems = 0

  resize() {
    const newTable = new Array(this.table.length * 2)
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length)

          if (newTable[idx]) {
            return newTable[idx].push([key, value])
          }
          newTable[idx] = [[key, value]]
        })
      }
    })

    this.table = newTable
  }

  setItem = (key, value) => {
    this.numItems++
    const loadFactor = this.numItems / this.table.length
    if (loadFactor > 0.8) this.resize()

    const idx = hashStringToInt(key, this.table.length)

    if (this.table[idx]) {
      const item = this.table[idx].find((x) => x[0] === key)
      if (item) {
        item[1] = value
      } else {
        this.table[idx].push([key, value])
      }
    } else {
      this.table[idx] = [[key, value]]
    }
  }

  getItem(key) {
    const idx = hashStringToInt(key, this.table.length)
    if (!this.table[idx]) return null

    return this.table[idx].find((el) => el[0] === key)[1] 
  }

  removeItem(key) {
    const idx = hashStringToInt(key, this.table.length)
    if (!this.table[idx]) return null

    const changedItem = this.table[idx].filter(item => item[0] !== key)
    this.table[idx] = changedItem
  }
}

const myTable = new HashTable()
myTable.setItem('firstName', 'Islam')
myTable.setItem('firstName', 'Islam')
myTable.setItem('lastName', 'Shagaev')
myTable.setItem('age', '18')
myTable.setItem('date', '09.2002')

// myTable.removeItem('date')
// myTable.removeItem('age')
myTable.removeItem('firstName')
myTable.removeItem('lastName')
// console.log(myTable.table.length)
// console.log(myTable.table)
