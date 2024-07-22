console.log("Script Execution Started")
function processButtonClick(event){
    console.log("BUtton Is Clicked Hurrat")
}
const button = document.getElementById('btn')
button.addEventListener('click',processButtonClick)
console.log("I will execute, I have nothing to do with click")
console.log("I will too not wait though")

setTimeout(()=>{
    console.log("$ 4 Second Pachhi Output aay")
},4000)
console.log("I am not waiting")