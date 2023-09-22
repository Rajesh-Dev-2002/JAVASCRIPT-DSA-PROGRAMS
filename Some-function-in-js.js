let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filter = num.every((er) => {
  return er % 2 == 0;
});

console.log(filter);
