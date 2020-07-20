array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 3, 9, 2];

array3 = [];

for (let index = 0; index < array1.length; index++) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[index] == array2[i]) {
      array3.push(array1[index]);
    }
  }
}

console.log(array3);
