import { notesSection } from "./control-sections";

let notesArray = [];
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
    notesArray.push(newNote);
    displayNote(newNote);
    noteForm.reset();
  } 
}

function displayNote(note) {
  const noteArrayDiv = document.createElement('div');
  noteArrayDiv.classList.add('note-array-div');
  noteArrayDiv.textContent = `${note.description}`;
  const removeNoteButton = document.createElement('button');
  removeNoteButton.textContent = '✕';
  removeNoteButton.classList.add('remove-note-button');
  removeNoteButton.addEventListener('click', () => {
    noteArrayDiv.remove();
    removeNoteFromArray(note);
  });
  noteArrayDiv.appendChild(removeNoteButton);
  notesSection.appendChild(noteArrayDiv);
}

function removeNoteFromArray(note) {
  const index = notesArray.indexOf(note);
  if (index !== -1) {
    notesArray.splice(index, 1);
  }
}


