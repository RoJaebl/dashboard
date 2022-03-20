const toDoForm = document.querySelector("#todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const div = event.target.parentElement.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
}

function boxCheckingEvent(event){
  const checkBox = event.target;
  const span = checkBox.parentElement.children[1];
  const divBox = checkBox.parentElement.parentElement;
  const index = toDos.findIndex(item=>
    item.id === Number(divBox.id)
  );

  toDos.forEach((item)=>{
    if(item.id === Number(divBox.id)){
      if(checkBox.innerHTML === "⬜"){
        checkBox.innerHTML = "✅";
        span.style.textDecorationLine = "line-through";
        span.style.fontStyle = "oblique";
        span.style.color = "rgba(0,0,0,0.5)";
        toDos[index].isCheck = "checked";
      }else{
        checkBox.innerHTML = "⬜";
        span.style.textDecorationLine = "";
        span.style.fontStyle = "";
        span.style.color = ""
        toDos[index].isCheck = "unChecked";
      }
      saveToDos();
    }
  });
}

function boxChecking(divBox){
  const checkBox = divBox.children[0];
  const span = divBox.children[1];
  const index = toDos.findIndex(item=>
    item.id === Number(divBox.id)
  );
    toDos.forEach((item)=>{
    if(item.id === Number(divBox.id)){
      if(checkBox.innerHTML === "⬜"){
        checkBox.innerHTML = "✅";
        span.style.textDecorationLine = "line-through";
        span.style.fontStyle = "oblique";
        span.style.color = "rgba(0,0,0,0.5)";
        toDos[index].isCheck = "checked";
      }else{
        checkBox.innerHTML = "⬜";
        span.style.textDecorationLine = "";
        span.style.fontStyle = "";
        span.style.color = ""
        toDos[index].isCheck = "unChecked";
      }
      saveToDos();
    }
  });
}

function createDivBox(newTodoObj){
  const divBox = document.createElement("div");
  const checkBox = document.createElement("span");
  const span = document.createElement("span");
  if(newTodoObj.isCheck == "unChecked"){
    checkBox.innerHTML = "⬜";
  }else{
    checkBox.innerHTML = "✅";
    span.style.textDecorationLine = "line-through";
    span.style.fontStyle = "oblique";
    span.style.color = "rgba(0,0,0,0.5)";
  }
  span.innerHTML = newTodoObj.text;
  
  divBox.appendChild(checkBox);
  divBox.appendChild(span);
  
  checkBox.addEventListener("click",boxCheckingEvent);
  
  return divBox;
}

function paintToDo(newTodoObj) {
  const div = document.createElement("div");
  div.id = newTodoObj.id;
  
  const divBox = createDivBox(newTodoObj);
  
  const divIcon = document.createElement("div");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-trash");
  icon.addEventListener("click",deleteToDo);
  divIcon.classList.add("todo-icon");
  divIcon.appendChild(icon);
  
  div.appendChild(divBox);
  div.appendChild(divIcon);
  toDoList.appendChild(div);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    isCheck: "unChecked",
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬스토리지에 있는 데이터를 가지고 온다.
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // 로컬스토리지 데이터를 JSON 형태롤 변환 하여 저장한다.
  const parsedToDos = JSON.parse(savedToDos);
  // 스토리지에서 변환된 데이터를 DB에 저장한다.
  toDos = parsedToDos;
  // 스토리지에 있는 데이터 수 만큼 toDoList를 만든다.
  parsedToDos.forEach(paintToDo);
}

/*
function sexyFilter(item) {
  return item !== 3;
}

let arrVar = [1, 2, 3, 4, 5, 6];
arrVar = arrVar.filter((item) => item !== 3);
console.log(arrVar);
*/
