export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        //this.view.on('add', this.addNote.bind(this));
    }

    addNote(text) {
        const note = model.addItem(text);
        this.view.addNote(note);
    }

    removeNote(id) {
        this.model.removeNote(id);
        this.view.removeNote(id);
    }
}