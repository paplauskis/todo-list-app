export function controlForms() {
  const loadNoteForm = document.querySelector('.note-div');
  const loadTodoForm = document.querySelector('.todo-div');
  loadNoteForm.style.display = 'none';
  loadTodoForm.style.display = 'none';
  const cancelNoteFormButton = document.querySelector('.cancel-note-form');
  cancelNoteFormButton.addEventListener('click', toggleNoteForm);
  const cancelTodoFormButton = document.querySelector('.cancel-todo-form');
  cancelTodoFormButton.addEventListener('click', toggleTodoForm);
  const openTodoFormButton = document.querySelector('.new-todo');
  openTodoFormButton.addEventListener('click', toggleTodoForm);
  const openNoteFormButton = document.querySelector('.new-note');
  openNoteFormButton.addEventListener('click', toggleNoteForm);

  function toggleNoteForm() {
    loadNoteForm.style.display === 'none' ? loadNoteForm.style.display = 'block' : loadNoteForm.style.display = 'none';
  }

  function toggleTodoForm() {
    loadTodoForm.style.display === 'none' ? loadTodoForm.style.display = 'block' : loadTodoForm.style.display = 'none';
  }
};