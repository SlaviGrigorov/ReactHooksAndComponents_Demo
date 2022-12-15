
export const Car = (props) => {
    return(
        <li>
            <h2>{props.brand}</h2>
            <div>Model: {props.model}</div>
            <div>Year: {props.year}</div>
        </li>
    )
}