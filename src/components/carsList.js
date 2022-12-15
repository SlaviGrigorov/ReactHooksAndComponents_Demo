
export const CarList = (props) => {
    let carsList = props.cars.map(car => {
        return(
            <li>
                <h2>{car.brand}</h2>
                <div>Model: {car.model}</div>
                <div>Year: {car.year}</div>
            </li>
        )
    })

    return (
        <ul>
            {carsList}
        </ul>
    );
}