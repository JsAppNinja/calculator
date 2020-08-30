const httpStatus = require("http-status");
const {
	convertValue,
	add,
	sub,
	multiply,
	divide,
	mod,
	opposite,
} = require("../utils/helpers");
const { isNil } = require("lodash");

/**
 * Check conversion
 * @public
 */
exports.check = (req, res) => {
	const { originalValue, originalUnit, convertedUnit, userInput } = req.body;
	const userInputValue = isNil(userInput) ? userInput : userInput.toFixed(1);
	let convertedValue = convertValue({
		originalValue,
		originalUnit,
		convertedUnit,
	});
	convertedValue = isNil(convertedValue)
		? convertedValue
		: convertedValue.toFixed(1);
	const isCorrect = convertedValue && convertedValue === userInputValue;
	const isIncorrect = convertedValue && convertedValue !== userInputValue;
	const isInvalid = isNil(convertedValue);

	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue: convertedValue ? Number(convertedValue) : null,
		isCorrect,
		isIncorrect,
		isInvalid,
	});
};

exports.add = (req, res) => {
	console.log(req.body, "---");
	const { leftValue, rightValue } = req.body;
	const convertedValue = add({
		leftValue,
		rightValue,
	});
	const isInvalid = isNil(convertedValue);
	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue,
		isInvalid,
	});
};

exports.sub = (req, res) => {
	const { leftValue, rightValue } = req.body;
	const convertedValue = sub({
		leftValue,
		rightValue,
	});
	const isInvalid = isNil(convertedValue);
	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue,
		isInvalid,
	});
};

exports.multiply = (req, res) => {
	const { leftValue, rightValue } = req.body;
	const convertedValue = multiply({
		leftValue,
		rightValue,
	});
	const isInvalid = isNil(convertedValue);
	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue,
		isInvalid,
	});
};

exports.divide = (req, res) => {
	const { leftValue, rightValue } = req.body;
	const convertedValue = divide({
		leftValue,
		rightValue,
	});
	const isInvalid = isNil(convertedValue);
	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue,
		isInvalid,
	});
};

exports.mod = (req, res) => {
	const { leftValue, rightValue } = req.body;
	const convertedValue = mod({
		leftValue,
		rightValue,
	});
	const isInvalid = isNil(convertedValue);
	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue,
		isInvalid,
	});
};

exports.opposite = (req, res) => {
	const { leftValue, rightValue } = req.body;
	const convertedValue = opposite({
		leftValue,
		rightValue,
	});
	const isInvalid = isNil(convertedValue);
	return res.status(httpStatus.OK).json({
		success: true,
		convertedValue,
		isInvalid,
	});
};
