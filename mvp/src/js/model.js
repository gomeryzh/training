import v4 from 'uuid/v4';
import { resolve } from 'path';

export default class Model {
  constructor(items = []) {
    this.items = items;
  }

  addItem(text) {
    const item = {
      id: v4(),
      text
    }

    this.items.push(item);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(item);
      }, 200);
    });
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  updateItem(id, props) {
    const item = this.items.find(item => item.id === id);

    const keys = Object.keys(props);
    keys.forEach(key => (item[key] = props[key]));
  }
}