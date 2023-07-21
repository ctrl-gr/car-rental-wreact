import './App.css';
import Button from '../src/components/button/Button'
import {useState} from "react";
import Table from "./components/table/Table";


function App() {
    const [count, setCount] = useState(0)
    const [light, setLight] = useState(true)
    const headers = ['nome', 'cognome']
    const tableData = [
        {
            id: 1,
            nome: 'Sandro',
            cognome: 'Tonali'
        },
        {
            id: 2,
            nome: 'Simon',
            cognome: 'Kjaer'
        },
        {
            id: 3,
            nome: 'Rafa',
            cognome: 'Leao'
        }
    ]

    function saySomething() {
        console.log('its working')
    }

    function addCount() {
        setCount(count + 1)
    }

    function enlightenMe() {
        setLight(!light)
    }

    function eventHandler(type) {
        switch (type) {
            case 'speaker':
                saySomething();
                break;
            case 'counter':
                addCount();
                break;
            case 'lighter':
                enlightenMe();
                break;
            default:
                console.log('default case')
        }
    }

    return (
        <>
            <div className="buttons">
                <Button handleClick={eventHandler(Button.type)} type={'speaker'} text={'let me talk'}/>
                <Button handleClick={eventHandler(Button.type)} type={'counter'} text={'add count'}/>
                <Button handleClick={eventHandler(Button.type)} type={'lighter'} text={'light me up'}
                        className={light ? 'light-up' : 'light-down'}/>
                {count}
            </div>
            <div>
                <Table headers={headers} data={tableData}/>
            </div>
        </>
    );
}

export default App;
