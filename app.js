const test = ["red" , "blue" ,"green" , "orange"];

text = "<ul>";
for(i=0; i < test.length; i++){
    text+= "<li>" + test[i] + "</li>"
};
text += "</ul>";
document.getElementById("demo").innerHTML=text;


const test2 = ["red" , "blue" ,"green" , "orange"];

text2 = "<ul>"
test.forEach(theFunction);
text2 += "</ul>";

function theFunction(value){
    text2 += "<li>" + value + ` color` + "</li>";
}

document.getElementById("demo2").innerHTML=text2;
