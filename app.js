"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(info) {
  // event에 호출된 함수에 들어가는 매개변수, 이벤트에 대한 부분이 저장되어있다.
  info.preventDefault(); // 새로고침을 막음(브라우저의 기본동작을 막는다..)
  console.log(info);
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick(event) {
  //js가 넣어주는 첫번쨰 매개변수, 일어난 이벤트에 대한 정보를 담은 객체
  event.preventDefault(); // 기본동작을 막았다.
  console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
// 제출이 일어나면 함수를 실행
// 허나 새로고침이 일어나는 문제가 발생(기본으로 그렇게 되어있는 구조)

link.addEventListener("click", handleLinkClick); // 함수 이름만 주고 실행은 js의 몫
// a의 기본동작은 이동!
