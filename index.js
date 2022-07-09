// Elements
const notification = document.querySelector('.notification');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const btn = document.querySelector('.button');
const container = document.querySelector('.todos-list');

let todos = [];

// Listeners
form.addEventListener('submit', handleSubmit);

// Submit handler
function handleSubmit(e) {
    e.preventDefault();

    if(input.value){
        if(todos.find(i => i === input.value)){
            notification.innerText = `${input.value} Is already added to list!`;
            input.value = '';
            setTimeout(() => {
                notification.innerText = '';
            }, 3000)
        }else{
            addTodo(input.value.toLowerCase());
            todos.push(input.value);
            input.value = '';
        }
    }else{
        return;
    }
}

// Add todo handler
function addTodo(todo) {
    // Checkbox for todo
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkbox');
    // Delete icon
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-trash');
    // Todo
    const div = document.createElement('div');
    div.classList.add('todo');
    div.innerText = todo;
    div.appendChild(checkBox);
    div.appendChild(icon);

    container.appendChild(div);

    // Remove handler
    icon.addEventListener('click', e => {
        todos = todos.filter(i => i !== div.innerText);
        div.remove();
    });
    // Checkbox handler
    checkBox.addEventListener('click', e => {
        if(checkBox.checked){
            div.style.textDecoration = 'line-through';
            div.style.color = '#919191';
        }else{
            div.style.textDecoration = 'none';
            div.style.color = '#010101';
        }
    });
}