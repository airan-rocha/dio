import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import Button from './Button';

function sun(a, b) {
    return a + b;
}

function Bt(props){
    const {onClick, name} = props
    return(
        <button onClick={onClick}>{name}</button>
    )
}

function ComponenteA(props){
    const {titulo} = props
    return(
        <div>
            <h2>{titulo}</h2>
            {props.children}
        </div>
    )
}

function primeroJSX() {
    return (
        <div className='teste'>
            Airan Rocha - Introdução ao ReactJS
            <h1>Soma: {sun(10, 20)} !!!</h1>
            <p>muito top</p>
            <Button onClick={() => alert(sun(10, 20))} name="Soma"></Button>
            <br/>
            <Bt onClick={() => alert('oi')} name='oi'/>
            <ComponenteA titulo="oi">
                <p>meu componente</p>
            </ComponenteA>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            Hello World  
            {primeroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)