function addTask(time) {
  const input = document.getElementById('new-task');
  const taskName = input.value;

  if (taskName !== '') {
    const ul = time === 'day' ? document.getElementById('day-tasks') : document.getElementById('night-tasks');

    const li = document.createElement('li');
    li.textContent = taskName;

    const removeIcon = document.createElement('i');
    removeIcon.className = 'fa-solid fa-trash';
    removeIcon.addEventListener('click', removeTask);
    li.appendChild(removeIcon);

    ul.appendChild(li);
    input.value = '';
  }
}

function removeTask(event) {
  var li = event.target.parentElement;
  var ul = li.parentElement;
  ul.removeChild(li);
}