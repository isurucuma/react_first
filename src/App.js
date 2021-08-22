import React, {useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext  = React.createContext();

function App() {
  const [theme, setTheme] = useState('blue');

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
    Class counter
    <Counter initial_count={3}/>
    Hooks Counter
    <CounterHooks initial_count={3}/>

    <button onClick={() => {
      setTheme(prev_theme => {
      return prev_theme === 'blue' ? 'green' : 'blue';
    })}}>Toggle Theme</button>

    </ThemeContext.Provider>
  )
}

export default App;
