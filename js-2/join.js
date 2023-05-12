function join(array) {
    if (array.length === 0) {
      return "";
    }
    let result = "";
    for (let i = 0; i < array.length - 1; i++) {
      result += array[i] + " ";
    }
    result += array[array.length - 1];
    return result;
  }
console.log(join([1, 2, 3])); // "1 2 3"
console.log(join([10, 8, 12, 5])); // "10 8 12 5"
console.log(join([])); // ""