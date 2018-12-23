function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Not an array");
  }
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurrences(100, 1);
  console.log(count);
} catch (e) {
  console.log(e);
}

/*
Error: Not an array
    at countOccurrences
*/
