import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
  state = {
    contactInfoIsShown: false
  };

  onShowClick = e => {
    this.setState({
      contactInfoIsShown: !this.state.contactInfoIsShown
    });
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { contactInfoIsShown } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i className="fa fa-sort-down" onClick={this.onShowClick} />
        </h4>
        {contactInfoIsShown ? (
          <ul className="list-group">
            <li className="list-gpoup-item">Email: {email}</li>
            <li className="list-gpoup-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
