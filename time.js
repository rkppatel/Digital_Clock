//Time function
setInterval(function () {
    const d = new Date().toLocaleTimeString();
    document.getElementById("demo").innerHTML = d;
}, 1000);


//variable:
var header = document.querySelector("h1")

//interface with the style
header.style.color = "red"

//Random color function:

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
// Simple function:
function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;

  }

//set intervals:

setInterval("changeHeaderColor()",1000);
