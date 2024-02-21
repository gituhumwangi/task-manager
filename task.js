const tasks = document.querySelector('#tasks');
const submitButton = document.querySelector('#submit');
const myForm = document.getElementById('myForm');
const list = document.querySelector('#tasksList');
const inputField = document.getElementById('tasks');

submitButton.disabled = true;

inputField.addEventListener('input', function() {
    submitButton.disabled = inputField.value.trim() === '';
});

function displayTask(event) {
    event.preventDefault(); 
    if(tasks.value === '') {
        alert("Add a task.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = tasks.value;
        list.appendChild(li);
        tasks.value = ''; 
        submitButton.disabled = true; 
    }
}

myForm.addEventListener('submit', displayTask);
