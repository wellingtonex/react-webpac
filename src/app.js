import  React, { Component } from  'react';
import Squere from './squere';
import Button from './button'

class App extends Component {

    clicou = () => {
        alert('clicou')
    }

    render () {
        return (
            <div className='container' onClick={this.clicou}>
                
                <Button>
                    <span>Texto 1</span>
                    <span>Texto 1</span>
                </Button>
                
            </div> 
        )
    }
}

export default App;