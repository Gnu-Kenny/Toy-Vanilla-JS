const toDoForm = document.querySelector(".js-toDoForm"),    //Read
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';



let toDos = [];   //object가 있고 그 object는 숫자로 된 id가 있음.

function deleteToDo(event){ //어떤 버튼이 눌러질까 고민
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        
        return toDo.id !== parseInt(li.id);
    })   //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만듦
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify 로 toDos 객체를 string 변환시켜 localstorage에 저장.
}

function paintToDo(text){   //Create
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener('click',deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null)    //JSON(JS Object Notation): 데이터 전달시 js가 다룰 수 있도록 object로 변환시켜줌.
    {
        const parsedToDos = JSON.parse(loadedToDos); // 불러온 데이터를 object로 변환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });   //array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는 것.
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();