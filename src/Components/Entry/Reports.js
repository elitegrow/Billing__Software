import React from 'react'
import Aside from '../Aside/Aside'
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";


const Reports = () => {
    return (
        <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4"> <FaBuilding />&nbsp;Reports</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
    
    <div class="row">
        <div className='col-md-12 mt-4 mb-4 text-start'> 
        
        <Link to='/Reportsadd' className='btn btn-primary  '> <IoMdAdd /> Add New</Link> 
        </div>

        <table class="table border rounded">
  <thead className='theading'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Purchase</th>
      <th scope="col">Sales</th>
      <th scope="col">Sales Tax Wise  </th>
      <th scope="col">Purchase Tax Wise </th>
      <th scope="col">Estimation</th>
      <th scope="col">Debit Notes</th>
      <th scope="col">Customer Balance </th>
      <th scope="col">Supplier Balance</th>
      <th scope="col">Customer Balance Periodical</th>
      <th scope="col">Daily Collection  </th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td scope="row">1</td>
      <td>Purchase1</td>
      <td>Sales1</td>
      <td>Sales Tax Wise1</td>
      <td>Purchase Tax Wise1</td>
      <td>Estimation1</td>
      <td>Debit Notes1</td>
      <td>Customer Balance1</td>
      <td>Supplier Balance1</td>
      <td>Customer Balance Periodical1</td>
      <td>Daily Collection1</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>Purchase1</td>
      <td>Sales1</td>
      <td>Sales Tax Wise1</td>
      <td>Purchase Tax Wise1</td>
      <td>Estimation1</td>
      <td>Debit Notes1</td>
      <td>Customer Balance1</td>
      <td>Supplier Balance1</td>
      <td>Customer Balance Periodical1</td>
      <td>Daily Collection1</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>Purchase1</td>
      <td>Sales1</td>
      <td>Sales Tax Wise1</td>
      <td>Purchase Tax Wise1</td>
      <td>Estimation1</td>
      <td>Debit Notes1</td>
      <td>Customer Balance1</td>
      <td>Supplier Balance1</td>
      <td>Customer Balance Periodical1</td>
      <td>Daily Collection1</td>
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

export default Reports
