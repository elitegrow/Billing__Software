import React from 'react'
import Aside from '../../Aside/Aside'
import { FaBuilding } from "react-icons/fa";


const Companyadd = () => {
  return (
    <>
    <div class="layout-wrapper layout-content-navbar main" id='main'>
        <div class="layout-container">
            <Aside />
            <nav class="navbar navbar-light nav-head mt-2 rounded">
                <span class="navbar-brand nav-text mb-0 h1 px-4"><FaBuilding />&nbsp; Company</span>
            </nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
    
    <div class="row">
        <div class="col-xl">
            <div class="card mt-3">
                <div class="card-body pt-3">
                    <form id="addEditForm" className='row' name="addEditForm" action="" method="POST" enctype="multipart/form-data">
                                            
                        
                        <div class="mb-3 col-lg-6 text-start">

                            <label class="form-label" for="religion_name"> Company Name <span class="Form__Error">*</span></label>

                            <input type="text" required="" class="form-control  required" id="religion_name" name="religion_name" placeholder="Company Name" />

                        </div>
                        <div class="mb-3 col-lg-6 text-start">

                            <label class="form-label" for="religion_name">Address <span class="Form__Error">*</span></label>

                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Address" />

                        </div>
                        
                        <div class="mb-3 col-lg-6 text-start">

                        <label class="form-label" for="religion_name">Phone Number <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Enter Your Phone No" />

                        </div>
                        <div class="mb-3 col-lg-6 text-start">

                        <label class="form-label" for="religion_name">GST number <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="GST Number" />

                        </div>

                        <div class="mb-3 col-lg-6 text-start">

                        <label class="form-label" for="religion_name">TIN Number <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="TIN Number" />

                        </div>
                        <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.religion.index"/><input type="hidden" name="mode" id="mode" value="add"/>                        
                        <div className='text-center'> 
                            <button type="submit" class="btn btn-primary formSubmitBtn w-60" id="formSubmitBtn">Submit</button>
                            </div>
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

export default Companyadd