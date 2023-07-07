import './App.css'
import { Card } from './components/Card';
import { data } from './constants';
import { CardType } from './components/Card';

function App(): React.ReactNode {
  return (
    <>
    { data.map((item: CardType) => (
        <Card item={item} key={item.title} />
      ))}
    </>
  )
}

export default App
