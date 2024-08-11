var menu = document.querySelector("#ic ");
var fulscr = document.querySelector("#full-scr-nav");
var flag = 0;
menu.addEventListener("click", function () {
    
    if (flag == 0) {
        fulscr.style.top = "0%";
        document.querySelector("#nav h3").style.color = "#222";
        document.querySelector("#nav h4").style.color = "#222";
        document.querySelector("#nav i").style.color = "#222";
        document.querySelector("#nav .ri-menu-line").style.display = "none";
        document.querySelector("#nav .ri-arrow-up-line").style.display = "block";
        document.querySelector("#nav .ri-arrow-up-line").style.color = "#222";
        flag = 1;
    }
    else {
        fulscr.style.top = "-100%";
        document.querySelector("#nav h3").style.color = "#dadada";
        document.querySelector("#nav h4").style.color = "#dadada";
        document.querySelector("#nav i").style.color = "#dadada";
        document.querySelector("#nav .ri-menu-line").style.color = "#dadada";
        document.querySelector("#nav .ri-menu-line").style.display = "block";
        document.querySelector("#nav .ri-arrow-up-line").style.display = "none";
        flag = 0;

    }

})