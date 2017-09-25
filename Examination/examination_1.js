/**
 *数组去重，然后使数组元素按降序排序解析
 */

function quicksort (arr) {
  return [...new Set(arr)].sort((pre, next) => next - pre)
}
