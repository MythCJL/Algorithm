// 计数排序

const countSort = function countSort(items) {
  const len = items.length;
  const arr = Array.from(len);
  for (let i = 0; i < len; i += 1) {
    const x = items[i];
    let count = -1;
    let repeat = 0;
    for (let j = 0; j < len; j += 1) {
      if (x > items[j]) count += 1;
      if (x === items[j]) repeat += 1;
    }
    while (repeat) {
      if (!arr[count + repeat]) {
        arr[count + repeat] = x;
        repeat -= 1;
      } else {
        repeat = 0;
      }
    }
  }
  return arr;
};

countSort([1, 2, 1, 3]);
