let text = "";
const today = new Date();
const someday = new Date();


if (someday > today){
    text = "Today is Before Someday";
} else {
    text = "Today is after Someday";
};


console.log(text);
