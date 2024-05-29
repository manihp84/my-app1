import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
	switch (action) {
		case "add":
			return state + 1;
		case "subtract":
			return state - 1;
        case "multiply":
            return state * 2;
        case "divide":
            return state / 2;
        case "increment":
		case "reset":
			return 0;
		default:
			throw new Error("Unexpected action");
	}
};

const Count = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="mainDiv">
			<h2>{count}</h2>
			<div className="btn">
				<button onClick={() => dispatch("add")}>Add</button>
				<button onClick={() => dispatch("subtract")}>Sub</button>
				<button onClick={() => dispatch("reset")}>Reset</button>
                <button onClick={() => dispatch("multiply")}>Mul</button>
                <button onClick={() => dispatch("divide")}>Div</button>
                <button onClick={() => dispatch("increment")}>Inc</button>
			</div>
		</div>
	);
};

export default Count;
