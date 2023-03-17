import './index.css';
import SearchComponent from './Componets/SearchComponent'
import Footer from './Componets/Footer';
import CardComponent from './Componets/Card';
import PopUp from './Componets/PopUp';
import CardFoto from "./Componets/CardFoto";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    link, Link
} from "react-router-dom";


function App() {
    return (
        <div >

        <SearchComponent / >


        <CardComponent / >

            <CardFoto/>

            <Router>
                <ul>
                    <li>
                        <Link to="" className="text-ble-500">Home</Link>
                    </li>
                    <li>
                        <Link to="" className="text-ble-500">Home</Link>
                    </li>
                    <li>
                        <Link to="" className="text-ble-500">Home</Link>
                    </li>
                </ul>
            </Router>

            <Footer/>

        </div>
    );
}

export default App