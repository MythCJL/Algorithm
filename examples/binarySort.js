// 二分排序

const binarySort = function binarySort(arr) {
  let key;
  let low;
  let high;
  let mid;
  const array = arr;
  for (let i = 1, len = array.length; i < len; i += 1) {
    low = 0;
    high = i - 1;
    key = array[i];
    while (low < high) {
      mid = Math.ceil((low + high) / 2);
      if (array[mid] <= key) low = mid;
      if (array[mid] > key) high = mid;
      if (high - low < 2 && array[low] >= key) high = low;
      if (high - low < 2 && array[high] <= key) low = high;
    }
    if (key < array[high]) {
      for (let j = i; j > high; j -= 1) {
        array[j] = array[j - 1];
      }
      array[high] = key;
    } else {
      for (let k = i; k > high + 1; k -= 1) {
        array[k] = array[k - 1];
      }
      array[high + 1] = key;
    }
  }
  return array;
};

const arr = [4, 5, 8, 2, 1, 4, 5, 8];
binarySort(arr);
