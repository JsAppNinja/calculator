const { UNIT_CONVERSIONS } = require("./constants");

const convertValue = ({ originalValue, originalUnit, convertedUnit }) =>
	UNIT_CONVERSIONS.hasOwnProperty(`${originalUnit}-${convertedUnit}`)
		? UNIT_CONVERSIONS[`${originalUnit}-${convertedUnit}`](originalValue)
		: null;

const add = ({ leftValue, rightValue }) => leftValue + rightValue;
const sub = ({ leftValue, rightValue }) => leftValue - rightValue;
const multiply = ({ leftValue, rightValue }) => leftValue * rightValue;
const divide = ({ leftValue, rightValue }) => int(leftValue / rightValue);
const mod = ({ leftValue, rightValue }) => leftValue % rightValue;
const opposite = ({ inputedValue }) => -1 * inputedValue;

module.exports = {
	convertValue,
	add,
	sub,
	multiply,
	divide,
	mod,
	opposite,
};
