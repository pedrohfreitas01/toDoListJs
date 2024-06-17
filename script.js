const inputTask = document.querySelector('.inpTask')
const btnAddTask = document.querySelector('.btnAddTask')
const fullTaskList = document.querySelector('.list-task')

let itemListTask = []

function addNewTask() {
    itemListTask.push(inputTask.value)
    showTask()
    
    inputTask.value = ''
    
    console.log(itemListTask);
   
}

function showTask() {
    let newLi = ''

    itemListTask.forEach(task => {

        newLi = newLi + `
            <li class="task">
                <img src="assets/checked.png" alt="check" onclick="checkTask()">
                <p>${task}</p>
                <img src="assets/trash.png" alt="lixo" onclick="deleteTask()">
            </li>
            `
    });

    fullTaskList.innerHTML = newLi

}

function checkTask(){
    console.log('well done');
}

function deleteTask(){
    console.log('item deletado');
}


btnAddTask.addEventListener('click', addNewTask)

