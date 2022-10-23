let messages = document.querySelectorAll(".message")
let body = document.querySelector("body")
let container = document.querySelector(".container");
let today = new Date();
let Hours = today.getHours();

let containers=document.querySelectorAll(".container")



//alters the dom elemtns. if its multiple object, set teh bool array to true, next paramnet select the dom elemnt using tags or calssses, and dec is the style we want from the css.
function messageVisibility(array, object, dec) {
    if (array === true) {
        let objects = document.querySelectorAll(object);
        for (var i = 0; i < objects.length; i++) {
            objects[i].classList.add(dec)
        }


    } else if (array === false) {
        let objects = document.querySelector(object);
        objects.classList.add(dec)
    }
}


//function checks the time of sday and set the UI based oon the curretn time
function TimeOfDay(time) {
    if (time <= 4) {
        body.classList.add("dark")
        messageVisibility(true, ".message", "dark-text")
        messageVisibility(true, ".container", "dark-border")
        messageVisibility(true,".container","darkbg")

    } else if (time >= 4 && time <= 11) {
        body.classList.add("dull")
        messageVisibility(true, ".message", "light-text")
        messageVisibility(true, ".container", "light-border")
        messageVisibility(true,".container","greybg")
    } else if (time >= 11 && time <= 15) {
        body.classList.add("bright")
        messageVisibility(true, ".message", "light-text")
        messageVisibility(true, ".container", "light-border")
        messageVisibility(true,".container","whitebg")
    } else if (time >= 15 && time <= 20) {
        body.classList.add("dull")
        messageVisibility(true, ".message", "light-text")
        messageVisibility(true, ".container", "light-border")
        messageVisibility(true,".container","greybg")
    } else {
        body.classList.add("dark")
        messageVisibility(true, ".message", "dark-text")
        messageVisibility(true, ".container", "dark-border")
        messageVisibility(true,".container","darkbg")
    }
}

Hours=18

TimeOfDay(Hours)

messageVisibility(false, ".message", "message")

messageVisibility(true, ".card", "hovering")


let text=document.querySelectorAll("p");

for(var i=0;i<text.length;i++){
    text[i].addEventListener("mouseover",function(e){
        this.classList.add("enlarge")
    })
}



