var Form1 =document.getElementById("Form1");
var Form2 =document.getElementById("Form2");
var Form3 =document.getElementById("Form3");

var firstNext=document.getElementById("firstNext");
var secondNext=document.getElementById("secondNext");
var firstBack=document.getElementById("firstBack");
var secondBack=document.getElementById("secondBack");

var progress = document.getElementById("progress")

firstNext.onclick=function(){
    Form1.style.left="-450px"
    Form2.style.left="40px";
    progress.style.width="240px"
}
firstBack.onclick=function(){
    Form1.style.left="40px";
    Form2.style.left="450px";
    progress.style.width="120px"
}
secondNext.onclick=function(){
    Form2.style.left="-450px";
    Form3.style.left="40px";
    progress.style.width="360px"
}
secondBack.onclick=function(){
    Form2.style.left="40px";
    Form3.style.left="450px";
    progress.style.width="240px"
}


// var Form1 =document.querySelector('Form1')
// var error =[]
// Form1.addEventListener('submit',function(e){
//     e.preventDefault()

//     var firstname = document.getElementById('firstname')
   
//     if(firstname.value==""){
//         alert("please enter all the details")
//     }
// })
