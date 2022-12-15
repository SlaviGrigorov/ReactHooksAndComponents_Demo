import { Car } from './CarComponent';

export const CarList = (props) => {
    let carsList = props.cars.map(car => <Car {...car}/>)

    return (
        <ul>
            {carsList}
        </ul>
    );
}