import React, {useState, useContext} from 'react';
import { ThemeContext } from './App';

export function CounterHooks_old(props) {
    const [state, setState] = useState({count: props.initial_count});
    return (
        <div>
            {/* 
                There are two ways to update the state
                One is to call the set state function by giving the updated state object
                Two is to give a function as an argument to the setstate function
                which takes the current state as the argument and returns the new state
            */}
            <button onClick={() => {
                // This is the second method: which gives a the method which returns the updated state by using the previous state 
                setState((prevSate => {
                    return {count: prevSate.count - 1};
                }));
            }}>-</button>

            <span>{state.count}</span>

            <button onClick={() => {
                // This is the first method: just giving the updated state as an argument to the setState method
                setState({count: state.count + 1});
            }}>+</button>
        </div>
    );
}

// By dereferencing the objects. You don't need to have 
export default function CounterHooks({initial_count}) {
    const [count, setCount] = useState(initial_count);
    const style = useContext(ThemeContext);
    return (
        <div>
            {/* 
                There are two ways to update the state
                One is to call the set state function by giving the updated state object
                Two is to give a function as an argument to the setstate function
                which takes the current state as the argument and returns the new state
            */}
            <button style={style} onClick={() => {
                // This is the second method: which gives a the method which returns the updated state by using the previous state 
                setCount((prev_count => prev_count - 1));
            }}>-</button>

            <span>{count}</span>

            <button style={style} onClick={() => {
                // This is the first method: just giving the updated state as an argument to the setState method
                setCount(count+1);
            }}>+</button>
        </div>
    );
}