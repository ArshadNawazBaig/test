const todos = [];

const newTodo = {id: 1, title: 'Get up now', completed: false};

todos.push(newTodo);

console.log(todos);

const updatedTodo = {id: 1, title: 'Play cricket', completed: true};

const index = todos.findIndex(todo => todo.id == updatedTodo.id);

if (index !== -1) {
    todos.slice(index, 1, updatedTodo);
}

console.log(todos)