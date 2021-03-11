import React from 'react';
import phonesService from '../services/phones';

const Person = ({ person, setNewRequest, handleNotification }) => {

  const handleClickDelete = (id) => {
    const result = window.confirm(`Delete ${person.name}?`);
    if (result) {
      phonesService
        .deletePerson(id)
        .catch(error => handleNotification('error', person.name))
        .then(() => setNewRequest(new Date()))
      setNewRequest(new Date());
      handleNotification('remove', person.name);
    }
  }

  return (
    <li>
      {person.firstName} {person.phoneNumber} {' '}
      <button onClick={() => handleClickDelete(person.id)}>delete</button>
    </li>
  );
};

export default Person;
