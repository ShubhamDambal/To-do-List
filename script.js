const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;

    //generating HTML 
    //we are adding no. of paragraphs on webpage inside <div>
    //we've to create seperate div for each element too make them fit into grid
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        todoList.splice(${i}, 1);  
        renderTodoList();" class="delete-todo-button">
        Delete
      </button>`;  
    todoListHTML += html;
  }

  const ans = document.querySelector('.js-todo-list');
  ans.innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateinputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateinputElement.value;

  //put name into array
  todoList.push(
    { //name: name,
      //dueDate: dueDate
      name,   //can write like this if object name and var name same
      dueDate
    });

  inputElement.value = '';  //text box empty after click on add button
  dateinputElement.value = '';  //dates text box empty after click on add button

  renderTodoList();  //after adding todo display on web page
}