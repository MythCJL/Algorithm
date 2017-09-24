//冒泡排序

Array.prototype.bubbleSort = function () {
  for (let len = this.length; len > 0; len--) {
    let temp
    for (let i = 0; i < len; i++) {
      if (this[i + 1] < this[i]) {
        temp = this[i + 1]
        this[i + 1] = this[i]
        this[i] = temp
      }
    }
  }
  return this
}

let arr = [1, 2, 3, 4, 7, 5, 6]
console.log(arr.bubbleSort())
