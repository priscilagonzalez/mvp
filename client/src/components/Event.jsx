import React from 'react';

const Event = ({event, onClickEdit, onClickDelete}) => {
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.notes}</td>
      <td>{event.start}</td>
      <td>{event.end}</td>
      <td><i onClick={onClickEdit} class="far fa-edit"></i></td>
      <td><i onClick={onClickDelete} class="far fa-trash-alt"></i></td>
    </tr>
  );
}

export default Event;