import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './App.css';

import Form from './components/Form';

class App extends Component {
    state = {
        mounted: true
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({mounted: false})
    };

    render() {
        return (
            <div className="app">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}  //Отвечает за первоначальное появление в DOM
                    transitionAppearTimeout={500}
                    transitionLeave={true}  //Отвечает за удвление из DOM
                    transitionLeaveTimeout={300}
                    transitionEnter={false}>
                    {this.state.mounted && <Form onSubmit={this.handleSubmit} />}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;