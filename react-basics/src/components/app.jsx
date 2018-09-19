import React, { Component } from "react";
import v4 from "uuid/v4";
import NoteEditor from "./note-editor";
import NotesGrid from "./notes-grid";

export default class App extends Component {
  state = {
    notes: []
  };

  addNote = text => {
    const note = {
      id: v4(),
      text
    };
    console.log("Text from App: ", note);
    this.setState(prevState => ({
      notes: [note, ...prevState.notes]
    }));
  };

  removeNote = id => {
    console.log('ID from removeNote', id);
    this.setState(prevState => ({
      notes: prevState.notes.filter( note => note.id !== id)
    })); 
  }

  render() {
    console.log('This.state.notes: ', this.state.notes);
    const { notes } = this.state;
    return (
      <div>
        <NoteEditor onAddNote={this.addNote} />
        <NotesGrid notes={notes} onRemoveNote={this.removeNote}/>
      </div>
    );
  }
}
