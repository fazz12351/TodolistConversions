

module.exports=getDay;
function getDay() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"]
    let daysOfTheWeek = new Date();
    let intDAy = daysOfTheWeek.getDay();
    let myday = days[intDAy]
    return {Day:myday,todaysDate:daysOfTheWeek}

}


