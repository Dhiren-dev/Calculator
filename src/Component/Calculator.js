import { useState } from "react";
import Display from "./Display";
import CalculatorKeys from "./Calculator_keys";
import Colorpicker from "./Colorpicker";


export default function CALCULATOR({ data }) {
    const [value, updateValue] = useState(0);
    const [size, setFontSize] = useState("50px");

    return (
        <>
            <div className="main_wrapper">
                <div className="color_picker">
                    <Colorpicker />
                </div>
                <div className="calculator">
                    <Display style={{ fontSize: size }} value={value} />
                    <hr color="springgreen" />
                    <CalculatorKeys setFontSize={setFontSize} value={value} onUpdateValue={updateValue} keys={data} />
                </div>
            </div>
        </>
    )
}