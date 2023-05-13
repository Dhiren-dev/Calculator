import { useState } from "react";
import React from "react";

const addValue = (e, initValue, setter, updateArr, setFontSize) => {
    (initValue.length >= 8) ? setFontSize("35px") : setFontSize("50px");
    if (e.target.name === "operator" && initValue === 0) {
        setter(initValue + e.target.value)
    } else if (initValue === 0) {
        setter(e.target.value)
    } else (
        setter(initValue + e.target.value)
    )

    return;
}
const allClear = (e, initValue, setter, updateArr, setFontSize) => {
    setter(0)
    setFontSize("50px")
}
const forConvert = (e, initValue, setter, updateArr, setFontSize) => {
    const newArr = [];
    const multiply = '×', divide = '÷', add = '+', sub = '-', modulus = "%";
    /// function for new array with proper speration
    const Arr = Array.from(initValue).reduce((previousVal, currentVal) => {
        if (['+', '-', '÷', "%", "×"].includes(currentVal)) {
            newArr.push(previousVal)
            previousVal = ""
            newArr.push(currentVal)
            currentVal = "";
        }
        return previousVal.concat(currentVal);

    }, "")
    if (Arr !== "") {
        newArr.push(Arr);
    }

    const Operation = (Array, Operator) => {
        let i = 0;
        for (i; i < Array.length; i++) {
            let prefix, suffix, newValue;
            if (Array[i] === Operator) {
                prefix = Array.slice(i - 1, i - 0)[0];
                suffix = Array.slice(i + 1, i + 2)[0];
                if (Operator === (multiply || divide) && suffix === undefined) { suffix = 1; }
                if (Operator === (add || sub) && suffix === undefined) { suffix = 0 };
                if (Operator === modulus) { suffix = 100 }
                newValue = () => {
                    (Operator === add) ? newValue = parseFloat(prefix) + parseFloat(suffix) :
                        (Operator === sub) ? newValue = parseFloat(prefix) - parseFloat(suffix) :
                            (Operator === multiply) ? newValue = parseFloat(prefix) * parseFloat(suffix) :
                                (Operator === divide) ? newValue = parseFloat(prefix) / parseFloat(suffix) :
                                    (Operator === modulus) ? newValue = parseFloat(prefix) / parseFloat(suffix) :
                                        alert("Cannot find the operator for calculating!");
                    return newValue;
                }

                Array.splice(i - 1, 3, newValue());
            }
        }
    }

    const Calculate = (Arr) => {
        const newArr = [...Arr]
        if (newArr.includes(divide)) {
            Operation(newArr, divide);
            Calculate(newArr);
        }
        if (newArr.includes(multiply)) {
            Operation(newArr, multiply);
            Calculate(newArr);
        }
        if (newArr.includes(add)) {
            Operation(newArr, add);
            Calculate(newArr);
        }
        if (newArr.includes(sub)) {
            Operation(newArr, sub);
            Calculate(newArr);
        }
        if (newArr.includes(modulus)) {
            Operation(newArr, modulus);
            Calculate(newArr);
        }
        if (newArr.length === 1) {
            (newArr[0].length > 7) ? setFontSize("25px") :
                (newArr[0].length < 7) ? setFontSize("50px") :
                    setFontSize("50px");
            setter(newArr[0])
        }
    }
    Calculate(newArr);
}

