function countSort (items) {
  const len = items.length
  const arr = Array.from(len)
  for (let i = 0; i < len; i++) {
    let x = items[i],
      count = -1,
      repeat = 0
    for (let j = 0; j < len; j++) {
      if (x > items[j]) {
        count++
      }
      if (x === items[j]) {
      	repeat++
      }
    }
    while (repeat) {
    	if (!arr[count + repeat]) {
    	arr[count + repeat] = x
    	repeat--
    	} else {
    		repeat = 0
    	}
    }
  }
  return arr
}

console.log(countSort([1, 2, 1, 3]))
