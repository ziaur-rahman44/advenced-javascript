const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,7);
console.log(part);

const removed = nums.splice(2,3, 55);
console.log(removed);
console.log(nums);

const add = nums.join("ami ");
console.log(add);