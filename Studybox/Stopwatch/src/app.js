const timer_btn = document.querySelector(".start_btn");
const reset_btn = document.querySelector(".reset_btn");

let stop_watch;
let time = 0;
time = time_check();

function timer_state() {
  if (timer_btn.innerText == "Start") {
    timer_starts();
  } else {
    timer_stop();
  }
}

function timer_text() {
  /*  다음날 시간부분의 텍스트를 바꿔주기만 하면 끝 + 24시간 넘으면 초기화 하는거랑 날짜 추가하는거 두가지 버전도 괜찮을듯  */

  time;
}

function timer_starts() {
  timer_btn.classList.remove("start_btn");
  timer_btn.classList.add("stop_btn");
  timer_btn.innerText = "Stop";
  stop_watch = setInterval(() => {
    time = time + 0.01;
    time = Number(time.toFixed(2));
    console.log(Math.floor(time));
  }, 10);
}

function timer_stop() {
  clearInterval(stop_watch);
  timer_btn.classList.remove("stop_btn");
  timer_btn.classList.add("start_btn");
  timer_btn.innerText = "Start";
}

const timer_reset = () => {
  console.log("reset");
  time = 0;
};

function time_check() {
  const T = document.querySelector(".stopwatch");
  let Tx = T.innerHTML.split(":");
  for (i = 0; i < Tx.length; i++) {
    time = time * 60;
    time += Number(Tx[i]);
    console.log(time, typeof time);
  }
  return time;
}
timer_btn.addEventListener("click", timer_state);
reset_btn.addEventListener("click", timer_reset);
