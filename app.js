"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(info) {
  // event에 호출된 함수에 들어가는 매개변수, 이벤트에 대한 부분이 저장되어있다.
  info.preventDefault(); // 새로고침을 막음(브라우저의 기본동작을 막는다..)
  console.log(info);
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
// 제출이 일어나면 함수를 실행
// 허나 새로고침이 일어나는 문제가 발생(기본으로 그렇게 되어있는 구조)
