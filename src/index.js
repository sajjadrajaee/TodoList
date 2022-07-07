import './style.css';

const todos = [
  {
    index: 1,
    description: 'I must complete the project',
    status: false,
  },
  {
    index: 2,
    description: 'I must read lessons',
    status: false,
  },
  {
    index: 3,
    description: 'I must read a book',
    status: true,
  },
];

class Todo {
  constructor(index, description, status) {
    this.description = description;
    this.status = status;
    this.index = index;
  }
}

const todoElement = document.querySelector('.card');
todos.forEach((todo) => {
  if (todo.status === false) {
    const prop = document.createElement('div');
    prop.classList.add('todo');
    prop.innerHTML = `
<div class="todo-text"><input type="checkbox">${todo.description}</div>
<div class="icon"><img src="./../assets/refresh.png"></div>
`;
    todoElement.appendChild(prop);
  }
});

export default Todo;