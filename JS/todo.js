const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // localstrage key 값

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //storage에 저장하려고 string으로 변형!
}

function deleteToDo(event) {
  const delLi = event.target.parentElement;
  delLi.remove();
  toDos = toDos.filter((ele) => ele.id !== parseInt(delLi.id));
  // 삭제한 li의 id와 요소의 id가 같으면 지워준다!
  saveToDos(); // 한번 더 호출
}
function paintToDo(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id; // li요소에 아이디를 만들고 그걸 받아온 todo와 같게함!!!
  const span = document.createElement("span");
  const btn = document.createElement("button");

  span.innerText = newToDo.text; // text만 화면에 넣음
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
  const newToDoObj = {
    text: newToDo,
    id: Date.now(), // 랜덤한 아이디
  };
  toDos.push(newToDoObj); //객체를 배열 요소로 전달
  paintToDo(newToDoObj); // 객체를 전달하는 것으로 바꿈
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 이건 그냥 string

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // this is array
  // 저장하기 위해 string으로 변형시켰던걸 다시 array로 바꾼것
  toDos = parsedToDos; // 그전에 저장된 toDo가 있으면 채워넣어주고 시작
  parsedToDos.forEach(paintToDo); // 여기가 point, 새로고침이 되어도 남아있게된다.
}
