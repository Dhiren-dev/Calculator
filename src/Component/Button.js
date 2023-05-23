export function Button({ onClick, value, name, className }) {

    return (
        <>
            <button name={name} className={className} onClick={onClick} value={value}>{value}</button>
        </>
    )
}

