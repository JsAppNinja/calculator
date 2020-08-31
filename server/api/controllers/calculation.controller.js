const httpStatus = require("http-status");
const {
	add,
	sub,
	multiply,
	divide,
	mod,
	opposite,
} = require("../utils/helpers");
const { isNil } = require("lodash");

/**
 * Calculation
 * @public
 */
exports.calculation = (req, res) => {
	const { leftValue, operator, rightValue } = req.body;
	let resultValue = null;
	switch (operator) {
		case "+":
			resultValue = add({
				leftValue,
				rightValue,
			});
			break;
		case "-":
			resultValue = sub({
				leftValue,
				rightValue,
			});
			break;
		case "*":
			resultValue = multiply({
				leftValue,
				rightValue,
			});
			break;
		case "/":
			resultValue = divide({
				leftValue,
				rightValue,
			});
			break;
		case "+/-":
			resultValue = opposite({
				leftValue,
				rightValue,
			});
			break;
		case "%":
			resultValue = mod({
				leftValue,
				rightValue,
			});
			break;
		default:
			break;
	}
	const isInvalid = isNil(resultValue);
	return res.status(httpStatus.OK).json({
		success: true,
		resultValue,
		isInvalid,
	});
};
