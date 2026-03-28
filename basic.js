

function sum (a,b){
  return a+b
}

function myFun(fun){
    let ans = fun() + 10;
    console.log(ans)
}

myFun(sum(4,5))

// let data =sum(4,5)
// console.log(data)

// console.log(sum(4,5))