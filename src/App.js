import React, {useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext  = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
    Class counter
    <Counter initial_count={3}/>
    Hooks Counter
    <CounterHooks initial_count={3}/>

    <button onClick={() => {
      setTheme(prev_theme => {
      return prev_theme === 'red' ? 'green' : 'red';
    })}}>Toggle Theme</button>

    </ThemeContext.Provider>
  )
}

export default App;
