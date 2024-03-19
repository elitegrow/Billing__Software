import React from 'react'
import Aside from '../Aside/Aside'

const Reports = () => {
  return (
    <>
    <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4">Reports</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                    <div class="col-xl">
                        <div class="card mt-3">
                            <div class="card-body pt-3">
                                <form id="addEditForm" name="addEditForm" action="" method="POST" enctype="multipart/form-data">
                                                    
                                    <div class="mb-3 text-start">

                                        <label class="form-label" for="religion_name">Purchase<span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control  required" id="religion_name" name="religion_name" placeholder="Purchase" />

                                    </div>
                                    <div class="mb-3 text-start">

                                        <label class="form-label" for="religion_name">Sales <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Sales" />

                                    </div>
                                    
                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Sales Tax Wise <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Sales Tax Wise" />

                                    </div>
                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Purchase Tax Wise <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Purchase Tax Wise" />

                                    </div>

                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Estimation <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Estimation" />

                                    </div>

                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Debit Notes <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Debit Notes" />

                                    </div>

                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Customer Balance <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Customer Balance" />

                                    </div>

                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Supplier Balance <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Supplier Balance" />

                                    </div>

                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Customer Balance Periodical <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Customer Balance Periodical" />

                                    </div>

                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="religion_name">Daily Collection <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Daily Collection" />

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

export default Reports