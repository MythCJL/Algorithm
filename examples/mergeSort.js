// 归并排序

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

function mergeSort(items) {
  const len = items.length;
  if (len === 1) {
    return items;
  }
  const work = [];
  items.forEach((item) => {
    work.push([item]);
  });
  work.push([]);
  for (let lim = len; lim > 1; lim = parseInt(((lim + 1) / 2), 10)) {
    let j = 0;
    let k = 0;
    for (; k < lim; j += 1, k += 2) {
      work[j] = merge(work[k], work[k + 1]);
    }
    work[j] = [];
  }
  return work[0];
}

const arr = [3, 1, 2, 4, 6, 5, 7];
const sortArr = mergeSort(arr);
