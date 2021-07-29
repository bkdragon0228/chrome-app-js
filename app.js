"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDEN_CLASSNAME = "hidden";
// string만 표함된 변수는 대문자로 저장하는 관습

function onLoginSubmit(info) {
  info.preventDefault();
  loginForm.classList.add(HIDEN_CLASSNAME);
  const username = loginInput.value;

  greeting.innerText = `hello ${username}!`;
  greeting.classList.remove(HIDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
