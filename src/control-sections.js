export const allTodosSection = document.querySelector('.all-todos-section')
export const completedTodosSection = document.querySelector('.completed-todos-section')
export const notesSection = document.querySelector('.notes-section')

const allTodosSectionButton = document.querySelector('.all-todos-section-button');
const todayTodosSectionButton = document.querySelector('.today-todos-section-button');
const tommorowTodosSectionButton = document.querySelector('.tommorow-todos-section-button');
const lowPriorityTodosSectionButton = document.querySelector('.low-priority-section-button');
const mediumPriorityTodosSectionButton = document.querySelector('.medium-priority-section-button');
const highPriorityTodosSectionButton = document.querySelector('.high-priority-section-button');

export function controlSections() {

  allTodosSection.style.display = 'flex';
  completedTodosSection.style.display = 'none';
  notesSection.style.display = 'none';

  const notesSectionButton = document.querySelector('.notes-section-button')
  notesSectionButton.addEventListener('click', () => {
      notesSection.style.display = 'grid';
      allTodosSection.style.display = 'none';
      completedTodosSection.style.display = 'none';
  });

  const allTodosSectionButton = document.querySelector('.all-todos-section-button');
  allTodosSectionButton.addEventListener('click', () => {
      allTodosSection.style.display = 'flex';
      completedTodosSection.style.display = 'none';
      notesSection.style.display = 'none';

  });

  const completedTodosSectionButton = document.querySelector('.completed-todos-section-button');
  completedTodosSectionButton.addEventListener('click', () => {
    allTodosSection.style.display = 'none';
    completedTodosSection.style.display = 'flex';
    notesSection.style.display = 'none';
  });
}

export function sectionLoader(todoArrayDiv) {
  lowPriorityTodosSectionButton.addEventListener('click', () => loadLowPrioritySection(todoArrayDiv))
  mediumPriorityTodosSectionButton.addEventListener('click', () => loadMediumPrioritySection(todoArrayDiv))
  highPriorityTodosSectionButton.addEventListener('click', () => loadHighPrioritySection(todoArrayDiv))
  allTodosSectionButton.addEventListener('click', () => loadAllTodosSection(todoArrayDiv));
  todayTodosSectionButton.addEventListener('click', () => loadTodayTodosSection(todoArrayDiv));
  tommorowTodosSectionButton.addEventListener('click', () => loadTommorowTodosSection(todoArrayDiv))
}

export function loadAllTodosSection(todoArrayDiv) {
  todoArrayDiv.style.display = 'flex'
}

export function loadLowPrioritySection(todoArrayDiv) {
  if (todoArrayDiv.classList[2] == 'low') {
    todoArrayDiv.style.display = 'flex'
  } else todoArrayDiv.style.display = 'none'
}

export function loadMediumPrioritySection(todoArrayDiv) {
  if (todoArrayDiv.classList[2] == 'medium') {
    todoArrayDiv.style.display = 'flex'
  } else todoArrayDiv.style.display = 'none'
}

export function loadHighPrioritySection(todoArrayDiv) {
  if (todoArrayDiv.classList[2] == 'high') {
    todoArrayDiv.style.display = 'flex'
  } else todoArrayDiv.style.display = 'none'
}

export function loadTodayTodosSection(todoArrayDiv) {
  if (todoArrayDiv.classList[1] == 'today') {
    todoArrayDiv.style.display = 'flex'
  } else todoArrayDiv.style.display = 'none'
}

export function loadTommorowTodosSection(todoArrayDiv) {
  if (todoArrayDiv.classList[1] == 'tommorow') {
    todoArrayDiv.style.display = 'flex'
  } else todoArrayDiv.style.display = 'none'
}