const prod=(x,y,z)=>x*y*z;
const sum=(x,y,z)=>x+y+z;

const curry=f=>x=>y=>z=>f(x,y,z);

const curryProd=curry(prod);
const currySum=curry(sum);

console.log(curryProd, curryProd.length);
console.log(currySum, currySum.length);

console.log(curryProd(2),curryProd(2).length);
console.log(currySum(2),currySum(2).length);

console.log(curryProd(2)(3),curryProd(2)(3).length);
console.log(currySum(2)(3),currySum(2)(3).length);

console.log(curryProd(2)(3)(4));
console.log(currySum(2)(3)(4));