/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/control-sections.js":
/*!*********************************!*\
  !*** ./src/control-sections.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTodosSection: () => (/* binding */ allTodosSection),\n/* harmony export */   completedTodosSection: () => (/* binding */ completedTodosSection),\n/* harmony export */   controlSections: () => (/* binding */ controlSections),\n/* harmony export */   dueDate: () => (/* binding */ dueDate),\n/* harmony export */   loadAllTodosSection: () => (/* binding */ loadAllTodosSection),\n/* harmony export */   loadHighPrioritySection: () => (/* binding */ loadHighPrioritySection),\n/* harmony export */   loadLowPrioritySection: () => (/* binding */ loadLowPrioritySection),\n/* harmony export */   loadMediumPrioritySection: () => (/* binding */ loadMediumPrioritySection),\n/* harmony export */   loadTodayTodosSection: () => (/* binding */ loadTodayTodosSection),\n/* harmony export */   loadTommorowTodosSection: () => (/* binding */ loadTommorowTodosSection),\n/* harmony export */   notesSection: () => (/* binding */ notesSection),\n/* harmony export */   priority: () => (/* binding */ priority),\n/* harmony export */   sectionLoader: () => (/* binding */ sectionLoader),\n/* harmony export */   title: () => (/* binding */ title),\n/* harmony export */   todoDescription: () => (/* binding */ todoDescription),\n/* harmony export */   todoForm: () => (/* binding */ todoForm)\n/* harmony export */ });\nconst allTodosSection = document.querySelector('.all-todos-section')\nconst completedTodosSection = document.querySelector('.completed-todos-section')\nconst notesSection = document.querySelector('.notes-section')\n\n\nconst allTodosSectionButton = document.querySelector('.all-todos-section-button');\nconst todayTodosSectionButton = document.querySelector('.today-todos-section-button');\nconst tommorowTodosSectionButton = document.querySelector('.tommorow-todos-section-button');\nconst lowPriorityTodosSectionButton = document.querySelector('.low-priority-section-button');\nconst mediumPriorityTodosSectionButton = document.querySelector('.medium-priority-section-button');\nconst highPriorityTodosSectionButton = document.querySelector('.high-priority-section-button');\nconst notesSectionButton = document.querySelector('.notes-section-button')\nconst completedTodosSectionButton = document.querySelector('.completed-todos-section-button');\n\nconst title = document.querySelector('#title');\nconst todoDescription = document.querySelector('#description');\nconst dueDate = document.querySelector('#due-date');\nconst priority = document.querySelector('#select-priority');\nconst todoForm = document.querySelector('#todo-form')\n\nfunction controlSections() {\n  allTodosSection.style.display = 'flex';\n  completedTodosSection.style.display = 'none';\n  notesSection.style.display = 'none';\n\n  notesSectionButton.addEventListener('click', () => {\n      notesSection.style.display = 'grid';\n      allTodosSection.style.display = 'none';\n      completedTodosSection.style.display = 'none';\n  });\n\n  allTodosSectionButton.addEventListener('click', () => {\n      allTodosSection.style.display = 'flex';\n      completedTodosSection.style.display = 'none';\n      notesSection.style.display = 'none';\n    });\n    \n  completedTodosSectionButton.addEventListener('click', () => {\n    const completedTodos = document.querySelectorAll('.completed')\n    completedTodos.forEach((todo) => todo.style.display = 'flex');\n    allTodosSection.style.display = 'none';\n    completedTodosSection.style.display = 'flex';\n    notesSection.style.display = 'none';\n  });\n}\n\nfunction sectionLoader(todoDiv) {\n  lowPriorityTodosSectionButton.addEventListener('click', () => loadLowPrioritySection(todoDiv))\n  mediumPriorityTodosSectionButton.addEventListener('click', () => loadMediumPrioritySection(todoDiv))\n  highPriorityTodosSectionButton.addEventListener('click', () => loadHighPrioritySection(todoDiv))\n  allTodosSectionButton.addEventListener('click', () => loadAllTodosSection(todoDiv));\n  todayTodosSectionButton.addEventListener('click', () => loadTodayTodosSection(todoDiv));\n  tommorowTodosSectionButton.addEventListener('click', () => loadTommorowTodosSection(todoDiv))\n}\n\nfunction hideNotesAndCompletedTodos() {\n  allTodosSection.style.display = 'flex';\n  completedTodosSection.style.display = 'none';\n  notesSection.style.display = 'none';\n}\n\nfunction loadAllTodosSection(todoDiv) {\n  todoDiv.style.display = 'flex';\n  completedTodosSection.style.display = 'none';\n  notesSection.style.display = 'none';\n}\n\nfunction loadLowPrioritySection(todoDiv) {\n  if (todoDiv.classList[2] == 'low') {\n    todoDiv.style.display = 'flex'\n  } else todoDiv.style.display = 'none'\n  hideNotesAndCompletedTodos()\n}\n\nfunction loadMediumPrioritySection(todoDiv) {\n  if (todoDiv.classList[2] == 'medium') {\n    todoDiv.style.display = 'flex'\n  } else todoDiv.style.display = 'none'\n  hideNotesAndCompletedTodos()\n}\n\nfunction loadHighPrioritySection(todoDiv) {\n  if (todoDiv.classList[2] == 'high') {\n    todoDiv.style.display = 'flex'\n  } else todoDiv.style.display = 'none'\n  hideNotesAndCompletedTodos()\n}\n\nfunction loadTodayTodosSection(todoDiv) {\n  if (todoDiv.classList[1] == 'today') {\n    todoDiv.style.display = 'flex'\n  } else todoDiv.style.display = 'none'\n  hideNotesAndCompletedTodos()\n}\n\nfunction loadTommorowTodosSection(todoDiv) {\n  if (todoDiv.classList[1] == 'tommorow') {\n    todoDiv.style.display = 'flex'\n  } else todoDiv.style.display = 'none'\n  hideNotesAndCompletedTodos()\n}\n\n//# sourceURL=webpack://todo-list-new/./src/control-sections.js?");

