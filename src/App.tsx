import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import TodoInput from './ComplaintInput';
import TodoList from './ComplaintList';
import './App.css';

export interface IComplaint {
  description : string,
  isSolved : boolean
}

export class Complaint implements IComplaint {
  id:any;
  description: string;
  isSolved : boolean;

  constructor(description:string='', isSolved:boolean = false){
    this.id = uuid();
    this.description = description;
    this.isSolved = isSolved;
  }
}


function App(){

  const complaintListArr: Complaint[] = [
    new Complaint('Complaint 1'),
    new Complaint('Complaint 2')
  ]

  const [complaints, setComplaints] = useState(complaintListArr);

  function addComplaint(complaint:Complaint){
    setComplaints([complaint, ...complaints])
  }

  useEffect(()=>{
    console.log('app complaint', complaints);
  },[complaints])

  return (
    <div>
      <Header />
      <TodoInput addComplaint={addComplaint} />
      <div id="complaint-list-container" className="list-container">
        <TodoList />
      </div>
    </div>
  );
};

export default App;