const deleteButton = document.querySelectorAll('.fa-circle-minus');

Array.from(deleteButton).forEach((button) => {
	button.addEventListener('click', deleteShower);
});
async function test() {
	const name = this.parentNode.childNodes[1].childNodes[0].data;
	console.log(name);
}
async function deleteShower() {
	const name = this.parentNode.childNodes[1].childNodes[0].data;
	console.log(name);
	try {
		const response = await fetch('/deleteShower', {
			method: 'delete',
			// headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: name,
			}),
		});
		// console.log(request);
		// const data = await request.json();
		// console.log(data);
		// location.reload();
	} catch (error) {
		console.log(error);
	}
}

console.log('test');
