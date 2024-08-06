
var data=[
    {
        name:"john",dp:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",story:"https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
    },
    {
        name:"Vera",dp:"https://images.unsplash.com/photo-1531750026848-8ada78f641c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",story:""
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:""
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:""
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:""
    },
    {
        name:"Cena",dp:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:""
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

document.querySelector("#storyboard").addEventListener("click",function(details){
    var fullscr=document.querySelector("#fullscrn")
    var opcc=document.querySelector("#opc")
    fullscr.style.backgroundImage=`url(${data[details.target.id].story})`;
    fullscr.style.display="block";
    opcc.style.display="block";
    setTimeout(function(){
        fullscr.style.display="none";
        opcc.style.display="none";
    },2000)
})