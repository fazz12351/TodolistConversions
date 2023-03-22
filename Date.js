

module.exports=getDay;
function getDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"]
    const daysOfTheWeek = new Date();
    const intDAy = daysOfTheWeek.getDay();
    const myday = days[intDAy]
    return {Day:myday,todaysDate:daysOfTheWeek}

}


