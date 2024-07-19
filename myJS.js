let message="";
const name = document.getElementById("name");
name.addEventListener("blur", function(event) {
	let name = document.getElementById("name").value;
	console.log(name.split(" "));
	if (name.split(" ").length > 1)
		document.getElementById("result").innerHTML = "Space is not allowed in Name.";
	document.getElementById("result").style.color = 'red';
})
name.addEventListener("keypress", function(event){
	console.log(String.fromCharCode(event.keyCode));
	if(String.fromCharCode(event.keyCode) == " "){
		alert("Space is not allowed");
		event.preventDefault();
		
		/*	var key = event.keyCode;
			if (key === 32) {
				event.preventDefault();
		}*/
	}
})

const surname = document.getElementById("surname");
surname.addEventListener("blur", function(event) {
	let surName = document.getElementById("surname").value;
	if (surName.split(" ").length > 1){
		message = "Space is not allowed in Surname. ";
		document.getElementById("result").innerHTML = "Space is not allowed in Surname.";
	}
	document.getElementById("result").style.color = 'red';
})

const enrollmentNo = document.getElementById("enrollment");
enrollmentNo.addEventListener("blur", function(event) {
	let en = document.getElementById("enrollment").value;
	console.log(en);
	if (en.length < 12 || en.length > 12){
		message = "Enrollment No must be of 12 digits.";
		document.getElementById("result").innerHTML = message;
	}
	document.getElementById("result").style.color = 'red';
})

window.addEventListener('load', function() { 
    alert('Please fill the form to proceed');
}, false);
  
function onSubmit(event){
	let name = document.getElementById("name").value;
	let surName = document.getElementById("surname").value;
	let en = document.getElementById("enrollment").value;
	let address = document.getElementById("address").value;
	console.log(name + " " + surName + " " + en + " " + address);
	event.preventDefault();
}

const btnFetchData = document.getElementById("btnData")
btnFetchData.addEventListener("click",(event) => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then((myApiResponse)=>myApiResponse.json())
.then(resJson => {
	const combinedResponse = resJson.reduce((combined,current)=>combined+current["body"]+"<br/>","") 
	
	/*for (const res of resJson){
		combinedResponse += (res["title"] + "<br/>")
	}
	const answer = list.reduce((combined,current)=>combined+current,"") */
	document.getElementById("result").innerHTML = combinedResponse
})	//One-line Body
.catch((error)=>{
	console.log(error)
})})
  