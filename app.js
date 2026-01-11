function timeBtn(){
    alert("Did you want to know the time?");
    alert("Confirm!")
    alert("Are you sure!?")
    document.getElementById("demo").innerHTML=new Date().toLocaleTimeString('en-US');
}