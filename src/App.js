import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TraFic from "./Component/TraFic";

const RED = 0;
const GREEN = 1;
const BLUE = 2;


class App extends Component {
    constructor() {
        super();
        this.state = {
            curentColor: RED
    }
        ;
        setInterval(() => {
            console.log(this.state);
            this.setState({
                curentColor: this.getNextColor(this.state.curentColor)
            });

        }, 1000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return BLUE;
            case BLUE:
                return GREEN;
            case GREEN:
                return RED;

        }
    }

    render() {
        return (
            <TraFic curentColor={this.state.curentColor}/>
        );
    }
}

export default App;
