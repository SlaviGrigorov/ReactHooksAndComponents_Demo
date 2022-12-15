import './App.css';
import { CarList } from './components/CarsList';



function App() {

    let cars = [
        {"brand": "Nissan", "model": "R34", "year": "2002"},
        {"brand": "Audi", "model": "RS6", "year": "2011"},
        {"brand": "Mitsubishi", "model": "Lancer Evolution IX", "year": "2010"},
    ]

    return (
        <div className="App">
            <header className="App-header">
                <CarList cars={cars} />
            </header>
        </div>
    );
}

export default App;
