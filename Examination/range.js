/**
 *实现函数range([start],stop,[step])返回一个数组
 *range([start],stop,[step])
 *>range(1,11) => [1,2,3,4,5,6,7,8,9,10]
 *>range(0) => []
 *>range(10) => [0,1,2,3,4,5,6,7,8,9]
 *>range(0,30,5) => [0,5,10,15,20,25]
 */

function range (start = 0, stop, step = 1) {
  if (!Number.isInteger(start) || !Number.isInteger(stop) ||
     !Number.isInteger(step)) {
    throw new Error('参数需要是整数!')
  }
  let arr = []
  if (!stop) {
    stop = start
    start = 0
  }
  while (stop > start) {
    arr.push(start)
    start += step
  }
  return arr
}

console.log(range(1.1))
