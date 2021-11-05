import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>Minha Primeiro aplicação com React</h1>
      <ul className="list-group">
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>
      <Card />
    </>
  )
}

export default App;