/***/ }),

/***/ "./src/create-note.js":
/*!****************************!*\
  !*** ./src/create-note.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNote: () => (/* binding */ addNote)\n/* harmony export */ });\n/* harmony import */ var _control_sections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-sections */ \"./src/control-sections.js\");\n\n\nconst noteDescription = document.querySelector('#note');\nconst noteForm = document.querySelector('#note-form');\nconst loadNoteForm = document.querySelector('.note-div');\n\nclass Note {\n  constructor(description) {\n    this.description = description;\n  }\n}\n\nfunction addNote() {\n  const newNote = new Note(noteDescription.value.trim());\n  if (noteDescription.value.trim().length > 0) {\n    displayNote(newNote);\n    loadNoteForm.style.display === 'none' ? loadNoteForm.style.display = 'block' : loadNoteForm.style.display = 'none';\n    noteForm.reset();\n  } \n}\n\nfunction displayNote(note) {\n  const noteDiv = document.createElement('div');\n  noteDiv.classList.add('note-array-div');\n  noteDiv.textContent = `${note.description}`;\n  const removeNoteButton = document.createElement('button');\n  removeNoteButton.textContent = '✕';\n  removeNoteButton.classList.add('remove-note-button');\n  removeNoteButton.addEventListener('click', () => {\n    noteDiv.remove();\n  });\n  noteDiv.appendChild(removeNoteButton);\n  _control_sections__WEBPACK_IMPORTED_MODULE_0__.notesSection.appendChild(noteDiv);\n}\n\n//# sourceURL=webpack://todo-list-new/./src/create-note.js?");

