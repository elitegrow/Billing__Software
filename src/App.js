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
import Companyadd from './Components/Master/Addnew/Companyadd'
import Rawmaterialsadd from './Components/Master/Addnew/Rawmaterialsadd';
import Itemsadd from './Components/Master/Addnew/Itemsadd';
import Customersadd from './Components/Master/Addnew/Customersadd';
import Suppliersadd from './Components/Master/Addnew/Suppliersadd';
import Acgroupsadd from './Components/Master/Addnew/Acgroupsadd';
import Acledgresadd from './Components/Master/Addnew/Acledgresadd';
import Reportsadd from './Components/Master/Addnew/Reportsadd';
import Stockrawmaterialsadd from './Components/Master/Addnew/Stockrawmaterialsadd';
import Finishedgoodsadd from './Components/Master/Addnew/Finishedgoodsadd';

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
          <Route path="/Companyadd" element={<Companyadd />} />
          <Route path="/Rawmaterialsadd" element={<Rawmaterialsadd />} />
          <Route path="/Itemsadd" element={<Itemsadd />} />
          <Route path="/Customersadd" element={<Customersadd />} />
          <Route path="/Suppliersadd" element={<Suppliersadd />} />
          <Route path="/Acgroupsadd" element={<Acgroupsadd />} />
          <Route path="/Acledgresadd" element={<Acledgresadd />} />
          <Route path="/Reportsadd" element={<Reportsadd />} />
          <Route path="/Stockrawmaterialsadd" element={<Stockrawmaterialsadd />} />
          <Route path="/Finishedgoodsadd" element={<Finishedgoodsadd />} />






          </Routes>
          </Router>
    </div>
  );
}

export default App;
