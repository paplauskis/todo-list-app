export const allTodosSection = document.querySelector('.all-todos-section')
export const completedTodosSection = document.querySelector('.completed-todos-section')
export const notesSection = document.querySelector('.notes-section')


const allTodosSectionButton = document.querySelector('.all-todos-section-button');
const todayTodosSectionButton = document.querySelector('.today-todos-section-button');
const tommorowTodosSectionButton = document.querySelector('.tommorow-todos-section-button');
const lowPriorityTodosSectionButton = document.querySelector('.low-priority-section-button');
const mediumPriorityTodosSectionButton = document.querySelector('.medium-priority-section-button');
const highPriorityTodosSectionButton = document.querySelector('.high-priority-section-button');
const notesSectionButton = document.querySelector('.notes-section-button')
const completedTodosSectionButton = document.querySelector('.completed-todos-section-button');

export const title = document.querySelector('#title');
export const todoDescription = document.querySelector('#description');
export const dueDate = document.querySelector('#due-date');
export const priority = document.querySelector('#select-priority');
export const todoForm = document.querySelector('#todo-form')

export function controlSections() {
  allTodosSection.style.display = 'flex';
  completedTodosSection.style.display = 'none';
  notesSection.style.display = 'none';

  notesSectionButton.addEventListener('click', () => {
      notesSection.style.display = 'grid';
      allTodosSection.style.display = 'none';
      completedTodosSection.style.display = 'none';
  });

  allTodosSectionButton.addEventListener('click', () => {
      allTodosSection.style.display = 'flex';
      completedTodosSection.style.display = 'none';
      notesSection.style.display = 'none';
    });
    
  completedTodosSectionButton.addEventListener('click', () => {
    const completedTodos = document.querySelectorAll('.completed')
    completedTodos.forEach((todo) => todo.style.display = 'flex');
    allTodosSection.style.display = 'none';
    completedTodosSection.style.display = 'flex';
    notesSection.style.display = 'none';
  });
}

export function sectionLoader(todoDiv) {
  lowPriorityTodosSectionButton.addEventListener('click', () => loadLowPrioritySection(todoDiv))
  mediumPriorityTodosSectionButton.addEventListener('click', () => loadMediumPrioritySection(todoDiv))
  highPriorityTodosSectionButton.addEventListener('click', () => loadHighPrioritySection(todoDiv))
  allTodosSectionButton.addEventListener('click', () => loadAllTodosSection(todoDiv));
  todayTodosSectionButton.addEventListener('click', () => loadTodayTodosSection(todoDiv));
  tommorowTodosSectionButton.addEventListener('click', () => loadTommorowTodosSection(todoDiv))
}

function hideNotesAndCompletedTodos() {
  allTodosSection.style.display = 'flex';
  completedTodosSection.style.display = 'none';
  notesSection.style.display = 'none';
}

export function loadAllTodosSection(todoDiv) {
  todoDiv.style.display = 'flex';
  completedTodosSection.style.display = 'none';
  notesSection.style.display = 'none';
}

export function loadLowPrioritySection(todoDiv) {
  if (todoDiv.classList[2] == 'low') {
    todoDiv.style.display = 'flex'
  } else todoDiv.style.display = 'none'
  hideNotesAndCompletedTodos()
}

export function loadMediumPrioritySection(todoDiv) {
  if (todoDiv.classList[2] == 'medium') {
    todoDiv.style.display = 'flex'
  } else todoDiv.style.display = 'none'
  hideNotesAndCompletedTodos()
}

export function loadHighPrioritySection(todoDiv) {
  if (todoDiv.classList[2] == 'high') {
    todoDiv.style.display = 'flex'
  } else todoDiv.style.display = 'none'
  hideNotesAndCompletedTodos()
}

export function loadTodayTodosSection(todoDiv) {
  if (todoDiv.classList[1] == 'today') {
    todoDiv.style.display = 'flex'
  } else todoDiv.style.display = 'none'
  hideNotesAndCompletedTodos()
}

export function loadTommorowTodosSection(todoDiv) {
  if (todoDiv.classList[1] == 'tommorow') {
    todoDiv.style.display = 'flex'
  } else todoDiv.style.display = 'none'
  hideNotesAndCompletedTodos()
}