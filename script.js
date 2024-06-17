const inputTask = document.querySelector('.inpTask')
const btnAddTask = document.querySelector('.btnAddTask')


let itemListTask = []


function addNewTask(){
    itemListTask.push(inputTask.value)
    
    console.log(itemListTask);
}


btnAddTask.addEventListener('click'  , addNewTask)

