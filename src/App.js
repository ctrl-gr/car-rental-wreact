import './App.css';
import Button from '../src/components/button/Button'
import {useState} from "react";



function App() {
    const [count, setCount] = useState(0)
    const [light, setLight] = useState(true)

    function saySomething() {
        console.log('its working')
    }

    function addCount() {
        setCount(count + 1)
    }

    function enlightenMe() {
        setLight(!light)
    }

    switch(Button.type) {
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

  return (
    <div className="buttons">
      <Button handleClick={saySomething} type={'speaker'} text={'let me talk'}  />
        <Button handleClick={addCount} type={'counter'} text={'add count'}  />
        <Button handleClick={enlightenMe} type={'lighter'} text={'light me up'} className={ light ? 'light-up' : 'light-down' } />
        {count}
    </div>
  );
}

export default App;
