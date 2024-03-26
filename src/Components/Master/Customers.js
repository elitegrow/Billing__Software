import React from 'react'
import Aside from '../Aside/Aside'
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";


const Customers = () => {
    return (
        <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4"> <FaBuilding />&nbsp;Customers</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
    
    <div class="row">
        <div className='col-md-12 mt-4 mb-4 text-start'> 
        
        <Link to='/Customersadd' className='btn btn-primary  '> <IoMdAdd /> Add New</Link> 
        </div>

        <table class="table border rounded">
  <thead className='theading'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customers Name</th>
      <th scope="col">Address (Multiple)</th>
      <th scope="col">Phone Number </th>
      <th scope="col">GST No</th>
      <th scope="col">CST</th>
      <th scope="col">A/C Group (Debtors)</th>
      <th scope="col">Opening Balance </th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Action </th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td scope="row">1</td>
      <td>Name1</td>
      <td>Address1</td>
      <td>9999999999</td>
      <td>656565</td>
      <td>CST1</td>
      <td>Group1</td>
      <td>500</td>
      <td>Tamilnadu</td>
      <td>Chennai</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>Name1</td>
      <td>Address1</td>
      <td>9999999999</td>
      <td>656565</td>
      <td>CST1</td>
      <td>Group1</td>
      <td>500</td>
      <td>Tamilnadu</td>
      <td>Chennai</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
  </tbody>
</table>
    </div>
</div>
            
            </div>
        </div>
    </div> 
    )
}

export default Customers
