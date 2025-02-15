const removeDuplicates = (arr) => {
  const uniqueArray = [];

  for (let num of arr) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }
  return uniqueArray;
};

const arr = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3];
console.log(removeDuplicates(arr));
