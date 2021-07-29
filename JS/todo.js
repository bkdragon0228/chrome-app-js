const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  //   console.log(event.target.parentElement); // 뭘 눌렀는지 찾기
  const delLi = event.target.parentElement;
  delLi.remove(); // 삭제~!
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
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
