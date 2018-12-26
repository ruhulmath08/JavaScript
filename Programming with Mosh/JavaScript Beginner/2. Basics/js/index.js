const numbers = [1, 2, 3, 4, 5, 6];

const output = myMove(numbers, 0, -1);
console.log(output); //Invalid offset

const output1 = myMove(numbers, 0, 2);
console.log(output1); //[ 2, 3, 1, 4, 5, 6 ]

function myMove(array, index, offset){
  const possition = index+offset;
  if(possition >= array.length || possition < 0){
    console.error('Invalid offset');
    return;
  }

  const output = [...array];
  /*
  splice() method return an array. In this case we will remove one item. And we will access the just removing item by [0]
  */
  const element = output.splice(index, 1)[0];
  output.splice(possition, 0, element);
  return output;
}

