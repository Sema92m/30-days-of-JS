const submitButton = document.querySelector("#button-submit");

submitButton.addEventListener('click', function() {
	const firstName = document.querySelector("#firstName");
	const lastName = document.querySelector("#lastName");
	const email = document.querySelector("#email");
	const password = document.querySelector("#password");
	const telephone = document.querySelector("#telephone");
	const bio = document.querySelector("#bio");

	const h4FirstName = document.querySelector("#h4-firstName");
	const h4LastName = document.querySelector("#h4-lastName");

	if (firstName.value.length < 3 || firstName.value.length > 16) {
		h4FirstName.style.display = 'block'
	}
})