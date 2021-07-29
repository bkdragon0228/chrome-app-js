const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // Date 객체 생성
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// setInterval(sayHello, 5000); // 매 5초
// setTimeout(sayHello, 5000); // 5초 뒤 한번

getClock(); // 한번 실행 후
setInterval(getClock, 1000); // 매초마다 실행
