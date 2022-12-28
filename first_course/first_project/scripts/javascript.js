var head = document.querySelector("p");
console.log(head);
head.textContent='i have changes the content of p';

document.write("<h1> this is a document.write function from JS</h1>");// this function is strongly discouraged since JS engine wouldn't know where to place this in the html document//
var h=prompt("hey how are you? ");
var b= 9>10;
console.log(b);
var t= typeof(b);
console.log(t);

function add(){
 console.log("this is add method");

}

function sub(){
	
	console.log("this is sub method");
}

sub();
//add(10);

document.getElementById('p').onclick= function(){
	alert("heyy you clicked me");
}

var dog = document.getElementById('ig');

dog.onclick=function(){

var sr= dog.getAttribute('src');
if(dog.src==="images\Dreamworld.png"){
console.log("dkshdksh");
dog.setAttribute('src','C:\Users\suraj.shiriya\Desktop\Udemy_Project\first_project\images\second.png');
}
else{
console.log("dk");
dog.src="C:\Users\suraj.shiriya\Desktop\Udemy_Project\first_project\images\Dreamworld.png";
}
}