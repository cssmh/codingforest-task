function secondLargest(array) {
  const sortedArr = array.sort((a, b) => b - a);
  return sortedArr[1];
}

const array = [10, 20, 4, 100, 99];
console.log(secondLargest(array));
