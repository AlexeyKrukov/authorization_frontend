import React, { Component } from 'react';
import './styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.tryToEnter = this.tryToEnter.bind(this);
    }

    render() {
        return (
            <div className="form">
                <label htmlFor="login">Логин</label>
                <br />
                <input type="text" id='login' ref="login" />
                <br />
                <label htmlFor="password">Пароль</label>
                <br />
                <input type="password" id='password' ref="password"/>
                <br />
                <button onClick={this.tryToEnter}>ВОЙТИ</button>
            </div>
        );
    }

    tryToEnter() {
        fetch('http://localhost:3001/enter', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: this.refs.login.value,
                password: this.refs.password.value,
            }),
            mode: "no-cors"
        }).then(() => {
            this.props.showPopup();
        }).catch(() => {
            alert(2);
        });
    }
}
export default Form;
