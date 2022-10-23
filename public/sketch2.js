console.log("script has been called")

let checkbox = document.querySelectorAll(".checkBox");

let items = document.querySelectorAll(".item");
let deleteInput = document.querySelector(".deleteItems")
let delteButtonTrigger = document.querySelector(".deleteButton")

let itemstoDel=[]

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        
        deleteInput.textContent = this.textContent;
        


    })
}




// setInterval(function () {
//     console.log(itemstoDel)
// }, 1000);