let case1 = document.getElementById("case1")
let case2 = document.getElementById("case2")
let case3 = document.getElementById("case3")
let case4 = document.getElementById("case4")
let case5 = document.getElementById("case5")
let case6 = document.getElementById("case6")
let case7 = document.getElementById("case7")
let case8 = document.getElementById("case8")
let case9 = document.getElementById("case9")
let case10 = document.getElementById("case10")
let case11 = document.getElementById("case11")
let case12 = document.getElementById("case12")
let case13 = document.getElementById("case13")
let case14 = document.getElementById("case14")
let case15 = document.getElementById("case15")
let case16 = document.getElementById("case16")
let case17 = document.getElementById("case17")

case1.addEventListener("click", colorChange, false);
case2.addEventListener("click", colorChange, false);
case3.addEventListener("click", colorChange, false);
case4.addEventListener("click", colorChange, false);
case5.addEventListener("click", colorChange, false);
case6.addEventListener("click", colorChange, false);
case7.addEventListener("click", colorChange, false);
case8.addEventListener("click", colorChange, false);
case9.addEventListener("click", colorChange, false);
case10.addEventListener("click", colorChange, false);
case11.addEventListener("click", colorChange, false);
case12.addEventListener("click", colorChange, false);
case13.addEventListener("click", colorChange, false);
case14.addEventListener("click", colorChange, false);
case15.addEventListener("click", colorChange, false);
case16.addEventListener("click", colorChange, false);
case17.addEventListener("click", colorChange, false);

function colorChange(){
  if(this.classList.contains("yellow-bg")) {
  this.classList.add("blue-bg")
  this.classList.remove("yellow-bg")
}  else if (this.classList.contains("blue-bg")){
  this.classList.add("red-bg")
  this.classList.remove("blue-bg")
} else if (this.classList.contains("red-bg")){
  this.classList.add("white-bg")
  this.classList.remove("red-bg")
} else if (this.classList.contains("white-bg")){
  this.classList.add("yellow-bg")
  this.classList.remove("white-bg")
}
}
