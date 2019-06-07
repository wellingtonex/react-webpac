import  React, { Component } from  'react';
import Squere from './squere';
import Button from './button'
import LikeButton from './like-button';
import SearchButton from './search-button.1';
import Timer from './timer';


class App extends Component {

    constructor() {
        super();
        this.state = {
            showTimer:  true,
            time: 0
        };
        console.log('Construido app');
    }

    componentWillMount() {
        console.log('componentWillMount app');
    }
    
    componentDidMount() {
        console.log('componentDidMount app');        
    }

    render () {
        console.log('render app');        
        return (
            <div>
               <Timer time={this.state.time}/>
               <button onClick={(() => this.setState({time: this.state.time + 10}))}>
                   Change props
                </button>
            </div> 
        )
    }
}

export default App;