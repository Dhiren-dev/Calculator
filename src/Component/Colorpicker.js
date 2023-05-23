export default function Colorpicker() {
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

        operatorColor.addEventListener("change", ({target}) => {
            r.style.setProperty('--o-color', target.value);
        }, false);
        numberColor.addEventListener("change", ({target}) => {
            r.style.setProperty('--g-color', target.value);
        }, false);
        functionColor.addEventListener("change", ({target}) => {
            r.style.setProperty('--w-color', target.value);
        }, false);
        shadowColor.addEventListener("change", ({target}) => {
            r.style.setProperty('--brdr-color', target.value);
        }, false);
        
        shadowColor.select();
        functionColor.select();
        numberColor.select();
        operatorColor.select();
    }
    
    return (
        <>
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
        </>
    )

}