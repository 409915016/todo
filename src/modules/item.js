/**
 * Created by Mather on 2017-10-03.
 */

import data from './data'

let removeSVG = `<?xml version="1.0" encoding="utf-8"?><svg style="enable-background:new 0 0 22 22"version=1.1 viewBox="0 0 22 22"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><rect class=noFill height=22 width=22 /><g><g><path class=fill d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3
			c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9
			C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7
			c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2
			c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class=fill d=M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z /></g><g><path class=fill d=M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z /></g><g><path class=fill d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8
				C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>`
let completeSVG = `<?xml version="1.0" encoding="utf-8"?><svg style="enable-background:new 0 0 22 22"version=1.1 viewBox="0 0 22 22"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><rect class=noFill height=22 width=22 y=0 /><g><path class=fill d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8
		c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>`

function template (text) {
  return `
    <li>${text}
      <div class="buttons">
        <button class="remove">
          ${removeSVG}
        </button>
        <button class="complete">
          ${completeSVG}
        </button>
      </div>
    </li>`
}

function removeItem () {
  let items = this.parentNode.parentNode;
  let parent = items.parentNode;
  let id = parent.id;
  let value = items.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1)

  } else {
    data.completed.splice(data.todo.indexOf(value), 1)

  }
  item.dataObjectUpdate()
  console.log(data)

  parent.removeChild(items)

}
function completeItem () {
  let items = this.parentNode.parentNode;
  let parent = items.parentNode;
  let id = parent.id;
  let target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo')
  let value = items.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1)
    data.completed.push(value)

  } else {
    data.completed.splice(data.todo.indexOf(value), 1)
    data.todo.push(value)

  }
  item.dataObjectUpdate()
  console.log(data)

  parent.removeChild(items)
  target.insertBefore(items, target.childNodes[0])


}

const item = {

  renderTodoList () {

    if (!data.todo.length && !data.completed.length) return

    for (let i = 0; i < data.todo.length; i++) {
      let value = data.todo[i]
      item.addItemToDOM(value)

    }
    for (let i = 0; i < data.completed.length; i++) {
      let value = data.completed[i]
      item.addItemToDOM(value, true)
    }
  },

  dataObjectUpdate () {
    localStorage.setItem('todoList', JSON.stringify(data))
    console.log(this)
  },


  addItemToDOM (value, completed) {

    let list = (completed) ? document.getElementById('completed') : document.getElementById('todo')
    let item = document.createElement('li')
    item.innerText = value

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')

    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.innerHTML = removeSVG
    //this is button
    remove.addEventListener('click', removeItem)

    let complete = document.createElement('button')
    complete.classList.add('complete')
    complete.innerHTML = completeSVG

    complete.addEventListener('click', completeItem)

    buttons.appendChild(remove)
    buttons.appendChild(complete)
    item.appendChild(buttons)

    list.insertBefore(item, list.childNodes[0])

  }
}

export default item
