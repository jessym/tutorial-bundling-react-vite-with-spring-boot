import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {Env} from "./Env.ts";

function App() {
    useEffect(() => {
        fetch(`${Env.API_BASE_URL}/ping`)
            .then(response => response.text())
            .then(body => console.log(body));
    }, []);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <Link to='/cake'>
                Visit /cake
            </Link>
        </>
    )
}

export default App
