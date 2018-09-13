import './css/styles.css';
import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import EventEmitter from './services/event-emitter';


const view = new View();
const model = new Model();
new Controller(model, view);
const ee = new EventEmitter();

ee.on('add', (val) => console.log(`add emitter ` + val));

setTimeout(() => {
    ee.emit('add', 666);
}, 1000);