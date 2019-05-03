const prod=(x,y,z)=>x*y*z;
const square=x=>x*x;

const compose=(f,g)=>(...args)=>f(g(...args));

const composedfuncs=compose(square,prod);

console.log(composedfuncs(1,2,3));