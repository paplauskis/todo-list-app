import { notesSection } from "./control-sections";

const noteDescription = document.querySelector('#note');
const noteForm = document.querySelector('#note-form');

class Note {
  constructor(description) {
    this.description = description;
  }
}

export function addNote() {
  const newNote = new Note(noteDescription.value.trim());
  if (noteDescription.value.trim().length > 0) {
    displayNote(newNote);
    noteForm.reset();
  } 
}

function displayNote(note) {
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note-array-div');
  noteDiv.textContent = `${note.description}`;
  const removeNoteButton = document.createElement('button');
  removeNoteButton.textContent = '✕';
  removeNoteButton.classList.add('remove-note-button');
  removeNoteButton.addEventListener('click', () => {
    noteDiv.remove();
  });
  noteDiv.appendChild(removeNoteButton);
  notesSection.appendChild(noteDiv);
}