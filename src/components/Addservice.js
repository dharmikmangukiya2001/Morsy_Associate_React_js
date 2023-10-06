import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { text } from '@fortawesome/fontawesome-svg-core'
const Addservice = () => {

    const [servicename, setServicename] = useState('')
    const [servicedetails, setServicedetails] = useState('')
    const [files, setFiles] = useState([]);
    const [provideremailid, setProvideremailid] = useState('')
    const [providername,setProvidername] = useState('')
    const [providernumber,setProvidernumber] = useState('')
    const [providercompanyname, setProvidercompanyname] = useState('')
    const [service, setService] = useState('')
    const token = localStorage.getItem("token");
    const nevigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        if (files.length === 0) {
            console.log("Please select at least one file");
            return;
        }

        const formData = new FormData();

        // Append all selected files to the FormData object
        for (const file of files) {

            formData.append("image", file);

        }

        var sname = servicename
        var sdetails = servicedetails
        var pname = providername
        var pnumber = providernumber
        var pcompanyname =providercompanyname
        var pemailid = provideremailid


        formData.append("addservices", sname);
        formData.append("servicedetails", sdetails);
        formData.append("provideremail", pemailid);
        formData.append("providercompanyname", pcompanyname);
        formData.append("providername", pname);
        formData.append("providernumber", pnumber);

        try {

            const response = fetch("http://192.168.0.111:8000/admin/addservices", {
                method: "POST",
                body: formData,
                headers: { token }
            });

            if (response) {
                console.log("Successfully uploaded images");
                setServicename('');
                setServicedetails('');
                setFiles('');
                setProvideremailid('');
                nevigate('/admin_showservices')
            } else {
                console.log("Error uploading images");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);

    };

    return (
        <>
            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start" >Add Services</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Services</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Add Services <span>| Today</span></h5>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Services Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={servicename} onChange={(e) => setServicename(e.target.value)} placeholder="Services Name" />
                                                                <label htmlFor="floatingInput">Services Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Services Details</label>
                                                        <div className="col-sm-10">
                                                        <div className="form-floating mb-3">
                                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={servicedetails} onChange={(e) => setServicedetails(e.target.value)} style={{ height: 100 }} defaultValue={""} />
                                                                <label htmlFor="floatingTextarea">Services Details</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Services Images</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <input type="file" className="form-control" id="floatingInput" name="images" onChange={handleFileChange} multiple />
                                                                {/* <label htmlFor="floatingInput">Services Images</label> */}
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row mb-5">
                                                        <label className="col-sm-2 col-form-label fw-bold">Provider Name</label>
                                                        <div className="col-sm-10 ">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" placeholder="Provider Name" value={providername} onChange={(e) => setProvidername(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                <label htmlFor="floatingTextarea">Provider Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <label className="col-sm-2 col-form-label fw-bold">Provider Number</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" placeholder="Provider Number" value={providernumber} onChange={(e) => setProvidernumber(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                <label htmlFor="floatingTextarea">Provider Number</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <label className="col-sm-2 col-form-label fw-bold">Provider Company Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" placeholder="Provider Company Name" value={providercompanyname} onChange={(e) => setProvidercompanyname(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                                <label htmlFor="floatingTextarea">Provider Company Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <label className="col-sm-2 col-form-label fw-bold">Provider Email</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">@</span>
                                                                <input type="email" className="form-control" placeholder="Provider Email" value={provideremailid} onChange={(e) => setProvideremailid(e.target.value)} aria-label="Provideremail" aria-describedby="basic-addon1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-center">
                                                        <div className="col-sm-4">
                                                            <div className="input-group mb-3">
                                                                <input type="submit" className="form-control bg-primary text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>{/* End General Form Elements */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>{/* End #main */}
                {/* ======= Footer ======= */}
                <footer id="footer" className="footer">
                    <div className="copyright">
                        © Copyright <strong><span>Sky Digital</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://skydigitalgrapgics.in/">Dharmik Manguliya</a>
                    </div>
                </footer>{/* End Footer */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>

        </>
    )
}


export default Addservice