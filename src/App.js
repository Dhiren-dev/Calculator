import CALCULATOR from "./Component/Calculator";
import {addValue, allClear, forConvert} from "./Component/Util"

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


export default function App() {

    return (
        <CALCULATOR data={CalculatorKeyData} />
    )
}
