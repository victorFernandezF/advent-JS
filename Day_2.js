function countHours(year, holidays) {
    let extraHours = 0;
    holidays.forEach(element => {
        extraHours += chechDays(element, year);
    });
    return extraHours;
} 

function chechDays(date, year){
    let completeDate = new Date(date+"/"+year);
    let day = completeDate.getDay();
    if (day >0 && day < 6)
        return 2;
    return 0;
}

// -- Test -- 
const year = 2024
const holidays = ['02/29', '01/07',] // formato MM/DD
console.log(countHours(year, holidays));

