import React, { Component } from 'react';
import './styles.scss';

class Title extends Component {
    render() {
        return (
            <div className="title__text">
                <span className="title__text_bold">Web</span> <span className="title__text_thin">App</span>
            </div>
        );
    }
}

export default Title;
