// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
function Hookscomp() {
    const [math, setMath] = useState("");
    const [hindi, setHindi] = useState("");
    const [english, setEnglish] = useState("");
    const [history, setHistory] = useState("");
    const [geography, setGeography] = useState("");
    const [result, setResult] = useState({ obtainedMarks: 0, percentage: 0, grade: "F" });

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const calculateResult = () => {
        const totalMarks = 500;
        const obtainedMarks = parseInt(math) + parseInt(hindi) + parseInt(english) + parseInt(history) + parseInt(geography);
        const percentage = (obtainedMarks / totalMarks) * 100;
        let grade = "F";

        switch (true) {
            case percentage >= 90:
            grade = "A";
            break;
        case percentage >= 70:
            grade = "B";
            break;
        case percentage >= 60:
            grade = "C";
            break;
        case percentage >= 40:
            grade = "D";
            break;
        default:
            grade = "E";
            break;

        }

        setResult({ obtainedMarks, percentage, grade });
    };

    return (
        <>
        <form>
            <label>Math</label>
            <input type="text" value={math} onChange={(event) => handleInputChange(event, setMath)} placeholder="Enter value" id="bookone"></input>
            <br></br>
            <label>Hindi</label>
            <input type="text" value={hindi} onChange={(event) => handleInputChange(event, setHindi)} placeholder="Enter value" id="booktwo"></input>
            <br></br>
            <label>English</label>
            <input type="text" value={english} onChange={(event) => handleInputChange(event, setEnglish)} placeholder="Enter value" id="bookthree"></input>
            <br></br>
            <label>History</label>
            <input type="text" value={history} onChange={(event) => handleInputChange(event, setHistory)} placeholder="Enter value" id="bookfour"></input>
            <br></br>
            <label>Geography</label>
            <input type="text" value={geography} onChange={(event) => handleInputChange(event, setGeography)} placeholder="Enter value" id="bookfive"></input>
            <br></br>
            <button type="button" onClick={calculateResult}>Calculate</button>
        </form>
          <table>
          <tr>
                    <td>Total marks:</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Obtain marks:</td>
                    <td>{result.obtainedMarks}</td>
                </tr>
                <tr>
                    <td>Percentage:</td>
                    <td>{result.percentage.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Grade:</td>
                    <td>{result.grade}</td>
                </tr>
    </table>
            {/* <h1>component{users}</h1>
            <h1>i have rendred{count}times!</h1>
            {brand.name === "mani" ? (<><p>name is right</p></>) : (<><p>name is wrong</p></>)}
            <h1>my {brand.name}</h1>
            <h2>Model: {model}</h2> Display the model name
            <p>

            </p>
            <button onClick={() => setBrand({ name: 'honey' })}>counter</button>
            <button onClick={() => setModel("2024")}>counter</button>
            <button onClick={() => setusers(users + 1)}>Increment Users</button> */}
        </>
    );
}

export default Hookscomp;
