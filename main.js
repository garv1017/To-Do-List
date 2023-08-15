// First we will start creating elements.
window.addEventListener('load', () => { // wait for the page to load 
	// Once the page is loaded then we get the form which will be added to the page using the id 
	// Similarly input and task field is added using its id
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	// Now inside this window we will create an event to submit the form 
	form.addEventListener('submit', (e) => {
		e.preventDefault(); // To stop refreshing the page

		const task = input.value; // Storing user input in task

		// Creating a div element and give that a class list to add task on to the page
		const task_el = document.createElement('div');
		task_el.classList.add('task'); 

		// Creating another div element for task content to store the content of the task
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el); // Appending the content in the task 

		
		const task_input_el = document.createElement('input'); // Creating input element to the task
		task_input_el.classList.add('text'); // adding text to the task input element
		task_input_el.type = 'text'; // setting the task input value to text
		task_input_el.value = task; // storing the task input value in task itself
		task_input_el.setAttribute('readonly', 'readonly'); // setting the readonly attribute to the task input element

		task_content_el.appendChild(task_input_el); // Appending the task input element to the task content

		// Creating a div to add action to the task action elemenet 
		const task_actions_el = document.createElement('div'); 
		task_actions_el.classList.add('actions');
		
		// Creating a button for editing the task in the list
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');

		task_edit_el.innerText = 'Edit'; // Showing inner html to Edit

		// Creating a button for Deleting the task in the list
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');

		task_delete_el.innerText = 'Delete'; // Showing inner html to Delete
		
		// Appending the Edit and Delete element to the task action element
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		// Appending the action element to the task element and task element to the list element
		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = ''; // Setting the input value to nothing so that its value can't be changed

		//  If edit button is clicked, the inner html of the task will be equal to the edit element
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save"; 	// Creating a save option to save the text will be add after clicking the edit button
				task_input_el.removeAttribute("readonly"); // Removing the readonly attribute 
				task_input_el.focus(); // moving cursor to the task input field
			} else {
				task_edit_el.innerText = "Edit"; // if the edit inner html is not changed readonly attribute is added
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
		
		// Adding event on clicking the Delete Button
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el); // Using removeChild() we will delete the task
		});
	});
});