var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
 
        love.style.transform=`translate(-50%,-50%) scale(2)`;
        love.style.opacity=0.8;
        love.style.color="red"

        setTimeout(function(){
            love.style.opacity=0
            love.style.color="transparent" 
        },1000)

        setTimeout(function(){
            love.style.transform=`translate(-50%,-50%) scale(0)`;
            love.style.color="transparent" 
        },2000)
        
})