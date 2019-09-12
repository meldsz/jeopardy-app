import React, { Component } from 'react';

class Clue extends Component {
    constructor() {
        super();
        this.state = {
            reveal: false
        }
    }

    render() {
        const { value, question, answer } = this.props.clue;
        return (
            <div className="clue" onClick={() => this.setState({ reveal: true })}>
                <h5>{value}</h5>
                <h4>{question}</h4>
                <hr />
                <h4 className={this.state.reveal ? 'text-revealed' : 'text-hidden'}>{answer}</h4>
                <hr />
            </div>
        );
    }
}

export default Clue;