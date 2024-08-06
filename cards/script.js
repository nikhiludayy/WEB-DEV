var arr=[
    {name:"John vera",img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", status:"Stranger"},
    {name:"John dera",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"},
    {name:"John fera",img:"https://media.istockphoto.com/id/940996024/photo/a-man-in-a-blue-suit.webp?s=170667a&w=0&k=20&c=EtPC-k7mpTJCZUI_ym3VPEmKWWuPnE4iyh1xqmUERw8=", status:"Stranger"}
]



function print(){
    var clutter="";
    arr.forEach(function (val,index){
        clutter +=`<div id="card">
                <div id="img">
                    <img
                        src="${val.img}"
                        alt="">
                </div>
                <H3>${val.name}</H3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum nesciunt aliquam.</p>
                <h4 id="${val.status}">${val.status}</h4>
                <button class="${val.status ==="Stranger"? "blue":"red"}" id="${index}">${val.status ==="Stranger"? "Add Friend":"Remove Friend"}</button>
    
            </div>`
    })
    document.querySelector("#main").innerHTML=clutter;
}

print();

var flag =0;

document.querySelector("#main").addEventListener("click",function(details){
    if(flag==0){arr[details.target.id].status="Friends";

        flag=1;}
    else{
        {arr[details.target.id].status="Stranger";flag=0;}
    }
    print();
})