import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pickCategory } from '../actions/index';
import Clue from './Clue';

export class Category extends Component {
    constructor() {
        super();
        this.state = {
            clues: []
        }
    }

    componentDidMount() {
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(response => response.json())
            .then(json => this.setState({ clues: json }))
    }

    render() {
        return (
            <div>
                <Link to="/" className="link-home"><h4>Home</h4></Link>
                <h2>{this.props.category.title}</h2>
                {this.state.clues.map(clue =>
                    <Clue key={clue.id} clue={clue} />
                )}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        category: state.category
    }
}
export default connect(mapStateToProps, { pickCategory })(Category);