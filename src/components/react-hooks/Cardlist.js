import React, { useState } from "react";
import './Cardlist.css';
function Cardlist() {
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const calculatedResult = () => {
        let calculatedResult = 0;
        switch (operator) {
            case '+':
                calculatedResult = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                calculatedResult = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                calculatedResult = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                calculatedResult = parseFloat(operand1) / parseFloat(operand2);
                break;
            default:
                break;
        }
        setResult(calculatedResult);
    };
    const clearCalculator = () => {
        setOperand1("");
        setOperand2("");
        operator("");
        result("");
    }

    return (
        <table>
            <tr>
                <td colSpan={3}><input type="text" value={operand1} onChange={(event) => handleInputChange(event, setOperand1)}></input></td>
                <td><input type="button" value="=" onClick={calculatedResult}></input></td>
            </tr>
            <tr>
                <td colSpan={3}><input type="text" value={operand2} onChange={(event) => handleInputChange(event, setOperand2)}></input></td>
                <td colSpan={2}><input type="button" value="clear" onClick={clearCalculator}></input></td>
            </tr>
            <tr>
                <td colSpan={4}><input type="text" value={result} readOnly></input></td>
            </tr>
            <tr>
                <td><input type="button" value="+" onClick={() => setOperator('+')}></input></td>
                <td><input type="button" value="-" onClick={() => setOperator('-')}></input></td>
                <td><input type="button" value="*" onClick={() => setOperator('*')}></input></td>
                <td><input type="button" value="/" onClick={() => setOperator('/')}></input></td>
            </tr>
        </table>
    )
}
export default Cardlist;
