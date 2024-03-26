
import React from 'react'
import Aside from '../Aside/Aside'
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";


const Finishedgoods = () => {
    return (
        <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4"> <FaBuilding />&nbsp;Finished Goods</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
    
    <div class="row">
        <div className='col-md-12 mt-4 mb-4 text-start'> 
        
        <Link to='/Finishedgoodsadd' className='btn btn-primary  '> <IoMdAdd /> Add New</Link> 
        </div>

        <table class="table border rounded">
  <thead className='theading'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Opening Stock</th>
      <th scope="col">Production</th>
      <th scope="col">Wastages</th>
      <th scope="col">Excess</th>
      <th scope="col">Report</th>
      <th scope="col">Action </th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td scope="row">1</td>
      <td>Stock1</td>
      <td>Production1</td>
      <td>Wastage1</td>
      <td>Excess1</td>
      <td>Report1</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>Stock1</td>
      <td>Production1</td>
      <td>Wastage1</td>
      <td>Excess1</td>
      <td>Report1</td>
      <td><MdModeEdit /> / <FaTrash /></td>
    </tr>
    <tr>
      <td scope="row">1</td>
      <td>Stock1</td>
      <td>Production1</td>
      <td>Wastage1</td>
      <td>Excess1</td>
      <td>Report1</td>
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

export default Finishedgoods
