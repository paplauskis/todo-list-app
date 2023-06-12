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
    createTodoDiv(newTodo);
    todoForm.reset();
  }
}

function createTodoDiv(todo) {
  sortPrioritiesToArrays(todo.priority, todo);
  const todoArrayDiv = document.createElement('div');
  todoArrayDiv.classList.add('todo-array-div');
  const priorityDiv = createPriorityDiv(todo.priority);
  const todoTitleDiv = createTodoTitleDiv(todo.title);
  const dateAndInfoDiv = createDateAndInfoDiv(todo.dueDate, todo, todo.description, todoArrayDiv, priorityDiv);
  const completeTodoButton = createCompleteTodoButton(todo, todoArrayDiv);
  const removeTodoButton = createRemoveTodoButton(todo, todoArrayDiv);

  todoArrayDiv.appendChild(priorityDiv);
  todoArrayDiv.appendChild(todoTitleDiv);
  todoArrayDiv.appendChild(dateAndInfoDiv);
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

function createDateAndInfoDiv(dueDate, todo, description, todoArrayDiv, priorityDiv) {
  const dateAndInfoDiv = document.createElement('div');
  dateAndInfoDiv.classList.add('date-info-div');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description-div');
  descriptionDiv.textContent = description;
  descriptionDiv.style.display = 'none';
  
  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date-div');
  dateDiv.textContent = checkCurrentDate(dueDate, todo);

  const infoButton = document.createElement('button');
  infoButton.classList.add('info-button');
  infoButton.textContent = '•••';
  infoButton.addEventListener('click', () => {
    if (descriptionDiv.style.display === 'none') {
      descriptionDiv.style.display = 'block';
      todoArrayDiv.style.height = '130px';
      priorityDiv.style.height = '120px';
    } else {
      descriptionDiv.style.display = 'none';
      todoArrayDiv.style.height = '40px';
      priorityDiv.style.height = '40px';
    }
  })
  
  dateAndInfoDiv.appendChild(dateDiv);
  dateAndInfoDiv.appendChild(infoButton);
  todoArrayDiv.appendChild(descriptionDiv);
  
  return dateAndInfoDiv;
}

function createCompleteTodoButton(todo, todoArrayDiv) {
  const completeTodoButton = document.createElement('button');
  completeTodoButton.classList.add('complete-todo-button');
  completeTodoButton.textContent = '✓';
  completeTodoButton.addEventListener('click', () => {
    completedTodosSection.appendChild(todoArrayDiv);
    completeTodoButton.style.backgroundColor = 'green';
    removeTodoFromArray(todo);
    completedTodosArray.push(todo);
  })
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

function sortPrioritiesToArrays(priority, newTodo) {
  if(priority == 'low') {
    lowPriorityTodosArray.push(newTodo)
  }
  else if (priority == 'medium') return mediumPriorityTodosArray.push(newTodo);
  else return highPriorityTodosArray.push(newTodo);
}

function getCurrentDate() {
  let thisMonth = `${new Date().getMonth() + 1}`;
  let thisDay = `${new Date().getDate()}`;
  if(thisDay.length == 1) thisDay = `0${thisDay}`;
  if(thisMonth.length == 1) thisMonth = `0${thisMonth}`;
  let todaysDate = `${thisMonth}-${thisDay}`;
  return [thisDay, thisMonth, todaysDate];
}

function checkCurrentDate(dueDate, todo) {
  let modifiedDueDate = dueDate.replace('T', ' ').slice(5);
  if (modifiedDueDate.slice(0, 5) == getCurrentDate()[2]) {
    todayTodosArray.push(todo);
    const today = `Today ${modifiedDueDate.slice(6)}`;
    return today;
  } else if (modifiedDueDate.slice(0, 5) == `${getCurrentDate()[1]}-${parseInt(getCurrentDate()[0]) + 1}`) {
    const tommorow = `Tommorow ${modifiedDueDate.slice(6)}`;
    return tommorow;
  } else return modifiedDueDate;
}