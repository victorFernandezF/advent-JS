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

const year = 2024
const holidays = ['02/29', '01/07',] // formato MM/DD
console.log(countHours(year, holidays));

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
 // 2 días -> 4 horas extra en el año
/* const birthday = new Date('12/29/2022');
const day1 = birthday.getDay(); */
//console.log(day1);

/* let date2 = "11/09";
let year2 = 2022;
let tocotoco = new Date (date2+"/"+year);
let tabaco = tocotoco.getDay(); 
console.log(tocotoco.getDay());*/
