import './assets/css/App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </>
    )
}

export default App;
