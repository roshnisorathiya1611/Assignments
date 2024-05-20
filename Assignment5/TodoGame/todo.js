document.addEventListener('DOMContentLoaded', () => {
    var todos = [];

    var todoTitleInput = document.getElementById('todo-title');
    var todoDescriptionInput = document.getElementById('todo-description');
    var submitBtn = document.getElementById('submit-btn');
    var todoList = document.getElementById('todo-list');

    submitBtn.addEventListener('click', () => {
        var title = todoTitleInput.value.trim();
        var description = todoDescriptionInput.value.trim();

        if (title === '' || description === '') {
            alert('Please fill in both fields');
            return;
        }

        var newTodo = { title, description };
        todos.push(newTodo);

        displayTodos();

        todoTitleInput.value = '';
        todoDescriptionInput.value = '';
    });

    function displayTodos() {
        todoList.innerHTML = '';

        todos.forEach(todo => {
            var todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            var todoTitle = document.createElement('h3');
            todoTitle.innerText = todo.title;

            var todoDescription = document.createElement('p');
            todoDescription.innerText = todo.description;

            todoItem.appendChild(todoTitle);
            todoItem.appendChild(todoDescription);
            todoList.appendChild(todoItem);
        });
    }
});
