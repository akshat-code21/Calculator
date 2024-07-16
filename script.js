console.log("This is script.js");

const display = document.getElementById("display");
function appendToDisplay(char) {
  display.value = display.value + char;
  //   console.log(data);
}
function appendfwdToDisplay(char) {
  display.value = char + display.value ;
  //   console.log(data);
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "error";
    }
}

function calculatePercentage() {
    try {
        display.value = eval(display.value + '/ 100');
    } catch (error) {
        display.value = "error";
    }
}
