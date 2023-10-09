import React, { useState } from 'react';
import Header from './Header.js';
import axios from 'axios';


const Addprovider = () => {

    // ADD BUSINESS DIV SHOW SELECT INPUT
    const [seletedOption, setSeletedOption] = useState(false);
    const handleAdd = (e) => {
        e.preventDefault();
        setSeletedOption(true)
    };
    // ADD BUSINESS DIV END



    // SELECT OPTION FOR SHOW DIV DATA
    const [associate, setAssociate] = useState('')
    // const getSecondSelectOptions = () => {
    //     switch (associate) {
    //         case 'Property':
    //             return [
    //                 <option className='rounded-top' key="property" value="property">Property</option>,
    //                 <option className='rounded-top' key="design" value="design">design</option>,
    //             ];
    //         default: return [];
    //     }
    // };
    const handleSecondSelectChange = (e) => {
        setAssociate(e.target.value);
    };
    // SELECT OPTION END



    // ADD SELES PROSAN DIV SHOW
    const [selectedSelesOption, setSelectedSelesOption] = useState(false);
    const personAdd = (e) => {
        e.preventDefault();
        setSelectedSelesOption(true)
    };
    // ADD SELES PROSAN DIV END



    // ADD BANK DETAILS DIV SHOW
    const [selectedBankOption, setSelectedBankOption] = useState(false);
    const bankAdd = (e) => {
        e.preventDefault();
        setSelectedBankOption(true);
    };
    // ADD BANK DETAILS DIV END



    // ADD IMAGE DOCUMENT DIV SHOW
    const [selectedDocument, setSelectedDocument] = useState(false);
    const documentAdd = (e) => {
        e.preventDefault();
        setSelectedDocument(true);
    }
    // ADD IMAGE DOCUMENT DIV END

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
                                <li className='breadcrumb-item activ'>Providers</li>
                            </ol>
                        </nav>
                    </div>
                    <section className='section dashboard'>
                        <div className='row'>
                            <div className='col-12'>
                                {/* <div className='card recent-sales overflow-auto'>
                                    <div className='card-body'> */}

                                <form>
                                    <div className='card recent-sales overflow-auto'>
                                        <div className='card-body'>
                                            <h5 className='card-title mb-5'>Add Provider <span>| Today</span></h5>
                                            <div>
                                                <h6 className='fw-bold text-blue'>Provider Details :</h6>
                                                <hr className='me-3' />

                                                <div className='row mb-5'>
                                                    <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Provider Profile Photos <span className='text-red'>*</span></label>
                                                    <div className='col-sm-9 col-lg-10'>
                                                        <div className='me-3'>
                                                            <input type='file' className='form-control' placeholder='Provider Name' />
                                                        </div>
                                                    </div>
                                                </div>
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
                                                <div className='row mb-5 text-end me-2'>
                                                    <div>
                                                        <button className='btn bg-danger text-white' onClick={handleAdd}>Select Business</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        seletedOption ? (
                                            <>
                                                <div className='card recent-sales overflow-auto'>
                                                    <div className='card-body'>
                                                        <div className='row mt-5 mb-5'>
                                                            <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Select Business Category<span className='text-red'>*</span></label>
                                                            <div className='col-sm-9 col-lg-10'>
                                                                <select className="form-select" onChange={handleSecondSelectChange} value={associate} aria-label="Default select example">
                                                                    <option >------ Select Option ------</option>
                                                                    <option value="Property" >Property</option>
                                                                    <option value="Design" >Design</option>
                                                                    {/* {getSecondSelectOptions()} */}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        ) : (<></>)
                                    }

                                    {
                                        associate === 'Property' ? (
                                            <>
                                                <div className='card recent-sales overflow-auto'>
                                                    <div className='card-body'>
                                                        <div>
                                                            <h6 className='fw-bold text-blue mt-5'>Business Details :</h6>
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
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Website Url <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Business Website Url' />
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
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Business Brosar <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3'>
                                                                        <input type='file' className='form-control' placeholder='Business Brosar' />
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
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Collaboration Details <span className='text-red'>*</span></label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        {/* <input type='text' className='form-control' placeholder='Business Type' /> */}
                                                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />

                                                                        <label for="floatingTextarea2">Comments</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5 text-end me-2'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white' onClick={personAdd}>Add Sales Person</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </>
                                        ) : (<></>)
                                    }


                                    {
                                        selectedSelesOption ? (
                                            <>
                                                <div className='card recent-sales overflow-auto'>
                                                    <div className='card-body'>
                                                        <div>
                                                            <h6 className='fw-bold text-blue mt-5'>Sales Person Details :</h6>
                                                            <hr className='me-3' />

                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Name </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Name' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Name</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Number </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Number' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Number</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Email ID </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Email ID' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Email ID</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5'>
                                                                <label className='col-sm-3 col-lg-2 col-form-lable fw-bold'>Sales Person Position </label>
                                                                <div className='col-sm-9 col-lg-10'>
                                                                    <div className='me-3 form-floating'>
                                                                        <input type='text' className='form-control' placeholder='Sales Person Position' />
                                                                        <label htmlFor="floatingTextarea">Sales Person Position</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row mb-5 text-end me-2'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white' onClick={bankAdd}>Add Bank Details</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (<></>)
                                    }

                                    {
                                        selectedBankOption ? (
                                            <>
                                                <div className='card recent-sales overflow-auto'>
                                                    <div className='card-body'>
                                                        <div>
                                                            <h6 className='fw-bold text-blue mt-5'>Bank Details :</h6>
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
                                                            <div className='row mb-5 text-end me-2'>
                                                                <div>
                                                                    <button className='btn bg-danger text-white' onClick={documentAdd}>Add Document</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (<></>)
                                    }

                                    {
                                        selectedDocument ? (
                                            <>
                                                <div className='card recent-sales overflow-auto'>
                                                    <div className='card-body'>
                                                        <div>
                                                            <h6 className='fw-bold text-blue mt-5'>Upload Document :</h6>
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

                                                            <div className='row mb-5 text-end me-2'>
                                                                <div>
                                                                    <button className='btn bg-success text-white' >Submit Data</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (<></>)
                                    }
                                </form>

                                {/* </div>
                                </div> */}
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