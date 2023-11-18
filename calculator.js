let counter = 1;
let screenLimit = [];
let x = "";
let btns = document.getElementsByClassName("button");

function numbers(input) {
  document.getElementById("screenInput").value += input;
  screenLimit = document.getElementById("screenInput").value;
  if (screenLimit.length > 12) {
    document.getElementById("finalresult").innerHTML = "Input Limit Exceeded";
    for (let btn in btns) {
      btns[btn].disabled = true;
    }
  } else {
    counter = 0;
  }
  console.log(screenLimit.length);
}

function operators(input) {
  if (counter == 0) {
    document.getElementById("screenInput").value += input;
    counter = 1;
  }
}

function Erase() {
  document.getElementById("screenInput").value = " ";
  document.getElementById("finalresult").innerHTML = " ";
  for (let btn in btns) {
    btns[btn].disabled = false;
  }
  counter = 1;
}

function equalto() {
  x = document.getElementById("screenInput").value;

  document.getElementById("finalresult").innerHTML = eval(x);
}
