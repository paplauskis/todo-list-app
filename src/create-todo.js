import { 
allTodosSection, 
todayTodosSection, 
completedTodosSection, 
highPriorityTodosSection, 
mediumPriorityTodosSection, 
lowPriorityTodosSection 
} from "./control-sections";

const title = document.querySelector('#title');
const todoDescription = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#select-priority');
const todoForm = document.querySelector('#todo-form')

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let allTodosArray = [];
let todayTodosArray = [];
let completedTodosArray = [];
let highPriorityTodosArray = [];
let mediumPriorityTodosArray = [];
let lowPriorityTodosArray = [];

export function addTodo() {
  const newTodo = new Todo(title.value, todoDescription.value, dueDate.value, priority.value)
  if(title.value.length > 0) {
    allTodosArray.push(newTodo);
    if(priority.value == 'low') lowPriorityTodosArray.push(newTodo);
    else if (priority.value == 'medium') mediumPriorityTodosArray.push(newTodo);
    else highPriorityTodosArray.push(newTodo);
    displayTodo(newTodo);
    todoForm.reset();
  }
}

function displayTodo(todo) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-div');
  todoDiv.textContent = `${todo.title}`;
  const dateDiv = document.createElement('div')
  dateDiv.textContent = `${todo.dueDate}`;
  const removeTodoDiv = document.createElement('button');
  removeTodoDiv.classList.add('remove-todo-button');
  removeTodoDiv.textContent = '␡'
  removeTodoDiv.addEventListener('click', () => {
    todoDiv.remove();
    
  })
}