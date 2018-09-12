export default class View {
    constructor() {
        this.form = document.querySelector('.form');
        this.input = this.form.querySelector('.input');
        this.notesGrid = document.querySelector('.notes-grid');
    }

    createNote(note) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.dataset.id = note.id;

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = note.text;

        const button = document.createElement('button');
        button.classList.add('button');
        button.dataset.action = 'remove';
        button.textContent = 'Удалить';

        item.append(text, button);

        this.addEventListener(item);

        return item;
    }

    addEventListener(item) {
        const removeBtn = item.querySelector('[data-action="remove"]');
        removeBtn.addEventListener('click', this.removeItem.bind(this));
    }

    addNote(note) {
        const item = this.createNote(note);
        this.form.reset();
        this.notesGrid.appendChild(item);
    }

    removeitem({
        target
    }) {
        const item = target.closest('.item');
        this.notesGrid.removeChild(item);
    }
}