import { Car } from './CarComponent';

export const CarList = (props) => {
    // let carsList = props.cars.map(car => <Car {...car}/>)

    return (
        <ul>
            {/* {carsList} */}
            {props.cars.map((x, i) => <Car key={i + {...x}} {...x} />)}
        </ul>
    );
}

// Commented sections are one way to do it, not commented is shorter way!