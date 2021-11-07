import './App.css';
import logo from './logo.svg';
import Link from './components/Link';

function App() {
  const mySite = "http://www.airanrocha.com.br";

  return (
    <div className="App">
      <p>teste</p>
      <img alt="logo girando" className="App-logo" src={logo} />
      <br />
      <Link href={mySite} text="Valdirene"  extern/>
      <br />
      <Link href="https://www.google.com" text={<img alt="logo" height="50px" src={logo} />} extern/>
    </div>
  );
}

export default App;
