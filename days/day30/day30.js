// Capture user input from a search field. You can use an input element with a type of "text" and listen for the input event to get the current value of the search field.

// Filter a list of items based on the user input. You can use the filter method of the Array object to create a new array with only the items that match the search criteria.

// Display the filtered list of items to the user. You can use JavaScript to dynamically update the DOM with the new list of items.

// Here is an example of a dynamic search feature that filters a list of names based on the input:

const searchField = document.querySelector('#search');
const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Gina', 'Henry'];

searchField.addEventListener('input', (event) => {
  const searchValue = event.target.value;
  const filteredNames = names.filter((name) => name.includes(searchValue));

  // Update the DOM with the filtered list of names
  const nameList = document.querySelector('#name-list');
  nameList.innerHTML = '';
  filteredNames.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
  });
});
// This example uses the includes method to check if the search value is included in each name. You can customize the filtering logic to fit your specific needs.