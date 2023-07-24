import './App.css';
import Button from '../src/components/button/Button'
import {useState} from "react";
import Table from "./components/table/Table";
import Form from "./components/form/Form"


function App() {

    const [count, setCount] = useState(0)
    const [light, setLight] = useState(true)
    const headers = ['nome', 'cognome', 'azioni']
    const actions = [
        {
            type: 'modifica',
            actionOnTop: false,
            cssClass: ''
        },
        {
            type: 'elimina',
            actionOnTop: false,
            cssClass: ''
        },
        {
            type: 'nuovo',
            actionOnTop: true,
            cssClass: ''
        }
    ]
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

    const questions = [
        {
            qText: 'cognome',
            type: 'text'
        },
        {
            qText: 'nome',
            type: 'text'
        },
        {
            qText: 'squadra preferita',
            type: 'text'
        },
        {
            qText: 'username',
            type: 'text'
        },
        {
            qText: 'password',
            type: 'password'
        }
    ]

    function saySomething() {
        alert('I am talking')
    }

    function addCount() {
        setCount(count + 1)
    }

    function enlightenMe() {
        setLight(!light)
        console.log('value of light', light)
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

    function actionEmitter(type, valueToEmit) {
        switch (type) {
            case 'modifica':
                return console.log('modificato', valueToEmit)
            case 'elimina':
                return console.log('eliminato', valueToEmit)
            case 'nuovo':
                return console.log('nuovo elemento')
            default:
                return console.log('actions clicked', valueToEmit)
        }
    }

    return (
        <>
            <div className="buttons">
                <Button handleClick={() => eventHandler('speaker')} type={'speaker'} text={'let me talk'}/>
                <Button handleClick={() => eventHandler('counter')} type={'counter'} text={'add count'}/>
                <Button className={` ${light ? "light-up" : "light-down"}`} handleClick={() => eventHandler('lighter')}
                        type={'lighter'} text={'light me up'}
                />
                {count}
            </div>
            <div className="table-area">
                <Table headers={headers} data={tableData} actions={actions} handleAction={actionEmitter} />
            </div>

            {/*<div>*/}
            {/*    <Form questions={questions}/>*/}
            {/*</div>*/}

        </>
    );
}

export default App;
