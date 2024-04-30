//your JS code here. If required.
const counterParagraph = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
function  handleIncrement() {
		let count = counterParagraph.textContent;
		alert(count);
		count++;
		counterParagraph.textContent = count;
	
}

incrementButton.addEventListener("click", handleIncrement);
