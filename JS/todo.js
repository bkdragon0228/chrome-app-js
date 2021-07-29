const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// todo-form 안의 input을 찾아옴
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  list.appendChild(span);

  span.innerText = newToDo;
  //   console.log(list); // 확인용
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 새로 고침 막기
  const newToDo = toDoInput.value; // 다른 변수에 저장해두고
  toDoInput.value = ""; // 값을 지운다.
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
