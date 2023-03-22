const quotes = [
	"Be the change you wish to see in the world. - Mahatma Gandhi",
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Strive not to be a success, but rather to be of value. - Albert Einstein",
	"If you can't explain it simply, you don't understand it well enough. - Albert Einstein",
	"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
	"Everything you've ever wanted is on the other side of fear. - George Addair"
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	quoteElement.innerText = randomQuote;
}

generateBtn.addEventListener("click", generateQuote);