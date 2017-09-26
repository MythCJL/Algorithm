// 插入排序

const insertSort = function insertSort(arr) {
  const array = arr;
  for (let i = 1, len = array.length; i < len; i += 1) {
    let tmp;
    for (let j = i; j > 0; j -= 1) {
      if (array[j - 1] > array[j]) {
        tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }
  return array;
};

const arr = [1, 3, 5, 3, 2, 1];
insertSort(arr);
