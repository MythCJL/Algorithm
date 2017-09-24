//堆排序

Array.prototype.buildMaxHeap = function () {
  for (let i = Math.floor(this.length / 2) - 1; i >= 0; i--) {
    this.heapAdjust(i, this.length)
  }
}

Array.prototype.swap = function (i, j) {
  let tmp = this[i]
  this[i] = this[j]
  this[j] = tmp
}

Array.prototype.heapSort = function () {
  this.buildMaxHeap()
  for (let i = this.length - 1; i > 0; i--) {
    this.swap(0, i)
    this.heapAdjust(0, i)
  }
  return this
}
Array.prototype.heapAdjust = function (i, j) {
  let largest = i,
    left = 2 * i + 1,
    right = 2 * i + 2
  if (left < j && this[largest] < this[left]) {
    largest = left
  }
  if (right < j && this[largest] < this[right]) {
    largest = right
  }
  if (largest != i) {
    this.swap(i, largest)
    this.heapAdjust(largest, j)
  }
}

let arr = [3, 0, 2, 1]
console.log(arr.heapSort())
