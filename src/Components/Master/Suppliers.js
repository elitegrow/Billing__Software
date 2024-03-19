import React from 'react'
import Aside from '../Aside/Aside'

const Suppliers = () => {
  return (
    <>
    <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
        <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4">Suppliers</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
                    <div class="row">
                        <div class="col-xl">
                            <div class="card mt-3">
                                <div class="card-body pt-3">
                                    <form id="addEditForm" name="addEditForm" action="" method="POST" enctype="multipart/form-data">
                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">Suppliers Name<span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control  required" id="religion_name" name="religion_name" placeholder="Suppliers Name" />

                                        </div>
                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">Address (Multiple) <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Address" />

                                        </div>
                                        
                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">Phone Number <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Phone Number" />

                                            </div>
                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">GST No <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="GST Number" />

                                        </div>

                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">CST <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="CST" />

                                        </div>

                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">A/C Group (Creditors) <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="A/C Group (Creditors)" />

                                        </div>

                                        <div class="mb-3 text-start">
                                        <label class="form-label" for="religion_name">Opening Balance <span class="Form__Error">*</span></label>
                                            
                                            <select className='form-select'>
                                            <option value="select">Select</option>
                                                <option value="CRorDR">CR or DR</option>
                                                <option value="Amount">Amount</option>
                                                <option value="date">Date</option>
                                            </select>

                                        </div>
                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">State <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="State" />

                                        </div>
                                        <div class="mb-3 text-start">

                                            <label class="form-label" for="religion_name">City <span class="Form__Error">*</span></label>

                                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="City" />

                                        </div>
                                        <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.religion.index"/><input type="hidden" name="mode" id="mode" value="add"/>                        <button type="submit" class="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Suppliers