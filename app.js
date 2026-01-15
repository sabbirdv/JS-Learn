const d = new Date();

const months = ["January", "February", "March", "April", "May" , "June", "July", "August", "September", "October", "November", "December"];

// months[0]="sunday"
// months.splice(0,1,"Sunday");
console.log(months);
document.getElementById("demo").innerHTML= months[d.getMonth()]  + d.getDate() ;










// const number1 = [2,3,12,25,6,5,23,4,6];

// number1.sort(function (a,b){
//     return a-b
// });
// console.log(number1);