const CalculatorKeyData = [
    { id: 1, type: "operator", class: "white", value: "AC", onClick: allClear },
    { id: 2, type: "operator", class: "white", value: "+/-", onClick: addValue },
    { id: 3, type: "operator", class: "white", value: "%", onClick: addValue },
    { id: 4, type: "operator", class: "orange", value: "÷", onClick: addValue },
    { id: 5, type: "number", value: 9, onClick: addValue },
    { id: 6, type: "number", value: 8, onClick: addValue },
    { id: 7, type: "number", value: 7, onClick: addValue },
    { id: 8, type: "operator", class: "orange", value: "×", onClick: addValue },
    { id: 9, type: "number", value: 6, onClick: addValue },
    { id: 10, type: "number", value: 5, onClick: addValue },
    { id: 12, type: "number", value: 4, onClick: addValue },
    { id: 11, type: "operator", class: "orange", value: "+", onClick: addValue },
    { id: 13, type: "number", value: 3, onClick: addValue },
    { id: 14, type: "number", value: 2, onClick: addValue },
    { id: 15, type: "number", value: 1, onClick: addValue },
    { id: 16, type: "operator", class: "orange", value: "-", onClick: addValue },
    { id: 17, type: "number", class: "zero", value: 0, onClick: addValue },
    { id: 18, type: "operator", value: ".", onClick: addValue },
    { id: 19, type: "operator", class: "orange", value: "=", onClick: forConvert },
]

function CALCULATOR({ data }) {
    const [value, updateValue] = useState(0);
    const [size, setFontSize] = useState("50px");
    const r = document.querySelector(':root');

    let operatorColor, numberColor, functionColor, shadowColor;
    window.addEventListener("load", startup, false);
    function startup() {
        const rs = getComputedStyle(r);
        operatorColor = document.querySelector("#operator");
        numberColor = document.querySelector("#number");
        functionColor = document.querySelector("#function");
        shadowColor = document.querySelector("#shadow");

        operatorColor.value = rs.getPropertyValue('--o-color');
        numberColor.value = rs.getPropertyValue('--g-color');
        functionColor.value = rs.getPropertyValue('--w-color');
        shadowColor.value = rs.getPropertyValue('--brdr-color')

        operatorColor.addEventListener("change", (e) => {
            r.style.setProperty('--o-color', e.target.value);
        }, false);
        numberColor.addEventListener("change", (e) => {
            r.style.setProperty('--g-color', e.target.value);
        }, false);
        functionColor.addEventListener("change", (e) => {
            r.style.setProperty('--w-color', e.target.value);
        }, false);
        shadowColor.addEventListener("change", (e) => {
            r.style.setProperty('--brdr-color', e.target.value);
        }, false);

        shadowColor.select();
        functionColor.select();
        numberColor.select();
        operatorColor.select();
    }
    return (
        <>
            <div className="color_picker">
                <div className="input_wrapper">
                    <input id="operator" type="color"></input>
                    <label>Operator Color</label>
                </div>
                <div className="input_wrapper">
                    <input id="number" type="color"></input>
                    <label>Number Color</label>
                </div>
                <div className="input_wrapper">
                    <input id="function" type="color"></input>
                    <label>Function Color</label>
                </div>
                <div className="input_wrapper">
                    <input id="shadow" type="color"></input>
                    <label>Shadow Color</label>
                </div>
            </div>
            
            <div className="calculator">
                <Display style={{ fontSize: size }} value={value} />
                <hr color="springgreen" />
                <CalculatorKeys setFontSize={setFontSize} value={value} onUpdateValue={updateValue} keys={data} />
            </div>
        </>
    )
}

function Display({ style, value }) {
    return (
        <>
            <div style={style} className="display">{value}</div>
        </>
    )
}

function Button({ onClick, value, name, className }) {

    return (
        <>
            <button name={name} className={className} onClick={onClick} value={value}>{value}</button>
        </>
    )
}

function CalculatorKeys({
    keys,
    value,
    onUpdateValue,
    onUpdateArr,
    setFontSize
}) {
    const Keys = keys.map((item) => {
        const className = item.class ? `${item.class} btn` : "btn";

        return <Button className={className} name={item.type} onClick={(e) => item.onClick && item?.onClick(e, value, onUpdateValue, onUpdateArr, setFontSize)} key={item.id} value={item.value} />
    });
    return (
        <>
            <div className="key_frame">{Keys}</div>
        </>
    )
}

export default function App() {

    return (
        <CALCULATOR data={CalculatorKeyData} />
    )
}