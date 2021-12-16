import {
  titleTaskElement,
  descriptionTaskElement,
  dateTaskElement,
  userTaskElement,
  buttonAddElement,
  todosWrapperElement,
  inProgressWrapperElement,
  doneWrapperElement,
  clearAllListToDoElement,
  clearAllListInPrElement,
  clearAllListDoneElement,
  totalToDoElement,
  totalInPrElement,
  totalDoneElement,
  userName,
} from './modules/const';

import { fetchData } from './modules/data';
fetchData();

let tasksDone = !localStorage.getItem('tasksDone')
  ? []
  : JSON.parse(localStorage.getItem('tasksDone'));

let tasksInPr = !localStorage.getItem('tasksInPr')
  ? []
  : JSON.parse(localStorage.getItem('tasksInPr'));

let tasks = !localStorage.getItem('tasks')
  ? []
  : JSON.parse(localStorage.getItem('tasks'));

function Task(title, description, date, user) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.user = user;
}
function showElement(list) {
  list.style.display = 'block';
}

function hideshowElement(list) {
  list.style.display = 'none';
}

const createLi = (task, index) => {
  return `
  <div id="toDo-${index}" class="list-item-task-add-description">
    <div class ="list-item-task-add-style" >
      <button class="list-item-task-add-description-edit" id="btn-edit" onclick="createEditForm(${index})">Edit</button>
    <div class="list-item-task-add-all">
      <span class="list-item-task-add-all-span" >
        <strong class="list-item-task-add-all-span-text" id="strong">${
          task.title
        }</strong>
      ${task.description || 'no description'}<br>
        <span id="data-user">${task.date || 'date not set'}<br>${
    task.user || 'no assigned'
  }   </span>
    </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
      <button onclick="inProgressTask(${index})" class="list-item-task-add-buttons-inPR"
      id="btn-inPr"
      >in PR</button>
      <button onclick="delTaskToDo(${index})"
        class="list-item-task-add-buttons-delete"
        id="btn-delToDo" >x
      </button>
  </div>
  </div>
  </div>
  `;
};

const createLiInProgress = (task, index) => {
  return `
  <div id="item-inPr-${index}" class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong class="list-item-task-add-all-span-text" id="strong">${
      task.title
    }</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${
    task.user || 'no assigned'
  }</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="done(${index})" class="list-item-task-add-buttons-done"
    id="btn-inDone"
    >Done</button>
    <button  onclick="delTaskInPr(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delInPr-${index}" >x
      </button>
  </div>
  </div>
  `;
};

