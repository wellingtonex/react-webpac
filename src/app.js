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
            
        };
        console.log('Construido app');
    }
    
    render () {
        //console.log('render app');        
        return (
            <div>
               <Button handleClick={() => console.log('clicou')}>Clique em mim</Button>
            </div> 
        )
    }
}

export default App;