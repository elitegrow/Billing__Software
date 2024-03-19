import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aside from './Components/Aside/Aside'
import Company from './Components/Master/Company'
import Rawmaterials from './Components/Master/Rawmaterials';
import Items from './Components/Master/Items';
import Customers from './Components/Master/Customers';
import Suppliers from './Components/Master/Suppliers';
import Acgroups from './Components/Master/Acgroups';
import Acledgers from './Components/Master/Acledgres';
import Reports from './Components/Entry/Reports';
import Stockrawmaterials from './Components/Stock/Stockrawmaterials';
import Finishedgoods from './Components/Stock/Finishedgoods';
import Login from './Components/Regform/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Aside />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Rawmaterials" element={<Rawmaterials />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Suppliers" element={<Suppliers />} />
          <Route path="/Acgroups" element={<Acgroups />} />
          <Route path="/Acledgers" element={<Acledgers />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Stockrawmaterials" element={<Stockrawmaterials />} />
          <Route path="/Finishedgoods" element={<Finishedgoods />} />
          <Route path="/Login" element={<Login />} />




          </Routes>
          </Router>
    </div>
  );
}

export default App;
