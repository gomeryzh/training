import React, { Component } from 'react';
import * as Api from '../services/api';
import NoteEditor from './note-editor';
import NotesGrid from './notes-grid';
import Modal from './modal';
import Backdrop from './backdrop';

const getNoteById = (notes, id) => notes.find(note => note.id === id);

export default class App extends Component {
  state = {
    notes: [],
    isModalOpen: false,
    selectedNoteId: null
  };

  toggleModal = id => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      selectedNoteId: id
    }));
  };

  componentDidMount() {
    Api.getAllNotes().then(notes => {
      this.setState({ notes });
    });
  }

  addNote = text => {
    Api.addNote({ text }).then(note => {
      this.setState(prevState => ({
        notes: [note, ...prevState.notes]
      }));
    });
  };

  removeNote = idToRemove => {
    Api.deleteNote(idToRemove).then(id => {
      this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id !== id)
      }));
    });
  };

  updateNote = noteToUpdate => {
    Api.updateNote(noteToUpdate).then(updatedNote => {
      this.toggleModal();
      this.setState(prevState => ({
        notes: prevState.notes.map(
          note => (note.id === noteToUpdate.id ? noteToUpdate : note)
        )
      }));
    });
  };

  render() {
    const { notes, isModalOpen, selectedNoteId } = this.state;

    const selectedNote = selectedNoteId
      ? getNoteById(notes, selectedNoteId)
      : null;

    return (
      <div>
        {isModalOpen && (
          <Backdrop>
            <Modal
              onSave={this.updateNote}
              onClose={this.toggleModal}
              note={selectedNote}
            />
          </Backdrop>
        )}

        <NoteEditor onAddNote={this.addNote} />
        <NotesGrid
          notes={notes}
          onRemoveNote={this.removeNote}
          onEditNote={this.toggleModal}
        />
      </div>
    );
  }
}
