const addTaskBtn = document.querySelector('.addtask__btn');
const addTaskInput = document.querySelector('.addtask__input');
const todoItemsWrapper = document.querySelector('.todo-items__wrapper');


addTaskBtn.addEventListener('click', addTask);

let allTasks;

function Task(title) {
     this.title = title;
}


function addTask() {

     if (addTaskInput.value === '') {
          alert('Введите название задачи')

     } else {
          allTasks.push(new Task(addTaskInput.value));
          addTasksToLocal();
          createTaskTemplate();
          addTaskInput.value = '';
     }
      
}


if (!localStorage.allTasks) {
     allTasks = [];
 } else {
     allTasks = JSON.parse(localStorage.getItem('allTasks'));
 }


const addTasksToLocal = () => {
     localStorage.setItem('allTasks', JSON.stringify(allTasks));
}


const createTaskTemplate = () => {

     todoItemsWrapper.innerHTML = '';

     if (allTasks.length > 0) {

          allTasks.forEach((taskItem, taskItemIndex) => {
               todoItemsWrapper.innerHTML += `
                    <div class="todo__item">
                         <div class="todoitem__description">${taskItem.title}</div>
                         <div class="todoitem__icons">
                              <i 
                                   onclick="deleteTask(${taskItemIndex})" 
                                   class="todoitem__icon fa-regular fa-trash-can fa-lg">
                              </i>
                         </div>
                    </div>
               `              
          });
     }        
};


createTaskTemplate();


const deleteTask = (taskItemIndex) => {
    allTasks.splice(taskItemIndex, 1)
    createTaskTemplate();
    addTasksToLocal();
}





