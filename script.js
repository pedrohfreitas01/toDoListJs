const inputTask = document.querySelector('.inpTask')
const btnAddTask = document.querySelector('.btnAddTask')
const fullTaskList = document.querySelector('.list-task')

let itemListTask = []

function addNewTask() {
    itemListTask.push({
        task: inputTask.value,
        done: false
    })
    showTask()
    inputTask.value = ''
}

function showTask() {
    let newLi = ''

    itemListTask.forEach((item, index) => {

        newLi = newLi + `
            <li class="task ${item.done && "checked"} ">
                <img src="assets/checked.png" alt="check" onclick="checkTask(${index})">
                <p>${item.task}</p>
                <img src="assets/trash.png" alt="lixo" onclick="deleteTask(${index})">
            </li>
            `
    });
    fullTaskList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(itemListTask))   
}

function checkTask(index){
    itemListTask[index].done = !itemListTask[index].done
    console.log('feito');

    showTask()
}

function deleteTask(index){
    itemListTask.splice(index, 1);
    showTask()  //refaz a LI  
}

function realoadTask() {
    const localStorageTasks = localStorage.getItem('list')

    if (localStorageTasks) {
        itemListTask = JSON.parse(localStorageTasks)
    }

    showTask()

}

btnAddTask.addEventListener('click', addNewTask)
inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNewTask()
    }
})

realoadTask()
