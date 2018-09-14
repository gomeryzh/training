import './css/styles.css';
import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import EventEmitter from './services/event-emitter';


const view = new View();
const model = new Model();
new Controller(model, view);
console.log(view);

// const ee = new EventEmitter();

// ee.on('add', (val) => console.log('wefewf'));
// ee.emit('add', 777);
