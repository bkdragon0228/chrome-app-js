"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // key값으로 쓰는 string값, 오타방지

function onLoginSubmit(info) {
  info.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  //localStorage : 브라우저에 뭔가를 저장할 수 있게 해주는 api
  localStorage.setItem(USERNAME_KEY, username); //key, value
  //getItem에 key값을 넣어서 value를 가져올 수 있다.
  //removeItme에 key값을 넣어서 값을 삭제할 수 있다.

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
