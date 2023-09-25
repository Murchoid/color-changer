var backGColor=["yellow","green","white","blue","skyblue","pink","purple"];
var color=document.getElementById("color");
var next=document.getElementById("next");
var body=document.body;

function change(){
    var randomColor=Math.floor(Math.random()*backGColor.length);
     body.style.backgroundColor=backGColor[randomColor];
    color.innerText=backGColor[randomColor];
    console.log(randomColor);
}

next.addEventListener("click", change );
