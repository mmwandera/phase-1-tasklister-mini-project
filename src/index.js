document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // target form element
  const form = document.querySelector('#create-task-form')
  
  // target task list element
  const taskList = document.querySelector('#tasks')

  // attach event listener on form element
  form.addEventListener('submit', (e) => {
    e.preventDefault()

  // store form input in variable
  const taskDescription = document.querySelector('#new-task-description').value

  // create new element with form input as its value
  const newTask = document.createElement('li')
  newTask.innerText = `${taskDescription} `

  // create new delete button element that removes the task created above
  const deleteButton = document.createElement('button')
  deleteButton.innerText = `X`
  deleteButton.addEventListener('click', removeTask)

    newTask.appendChild(deleteButton)
    taskList.appendChild(newTask)
    form.reset()
  })

  // remove function used to remove task created
  function removeTask(e) {
    e.target.parentElement.remove()
  }
});
 