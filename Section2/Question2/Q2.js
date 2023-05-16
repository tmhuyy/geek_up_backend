// PASS BY VAlUE
const a = 10;

const passByValue = function (number) {
    return number + 1
}
console.log("After changing:", passByValue(a));
console.log("Before changing: ", a);
// PASS BY POINTER
const numbers = {
    a: 12,
    b: 18
}
console.log("Before changing: ", numbers);
const afterChange = function (obj) {
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
};

afterChange(numbers)

console.log("After changing: ", numbers);
