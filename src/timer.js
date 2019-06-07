import React, {Component} from 'react';


class Timer extends Component {

    constructor() {
        super();
        this.state = {
            time: 0
        }
        this.timer;
    }

    componentDidMount() {
        console.log('componentDidMount time');
        this.timer = setInterval(() => {
           this.setState({time: this.state.time + 1}) 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        //console.log('componentWillReceiveProps time ', this.props, nextProps);        
    }

    shouldComponentUpdate(nextProps, nexState) {
        //console.log('shouldComponentUpdate time ', this.state, nexState);
        return this.state.time !== nexState.time;        
    }

    componentWillUpdate(nextProps, nexState) {
        //console.log('componentWillUpdate time ', this.state, nexState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate time', this.props, prevProps );
    }

    render () {
        console.log('render timer executado');        
       return <div>Timer: {this.state.time}</div>
    }
}

export default Timer;
