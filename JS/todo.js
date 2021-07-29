const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = []; // 배열 생성, localstarage 저장용

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  // 배열을 string 형태로 localstorage에 저장
}

function deleteToDo(event) {
  const delLi = event.target.parentElement;
  delLi.remove();
}
function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  span.innerText = newToDo;
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);

  list.appendChild(span);
  list.appendChild(btn);

  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo); //  배열에 저장
  paintToDo(newToDo);
  saveToDos(); // 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);