/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   createTodoDiv: () => (/* binding */ createTodoDiv)\n/* harmony export */ });\n/* harmony import */ var _control_sections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-sections */ \"./src/control-sections.js\");\n// import { addTodoToLocalStorage, displayTodosFromLocalStorage } from './local-storage';\n\n\nconst loadTodoForm = document.querySelector('.todo-div');\n\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nfunction addTodo() {\n  const newTodo = new Todo(_control_sections__WEBPACK_IMPORTED_MODULE_0__.title.value, _control_sections__WEBPACK_IMPORTED_MODULE_0__.todoDescription.value, _control_sections__WEBPACK_IMPORTED_MODULE_0__.dueDate.value, _control_sections__WEBPACK_IMPORTED_MODULE_0__.priority.value);\n  if (_control_sections__WEBPACK_IMPORTED_MODULE_0__.title.value.length > 0) {\n    createTodoDiv(newTodo);\n    loadTodoForm.style.display === 'none' ? loadTodoForm.style.display = 'block' : loadTodoForm.style.display = 'none';\n    _control_sections__WEBPACK_IMPORTED_MODULE_0__.todoForm.reset();\n  }\n}\n\nfunction createTodoDiv(todo) {\n  const todoDiv = document.createElement('div');\n  todoDiv.classList.add('todo-array-div');\n  const priorityDiv = createPriorityDiv(todo.priority);\n  const todoTitleDiv = createTodoTitleDiv(todo.title);\n  const dateAndInfoDiv = createDateAndInfoDiv(todo.dueDate, todo.description, todoDiv, priorityDiv);\n  const completeTodoButton = createCompleteTodoButton(todoDiv);\n  const removeTodoButton = createRemoveTodoButton(todoDiv);\n\n  todoDiv.appendChild(priorityDiv);\n  todoDiv.appendChild(todoTitleDiv);\n  todoDiv.appendChild(dateAndInfoDiv);\n  dateAndInfoDiv.appendChild(completeTodoButton);\n  dateAndInfoDiv.appendChild(removeTodoButton);\n\n  _control_sections__WEBPACK_IMPORTED_MODULE_0__.allTodosSection.appendChild(todoDiv);\n  sortSectionByPriority(todo.priority, todoDiv);\n  (0,_control_sections__WEBPACK_IMPORTED_MODULE_0__.sectionLoader)(todoDiv);\n}\n\nfunction createPriorityDiv(priority) {\n  const priorityDiv = document.createElement('div');\n  priorityDiv.classList.add('priority-div');\n  priorityDiv.style.backgroundColor = getPriorityColor(priority);\n  return priorityDiv;\n}\n\nfunction createTodoTitleDiv(title) {\n  const todoTitleDiv = document.createElement('div');\n  todoTitleDiv.classList.add('title-div');\n  todoTitleDiv.textContent = title;\n  return todoTitleDiv;\n}\n\nfunction createDateAndInfoDiv(dueDate, description, todoDiv, priorityDiv) {\n  const dateAndInfoDiv = document.createElement('div');\n  dateAndInfoDiv.classList.add('date-info-div');\n\n  const descriptionDiv = document.createElement('div');\n  descriptionDiv.classList.add('description-div');\n  descriptionDiv.textContent = description;\n  descriptionDiv.style.display = 'none';\n\n  const dateDiv = document.createElement('div');\n  dateDiv.classList.add('date-div');\n  dateDiv.textContent = checkCurrentDate(dueDate, todoDiv);\n\n  const infoButton = document.createElement('button');\n  infoButton.classList.add('info-button');\n  infoButton.textContent = '•••';\n  infoButton.addEventListener('click', () =>\n    descriptionPopDown(descriptionDiv, todoDiv, priorityDiv)\n  );\n\n  dateAndInfoDiv.appendChild(dateDiv);\n  dateAndInfoDiv.appendChild(infoButton);\n  todoDiv.appendChild(descriptionDiv);\n\n  return dateAndInfoDiv;\n}\n\nfunction descriptionPopDown(descriptionDiv, todoDiv, priorityDiv) {\n  if (descriptionDiv.style.display === 'none') {\n    descriptionDiv.style.display = 'block';\n    todoDiv.style.height = '130px';\n    priorityDiv.style.height = '120px';\n  } else {\n    descriptionDiv.style.display = 'none';\n    todoDiv.style.height = '40px';\n    priorityDiv.style.height = '40px';\n  }\n}\n\nfunction createCompleteTodoButton(todoDiv) {\n  const completeTodoButton = document.createElement('button');\n  completeTodoButton.classList.add('complete-todo-button');\n  completeTodoButton.textContent = '✓';\n  completeTodoButton.addEventListener('click', () => {\n    _control_sections__WEBPACK_IMPORTED_MODULE_0__.completedTodosSection.appendChild(todoDiv);\n    todoDiv.classList.add('completed');\n    completeTodoButton.style.backgroundColor = 'green';\n  });\n  return completeTodoButton;\n}\n\nfunction createRemoveTodoButton(todoDiv) {\n  const removeTodoButton = document.createElement('button');\n  removeTodoButton.classList.add('remove-todo-button');\n  removeTodoButton.textContent = '✕';\n  removeTodoButton.addEventListener('click', () => todoDiv.remove());\n  return removeTodoButton;\n}\n\nfunction getPriorityColor(priority) {\n  if (priority === 'high') return 'rgb(220, 0, 0)';\n  else if (priority === 'medium') return 'rgb(255, 225, 0)';\n  else return 'rgb(0, 155, 0)';\n}\n\nfunction sortSectionByPriority(priority, todoDiv) {\n  if (priority == 'low') todoDiv.classList.add('low');\n  else if (priority == 'medium') todoDiv.classList.add('medium');\n  else todoDiv.classList.add('high');\n}\n\nfunction getCurrentDate() {\n  let thisMonth = `${new Date().getMonth() + 1}`;\n  let thisDay = `${new Date().getDate()}`;\n  if (thisDay.length == 1) thisDay = `0${thisDay}`;\n  if (thisMonth.length == 1) thisMonth = `0${thisMonth}`;\n  let todaysDate = `${thisMonth}-${thisDay}`;\n  return [thisDay, thisMonth, todaysDate];\n}\n\nfunction checkCurrentDate(dueDate, todoDiv) {\n  let modifiedDueDate = dueDate.replace('T', ' ').slice(5);\n  if (modifiedDueDate.slice(0, 5) == getCurrentDate()[2]) {\n    todoDiv.classList.add('today');\n    const today = `Today ${modifiedDueDate.slice(6)}`;\n    return today;\n  } else if (modifiedDueDate.slice(0, 5) ==`${getCurrentDate()[1]}-${parseInt(getCurrentDate()[0]) + 1}`) {\n    todoDiv.classList.add('tommorow');\n    const tommorow = `Tommorow ${modifiedDueDate.slice(6)}`;\n    return tommorow;\n  } else {\n    todoDiv.classList.add('future');\n    return modifiedDueDate;\n  }\n}\n\n//# sourceURL=webpack://todo-list-new/./src/create-todo.js?");

