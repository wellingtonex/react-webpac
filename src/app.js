import  React, { Component } from  'react';
import Squere from './squere';
import Button from './button'
import LikeButton from './like-button';
import SearchButton from './search-button.1';

class App extends Component {

    constructor() {
        super();
        this.state = {
            color: 'green'
        };
        console.log('Construido');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }

    render () {
        console.log('render');        
        return (
            <div>
                <Squere color={this.state.color}/>
                {['red', 'green', 'blue'].map((color) => (
                    <Button key={color} handleClick={() => this.setState({color })}>{color}</Button>
                ))}
            </div> 
        )
    }
}

export default App;