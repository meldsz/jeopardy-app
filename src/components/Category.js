import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pickCategory } from '../actions/index';

class Category extends Component {
    componentDidMount() {
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Link to="/" className="link-home"><h4>Home</h4></Link>
                <h2>{this.props.category.title}</h2>
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