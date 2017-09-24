//二分排序

Array.prototype.binarySort = function () {
  let key, low, high, mid
  for (let i = 1, len = this.length; i < len; i++) {
    low = 0
    high = i - 1
    key = this[i]
    while (low < high) {
      mid = Math.ceil((low + high) / 2)
      if (this[mid] <= key) {
        low = mid
      }
      if (this[mid] > key) {
        high = mid
      }
      if (high - low < 2 && this[low] >= key) {
      	high = low
      }
      if (high - low < 2 && this[high] <= key) {
      	low = high
      }
    }
    if (key < this[high]) {
      for (let j = i; j > high; j--) {
        this[j] = this[j - 1]
      }
      this[high] = key
    } else {
      for (let k = i; k > high + 1; k--) {
        this[k] = this[k - 1]
      }
      this[high + 1] = key
    }
  }
  return this
}

let arr = [4, 5, 8, 2, 1, 4, 5, 8]
console.log(arr.binarySort())
