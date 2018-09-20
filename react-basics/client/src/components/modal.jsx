import React, { Component } from "react";
import Button from "./button";
import "./modal.css";

export default class Modal extends Component {
  state = {
    text: this.props.note.text
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSave = () => {
    this.props.onSave({
      ...this.props.note,
      text: this.state.text,
    });
  };
  
  render() {
    const { text } = this.state;
    const { onClose } = this.props;
    return (
      <div className="Modal">
        <textarea
          className="Modal-input"
          rows="8"
          value={text}
          onChange={this.handleChange}
        />
        <div className="Modal-actions">
          <Button label="Save" onClick={this.handleSave}/>
          <Button label="Cancel" onClick={onClose} />
        </div>
      </div>
    );
  }
}
