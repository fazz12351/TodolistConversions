const express = require("express");
const bodyParser = require("body-parser");
const Date = require(__dirname + "/Date.js")
const mongoDB=require("mongodb")
let port = 3000;

const app = express();



function main(){
    
}


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"))




let items = ["Milk", "Bread"];
let WorkOutlist = ["Bench", "Squat"];
let workElements = [];


let deleteitem = ""
let workSchedule = []
let myday = Date();








app.get("/", function (req, res) {
    page1renders(req, res)



})


app.post("/", function (req, res) {
    deleteitem = req.body.deleteWorkout
    deleteitem1 = req.body.deleteItem;
    item = req.body.newItem
    workoutItem = req.body.workoutItem;

    addItem(WorkOutlist, workoutItem);
    addItem(items, item)


    deleteitems(WorkOutlist, deleteitem);
    deleteitems(items, deleteitem1)
    checkInput(items);
    checkInput(WorkOutlist)


    res.redirect("/")
})

app.post("/viewss", function (req, res) {
    page1renders(req, res)
})







app.get("/views", function (req, res) {
    page2renders(req, res)

})
app.post("/views", function (req, res) {
    let buttonPressed = req.body.button2
    page2renders(req, res)

})







app.post("/views2", function (req, res) {
    let itemsinputted = req.body.items;
    let delteditem = req.body.deleteditem;
    let deleteworkoutItem = req.body.deleteworkout;
    addItem(items, itemsinputted)
    deleteitems(items, delteditem)
    deleteitems(WorkOutlist, deleteworkoutItem)

    res.redirect("/views")
})


app.post("/views3", function (req, res) {
    VIPrenders(req,res)

})


app.get("/work", function (req, res) {
    VIPrenders(req,res)

})

app.post("/work", function (req, res) {
    let item = req.body.items
    let delteditemwork = req.body.deleteditem
    addItem(workElements, item)
    deleteitems(workElements, delteditemwork)
    res.redirect("/work")

})


app.get("about", function (req, res) {
    res.render("about", {})
})








function addItem(array, item) {
    array.push(item)
}


function deleteitems(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1)
        }
    }

}


function page1renders(req, res) {

    res.render("page1", {
        Fname: "Faeem",
        Day: myday.Day,
        Date: myday.todaysDate,
        newItems: items,
        workout: WorkOutlist

    })

}

function page2renders(req, res) {
    
    res.render("page2", {
        Date: myday.Day,
        Hours: myday.todaysDate.getHours(),
        Minutes: myday.todaysDate.getMinutes(),
        Seconds: myday.todaysDate.getSeconds(),
        items: items,
        workoutItem: WorkOutlist

    })

}

function VIPrenders(req,res){

    res.render("VIP", {
        Date: myday.Day,
        Hours: myday.todaysDate.getHours(),
        Minutes: myday.todaysDate.getMinutes(),
        Seconds: myday.todaysDate.getSeconds(),
        items: workElements,
        module: "Work"

    })


}

function checkInput(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            console.log("not a valid input")
            arr.splice(i, 1)
        }
    }
}






app.listen(port, function () {
    console.log("server is running on: " + port)
})