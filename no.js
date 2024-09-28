//let date =new Date () ;
//console.log(date);


function nawDate(){
    let date = new Date();
    return date;
}
let total =nawDate();
console.log(total.toLocaleTimeString(),total.toLocaleDateString());
console.log(total.getDay(),total.getMonth(),total.getFullYear(),total.getDate());
console.log(total.getHours(),total.getMinutes(),total.getSeconds(),total.getMilliseconds());

