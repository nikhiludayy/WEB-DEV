
var data=[
    {
        name:"john",dp:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",story:"https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
    },
    {
        name:"Vera",dp:"https://images.unsplash.com/photo-1531750026848-8ada78f641c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1508835277982-1c1b0e205603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTA1NDk4MzB8fGVufDB8fHx8fA%3D%3D"
    }
]

var clutter="";

data.forEach(function(val,index){
    clutter+=`<div class="story">
                    <div class="imgg" >
                        <img id="${index}" src="${val.dp}" alt=""></div>
                    <h5>${val.name}</h5>
                </div>`
})

document.querySelector("#storyboard").innerHTML=clutter;
var fullscr=document.querySelector("#fullscrn")
var opcc=document.querySelector("#opc")
document.querySelector("#storyboard").addEventListener("click",function(details){
    
    fullscr.style.backgroundImage=`url(${data[details.target.id].story})`;
    fullscr.style.display="block";
    opcc.style.display="block";
  
    
})
fullscr.addEventListener("click",function(){
    fullscr.style.display="none";
    opcc.style.display="none";}
)