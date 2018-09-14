import EventEmitter from '../services/event-emitter';
export default class View extends EventEmitter {
    constructor() {
        super();

        this.form = document.querySelector('.form');
        this.input = this.form.querySelector('.input');
        this.notesGrid = document.querySelector('.notes-grid');

        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }

    handleAdd(event) {
        event.preventDefault();
        const {
            value
        } = this.input;
        if (value === '') return;
        this.emit('add', value);
    }

    createNote(note) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.dataset.id = note.id;

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = note.text;

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const buttonRemove = document.createElement('button');
        buttonRemove.classList.add('button');
        buttonRemove.dataset.action = 'remove';
        buttonRemove.textContent = 'Удалить';

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('button');
        buttonEdit.dataset.action = 'edit';
        buttonEdit.textContent = 'Редактировать';

        actions.append(buttonRemove, buttonEdit);

        item.append(text, actions);

        this.addEventListener(item);

        return item;
    }

    addEventListener(item) {
        const removeBtn = item.querySelector('[data-action="remove"]');
        removeBtn.addEventListener('click', this.handleRemove.bind(this));
    }

    addNote(note) {
        const item = this.createNote(note);
        this.form.reset();
        this.notesGrid.appendChild(item);
    }

    handleRemove({target}) {
        const parent = target.closest('.item');
        this.emit('remove', parent.dataset.id);
    }

    removeItem(id) {
        const item = this.notesGrid.querySelector(`[data-id="${id}"]`);
        this.notesGrid.removeChild(item);
    }
}