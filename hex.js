var backGColor=["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9"];
var color=document.getElementById("color");
var next=document.getElementById("next");
var body=document.body;
var newColor ="#";

function change(){
    for(let j=0;j<6;j++){
        var randomiser=Math.floor(Math.random()*backGColor.length);
       newColor += backGColor[randomiser]; 
    }
    body.style.backgroundColor=newColor;
    color.innerText=newColor;
    newColor="#";
}

next.addEventListener("click", change );
