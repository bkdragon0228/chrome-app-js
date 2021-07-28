"use strict";

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log(loginInput.value); // input의 값을 얻는 방법
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  } else if (username.length > 15) {
    alert("your name is too long");
  } // html 에서 해결함!
}

loginButton.addEventListener("click", onLoginBtnClick);
