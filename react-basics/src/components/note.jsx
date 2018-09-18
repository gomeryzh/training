import React from 'react';
import Button from './button';

const Note = ({text}) => (
    <div className="item">
      <p className="text">{text}</p>
      <div className="actions">
        <Button label="Удалить"/>
        <Button label="Редактировать"/>
      </div>
    </div>
);

export default Note;