export const allTodosSection = document.querySelector('.all-todos-section')
export const todayTodosSection = document.querySelector('.today-todos-section') 
export const completedTodosSection = document.querySelector('.completed-todos-section')
export const notesSection = document.querySelector('.notes-section')
export const highPriorityTodosSection = document.querySelector('.high-priority-todos-section')
export const mediumPriorityTodosSection = document.querySelector('.medium-priority-todos-section')
export const lowPriorityTodosSection = document.querySelector('.low-priority-todos-section')
export function controlSections() {

  allTodosSection.style.display = 'flex';
  todayTodosSection.style.display = 'none';
  completedTodosSection.style.display = 'none';
  notesSection.style.display = 'none';
  highPriorityTodosSection.style.display = 'none';
  mediumPriorityTodosSection.style.display = 'none';
  lowPriorityTodosSection.style.display = 'none';

  const notesSectionButton = document.querySelector('.notes-section-button')
  notesSectionButton.addEventListener('click', () => {
      notesSection.style.display = 'grid';
      allTodosSection.style.display = 'none';
      todayTodosSection.style.display = 'none';
      completedTodosSection.style.display = 'none';
      highPriorityTodosSection.style.display = 'none';
      mediumPriorityTodosSection.style.display = 'none';
      lowPriorityTodosSection.style.display = 'none';
  });

  const allTodosSectionButton = document.querySelector('.all-todos-section-button');
  allTodosSectionButton.addEventListener('click', () => {
      allTodosSection.style.display = 'flex';
      todayTodosSection.style.display = 'none';
      completedTodosSection.style.display = 'none';
      notesSection.style.display = 'none';
      highPriorityTodosSection.style.display = 'none';
      mediumPriorityTodosSection.style.display = 'none';
      lowPriorityTodosSection.style.display = 'none';
  });

  const todayTodosSectionButton = document.querySelector('.today-todos-section-button');
  todayTodosSectionButton.addEventListener('click', () => {
    allTodosSection.style.display = 'none';
    todayTodosSection.style.display = 'flex';
    completedTodosSection.style.display = 'none';
    notesSection.style.display = 'none';
    highPriorityTodosSection.style.display = 'none';
    mediumPriorityTodosSection.style.display = 'none';
    lowPriorityTodosSection.style.display = 'none';
  });

  const completedTodosSectionButton = document.querySelector('.completed-todos-section-button');
  completedTodosSectionButton.addEventListener('click', () => {
    allTodosSection.style.display = 'none';
    todayTodosSection.style.display = 'none';
    completedTodosSection.style.display = 'flex';
    notesSection.style.display = 'none';
    highPriorityTodosSection.style.display = 'none';
    mediumPriorityTodosSection.style.display = 'none';
    lowPriorityTodosSection.style.display = 'none';
  });

  const highPriorityTodosSectionButton = document.querySelector('.high-priority-section-button');
  highPriorityTodosSectionButton.addEventListener('click', () => {
    allTodosSection.style.display = 'none';
    todayTodosSection.style.display = 'none';
    completedTodosSection.style.display = 'none';
    notesSection.style.display = 'none';
    highPriorityTodosSection.style.display = 'flex';
    mediumPriorityTodosSection.style.display = 'none';
    lowPriorityTodosSection.style.display = 'none';
  });

  const mediumPriorityTodosSectionButton = document.querySelector('.medium-priority-section-button');
  mediumPriorityTodosSectionButton.addEventListener('click', () => {
    allTodosSection.style.display = 'none';
    todayTodosSection.style.display = 'none';
    completedTodosSection.style.display = 'none';
    notesSection.style.display = 'none';
    highPriorityTodosSection.style.display = 'none';
    mediumPriorityTodosSection.style.display = 'flex';
    lowPriorityTodosSection.style.display = 'none';
  });

  const lowPriorityTodosSectionButton = document.querySelector('.low-priority-section-button');
  lowPriorityTodosSectionButton.addEventListener('click', () => {
    allTodosSection.style.display = 'none';
    todayTodosSection.style.display = 'none';
    completedTodosSection.style.display = 'none';
    notesSection.style.display = 'none';
    highPriorityTodosSection.style.display = 'none';
    mediumPriorityTodosSection.style.display = 'none';
    lowPriorityTodosSection.style.display = 'flex';
  });
}