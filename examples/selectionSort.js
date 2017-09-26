/**
 * const selectSort = function selectSort(arr) {
 *  const myarr = [];
 *  const array = arr;
 *  for (let len = array.length; len > 0; len -= 1) {
 *    const max = Math.max(...array);
 *    const index = array.indexOf(max);
 *    array.splice(index, 1);
 *    myarr.push(max);
 *  }
 *  return myarr;
 *};
 */

// 标准的选择排序
const selectSort = function selectSort(arr) {
  const array = arr;
  for (let i = 0, len = array.length; i < len; i += 1) {
    let k = i;
    let tmp;
    for (let j = i + 1; j < len; j += 1) {
      if (array[k] > array[j]) {
        k = j;
      }
      if (k !== i) {
        tmp = array[i];
        array[i] = array[k];
        array[k] = tmp;
      }
    }
  }
  return array;
};

selectSort([1, 3, 2, 7, 5, 6]);
