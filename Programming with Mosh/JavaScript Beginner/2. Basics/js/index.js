const numbers = [1, -1, 2, 3];

//initially a(accumulator) = 0 and c(cuttentValue) = 1 (ist element)
//a=0; c(1st element)=1 => a=1;
//a=1, c(2nd element)=-1 => a=0
//a=0, c(3rd element)=2, a=2
//a=2, c(4th element)=3, a=5

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); //5

//or arrow function

const sum1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum1); //5
