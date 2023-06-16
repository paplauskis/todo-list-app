import { controlForms } from './form-control';
import { addNote } from './create-note';
import { controlSections } from './control-sections';
import { addTodo } from './create-todo';

controlForms();
controlSections();

const submitNoteFormButton = document.querySelector('.add-new-note');
submitNoteFormButton.addEventListener('click', (e) => {
  e.preventDefault();
  addNote();
});

const submitTodoFormButton = document.querySelector('.add-new-todo');
submitTodoFormButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
});
