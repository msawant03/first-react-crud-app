import { database } from './firebase';

const pushData = () => {
  const newData = {
    name: 'John Doe',
    age: 30,
  };

  // Push data to Firebase
  database.ref('data').push(newData);
};

pushData();