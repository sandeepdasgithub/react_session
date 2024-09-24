import React from 'react';
import DataTable from './components/DataTable';
import { User } from './interfaces/user';

const App: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Rakesh', email: 'Rakesh@gmail.com' },
    { id: 2, name: 'prakash', email: 'prakash@gmail.com' },
    { id: 3, name: 'sankar', email: 'sankar@gmail.com' },
    { id: 4, name: 'Sandeep', email: 'Sandeep@gmail.com' },
    { id: 5, name: 'Avijeet', email: 'Avijeet@gmail.com' },
    { id: 6, name: 'soumya', email: 'soumya@gmail.com' },
    { id: 7, name: 'prabhu', email: 'prabhu@gmail.com' }
  ];

  return (
    <div>
      <center>
      <h1>Users Table</h1>
      <DataTable users={users} />
      </center>
    </div>
  );
};

export default App;
