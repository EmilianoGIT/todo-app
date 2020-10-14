const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
    //because we don't want it to be submitted
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todo = input.value;

    if(todo){
        const todoEl = document.createElement("li");
        
        todoEl.innerHTML = todo;

        todoEl.addEventListener("click", ()=> {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
        });

        todos.appendChild(todoEl);

        input.value = "";

        updateLS();
    }

    

}


function updateLS(){
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}