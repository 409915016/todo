/**
 * Created by Mather on 2017-10-03.
 */

let data = (localStorage.getItem('todoList')) ?
  JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: [],

  }
export default data