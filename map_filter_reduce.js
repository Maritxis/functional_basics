const arr=[1,2,3,4,5,6,7,8]

/**Map */
const double=x=>2*x;

const arrMapped=arr.map(double);

console.log(arrMapped);

/**Filter */
const isOdd=x=>x%2===0;

const arrFiltered=arr.filter(isOdd);

console.log(arrFiltered);

/**Reduce */
const prod=(x,y)=>x*y;
const sum=(x,y)=>x+y;

const arrProd=arr.reduce(prod,1);
const arrSum=arr.reduce(sum,0);

console.log(arrProd, arrSum);