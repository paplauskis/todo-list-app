import {
  allTodosSection,
  completedTodosSection,
  sectionLoader,
  title,
  todoDescription,
  dueDate,
  priority,
  todoForm
} from './control-sections';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function addTodo() {
  const newTodo = new Todo(
    title.value,
    todoDescription.value,
    dueDate.value,
    priority.value
  );
  if (title.value.length > 0) {
    createTodoDiv(newTodo);
    todoForm.reset();
  }
}

const todo1 = new Todo('11111', '', '2023-06-12', 'low');
const todo2 = new Todo('22222', '', '2023-06-13', 'medium');
const todo3 = new Todo('33333', '', '2023-06-14', 'high');
const todo4 = new Todo('44444', '', '2023-06-15', 'low');
const todo5 = new Todo('55555', '', '2023-06-12', 'medium');
const todo6 = new Todo('66666', '', '2023-06-13', 'high');
createTodoDiv(todo1);
createTodoDiv(todo2);
createTodoDiv(todo3);
createTodoDiv(todo4);
createTodoDiv(todo5);
createTodoDiv(todo6);
addTodo();

function createTodoDiv(todo) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-array-div');
  const priorityDiv = createPriorityDiv(todo.priority);
  const todoTitleDiv = createTodoTitleDiv(todo.title);
  const dateAndInfoDiv = createDateAndInfoDiv(
    todo.dueDate,
    todo.description,
    todoDiv,
    priorityDiv
  );
  const completeTodoButton = createCompleteTodoButton(todoDiv);
  const removeTodoButton = createRemoveTodoButton(todoDiv);

  todoDiv.appendChild(priorityDiv);
  todoDiv.appendChild(todoTitleDiv);
  todoDiv.appendChild(dateAndInfoDiv);
  dateAndInfoDiv.appendChild(completeTodoButton);
  dateAndInfoDiv.appendChild(removeTodoButton);

  allTodosSection.appendChild(todoDiv);
  sortSectionByPriority(todo.priority, todoDiv);
  sectionLoader(todoDiv);
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

function createDateAndInfoDiv(dueDate, description, todoDiv, priorityDiv) {
  const dateAndInfoDiv = document.createElement('div');
  dateAndInfoDiv.classList.add('date-info-div');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description-div');
  descriptionDiv.textContent = description;
  descriptionDiv.style.display = 'none';

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date-div');
  dateDiv.textContent = checkCurrentDate(dueDate, todoDiv);

  const infoButton = document.createElement('button');
  infoButton.classList.add('info-button');
  infoButton.textContent = '•••';
  infoButton.addEventListener('click', () =>
    descriptionPopDown(descriptionDiv, todoDiv, priorityDiv)
  );

  dateAndInfoDiv.appendChild(dateDiv);
  dateAndInfoDiv.appendChild(infoButton);
  todoDiv.appendChild(descriptionDiv);

  return dateAndInfoDiv;
}

function descriptionPopDown(descriptionDiv, todoDiv, priorityDiv) {
  if (descriptionDiv.style.display === 'none') {
    descriptionDiv.style.display = 'block';
    todoDiv.style.height = '130px';
    priorityDiv.style.height = '120px';
  } else {
    descriptionDiv.style.display = 'none';
    todoDiv.style.height = '40px';
    priorityDiv.style.height = '40px';
  }
}

function createCompleteTodoButton(todoDiv) {
  const completeTodoButton = document.createElement('button');
  completeTodoButton.classList.add('complete-todo-button');
  completeTodoButton.textContent = '✓';
  completeTodoButton.addEventListener('click', () => {
    completedTodosSection.appendChild(todoDiv);
    todoDiv.classList.add('completed');
    completeTodoButton.style.backgroundColor = 'green';
  });
  return completeTodoButton;
}

function createRemoveTodoButton(todoDiv) {
  const removeTodoButton = document.createElement('button');
  removeTodoButton.classList.add('remove-todo-button');
  removeTodoButton.textContent = '✕';
  removeTodoButton.addEventListener('click', () => todoDiv.remove());
  return removeTodoButton;
}

function getPriorityColor(priority) {
  if (priority === 'high') return 'rgb(220, 0, 0)';
  else if (priority === 'medium') return 'rgb(255, 225, 0)';
  else return 'rgb(0, 155, 0)';
}

function sortSectionByPriority(priority, todoDiv) {
  if (priority == 'low') todoDiv.classList.add('low');
  else if (priority == 'medium') todoDiv.classList.add('medium');
  else todoDiv.classList.add('high');
}

function getCurrentDate() {
  let thisMonth = `${new Date().getMonth() + 1}`;
  let thisDay = `${new Date().getDate()}`;
  if (thisDay.length == 1) thisDay = `0${thisDay}`;
  if (thisMonth.length == 1) thisMonth = `0${thisMonth}`;
  let todaysDate = `${thisMonth}-${thisDay}`;
  return [thisDay, thisMonth, todaysDate];
}

function checkCurrentDate(dueDate, todoDiv) {
  let modifiedDueDate = dueDate.replace('T', ' ').slice(5);
  if (modifiedDueDate.slice(0, 5) == getCurrentDate()[2]) {
    todoDiv.classList.add('today');
    const today = `Today ${modifiedDueDate.slice(6)}`;
    return today;
  } else if (modifiedDueDate.slice(0, 5) ==`${getCurrentDate()[1]}-${parseInt(getCurrentDate()[0]) + 1}`) {
    todoDiv.classList.add('tommorow');
    const tommorow = `Tommorow ${modifiedDueDate.slice(6)}`;
    return tommorow;
  } else {
    todoDiv.classList.add('future');
    return modifiedDueDate;
  }
}