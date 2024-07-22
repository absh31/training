console.log("Hello Work")

let a = 5
a = "veh"
// a = true
// a = null
// a = undefined
console.log(typeof a)
 
console.log(123 == '123')

const object = {name : 'Tarun', company:null}
console.log(object["age"])
// Falsy Values false , 0 , null ,undefined
console.log(1 == true)
if(100){
    console.log("Checking FOr the non falsy value")
}


function doSomething(a=0,b=0){

    // Doing Some stuff

    return a+b;

}
console.log(doSomething())

console.log(NaN === NaN)

const pointTOFunction = function(par,r){}
const arrowFunciton = (a,b)=>{return a+b}

arrowFunciton(3,4)

const objectWithMethod = {
    name:"TArun",
    walk:function walk2(){
        console.log("Tarun Is Walking ......")
    },
    eat:()=>{console.log("Tarun Is Hungry Eating hmmmm....")},
    count:arrowFunciton
}
objectWithMethod.walk()
objectWithMethod.eat()
console.log(objectWithMethod.count(2,4))



const subStractFunc = (a,b)=>(a-b);
// const result  = 
const subStractInvoc = ((a,b)=>(a-b))(6,4);
console.log(subStractFunc(5,3))
console.log(subStractInvoc,"==")


const values = [1,2,3,4,5,6,7,8,9,10,11,12]
const transformed = values.filter(val=>val%2===1).map(odd=>odd*2).reduce((acc,curr)=>acc+curr , -5)
console.log(transformed)
