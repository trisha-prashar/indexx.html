let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let data =  localStorage.getItem("Login");
let parsedata  = JSON.parse(data)





//signup values 

let signupEmail = document.getElementById("emailSign")
let signupPw = document.getElementById("pwSign")
let signupUser = document.getElementById("username")

//login values

let loginemail = document.getElementById("loginEmail")
let loginPw = document.getElementById("loginPw")



//logout



document.getElementById("loginbtn").addEventListener("click",function(){
	if(data!==null){

	let valuedata=	parsedata.filter((items,index)=>{

			if(items.email===loginemail.value){
				if(items.password===loginPw.value){
					window.location= "./welcome.html"
				}
				else{
					alert("please enter valid credentials")
				}
			}else{
			 alert("please enter valid credentials")
			}
			return items.email===loginemail.value
		})
			localStorage.setItem("loggeduser",JSON.stringify(valuedata))


		// for(let i = 0;i<parsedata.length;i++){
		// if(parsedata[i].email===loginemail.value)	{
		// 	if(parsedata[i].password===loginPw.value){
				
		// 		// localStorage.setItem("loggeduser",JSON.stringify({username:}))
		// 		window.location= "./welcome.html"
		// 	}
		// }
		
		// }
		
	}
})




document.getElementById("signupbtn").addEventListener("click",function(event){
event.preventDefault()



if(data == null){
 arr = [];
}
else{
	arr = JSON.parse(data); // old data 
}

if(signupEmail.value===""){
	alert("please fill all the inputs")
}else if(signupPw.value===""){
	alert("please fill all the inputs")

}else if(signupUser.value===""){
	alert("please fill all the inputs")

}
else{

	arr.push({username:signupUser.value,email:signupEmail.value,password:signupPw.value})
	localStorage.setItem("Login",JSON.stringify(arr))
}
slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
// console.log(signupEmail.value,signupUser.value,signupPw.value)

})




signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
