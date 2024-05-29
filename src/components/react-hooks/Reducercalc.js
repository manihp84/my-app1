import React, { useReducer } from 'react';

const initialState = {
  displayValue: '0',
  firstOperand: null,
  operator: null,
  waitingForSecondOperand: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_DIGIT':
      return {
        ...state,
        displayValue: state.waitingForSecondOperand ? action.payload : state.displayValue === '0' ? action.payload : state.displayValue + action.payload,
        waitingForSecondOperand: false,
      };
    case 'INPUT_DECIMAL':
      if (!state.displayValue.includes('.')) {
        return {
          ...state,
          displayValue: state.waitingForSecondOperand ? '0.' : state.displayValue + '.',
          waitingForSecondOperand: false,
        };
      }
      return state;
    case 'CLEAR':
      return initialState;
    case 'OPERATOR':
      return {
        ...state,
        operator: action.payload,
        waitingForSecondOperand: true,
        firstOperand: parseFloat(state.displayValue),
      };
    case 'EQUALS':
      const secondOperand = parseFloat(state.displayValue);
      let result = 0;
      switch (state.operator) {
        case '+':
          result = state.firstOperand + secondOperand;
          break;
        case '-':
          result = state.firstOperand - secondOperand;
          break;
        case '*':
          result = state.firstOperand * secondOperand;
          break;
        case '/':
          result = state.firstOperand / secondOperand;
          break;
        default:
          return state;
      }
      return {
        ...state,
        displayValue: result.toString(),
        waitingForSecondOperand: false,
        firstOperand: result,
        operator: null,
      };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (value) => {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      dispatch({ type: 'OPERATOR', payload: value });
    } else if (value === '.') {
      dispatch({ type: 'INPUT_DECIMAL' });
    } else if (value === 'C') {
      dispatch({ type: 'CLEAR' });
    } else if (value === '=') {
      dispatch({ type: 'EQUALS' });
    } else {
      dispatch({ type: 'INPUT_DIGIT', payload: value });
    }
  };

  return (
    <div>
      <input type="text" value={state.displayValue} readOnly />
      <br />
      <button onClick={() => handleInput('7')}>7</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('+')}>+</button>
      <br />
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('-')}>-</button>
      <br />
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('*')}>*</button>
      <br />
      <button onClick={() => handleInput('0')}>0</button>
      <button onClick={() => handleInput('.')}>.</button>
      <button onClick={() => handleInput('=')}>=</button>
      <button onClick={() => handleInput('/')}>/</button>
      <br />
      <button onClick={() => handleInput('C')}>C</button>
    </div>
  );
};

export default Calculator;
