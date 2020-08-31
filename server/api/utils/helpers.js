const add = ({ leftValue, rightValue }) => leftValue + rightValue;
const sub = ({ leftValue, rightValue }) => leftValue - rightValue;
const multiply = ({ leftValue, rightValue }) => leftValue * rightValue;
const divide = ({ leftValue, rightValue }) => int(leftValue / rightValue);
const mod = ({ leftValue, rightValue }) => leftValue % rightValue;
const opposite = ({ inputedValue }) => -1 * inputedValue;

module.exports = {
	add,
	sub,
	multiply,
	divide,
	mod,
	opposite,
};
