const httpStatus = require("http-status");
const {
	add,
	sub,
	multiply,
	divide,
	percent,
	opposite,
} = require("../utils/helpers");
const { isNil } = require("lodash");

/**
 * Calculation
 * @public
 */
exports.calculation = (req, res) => {
	const { leftValue, operator, rightValue } = req.body;
	if (leftValue === "NaN") {
		return res.status(httpStatus.OK).json({
			success: true,
			resultValue: "NaN",
			isInvalid: true,
		});
	}
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
			});
			break;
		case "%":
			resultValue = percent({
				leftValue,
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
