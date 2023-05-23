import { Button } from "./Button";

export default function CalculatorKeys({
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
