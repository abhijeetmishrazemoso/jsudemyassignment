document.getElementById("b2").addEventListener("click",changePara3);
document.getElementById("i2").addEventListener("input",changeFont);

function changePara(){
    document.getElementById("p1").innerHTML = "Button 1 was clicked";
    alert("Button 1 was clicked");
}
function changePara2(){
    let input1 = document.getElementById("i1").value;
    document.getElementById("p2").innerHTML = "Characters typed:"+input1.length;
}

function changePara3(){
    let removeNode = document.getElementById("p3");
    removeNode.parentNode.removeChild(removeNode);
}
let counter = 1;
function changeFont(event){
    let chgFont = document.getElementById("p4");
    chgFont.style.fontSize = (
    (counter++ * 2))+"em";
    console.log(chgFont.style.fontSize);
}