const createLiDone = (task, index) => {
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span">
    <strong class="list-item-task-add-all-span-text" id="strong">${
      task.title
    }</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${
    task.user || 'no assigned'
  }</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
    <button onclick ="btnReturn(${index})" class="list-item-task-add-buttons-return"
    id="btn-return"
    >in To Do</button>
    <button onclick ="delTaskDone(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delDone" >x
      </button>
  </div>
  </div>
  `;
};

const createLiReturn = (task, index) => {
  return `
  <div id="toDo-${index}" class="list-item-task-add-description">
  <div class ="list-item-task-add-style" >
  <button class="list-item-task-add-description-edit" id="btn-edit" onclick="createEditForm(${index})">Edit</button>
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong class="list-item-task-add-all-span-text" id="strong">${
      task.title
    }</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${
    task.user || 'no assigned'
  }</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
    <button onclick ="inProgressTask(${index})" class="list-item-task-add-buttons-done"
    id="btn-inPr"
    >in PR</button>
    <button onclick ="delTaskToDo(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delToDo" >x
      </button>
  </div>
  </div>
  </div>
  `;
};

function editFormTemplate(title, date, user) {
  return `
  <div class="list-item-task-form">
              <input
                tabindex="1"
                class="list-item-task-form-input"
                id="inputEdit"
                type="text"
                name="nameTask" 
                value="${title}"
              />
              <textarea
                class="list-item-task-form-textArea"
                name="description"
                tabindex="2"
                id="descriptionEdit"
                cols="30"
                rows="5"
                placeholder="description"
                
              ></textarea>
              <input
                type="date"
                class="list-item-task-form-data"
                name="date"
                tabindex="3"
                id="dateEdit"
                value="${date}"
              />
              <select
                type="file"
                tabindex="4"
                class="list-item-task-form-user"
                id="userTaskEdit"
              >
                <option selected disabled>${user}</option>
              </select>
              <button 
                class="list-item-task-form-btn"
                id="save"
                tabindex="5"
                name="Save"
              >
                Save
              </button>
            </div>
  `;
}

createEditForm = (index) => {
  const listTask = document.getElementById(`toDo-${index}`);
  const div = listTask.getElementsByClassName('list-item-task-add-style')[0];
  div.style.display = 'none';

  const title = tasks[index]['title'];
  const description = tasks[index]['description'];
  const date = tasks[index]['date'];
  const user = tasks[index]['user'];

  const form = editFormTemplate(title, date, user);

  if (document.getElementsByClassName('list-item-task-form').length > 1) {
    div.style.display = 'flex';
    return;
  }
  listTask.innerHTML += form;

  const save = document.getElementById('save');
  const titleEdit = document.getElementById('inputEdit');
  titleEdit.value = title;
  const descriptionEdit = document.getElementById('descriptionEdit');
  descriptionEdit.value = description || 'no description';
  const dateEdit = document.getElementById('dateEdit');
  dateEdit.value = date;
  const userTaskEdit = document.getElementById('userTaskEdit');
  userTaskEdit.value = user;

  userName.forEach((el) => {
    userTaskEdit.innerHTML += `<option >${el}</option>`;
  });

  save.addEventListener('click', () => {
    const divform = document.getElementsByClassName('list-item-task-form')[1];
    divform.remove();
    div.style.display = 'block';
    tasks[index]['title'] = titleEdit.value || 'no description';
    tasks[index]['description'] = descriptionEdit.value;
    tasks[index]['date'] = dateEdit.value;
    tasks[index]['user'] = userTaskEdit.value;
    fillHtmlList();
  });
};

const fillHtmlList = () => {
  todosWrapperElement.innerHTML = '';
  if (tasks.length > 0) {
    showElement(clearAllListToDoElement);
    tasks.forEach((item, index) => {
      todosWrapperElement.innerHTML += createLi(item, index);
    });
  }
};
fillHtmlList();

const fillHtmlListInPr = () => {
  inProgressWrapperElement.innerHTML = '';
  if (tasksInPr.length > 0) {
    showElement(clearAllListInPrElement);
    tasksInPr.forEach((item, index) => {
      inProgressWrapperElement.innerHTML += createLiInProgress(item, index);
    });
  }
};
fillHtmlListInPr();

const fillHtmlListDone = () => {
  doneWrapperElement.innerHTML = '';
  if (tasksDone.length > 0) {
    showElement(clearAllListDoneElement);
    tasksDone.forEach((item, index) => {
      doneWrapperElement.innerHTML += createLiDone(item, index);
    });
  }
};
fillHtmlListDone();

const fillHtmlListReturn = () => {
  todosWrapperElement.innerHTML = '';
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      todosWrapperElement.innerHTML += createLiReturn(item, index);
    });
  }
};
fillHtmlListReturn();

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateLocalInPr = () => {
  localStorage.setItem('tasksInPr', JSON.stringify(tasksInPr));
};

const updateLocalDone = () => {
  localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
};

inProgressTask = (index) => {
  if (tasksInPr.length > 4) {
    alert('Max tasks in "In Progress" = 5!');
    return;
  }
  inProgressWrapperElement.innerHTML += createLiInProgress(tasks[index], index);

  tasksInPr.push(tasks[index]);
  tasks.splice(index, 1);
  if (tasks.length < 1) {
    hideshowElement(clearAllListToDoElement);
  }
  totalList(totalInPrElement, tasksInPr);
  totalList(totalToDoElement, tasks);
  updateLocal();
  updateLocalInPr();
  fillHtmlListInPr();
  fillHtmlList();
};

done = (index) => {
  doneWrapperElement.innerHTML += createLiDone(tasksInPr[index], index);
  tasksDone.push(tasksInPr[index]);
  tasksInPr.splice(index, 1);
  if (tasksInPr.length < 1) {
    hideshowElement(clearAllListInPrElement);
  }
  totalList(totalDoneElement, tasksDone);
  totalList(totalInPrElement, tasksInPr);
  updateLocalInPr();
  updateLocalDone();
  fillHtmlListInPr();
  fillHtmlListDone();
};

btnReturn = (index) => {
  todosWrapperElement.innerHTML += createLiReturn(
    tasksDone[index]['title'],
    index
  );

  tasks.push({ title: tasksDone[index]['title'] });

  tasksDone.splice(index, 1);
  if (tasksDone.length < 1) {
    hideshowElement(clearAllListDoneElement);
  }

  totalList(totalDoneElement, tasksDone);
  totalList(totalToDoElement, tasks);
  showElement(clearAllListToDoElement);
  updateLocal();
  updateLocalDone();
  fillHtmlListReturn();
  fillHtmlListDone();
};

delTaskToDo = (index) => {
  tasks.splice(index, 1);
  if (tasks.length < 1) {
    hideshowElement(clearAllListToDoElement);
  }
  totalList(totalToDoElement, tasks);
  updateLocal();
  fillHtmlList();
};

delTaskInPr = (index = '') => {
  if (tasksInPr.length < 1) {
    hideshowElement(clearAllListInPrElement);
  }
  if (confirm('Delete this task?')) {
    tasksInPr.splice(index, 1);
    hideshowElement(clearAllListInPrElement);
    totalList(totalInPrElement, tasksInPr);
    updateLocalInPr();
    fillHtmlListInPr();
  }
};

delTaskDone = (index) => {
  tasksDone.splice(index, 1);
  if (tasksDone.length < 1) {
    hideshowElement(clearAllListDoneElement);
  }
  totalList(totalDoneElement, tasksDone);
  updateLocalDone();
  fillHtmlListDone();
};

buttonAddElement.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleTaskElement.value === '') {
    return;
  }
  showElement(clearAllListToDoElement);
  tasks.push(
    new Task(
      titleTaskElement.value,
      descriptionTaskElement.value,
      dateTaskElement.value,
      userTaskElement.value
    )
  );
  titleTaskElement.value = '';
  descriptionTaskElement.value = '';
  dateTaskElement.value = '';
  userTaskElement.value = '';
  totalList(totalToDoElement, tasks);
  updateLocal();
  fillHtmlList();
});

clearAllListToDoElement.addEventListener('click', (e) => {
  tasks = [];
  hideshowElement(clearAllListToDoElement);
  totalList(totalToDoElement, tasks);
  updateLocal();
  fillHtmlList();
});

clearAllListInPrElement.addEventListener('click', (e) => {
  tasksInPr = [];
  if (confirm('Delete all tasks in?')) {
    hideshowElement(clearAllListInPrElement);
    totalList(totalInPrElement, tasksInPr);
    updateLocalInPr();
    fillHtmlListInPr();
  }
});

clearAllListDoneElement.addEventListener('click', (e) => {
  tasksDone = [];
  hideshowElement(clearAllListDoneElement);
  totalList(totalDoneElement, tasksDone);
  updateLocalDone();
  fillHtmlListDone();
});

function totalList(nameTotal, nameArr) {
  return (nameTotal.innerHTML = 'total tasks:    ' + nameArr.length);
}
totalList(totalDoneElement, tasksDone);
totalList(totalInPrElement, tasksInPr);
totalList(totalToDoElement, tasks);
