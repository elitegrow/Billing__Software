import React from 'react'
import Aside from '../Aside/Aside'
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";


const Company = () => {
    return (
        <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4"> <FaBuilding />&nbsp;Company</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
    
    <div class="row">
        <div className='col-md-12 mt-4 mb-4 text-start'> 
        
        <Link to='/Companyadd' className='btn btn-primary  '> <IoMdAdd /> Add New</Link> 
        </div>

        <table class="table border rounded">
  <thead className='theading'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Company Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">GST Number</th>
      <th scope="col">TIN Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td scope="row">1</td>
      <td>Barbikan</td>
      <td>Sivakasi</td>
      <td>8767854743</td>
      <td>56533</td>
      <td>56546</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">2</td>
      <td>Elitegrow</td>
      <td>Chennai</td>
      <td>8767854743</td>
      <td>56533</td>
      <td>56546</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">3</td>
      <td>Google</td>
      <td>Madurai</td>
      <td>8767854743</td>
      <td>56533</td>
      <td>56546</td>
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

export default Company
