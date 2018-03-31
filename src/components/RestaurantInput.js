import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; /* code change */

class RestaurantInput extends Component {

  state = {
    name: '',
    location: '',
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({name: '', location: ''})
  }

  render() {
    console.log("RestaurantInput props:", this.props)
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            onChange={this.handleOnChange}
            name={'name'}
            value={this.state.name}
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name={'location'}
            value={this.state.location}
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant,
  }, dispatch);
};

export const ConnectedRestaurantInput = connect(null, mapDispatchToProps)(RestaurantInput);
