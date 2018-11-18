// define ui vars
const form = document.querySelector('form');
// console.log(form)
const newTaskInput = document.getElementById('task');
// console.log(newTaskInput)
const filterInput = document.getElementById('filter');
// console.log(filterInput)
const clearTaskBtn = document.getElementById('clearTasks');
// console.log(clearTaskBtn)
const taskCollection = document.querySelector('.list-group');
// console.log(taskCollection)

// adding events
// form.addEventListener('submit',
//     function (e) {
//         console.log(newTaskInput.value);
//         e.preventDefault();

//     });

loadEventListener();

function loadEventListener() {
    form.addEventListener('submit', addTask);
    taskCollection.addEventListener('click', removeTask);
    clearTaskBtn.addEventListener('click', clearAllTasks);

}
function removeTask(e) {

    if (e.target.parentElement.classList.contains('list-group-item')) {
        console.log(e.target)
        e.target.parentElement.remove()

    }
}
function clearAllTasks(e) {
    taskCollection.innerHTML = '';
    e.preventDefault();
}


function addTask(e) {
    e.preventDefault();
    if (newTaskInput.value === '') {
        alert('Add new task')
    }
    else {
        const liElement = document.createElement('li');
        liElement.className = 'list-group-item d-flex justify-content-between align-items-center';
        liElement.appendChild(document.createTextNode(newTaskInput.value))
        taskCollection.appendChild(liElement);
        const delBadge = document.createElement('a');
        delBadge.className = 'badge badge-primary badge-pill';
        delBadge.innerText = 'X';
        liElement.appendChild(delBadge);

    }

    console.log('legs and butter')
}
