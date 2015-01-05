function main() {
	var sketch = document.getElementById('sketch');
	var context = sketch.getContext("2d");

	context.fillStyle = "#00ff00"
	context.beginPath();
	context.arc(200, 160, 160, 0, 8 * Math.PI, true);
	context.closePath();
	context.fill();

	context.fillStyle = "#ffffff"
	context.beginPath();
	context.arc(135, 80, 40, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();

	context.fillStyle = "#ffffff"
	context.beginPath();
	context.arc(265, 80, 40, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();

	context.fillStyle = "#000000"
	context.beginPath();
	context.arc(135, 80, 20, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();

	context.fillStyle = "#000000"
	context.beginPath();
	context.arc(265, 80, 20, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();



	context.fillRect(150, 210, 100, 35);
}
document.addEventListener('DOMContentLoaded', main);