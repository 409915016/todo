/**
 * Created by Mather on 2017-10-03.
 */
import css from './less/main.less'
import item from './modules/item'
import data from './modules/data'

console.log(localStorage.getItem('todoList'))

item.renderTodoList()

document.getElementById('add').addEventListener('click', () => {
  const value = document.getElementById('item').value
  console.log()
  if (value) {
    addItem(value)
  }

})

document.getElementById('item').addEventListener('keydown', function (e) {
  let value = this.value;
  console.log(e.code)
  if (e.code === 'Enter' && value) {
    addItem(value)
  }

})

function addItem (value) {
  data.todo.push(value)
  item.dataObjectUpdate()
  console.log(data)
  item.addItemToDOM(value)

}

