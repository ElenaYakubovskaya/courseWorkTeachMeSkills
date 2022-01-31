const $c2485399a19ffcd0$export$34aea2c14d5bfffe = document.getElementById('inputToDo');
const $c2485399a19ffcd0$export$9154c67a7b91cd2a = document.getElementById('description');
const $c2485399a19ffcd0$export$5f380b205a716c55 = document.getElementById('date');
const $c2485399a19ffcd0$export$2b06436dcfe173f6 = document.getElementById('userTask');
const $c2485399a19ffcd0$export$c3e0f5fe52ee6d2c = document.getElementById('toDoBtn');
const $c2485399a19ffcd0$export$fc1c84f51d3cd618 = document.getElementById('todosWrapper');
const $c2485399a19ffcd0$export$8cf1e83170a1e88a = document.getElementById('inProgressWrapper');
const $c2485399a19ffcd0$export$4ce77452535f9418 = document.getElementById('doneWrapper');
const $c2485399a19ffcd0$export$de79b967671ecfa2 = document.getElementById('clearAllListToDo');
const $c2485399a19ffcd0$export$ae06aa905128d5b3 = document.getElementById('clearAllListInPr');
const $c2485399a19ffcd0$export$f982959eb02ba7a0 = document.getElementById('clearAllListDone');
const $c2485399a19ffcd0$export$69eaf2428fb2b0ee = document.getElementById('totalToDo');
const $c2485399a19ffcd0$export$80ecb96f00a7a70e = document.getElementById('totalInPr');
const $c2485399a19ffcd0$export$59c4379add7e6e30 = document.getElementById('totalDone');
const $c2485399a19ffcd0$export$c86d3ca66f38ed60 = [];



function $4316927c27ad767d$export$8134c072fddab6a5() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()
    ).then((json)=>{
        for(let i = 0; i < json.length; i++)$c2485399a19ffcd0$export$c86d3ca66f38ed60.push(json[i]['name']);
        $c2485399a19ffcd0$export$c86d3ca66f38ed60.forEach((el)=>{
            $c2485399a19ffcd0$export$2b06436dcfe173f6.innerHTML += `<option >${el}</option>`;
        });
    });
}


