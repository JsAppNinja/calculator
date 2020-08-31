import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CalculatorKey from 'components/CalculatorKey';
import CalculatorDisplay from 'components/CalculatorDisplay';

const Calculator = ({ calculate, calculation }) => {
    const [value, setValue] = useState(null);
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [isNewOperation, setNewOperationStatus] = useState(false);
    const [prevValue, setPrevValue] = useState(null);

    const clearAll = () => {
        setValue(null);
        setPrevValue(null);
        setDisplayValue('0');
        setOperator(null);
        setWaitingForOperand(false);
        setNewOperationStatus(false);
    };

    const clearDisplay = () => {
        setPrevValue(value);
        setValue(null);
        setDisplayValue('0');
    };

    const toggleSign = () => {
        calculate(parseFloat(displayValue), '+/-');
    };

    const inputPercent = () => {
        const currentValue = parseFloat(displayValue);
        if (currentValue === 0) return;
        calculate(currentValue, '%');
    };

    const inputDot = () => {
        if (!/\./.test(displayValue)) {
            setDisplayValue(displayValue + '.');
            setWaitingForOperand(false);
        }
    };

    const inputDigit = (digit) => {
        if (isNewOperation) setPrevValue(null);
        if (waitingForOperand || isNewOperation) {
            setDisplayValue(String(digit));
            setWaitingForOperand(false);
            setNewOperationStatus(false);
        } else {
            setDisplayValue(
                displayValue === '0' ? String(digit) : displayValue + digit,
            );
        }
    };

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (!value) {
            if (prevValue) setValue(prevValue);
            else setValue(inputValue);
        }
        if (operator) {
            const currentValue = value || 0;
            if (operator === '=') {
                setNewOperationStatus(true);
            } else {
                calculate(currentValue, operator, inputValue);
            }
        }
        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const isClearDisplay = displayValue !== '0';
    const clearText = isClearDisplay ? 'C' : 'AC';

    useEffect(() => {
        const { result } = calculation;
        if (result) {
            const { resultValue } = result;
            if (resultValue) {
                setValue(resultValue);
                setDisplayValue(String(resultValue));
            }
        }
    }, [calculation]);

    return (
        <div className="calculator">
            <CalculatorDisplay value={displayValue} />
            <div className="calculator-keypad">
                <div className="input-keys">
                    <div className="function-keys">
                        <CalculatorKey
                            className="key-clear"
                            onPress={() =>
                                isClearDisplay ? clearDisplay() : clearAll()
                            }
                        >
                            {clearText}
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-sign"
                            onPress={toggleSign}
                        >
                            ±
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-percent"
                            onPress={inputPercent}
                        >
                            %
                        </CalculatorKey>
                    </div>
                    <div className="digit-keys">
                        <CalculatorKey
                            className="key-0"
                            onPress={() => inputDigit(0)}
                        >
                            0
                        </CalculatorKey>
                        <CalculatorKey className="key-dot" onPress={inputDot}>
                            ●
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-1"
                            onPress={() => inputDigit(1)}
                        >
                            1
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-2"
                            onPress={() => inputDigit(2)}
                        >
                            2
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-3"
                            onPress={() => inputDigit(3)}
                        >
                            3
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-4"
                            onPress={() => inputDigit(4)}
                        >
                            4
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-5"
                            onPress={() => inputDigit(5)}
                        >
                            5
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-6"
                            onPress={() => inputDigit(6)}
                        >
                            6
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-7"
                            onPress={() => inputDigit(7)}
                        >
                            7
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-8"
                            onPress={() => inputDigit(8)}
                        >
                            8
                        </CalculatorKey>
                        <CalculatorKey
                            className="key-9"
                            onPress={() => inputDigit(9)}
                        >
                            9
                        </CalculatorKey>
                    </div>
                </div>
                <div className="operator-keys">
                    <CalculatorKey
                        className="key-divide"
                        onPress={() => performOperation('/')}
                    >
                        ÷
                    </CalculatorKey>
                    <CalculatorKey
                        className="key-multiply"
                        onPress={() => performOperation('*')}
                    >
                        ×
                    </CalculatorKey>
                    <CalculatorKey
                        className="key-subtract"
                        onPress={() => performOperation('-')}
                    >
                        −
                    </CalculatorKey>
                    <CalculatorKey
                        className="key-add"
                        onPress={() => performOperation('+')}
                    >
                        +
                    </CalculatorKey>
                    <CalculatorKey
                        className="key-equals"
                        onPress={() => performOperation('=')}
                    >
                        =
                    </CalculatorKey>
                </div>
            </div>
        </div>
    );
};

Calculator.propTypes = {
    calculation: PropTypes.object.isRequired,
    calculate: PropTypes.func.isRequired,
};

export default Calculator;
