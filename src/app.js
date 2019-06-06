import  React, { Component } from  'react';
import Squere from './squere';
import Button from './button'
import LikeButton from './like-button';
import SearchButton from './search-button.1';

class App extends Component {

    clicou = () => {
        alert('clicou')
    }

    render () {
        return (
            <div className='container' onClick={this.clicou}>
                
                <LikeButton>Like</LikeButton>
                <SearchButton>Bustar</SearchButton>
                
            </div> 
        )
    }
}

export default App;