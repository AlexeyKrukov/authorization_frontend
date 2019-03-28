import React, { Component } from 'react';
import './App.scss';
import { Title, Form, LowButtons, Popup } from "./components";

class App extends Component {
    constructor(props) {
        super(props);
        this.showPopup = this.showPopup.bind(this);
        this.state = {
            showPopup: false
        }
    }
    render() {
        return (
        <div className="App">
            {!this.state.showPopup &&
            <div>
                <Title/>
                <b className="App__text">Войдите в свой профиль</b>
                <Form showPopup={this.showPopup}/>
                <LowButtons/>
            </div>
            }
            {this.state.showPopup && <Popup />}
        </div>
    );
  }
  showPopup() {
      document.body.style.backgroundColor = '#bbbbbb';
      this.setState({
            showPopup: true
        });
  }
}

export default App;
