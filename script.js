
var btn = document.querySelector("button");
var h1 = document.querySelector("h1");

btn.addEventListener("click",function(){
    var a = Math.floor(Math.random()*10)
    var b = Math.floor(Math.random()*10)
    var c = Math.floor(Math.random()*10)
    var d = Math.floor(Math.random()*10)

    h1.innerHTML=`${a}${b}${c}${d}`
    console.log(a,b,c,d);
})
