// TODO give arr, target
// return indices of two numbers added up to target
const solve = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
        
    }
    return "Can not found the suitable result"
}
// O(N^2)
console.log(solve([3, 3], 6));
console.log(solve([3, 1], 6));
console.log(solve([30, 4, 13, 17, 25], 30));
