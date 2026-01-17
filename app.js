
const a = [ 3 , 4 ,5, 2, 67 ,32 ,12 ,54, 3,54 ,34]
let b = a;


document.getElementById("demo").innerHTML= 
  Math.round(4.5) + " , " 
+ Math.ceil(4.2) + " , " 
+ Math.floor(4.7) + " , " 
+ Math.trunc(4.572) + " , " 
+ Math.sign(-5) + " , " 
+ Math.pow(4, 2) + " , " 
+ Math.sqrt(16) + " , " 
+ Math.abs(-37) + " , "
+ Math.min(2,3, 5, 64 , 12, 34 ,4 ,5 ,7,43, 23) + " , "
+ Math.max(2,3, 5, 64 , 12, 34 ,4 ,5 ,7,43, 23) + " , "
+ Math.min(...a) + " , "
+ Math.max(...a) + " , "
+ Math.floor(Math.random(...a) * (25 - 20 + 1) + 20) ;
