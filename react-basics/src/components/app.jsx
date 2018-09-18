import React, { Component } from "react";
import NoteEditor from './note-editor';
import NotesGrid from "./notes-grid";

export default class App extends Component {
    state = {
        notes: [],
    }

    addNote = (text) => {
        console.log('Text from App: ', text);
    }

  render() {
      const {notes} = this.state;
    return (
      <div>
        <NoteEditor onAddNote={this.addNote}/>
        <NotesGrid notes={notes}/>
      </div>
    );
  }
}
