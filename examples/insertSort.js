//插入排序

Array.prototype.insertSort = function (value) {
  for (let i = 1, len = this.length; i < len; i++) {
    let tmp
    for (let j = i; j > 0; j--) {
      if (this[j - 1] > this[j]) {
        tmp = this[j]
        this[j] = this[j - 1]
        this[j - 1] = tmp
      }
    }
  }
  return this
}

let arr = [1, 3, 5, 3, 2, 1]
console.log(arr.insertSort())
  