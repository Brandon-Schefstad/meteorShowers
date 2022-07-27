const deleteButton = document.querySelectorAll('.fa-circle-minus');

Array.from(deleteButton).forEach((button) => {
	button.addEventListener('click', deleteShower);
});

async function deleteShower() {
	const name = this.parentNode.childNodes[1].childNodes[0].data;
	console.log(name);
	console.log(typeof name);
	try {
		await fetch('/deleteShower', {
			method: 'delete',
			body: JSON.stringify({
				name: name,
			}),
		});
		const data = await response;
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
