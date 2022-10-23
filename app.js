const express = require("express");
const bodyParser = require("body-parser");
let port = 3000;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

let items = ["Milk", "Bread"];
let WorkOutlist = ["Bench", "Squat"];

app.use(express.static("public"))


let deleteitem = ""


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"]
let daysOfTheWeek = new Date();
let intDAy = daysOfTheWeek.getDay();
let myday = days[intDAy]


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


    res.redirect("/")
})

app.post("/viewss", function (req, res) {
    page1renders(req, res)
})






app.get("/views", function (req, res) {
    page2renders(req,res)

})




app.post("/views", function (req, res) {
    page2renders(req,res)

})

app.post("/views2", function (req, res) {
    let itemsinputted = req.body.items;
    let delteditem = req.body.deleteditem;
    let deleteworkoutItem=req.body.deleteworkout;
    addItem(items, itemsinputted)
    deleteitems(items, delteditem)
    deleteitems(WorkOutlist,deleteworkoutItem)

    res.redirect("/views")
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
        Day: myday,
        Date: daysOfTheWeek,
        newItems: items,
        workout: WorkOutlist

    })

}

function page2renders(req,res){
    res.render("page2", {
        Date: myday,
        Hours: daysOfTheWeek.getHours(),
        Minutes: daysOfTheWeek.getMinutes(),
        Seconds: daysOfTheWeek.getSeconds(),
        items: items,
        workoutItem:WorkOutlist

    })

}





app.listen(port, function () {
    console.log("server is running on: " + port)
})