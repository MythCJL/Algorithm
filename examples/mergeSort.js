function merge (left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}

function mergeSort (items) {
  let len = items.length
  if (len === 1) {
    return items
  }
  let work = []
  for (item of items) {
    work.push([item])
  }
  work.push([])
  for (let lim = len; lim > 1; lim = parseInt((lim + 1) / 2)) {
    for (var j = 0, k = 0; k < lim; j += 1, k += 2) {
      work[j] = merge(work[k], work[k + 1])
    }
    work[j] = []
  }
  return work[0]
}

let arr = [3, 1, 2, 4, 6, 5, 7]
console.log(mergeSort(arr))
