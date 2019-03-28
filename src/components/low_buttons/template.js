import React, { Component } from 'react';
import './styles.scss';

class LowButtons extends Component {

    render() {
        return (
            <div className="lowbuttons">
                <span className="lowbuttons__link">Я забыл пароль</span>
                <span className="lowbuttons__link">Регистрация</span>
                <span className="lowbuttons__support">Написать в поддержку</span>
            </div>
        );
    }
}
export default LowButtons;
