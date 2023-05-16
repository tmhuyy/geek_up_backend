// TODO rotate the arr 90 degree clockwise
// [
//     [1, 2, 3],       [7, 4, 1],
//     [4, 5, 6],       [8, 5, 2],
//     [7, 8, 9],       [9, 6, 3]
//   ];
// n = 3

const givenArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


const rotate = function (arr) {
  const result = arr.map((row, i) =>
    row.map((val, j) => arr[arr.length - 1 - j][i])
  );
  arr.length = 0; // change given arr to empty
  arr.push(...result); // spread and push it back to give arr
  return arr;
};

console.log(givenArray);

console.log(rotate(givenArray));
