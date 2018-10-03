import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import Axios from 'axios';

export default class Contact extends Component {
  state = {
    contactInfoIsShown: false
  };

  onShowClick = e => {
    this.setState({
      contactInfoIsShown: !this.state.contactInfoIsShown
    });
  };

  onDeleteClick = (id, dispatch) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>
      dispatch({ type: 'Delete_Contact', payload: id })
    );
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { contactInfoIsShown } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  className="fa fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {contactInfoIsShown ? (
                <ul className="list-group">
                  <li className="list-gpoup-item">Email: {email}</li>
                  <li className="list-gpoup-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
