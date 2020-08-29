const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
let counter = 0;

btnIncrease.addEventListener('click',increment);
btnDecrease.addEventListener('click',decrement);
btnReset.addEventListener('click',reset);

function increment() {
  counter+=1;
  updateView();
}

function decrement() {
  counter-=1;
  updateView();
}

function reset() {
  counter = 0;
  updateView();
}

function updateView() {
  if(counter > 0) {
      document.getElementById("value").style.color = 'green';
      document.getElementById("value").textContent = counter;
  } else if(counter < 0) {
      document.getElementById("value").style.color = 'red';
      document.getElementById("value").textContent = counter;
  } else if(counter === 0) {
    document.getElementById("value").style.color = '#222';
    document.getElementById("value").textContent = counter;
  }
}
