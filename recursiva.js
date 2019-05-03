/**Función factorial */
let fact=x=>x===1||x===0?1:x*fact(x-1)

/**Función Fibonacci*/
let fibonacci=x=>{
    return x===1?1:
    x===0?0:
    fibonacci(x-1)+fibonacci(x-2)
}

for (let i=0; i<9; i++){
    console.log('FACTORIAL: ', fact(i));
    console.log('FIBONACCI: ', fibonacci(i));
}