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
