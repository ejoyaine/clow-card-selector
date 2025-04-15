const clowCards = [
	{
		name: 'The Windy',
		image: 'assets/clow-cards/ClowWindy.webp',
		description: 'A powerful card that controls the wind.',
	},
	{
		name: 'The Fly',
		image: 'assets/clow-cards/ClowFly.webp',
		description: 'Allows the user to fly and defy gravity.',
	},
	// Add more cards here
];

// Draw a random card
function drawCard() {
	const randomIndex = Math.floor(Math.random() * clowCards.length);
	const card = clowCards[randomIndex];

	// Display the card's details
	document.getElementById('card-name').innerText = card.name;
	document.getElementById('card-image').src = card.image;
	document.getElementById('card-description').innerText = card.description;
	document.getElementById('card-display').style.display = 'block';
}

// Attach event listener to the button
document.getElementById('draw-card-btn').addEventListener('click', drawCard);
