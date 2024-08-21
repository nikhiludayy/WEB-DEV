// #one
const h1 = document.querySelector("#one p");
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
    h1.textContent = "Lorem12";
})


// #two

const img1 = document.querySelector("#two #img1");
const img2 = document.querySelector("#two #img2");
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
    const im1 = img1.src;
    const im2 = img2.src;
    img1.src = im2;
    img2.src = im1;

})

// #three

const form = document.querySelector("form");
const h4 = document.querySelector("#three h4");
const inpt = document.querySelectorAll('input[type="text"]');
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    for (let i = 0; i < inpt.length; i++) {
        if (inpt[i].value.trim() === '') {
            h4.textContent = 'ERROR FILL ALL';
            h4.style.color = "red";
            break;
        }
        else {
            h4.textContent = '';
            h4.style.color = "red";
        }
    }
    // inpt.forEach(inp => {
    //     console.log(inp.value);
    //     if(inp.value.trim() === ''){
    //         h4.textContent='ERROR FILL ALL';
    //         h4.style.color="red";
    //     }
    //     else{
    //         h4.textContent='';
    //         h4.style.color="red";
    //     }
    // });
})


// #4

const ul = document.querySelector("ul");
const lii = document.querySelectorAll(".liitems");
const add = document.querySelector("#add");
const rem = document.querySelector("#remove");
const ulinpt = document.querySelector("#item");
let li;

add.addEventListener("click", () => {
    if (ulinpt.value.trim() === '') { }
    else {
        li = document.createElement("li");
        li.textContent = ulinpt.value;
        li.setAttribute('class', "liitems")
        ul.appendChild(li);
        ulinpt.value = "";
    }
})
remove.addEventListener("click", () => {

    ul.removeChild(ul.lastChild);
})


// #5

let time5 = document.querySelector("#five h1");
let start5 = document.querySelector("#timestart");
let stop5 = document.querySelector("#timestop");
let int;
start5.addEventListener("click", i => {
    i = 10;
    time5.textContent = i;
    int = setInterval(() => {
        i--;
        time5.textContent = i;
        if (i < 0) {
            time5.textContent = 'COMPLETE';
        }
    }, 1000);

})
stop5.addEventListener("click", i => {
    clearInterval(int);


})


// #6

let tabs = document.querySelectorAll('.tabs');
let text = document.querySelectorAll('h3');

// text[0].style.display = 'block';
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        hidealltext()
        text[index].style.display = 'block';
    }
    )
})

let hidealltext = () => {
    text.forEach(tex => {
        tex.style.display = 'none';
    })
}


// #7

let prg=document.querySelector('#prg');
let gro=0;
let proint =setInterval(() =>{
    if(gro==100){
        clearInterval(int);
        gro=0;
    }
    else{gro++;
        prg.style.width=gro+'%';}
    
},50)



// #8


let data=[
    {
        name:"John",src:"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        name:"Jod",src:"https://images.pexels.com/photos/1808398/pexels-photo-1808398.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        name:"Johf",src:"https://images.pexels.com/photos/1186662/pexels-photo-1186662.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        name:"Johsd",src:"https://images.pexels.com/photos/1183256/pexels-photo-1183256.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
]

let img=document.querySelector("#results");
let srinp=document.querySelector('#srcinput');



srinp.addEventListener('input',()=>{
   let matchh= data.filter(e=>{
        return e.name.toLowerCase().includes(srinp.value.toLowerCase());
    })
    let clutter='';
    console.log(matchh)
    matchh.forEach(el=>{
        clutter+= `<div class="img">
                    <div class="imgg"><img
                            src="${el.src}"
                            alt="">
                    </div>
                    <h4>${el.name}</h4>
                </div>`
                
    })
    img.innerHTML=clutter;
})



// #9

let txtar=document.querySelector("textarea");
let txtco=document.querySelector("#nine span");

txtar.addEventListener('input',()=>{
    txtco.textContent=(txtar.value.length)
})


window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = scrollPercent + '%';
    // console.log(document.documentElement.scrollHeight )
    // console.log(document.documentElement.clientHeight )
    // console.log(scrollTotal )
    // console.log(window.scrollY)
});