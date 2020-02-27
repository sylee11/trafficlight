import React, {Component} from "react";
import './Trafic.css';
import classNames from 'classnames'

const RED = 0;
const BLUE = 1;
const GREEN = 2;
class TraFic extends Component{

    render() {
        const {curentColor} = this.props;
        console.log('rendering',curentColor)
        return(
            <div className="TraficLight">
                <div className={classNames('buld', 'red', { active : curentColor == RED }) }></div>
                <div className={classNames('buld', 'green', { active : curentColor == GREEN }) }></div>
                <div className={classNames('buld', 'blue', { active : curentColor == BLUE }) }></div>
            </div>
        );
    }
}

export default TraFic