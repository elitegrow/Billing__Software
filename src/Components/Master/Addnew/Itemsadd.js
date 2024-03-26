import React from 'react'
import Aside from '../../Aside/Aside'


const Itemsadd = () => {
  return (
    <>
    <div class="layout-wrapper layout-content-navbar main" id='main'>
   <div class="layout-container">
        <Aside />
        <nav class="navbar navbar-light nav-head mt-2 rounded">
  <span class="navbar-brand nav-text mb-0 h1 px-4">Items</span>
</nav>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
      
    <div class="row">
        <div class="col-xl">
            <div class="card mt-3">
                <div class="card-body pt-3">
                    <form id="addEditForm" name="addEditForm" action="" method="POST" enctype="multipart/form-data">
                                            
                        
                        <div class="mb-3 text-start">

                            <label class="form-label" for="religion_name">Item Code <span class="Form__Error">*</span></label>

                            <input type="text" required="" class="form-control  required" id="religion_name" name="religion_name" placeholder="Item Code" />

                        </div>
                        <div class="mb-3 text-start">

                            <label class="form-label" for="religion_name">HSN/SAC <span class="Form__Error">*</span></label>

                            <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="HSN/SAC" />

                        </div>
                        
                        <div class="mb-3 text-start">

                        <label class="form-label" for="religion_name">Item Name <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Item Name" />

                        </div>
                        <div class="mb-3 text-start">

                        <label class="form-label" for="religion_name">UOM <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="UOM" />

                        </div>

                        <div class="mb-3 text-start">

                        <label class="form-label" for="religion_name">P.Rate <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="P.Rate" />

                        </div>
                        <div class="mb-3 text-start">

                        <label class="form-label" for="religion_name">S.Rate <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="S.Rate" />

                        </div>
                        <div class="mb-3 text-start">

                        <label class="form-label" for="religion_name">Weight/KG <span class="Form__Error">*</span></label>

                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Weight/KG" />

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

export default Itemsadd