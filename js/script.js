function changeColor() {
  var element1 = document.getElementById("canva1");
  var element2 = document.getElementById("canva2");
  if (element1.classList.contains("orangeback")) {
    element1.classList.remove("orangeback");
    element1.classList.add("fuchsiaback");
    element2.classList.remove("fuchsiaback");
    element2.classList.add("orangeback");
  } else {
    element1.classList.remove("fuchsiaback");
    element1.classList.add("orangeback");
    element2.classList.remove("orangeback");
    element2.classList.add("fuchsiaback");
  }
}
let isSquareDrawn = false;
let isHelloSaid = false;

function doSquare() {
  var canvas = document.getElementById("canva1");
  var ctx = canvas.getContext("2d");
  if (!isSquareDrawn) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(50, 30, 100, 100);
    isSquareDrawn = true;
  } else {
    ctx.clearRect(50, 30, 100, 100);
    isSquareDrawn = false;
  }
}
function sayHello() {
  var canvas = document.getElementById("canva2");
  var ctx = canvas.getContext("2d");
  if (isHelloSaid) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    isHelloSaid = false;
    return;
  } else {
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
    isHelloSaid = true;
  }
}
