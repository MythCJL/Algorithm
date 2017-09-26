// 冒泡排序

const bubbleSort = function bubbleSort(arr) {
  const array = arr;
  for (let len = array.length; len > 0; len -= 1) {
    let temp;
    for (let i = 0; i < len; i += 1) {
      if (array[i + 1] < array[i]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

const arr = [1, 2, 3, 4, 7, 5, 6];
bubbleSort(arr);
