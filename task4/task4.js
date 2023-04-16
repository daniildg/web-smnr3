let array = [5, 10, 15, 20, 25];

function increment (array) {
 for(i = 0; i < array.length; i++) {
  array[i] += 1;
 }
 return (array);
}
alert (array);
alert (increment(array));