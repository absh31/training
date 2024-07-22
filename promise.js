function promiseArg(res,rej){
    console.log("I will start Immedeatly")
    setTimeout(()=>{
        res("SOmething")
    },5000)

}
function handlePromiseValue(value){
    console.log(value)

}
const somePromise = new Promise(promiseArg)

somePromise.then(handlePromiseValue)

console.log("I will not wait for them")