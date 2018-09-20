import React, { Component } from "react";
import Button from "./button";
import "./note-editor.css";

export default class NoteEditor extends Component {
  state = {
    inputValue: ""
  };
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleSubmit = e => {
    this.props.onAddNote(this.state.inputValue);
    e.preventDefault();
    this.setState({
      inputValue: ""
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <form className="NoteEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="NoteEditor-input"
          rows="5"
          value={inputValue}
          onChange={this.handleChange}
        />
        <Button type="submit" label="Добавить" />
      </form>
    );
  }
}
