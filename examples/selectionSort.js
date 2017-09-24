// 选择排序
Array.prototype.selectSort = function () {
  let _arr = []
  for (let len = this.length; len > 0; len--) {
    let max = Math.max.apply(Math, this)
    let index = this.indexOf(max)
    this.splice(index, 1)
    _arr.push(max)
  }
  return _arr
}

let arr = [1, 2, 3, 4, 4]
console.log(arr.selectSort())

// standard selectSort
Array.prototype.selectSort = function () {
  for (let i = 0, len = this.length; i < len; i++) {
    let k = i
    temp
    for (let j = 1; j < len; j++) {
      if (this[k] > this[j]) {
        k = j
      }
      if (k !== i) {
        temp = this[i]
        this[i] = this[k]
        this[k] = temp
      }
    }
  }
  return this
}
