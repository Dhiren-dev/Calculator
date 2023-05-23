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


// eslint-disable-next-line import/no-anonymous-default-export
export { addValue , allClear, forConvert}