// var img=document.querySelectorAll("img");
var body=document.querySelector("body");
var btn=document.querySelector("button");

    body.setAttribute("src","./eyeimg.png")
    btn.addEventListener("click",()=>{
        var elem=document.createElement("img");
        var rNum=Math.random()*90;
        var num2=Math.random()*90;
        elem.style.position="absolute"
        elem.style.top=`${rNum}%`;
        elem.style.left=`${num2}%`;
        elem.setAttribute("src","./eyeimg.png")
        body.appendChild(elem)
    })




