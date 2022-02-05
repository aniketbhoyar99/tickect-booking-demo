import React,{useState} from 'react';
import RegistrationForm from './screens/RegistrationForm';
import {Switch,Route } from "react-router-dom";
import TicketPage from './screens/TicketPage';
import ShowDetails from './screens/ShowDetails';
import './App.css';

function App() {
  const [newData, setnewData] = useState([])
  const [formData, setnewFormData] = useState([]);
  const allData = (e) => {
    setnewData([...newData,e]);
  };
  const regFormData = (e) => {
    setnewFormData(e);
  };
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <RegistrationForm getdata={regFormData} />
        </Route>
        <Route path="/ticketpage">
          <TicketPage getdata={allData} />
        </Route>
        <Route path="/showdetails">
          <ShowDetails newData={newData} formData={formData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
