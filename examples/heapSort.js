// 堆排序

const swap = function swap(i, j, arr) {
  const array = arr;
  const tmp = array[i];
  array[i] = arr[j];
  array[j] = tmp;
};

const heapAdjust = function heapAdjust(i, j, arr) {
  let largest = i;
  const array = arr;
  const left = (2 * i) + 1;
  const right = (2 * i) + 2;
  if (left < j && array[largest] < array[left]) largest = left;
  if (right < j && array[largest] < array[right]) largest = right;
  if (largest !== i) {
    swap(i, largest, array);
    heapAdjust(largest, j, array);
  }
};

const buildMaxHeap = function buildMaxHeap(arr) {
  const array = arr;
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i -= 1) {
    heapAdjust(i, array.length, array);
  }
};

const heapSort = function heapSort(arr) {
  const array = arr;
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i -= 1) {
    swap(0, i, array);
    heapAdjust(0, i, array);
  }
  return array;
};

const arr = [3, 0, 2, 1];
heapSort(arr);
