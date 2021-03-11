import React, { useState } from 'react';
import phonesService from '../services/phones';

const PersonForm = ({persons, setNewRequest, handleNotification}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      firstName: newName,
      phoneNumber: parseInt(newPhone),
    }
    const personExist = persons.find(person => person.firstName.toLowerCase() === personObject.firstName.toLowerCase());
    const numberExist = persons.find(person => person.phoneNumber === personObject.phoneNumber);

    if (personExist && numberExist) {
      alert(`${personExist.firstName} is already added to phonebook`);
      return;
    } else if (personExist && numberExist === undefined) {
      const result = window.confirm(`${personExist.firstName} is already added to phonebook, replace the old number with a new one?`);
      if (result) {
        phonesService
          .updatePerson(personExist.id, personObject)
        setNewRequest(new Date());
        handleNotification('update', personExist.firstName)
        setNewName('');
        setNewPhone('');
      }
    } else {
      phonesService
        .create(personObject)
      setNewRequest(new Date());
      handleNotification('add', personObject.firstName)
      setNewName('');
      setNewPhone('');
    }
  };

  return (
    <form onSubmit={addPerson}>
    <div>
      name: <input type="text" required value={newName} onChange={e => setNewName(e.target.value)} />
    </div>
    <div>
      number: <input type="tel" required value={newPhone} onChange={e => setNewPhone(e.target.value)} />
    </div>
    <button type="submit">add</button>
  </form>
  )
}

export default PersonForm;
