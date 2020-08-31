const add = ({ leftValue, rightValue }) => leftValue + rightValue;
const sub = ({ leftValue, rightValue }) => leftValue - rightValue;
const multiply = ({ leftValue, rightValue }) => leftValue * rightValue;
const divide = ({ leftValue, rightValue }) => {
	if (rightValue === 0) return "NaN";
	return leftValue / rightValue;
};
const percent = ({ leftValue }) => {
	const inputedValue = String(leftValue);
	const fixedDigits = inputedValue.replace(/^-?\d*\.?/, "");
	const newValue = parseFloat(inputedValue) / 100;
	return newValue.toFixed(fixedDigits.length + 2);
};
const opposite = ({ leftValue }) => {
	return -1 * leftValue;
};

module.exports = {
	add,
	sub,
	multiply,
	divide,
	percent,
	opposite,
};
