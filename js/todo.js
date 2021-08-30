const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

function paintToDo(newTodo) {
    /*const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    //span.innerText = newTodo;
    //span.innerText = newTodo.innerText;
    span.innetText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    */
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
   /* toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
*/
    const newTodoObj = {
      text :newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function sayHello(item) {
  console.log("this is the turn of", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //parsedToDos.forEach(sayHello);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}
/*
function sexyFilter() {

  //[1,2,3,4].filter(sexyFilter)
  //sexyFilter(1) = 1
  //sexyFilter(2) = 2
  //sexyFilter(3) = 3
  //sexyFilter(4) = 4
}*/

//function sexyFilter(item){return item !==3}
//[1,2,3,4].filter(sexyFilter) .. 3이 제외되서 나옴
//const arr = [];
//function sexyFunction(potato) {return potato < = 1000}
//arr.filter(sexyFunction)