/***/ }),

/***/ "./src/form-control.js":
/*!*****************************!*\
  !*** ./src/form-control.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   controlForms: () => (/* binding */ controlForms)\n/* harmony export */ });\nfunction controlForms() {\n  const loadNoteForm = document.querySelector('.note-div');\n  const loadTodoForm = document.querySelector('.todo-div');\n  loadNoteForm.style.display = 'none';\n  loadTodoForm.style.display = 'none';\n  const cancelNoteFormButton = document.querySelector('.cancel-note-form');\n  cancelNoteFormButton.addEventListener('click', toggleNoteForm);\n  const cancelTodoFormButton = document.querySelector('.cancel-todo-form');\n  cancelTodoFormButton.addEventListener('click', toggleTodoForm);\n  const openTodoFormButton = document.querySelector('.new-todo');\n  openTodoFormButton.addEventListener('click', toggleTodoForm);\n  const openNoteFormButton = document.querySelector('.new-note');\n  openNoteFormButton.addEventListener('click', toggleNoteForm);\n\n  function toggleNoteForm() {\n    loadNoteForm.style.display === 'none' ? loadNoteForm.style.display = 'block' : loadNoteForm.style.display = 'none';\n  }\n\n  function toggleTodoForm() {\n    loadTodoForm.style.display === 'none' ? loadTodoForm.style.display = 'block' : loadTodoForm.style.display = 'none';\n  }\n};\n\n//# sourceURL=webpack://todo-list-new/./src/form-control.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-control */ \"./src/form-control.js\");\n/* harmony import */ var _create_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-note */ \"./src/create-note.js\");\n/* harmony import */ var _control_sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-sections */ \"./src/control-sections.js\");\n/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-todo */ \"./src/create-todo.js\");\n\n\n\n\n\n(0,_form_control__WEBPACK_IMPORTED_MODULE_0__.controlForms)();\n(0,_control_sections__WEBPACK_IMPORTED_MODULE_2__.controlSections)();\n\nconst submitNoteFormButton = document.querySelector('.add-new-note');\nsubmitNoteFormButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_create_note__WEBPACK_IMPORTED_MODULE_1__.addNote)();\n})\n\nconst submitTodoFormButton = document.querySelector('.add-new-todo');\nsubmitTodoFormButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_create_todo__WEBPACK_IMPORTED_MODULE_3__.addTodo)();\n})\n\n//# sourceURL=webpack://todo-list-new/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;