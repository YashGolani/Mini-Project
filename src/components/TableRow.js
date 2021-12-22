import React from 'react';
import DeleteIcon from './DeleteIcon';

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.name}</td>
      <td>{contact.company}</td>
      <td>{contact.status}</td>
      <td>{contact.notes}</td>

      <td>
        <button
          className='button_border'
          type='button'
          onClick={() => handleDeleteClick(contact.id)}
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