$4316927c27ad767d$export$8134c072fddab6a5();
let $f0f7860ece712b71$var$tasksDone = !localStorage.getItem('tasksDone') ? [] : JSON.parse(localStorage.getItem('tasksDone'));
let $f0f7860ece712b71$var$tasksInPr = !localStorage.getItem('tasksInPr') ? [] : JSON.parse(localStorage.getItem('tasksInPr'));
let $f0f7860ece712b71$var$tasks = !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks'));
function $f0f7860ece712b71$var$Task(title, description, date, user) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.user = user;
}
function $f0f7860ece712b71$var$showElement(list) {
    list.style.display = 'block';
}
function $f0f7860ece712b71$var$hideshowElement(list) {
    list.style.display = 'none';
}
const $f0f7860ece712b71$var$createLi = (task, index)=>{
    return `
  <div id="toDo-${index}" class="list-item-task-add-description">
  <div class ="list-item-task-add-style" >
    <button class="list-item-task-add-description-edit" id="btn-edit" onclick="createEditForm(${index})">Edit</button>
    <div class="list-item-task-add-all">
      <span class="list-item-task-add-all-span" >
      <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
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
const $f0f7860ece712b71$var$createLiInProgress = (task, index)=>{
    return `
  <div id="item-inPr-${index}" class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
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
const $f0f7860ece712b71$var$createLiDone = (task, index)=>{
    return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span">
    <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
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
const $f0f7860ece712b71$var$createLiReturn = (task, index)=>{
    return `
  <div id="toDo-${index}" class="list-item-task-add-description">
  <div class ="list-item-task-add-style" >
  <button class="list-item-task-add-description-edit" id="btn-edit" onclick="createEditForm(${index})">Edit</button>
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
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
function $f0f7860ece712b71$var$editFormTemplate(title, date, user) {
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
createEditForm = (index)=>{
    const listTask = document.getElementById(`toDo-${index}`);
    const div = listTask.getElementsByClassName('list-item-task-add-style')[0];
    div.style.display = 'none';
    const title = $f0f7860ece712b71$var$tasks[index]['title'];
    const description = $f0f7860ece712b71$var$tasks[index]['description'];
    const date = $f0f7860ece712b71$var$tasks[index]['date'];
    const user = $f0f7860ece712b71$var$tasks[index]['user'];
    const form = $f0f7860ece712b71$var$editFormTemplate(title, date, user);
    if (document.getElementsByClassName('list-item-task-form').length > 1) {
        div.style.display = 'block';
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
    console.log(user);
    $c2485399a19ffcd0$export$c86d3ca66f38ed60.forEach((el)=>{
        userTaskEdit.innerHTML += `<option >${el}</option>`;
    });
    save.addEventListener('click', ()=>{
        const divform = document.getElementsByClassName('list-item-task-form')[1];
        divform.remove();
        div.style.display = 'block';
        $f0f7860ece712b71$var$tasks[index]['title'] = titleEdit.value || 'no description';
        $f0f7860ece712b71$var$tasks[index]['description'] = descriptionEdit.value;
        $f0f7860ece712b71$var$tasks[index]['date'] = dateEdit.value;
        $f0f7860ece712b71$var$tasks[index]['user'] = userTaskEdit.value;
        $f0f7860ece712b71$var$fillHtmlList();
    });
};
const $f0f7860ece712b71$var$fillHtmlList = ()=>{
    $c2485399a19ffcd0$export$fc1c84f51d3cd618.innerHTML = '';
    if ($f0f7860ece712b71$var$tasks.length > 0) {
        $f0f7860ece712b71$var$showElement($c2485399a19ffcd0$export$de79b967671ecfa2);
        $f0f7860ece712b71$var$tasks.forEach((item, index)=>{
            $c2485399a19ffcd0$export$fc1c84f51d3cd618.innerHTML += $f0f7860ece712b71$var$createLi(item, index);
        });
    }
};
$f0f7860ece712b71$var$fillHtmlList();
const $f0f7860ece712b71$var$fillHtmlListInPr = ()=>{
    $c2485399a19ffcd0$export$8cf1e83170a1e88a.innerHTML = '';
    if ($f0f7860ece712b71$var$tasksInPr.length > 0) {
        $f0f7860ece712b71$var$showElement($c2485399a19ffcd0$export$ae06aa905128d5b3);
        $f0f7860ece712b71$var$tasksInPr.forEach((item, index)=>{
            $c2485399a19ffcd0$export$8cf1e83170a1e88a.innerHTML += $f0f7860ece712b71$var$createLiInProgress(item, index);
        });
    }
};
$f0f7860ece712b71$var$fillHtmlListInPr();
const $f0f7860ece712b71$var$fillHtmlListDone = ()=>{
    $c2485399a19ffcd0$export$4ce77452535f9418.innerHTML = '';
    if ($f0f7860ece712b71$var$tasksDone.length > 0) {
        $f0f7860ece712b71$var$showElement($c2485399a19ffcd0$export$f982959eb02ba7a0);
        $f0f7860ece712b71$var$tasksDone.forEach((item, index)=>{
            $c2485399a19ffcd0$export$4ce77452535f9418.innerHTML += $f0f7860ece712b71$var$createLiDone(item, index);
        });
    }
};
$f0f7860ece712b71$var$fillHtmlListDone();
const $f0f7860ece712b71$var$fillHtmlListReturn = ()=>{
    $c2485399a19ffcd0$export$fc1c84f51d3cd618.innerHTML = '';
    if ($f0f7860ece712b71$var$tasks.length > 0) $f0f7860ece712b71$var$tasks.forEach((item, index)=>{
        $c2485399a19ffcd0$export$fc1c84f51d3cd618.innerHTML += $f0f7860ece712b71$var$createLiReturn(item, index);
    });
};
$f0f7860ece712b71$var$fillHtmlListReturn();
const $f0f7860ece712b71$var$updateLocal = ()=>{
    localStorage.setItem('tasks', JSON.stringify($f0f7860ece712b71$var$tasks));
};
const $f0f7860ece712b71$var$updateLocalInPr = ()=>{
    localStorage.setItem('tasksInPr', JSON.stringify($f0f7860ece712b71$var$tasksInPr));
};
const $f0f7860ece712b71$var$updateLocalDone = ()=>{
    localStorage.setItem('tasksDone', JSON.stringify($f0f7860ece712b71$var$tasksDone));
};
inProgressTask = (index)=>{
    if ($f0f7860ece712b71$var$tasksInPr.length > 4) {
        alert('Max tasks in "In Progress" = 5!');
        return;
    }
    $c2485399a19ffcd0$export$8cf1e83170a1e88a.innerHTML += $f0f7860ece712b71$var$createLiInProgress($f0f7860ece712b71$var$tasks[index], index);
    $f0f7860ece712b71$var$tasksInPr.push($f0f7860ece712b71$var$tasks[index]);
    $f0f7860ece712b71$var$tasks.splice(index, 1);
    if ($f0f7860ece712b71$var$tasks.length < 1) $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$de79b967671ecfa2);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$80ecb96f00a7a70e, $f0f7860ece712b71$var$tasksInPr);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$69eaf2428fb2b0ee, $f0f7860ece712b71$var$tasks);
    $f0f7860ece712b71$var$updateLocal();
    $f0f7860ece712b71$var$updateLocalInPr();
    $f0f7860ece712b71$var$fillHtmlListInPr();
    $f0f7860ece712b71$var$fillHtmlList();
};
$f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$59c4379add7e6e30, $f0f7860ece712b71$var$tasksDone);
$f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$80ecb96f00a7a70e, $f0f7860ece712b71$var$tasksInPr);
$f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$69eaf2428fb2b0ee, $f0f7860ece712b71$var$tasks);
done = (index)=>{
    $c2485399a19ffcd0$export$4ce77452535f9418.innerHTML += $f0f7860ece712b71$var$createLiDone($f0f7860ece712b71$var$tasksInPr[index], index);
    $f0f7860ece712b71$var$tasksDone.push($f0f7860ece712b71$var$tasksInPr[index]);
    $f0f7860ece712b71$var$tasksInPr.splice(index, 1);
    if ($f0f7860ece712b71$var$tasksInPr.length < 1) $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$ae06aa905128d5b3);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$59c4379add7e6e30, $f0f7860ece712b71$var$tasksDone);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$80ecb96f00a7a70e, $f0f7860ece712b71$var$tasksInPr);
    $f0f7860ece712b71$var$updateLocalInPr();
    $f0f7860ece712b71$var$updateLocalDone();
    $f0f7860ece712b71$var$fillHtmlListInPr();
    $f0f7860ece712b71$var$fillHtmlListDone();
};
btnReturn = (index)=>{
    $c2485399a19ffcd0$export$fc1c84f51d3cd618.innerHTML += $f0f7860ece712b71$var$createLiReturn($f0f7860ece712b71$var$tasksDone[index]['title'], index);
    $f0f7860ece712b71$var$tasks.push({
        title: $f0f7860ece712b71$var$tasksDone[index]['title']
    });
    $f0f7860ece712b71$var$tasksDone.splice(index, 1);
    if ($f0f7860ece712b71$var$tasksDone.length < 1) $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$f982959eb02ba7a0);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$59c4379add7e6e30, $f0f7860ece712b71$var$tasksDone);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$69eaf2428fb2b0ee, $f0f7860ece712b71$var$tasks);
    $f0f7860ece712b71$var$showElement($c2485399a19ffcd0$export$de79b967671ecfa2);
    $f0f7860ece712b71$var$updateLocal();
    $f0f7860ece712b71$var$updateLocalDone();
    $f0f7860ece712b71$var$fillHtmlListReturn();
    $f0f7860ece712b71$var$fillHtmlListDone();
};
delTaskToDo = (index)=>{
    $f0f7860ece712b71$var$tasks.splice(index, 1);
    if ($f0f7860ece712b71$var$tasks.length < 1) $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$de79b967671ecfa2);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$69eaf2428fb2b0ee, $f0f7860ece712b71$var$tasks);
    $f0f7860ece712b71$var$updateLocal();
    $f0f7860ece712b71$var$fillHtmlList();
};
delTaskInPr = (index = '')=>{
    if ($f0f7860ece712b71$var$tasksInPr.length < 1) $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$ae06aa905128d5b3);
    if (confirm('Delete this task?')) {
        $f0f7860ece712b71$var$tasksInPr.splice(index, 1);
        $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$ae06aa905128d5b3);
        $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$80ecb96f00a7a70e, $f0f7860ece712b71$var$tasksInPr);
        $f0f7860ece712b71$var$updateLocalInPr();
        $f0f7860ece712b71$var$fillHtmlListInPr();
    }
};
delTaskDone = (index)=>{
    $f0f7860ece712b71$var$tasksDone.splice(index, 1);
    if ($f0f7860ece712b71$var$tasksDone.length < 1) $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$f982959eb02ba7a0);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$59c4379add7e6e30, $f0f7860ece712b71$var$tasksDone);
    $f0f7860ece712b71$var$updateLocalDone();
    $f0f7860ece712b71$var$fillHtmlListDone();
};
$c2485399a19ffcd0$export$c3e0f5fe52ee6d2c.addEventListener('click', (e)=>{
    e.preventDefault();
    if ($c2485399a19ffcd0$export$34aea2c14d5bfffe.value === '') return;
    $f0f7860ece712b71$var$showElement($c2485399a19ffcd0$export$de79b967671ecfa2);
    $f0f7860ece712b71$var$tasks.push(new $f0f7860ece712b71$var$Task($c2485399a19ffcd0$export$34aea2c14d5bfffe.value, $c2485399a19ffcd0$export$9154c67a7b91cd2a.value, $c2485399a19ffcd0$export$5f380b205a716c55.value, $c2485399a19ffcd0$export$2b06436dcfe173f6.value));
    $c2485399a19ffcd0$export$34aea2c14d5bfffe.value = '';
    $c2485399a19ffcd0$export$9154c67a7b91cd2a.value = '';
    $c2485399a19ffcd0$export$5f380b205a716c55.value = '';
    $c2485399a19ffcd0$export$2b06436dcfe173f6.value = '';
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$69eaf2428fb2b0ee, $f0f7860ece712b71$var$tasks);
    $f0f7860ece712b71$var$updateLocal();
    $f0f7860ece712b71$var$fillHtmlList();
});
$c2485399a19ffcd0$export$de79b967671ecfa2.addEventListener('click', (e)=>{
    $f0f7860ece712b71$var$tasks = [];
    $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$de79b967671ecfa2);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$69eaf2428fb2b0ee, $f0f7860ece712b71$var$tasks);
    $f0f7860ece712b71$var$updateLocal();
    $f0f7860ece712b71$var$fillHtmlList();
});
$c2485399a19ffcd0$export$ae06aa905128d5b3.addEventListener('click', (e)=>{
    $f0f7860ece712b71$var$tasksInPr = [];
    if (confirm('Delete all tasks in?')) {
        $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$ae06aa905128d5b3);
        $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$80ecb96f00a7a70e, $f0f7860ece712b71$var$tasksInPr);
        $f0f7860ece712b71$var$updateLocalInPr();
        $f0f7860ece712b71$var$fillHtmlListInPr();
    }
});
$c2485399a19ffcd0$export$f982959eb02ba7a0.addEventListener('click', (e)=>{
    $f0f7860ece712b71$var$tasksDone = [];
    $f0f7860ece712b71$var$hideshowElement($c2485399a19ffcd0$export$f982959eb02ba7a0);
    $f0f7860ece712b71$var$totalList($c2485399a19ffcd0$export$59c4379add7e6e30, $f0f7860ece712b71$var$tasksDone);
    $f0f7860ece712b71$var$updateLocalDone();
    $f0f7860ece712b71$var$fillHtmlListDone();
});
function $f0f7860ece712b71$var$totalList(nameTotal, nameArr) {
    return nameTotal.innerHTML = 'total tasks:    ' + nameArr.length;
}


//# sourceMappingURL=main.js.map
