const deleteButton = document.querySelectorAll('.fa-circle-minus');

Array.from(deleteButton).forEach((button) => {
	button.addEventListener('click', deleteShower);
});

async function deleteShower() {
	const name = this.parentNode.childNodes[1].childNodes[0].data;
	console.log(name);
	try {
		const request = await fetch('deleteShower', {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: name,
			}),
		});
		location.reload();
	} catch (error) {
		console.error(error);
	}
}
