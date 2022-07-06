const deleteButton = document.querySelectorAll('.fa-circle-minus');

Array.from(deleteButton).forEach((button) => {
	button.addEventListener('click', deleteShower);
});

async function deleteShower() {
	console.log(this.parentNode.childNodes[1].childNodes[0].data);
}

// 	try {
// 		const response = await fetch('deleteShower', {
//       method: 'delete',
//       headers: {'Content-Type':'application/json'},
//       body:JSON.stringify({

//       })
//     });
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
