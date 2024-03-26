import React from 'react'
import Aside from '../Aside/Aside'
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";


const Rawmaterials = () => {
    return (
        <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4"> <FaBuilding />&nbsp;Raw Materials</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
    
    <div class="row">
        <div className='col-md-12 mt-4 mb-4 text-start'> 
        
        <Link to='/Rawmaterialsadd' className='btn btn-primary  '> <IoMdAdd /> Add New</Link> 
        </div>

        <table class="table border rounded">
  <thead className='theading'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Code</th>
      <th scope="col">HSN/SAC</th>
      <th scope="col">Item Name </th>
      <th scope="col">UOM</th>
      <th scope="col">P.Rate</th>
      <th scope="col">S.Rate</th>
      <th scope="col">Weight/KG </th>
      <th scope="col">Action </th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td scope="row">1</td>
      <td>010101</td>
      <td>HSN</td>
      <td>Name1</td>
      <td>UOM1</td>
      <td>P.Rate1</td>
      <td>S.Rate1</td>
      <td>25Kg</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>010101</td>
      <td>HSN</td>
      <td>Name1</td>
      <td>UOM1</td>
      <td>P.Rate1</td>
      <td>S.Rate1</td>
      <td>25Kg</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>010101</td>
      <td>HSN</td>
      <td>Name1</td>
      <td>UOM1</td>
      <td>P.Rate1</td>
      <td>S.Rate1</td>
      <td>25Kg</td>
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

export default Rawmaterials
