document.getElementById('mode').addEventListener('click', function(){
	document.body.classList.toggle('dark-mode');
	const isDarkMode = document.body.classList.contains('dark-mode');
	this.textContent =isDarkMode ? 'Light Mode':'Dark Mode';
	document.body.classList.add('fade-in');
})

const list = document.querySelector('ul');
document.getElementById('add').addEventListener('click', function() {
	//create a new list item
	const newItem = document.createElement('li');
	newItem.textContent = 'New Item';
	//Add new item to the list
	list.appendChild(newItem);
})

document.getElementById('remove').addEventListener('click', function(){
	const firstItem=list.querySelector('li');
	list.removeChild(firstItem);
})