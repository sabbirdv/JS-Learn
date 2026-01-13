const test1 = ["red" , "blue" ,"green" , "orange" , "black", "white"];
const test2 = [2,4,25,5,14,8,76,35,24]

function myFunction(value){
    return value < 30;
}


const test2New = test2.filter(myFunction);

test2New.sort(function(a,b){
    return a-b;
});



console.log(test2New);
























// const number1 = [2,3,12,25,6,5,23,4,6];

// number1.sort(function (a,b){
//     return a-b
// });
// console.log(number1);
