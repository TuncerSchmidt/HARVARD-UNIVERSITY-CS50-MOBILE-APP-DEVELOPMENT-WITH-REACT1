const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')




let itemCount = 0
let uncheckedCount = 0

function updateItemCount(difference){
  itemCount += difference
  itemCountSpan.innerHTML = itemCount
}

function updateUncheckedCount(difference){
  uncheckedCount += difference
  uncheckedCountSpan.innerHTML = uncheckedCount
}

function createTodo(name){
  const checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'
  checkbox.onchange = toggleCheckbox


  const span = document.createElement('span')
  span.className = classNames.TODO_TEXT
  span.setAttribute('contenteditable', 'true')
  span.innerHTML = name || 'New TODO'

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(checkbox)
  li.appendChild(span)

  return li
}

function newTodo(name){
  const todo = createTodo(name)
  list.appendChild(todo)
  updateItemCount(1)
  updateUncheckedCount(1)
}

function toggleCheckbox(){
  if(this.checked) updateUncheckedCount(-1)
  else updateUncheckedCount(1)
}

