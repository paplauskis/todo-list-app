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
    createTodoDiv(newTodo);
    todoForm.reset();
  }
}

function createTodoDiv(todo) {
  const todoArrayDiv = document.createElement('div');
  todoArrayDiv.classList.add('todo-array-div');
  
  const priorityDiv = createPriorityDiv(todo.priority);
  const todoTitleDiv = createTodoTitleDiv(todo.title);
  const dateAndInfoDiv = createDateAndInfoDiv(todo.dueDate);
  const descriptionDiv = createDescriptionDiv(todo.description);
  const completeTodoButton = createCompleteTodoButton();
  const removeTodoButton = createRemoveTodoButton(todo, todoArrayDiv);
  
  todoArrayDiv.appendChild(priorityDiv);
  todoArrayDiv.appendChild(todoTitleDiv);
  todoArrayDiv.appendChild(dateAndInfoDiv);
  todoArrayDiv.appendChild(descriptionDiv);
  dateAndInfoDiv.appendChild(completeTodoButton);
  dateAndInfoDiv.appendChild(removeTodoButton);
  
  allTodosSection.appendChild(todoArrayDiv);
}

function createPriorityDiv(priority) {
  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('priority-div');
  priorityDiv.style.backgroundColor = getPriorityColor(priority);
  return priorityDiv;
}

function createTodoTitleDiv(title) {
  const todoTitleDiv = document.createElement('div');
  todoTitleDiv.classList.add('title-div');
  todoTitleDiv.textContent = title;
  return todoTitleDiv;
}

function createDateAndInfoDiv(dueDate) {
  const dateAndInfoDiv = document.createElement('div');
  dateAndInfoDiv.classList.add('date-info-div');
  
  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date-div');
  dateDiv.textContent = dueDate;
  
  const infoButton = document.createElement('button');
  infoButton.classList.add('info-button');
  infoButton.textContent = '•••';
  // infoButton.addEventListener('click', ...)
  
  dateAndInfoDiv.appendChild(dateDiv);
  dateAndInfoDiv.appendChild(infoButton);
  
  return dateAndInfoDiv;
}

function createDescriptionDiv(description) {
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description-div');
  descriptionDiv.textContent = description;
  descriptionDiv.style.display = 'none';
  return descriptionDiv;
}

function createCompleteTodoButton() {
  const completeTodoButton = document.createElement('button');
  completeTodoButton.classList.add('complete-todo-button');
  completeTodoButton.textContent = '✓';
  // completeTodoButton.addEventListener('click', ...)
  return completeTodoButton;
}

function createRemoveTodoButton(todo, todoArrayDiv) {
  const removeTodoButton = document.createElement('button');
  removeTodoButton.classList.add('remove-todo-button');
  removeTodoButton.textContent = '✕';
  removeTodoButton.addEventListener('click', () => {
    todoArrayDiv.remove();
    removeTodoFromArray(todo);
  });
  return removeTodoButton;
}

function removeTodoFromArray(todo) {
  const index = allTodosArray.indexOf(todo)
  if (index != -1) allTodosArray.splice(index, 1);
}

function getPriorityColor(priority) {
  if (priority === 'high') {
    return 'rgb(220, 0, 0)';
  } else if (priority === 'medium') {
    return 'rgb(255, 225, 0)';
  } else {
    return 'rgb(0, 155, 0)';
  }
}