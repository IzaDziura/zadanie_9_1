
function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log ("Nieprawidłowe dane");
	} else {
		return (a*h)/2;
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(5,8),
	triangle2Area = getTriangleArea(1,2),
	triangle3Area = getTriangleArea(9,10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);