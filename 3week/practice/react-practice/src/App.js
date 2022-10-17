import { useState } from 'react';
import NameView from './nameView';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('현규');

  const countMin = () => {
    setCount(count - 1);
  };

  const countAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <CountView counts={count} />
      <button onClick={countMin}>-</button>
      <button onClick={countAdd}>+</button>
      <NameView name={name} />
    </div>
  );
}

const CountView = ({ counts }) => {
  return <h1>{counts}</h1>;
};

export default App;
