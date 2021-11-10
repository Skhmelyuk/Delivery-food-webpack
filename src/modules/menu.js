const menu = () => {
	const restaurant = 'food-band';

	const renderItems = (data) => {
		console.log(data);
	}

	fetch(`./db/${restaurant}.json`)
		.then((response) => response.json())
		.then((data) => { renderItems(data) })
		.catch((error) => {
			console.log(error);
		})
}

export default menu;