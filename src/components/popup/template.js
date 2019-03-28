import React, { Component } from 'react';
import './styles.scss';

class Popup extends Component {

    render() {
        return (
            <div className="popup">
                <span>Введите код из смс</span>
                <input type='text'></input>
            </div>
        );
    }
}
export default Popup;
