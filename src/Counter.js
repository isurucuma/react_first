import React, {Component} from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: props.initial_count
        }
    }

    render(){
        return(
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.change_count(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.change_count(1)}>+</button>
                    </div>
                )}
                
            </ThemeContext.Consumer>            
        );
    }

    change_count(num){
        // this.setState({count: this.state.count + num});
        // this.setState({count: this.state.count + num});

        this.setState(prev_state => {
            return {count: prev_state.count + num};
        });
    }
}