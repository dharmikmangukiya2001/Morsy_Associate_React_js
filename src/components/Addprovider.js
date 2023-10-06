import React, { useState } from 'react';
import Header from './Header.js';
import axios from 'axios';


const Addprovider = () => {


    const [seletedOption, setSeletedOption] = useState(false)
    const handleAdd = (e) => {
        e.preventDefault();
        setSeletedOption(true)
    }



    const [property, setProperty]=useState('')
    const getSecondSelectOptions = () => {
        switch (property) {
            case 'Associates':
                return [
                    <option key="property" value="property">Property</option>,
                ];
                default: return[];
        }
    };

    const  handleSecondSelectChange = (e) => {
        setProperty(e.target.value);
    }

    return (
        <>
            <Header />
            <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start'>Add Providers</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Provider</li>
                            </ol>
                        </nav>
                    </div>
                    <section className='section dashboard'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='card recent-sales overflow-auto'>
                                    <div className='card-body'>
                                        <h5 className='card-title mb-5'>Add Provider <span>| Today</span></h5>

                                        <form>
                                            <div>
                                                <h6 className='fw-bold text-blue'>Provider Details :</h6>
                                                <hr className='me-3' />

                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Name <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='text' className='form-control' placeholder='Provider Name' />
                                                            <label htmlFor="floatingTextarea">Provider Name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Numbar <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='text' className='form-control' placeholder='Provider Numbar' />
                                                            <label htmlFor="floatingTextarea">Provider Number</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Email ID <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='text' className='form-control' placeholder='Provider Email ID' />
                                                            <label htmlFor="floatingTextarea">Provider Email ID</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider B.O.D. <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='date' className='form-control' placeholder='Provider B.O.D' />
                                                            <label htmlFor="floatingTextarea">Provider B.O.D.</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Address <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3 form-floating'>
                                                            <input type='text' className='form-control' placeholder='Provider Address' />
                                                            <label htmlFor="floatingTextarea">Provider Address</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mb-5'>
                                                    <div>
                                                        <button className='btn bg-danger text-white' onClick={handleAdd}>Add Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                seletedOption ? (
                                                    <>
                                                        <div className='row mb-5'>
                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business <span className='text-red'>*</span></label>
                                                            <div className='col-sm-9 col-lg-10'>
                                                                <select className="form-select" onChange={handleSecondSelectChange} value={property} aria-label="Default select example">
                                                                    <option >---&#8883; Select Option &#8882;---</option>
                                                                    <option value="Associate" >Associate</option>
                                                                    {getSecondSelectOptions()}
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </>
                                                ) : (<></>)
                                            }

                                            {
                                                property === 'Associate' ? (
                                                    <>
                                                        <div>
                                                            <h6 className='fw-bold text-blue'>Business Details :</h6>
                                                            <hr className='me-3' />

                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Name <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Name' />
                                                                        <label htmlFor="floatingTextarea">Business Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Numbar <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Numbar' />
                                                                        <label htmlFor="floatingTextarea">Business Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Email ID <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Email ID' />
                                                                        <label htmlFor="floatingTextarea">Business Email ID</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Details <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Details' />
                                                                        <label htmlFor="floatingTextarea">Business Details</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Address <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Address' />
                                                                        <label htmlFor="floatingTextarea">Business Address</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business GST IN Numbar <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business GST IN Numbar' />
                                                                        <label htmlFor="floatingTextarea">Business GST IN Numbar</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business TDS Details <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business TDS Details' />
                                                                        <label htmlFor="floatingTextarea">Business TDS Details</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Pan Card Number</label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Pan Card Number' />
                                                                        <label htmlFor="floatingTextarea">Business Pan Card Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Category <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Category' />
                                                                        <label htmlFor="floatingTextarea">Business Category</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Type <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Type' />
                                                                        <label htmlFor="floatingTextarea">Business Type</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white' >Add Details</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (<></>)
                                            }







                                            {/* 
                                                        <div>
                                                            <h6 className='fw-bold text-blue'>Sales Person Details :</h6>
                                                            <hr className='me-3' />

                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Name <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Name' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Number <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Number' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Email ID <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Email ID' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Email ID</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Position <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Position' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Position</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white'>Add Details</button>
                                                                </div>
                                                            </div>
                                                        </div>







                                                        <div>
                                                            <h6 className='fw-bold text-blue'>Bank Details :</h6>
                                                            <hr className='me-3' />

                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Name <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Bank Name' />
                                                                        <label htmlFor="floatingTextarea">Bank Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Account Number <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Banck Account Number' />
                                                                        <label htmlFor="floatingTextarea">Banck Account Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank IFSC Code <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Bank IFSC Code' />
                                                                        <label htmlFor="floatingTextarea">Bank IFSC Code</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Bank Branch Name<span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Bank Branch Name' />
                                                                        <label htmlFor="floatingTextarea">Bank Branch Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white'>Add Details</button>
                                                                </div>
                                                            </div>
                                                        </div>





                                                        <div>
                                                            <h6 className='fw-bold text-blue'>Upload Document :</h6>
                                                            <hr className='me-3' />

                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Aadharcard Image JPEG <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3'>
                                                                        <input type='file' className='form-control' placeholder='Aadharcard Image JPEG' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Pancard Image JPEG <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 '>
                                                                        <input type='file' className='form-control' placeholder='Pancard Image JPEG' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>GST File JPEG <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 '>
                                                                        <input type='file' className='form-control' placeholder='GST File JPEG' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>TDS File JPEG<span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3'>
                                                                        <input type='file' className='form-control' placeholder='TDS File JPEG' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Agreement File JPEG<span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3'>
                                                                        <input type='file' className='form-control' placeholder='Agreement File JPEG' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Agreement File JPEG<span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3'>
                                                                        <input type='file' className='form-control' placeholder='Agreement File JPEG' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <div className='col-sm-9 col-lg-10 d-flex align-items-center'>
                                                                    <input type="checkbox" id="checkbox1"
                                                                        className='fs-5 form-check-input' />
                                                                    <label for="checkbox1" className='fs-6 ms-3'>All information is correct</label>
                                                                </div>
                                                            </div>

                                                            <div className='row mb-5'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white' >Add Details</button>
                                                                </div>
                                                            </div>
                                                        </div> */}

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer id='footer' className='footer'>
                    <div className='copyright'>
                        © Copyright <strong><span>Sky Digital</span></strong>. All Rights Reserved
                    </div>
                    <div className='credits'>
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Manguliya</a>
                    </div>
                </footer>
            </div >
        </>
    )

}
export default Addprovider