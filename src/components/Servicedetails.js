import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const Servicedetails = () => {

    const [service, setService] = useState([])
    const id = useParams()
    // console.log(id.id,"dddddddddddddddddddddddddddddddddddddddd");
    var dd = id.id
    // const id=localStorage.getItem('id')
    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`http://192.168.0.111:8000/admin/servicesdetails/${dd}`, { headers: { token } }).then(function (response) {
            // handle success

            console.log(response.data);
            setService(response.data.service);
            // console.log("Service:", service);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);



    // delete servicessss
    const nevigate = useNavigate();
    const deleteService = (e) => {
        e.preventDefault();

        axios.get(`http://192.168.0.111:8000/admin/deleteservice/${dd}`, { headers: { token } }).then(function (response) {
            // handle success
            console.log(response.data);
            nevigate('/admin_showservices')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    // update page hides and shows
    const [updates, setUpdates]= useState(false);
    const onAddUpdate = ()=>{
        setUpdates(true)

    }




    // update servicesssss
    const [updatedData, setUpdatedData] = useState({});
    const [servicename, setServicename] = useState('');
    const [servicedetails, setServicedetails] = useState('');
    const [files, setFiles] = useState('');
    const [provideremailid, setProvideremailid] = useState('');
    // const [service,setService]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (files.length === 0) {
            console.log("Please select at least one file");
            return
        }

        const formData = new FormData();

        // append all selected files to the FromData object

        for (const file of files) {
            formData.append("serviceimage", file);
        }

        var sename = servicename
        var sedetails = servicedetails
        var premailid = provideremailid


        formData.append("addservices", sename)
        formData.append("servicedetails", sedetails)
        formData.append("provideremail", premailid)

        try {

            const response = fetch(`http://192.168.0.111:8000/admin/updateservice/${dd}`, {
                method: "PUT",
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

    }
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);

    };

    const handleInputChange1 = (e) => {
        // Update the updatedData state when the user edits the form
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    

    

    return (

        <>
            <Header />

            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Services Details</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Services</li>
                                <li className="breadcrumb-item active">Show Services</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Services Details</h5>
                                                <div>
                                                    <div className="col-12 border shadow-sm p-3 mb-5 bg-body rounded">
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className=" ">
                                                                </p>
                                                            </div>
                                                            <div className="col-8">

                                                                <img src={`http://localhost:8000/${service.servicesimg}`} height={150} />

                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Service Name &nbsp;&nbsp;: </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6">{service.addservices}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Service Details : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6">{service.servicedetails}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.providername}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Number : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.providernumber}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Company Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.providercompanyname}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{service.provideremail}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 mb-2">
                                                            <div className="pe-4 col-12 text-end">
                                                                <Link ><button onClick={deleteService} className="btn btn-danger px-5 me-2 mb-3">Delete</button></Link>
                                                               
                                                                <Link><button id="updateButton" onClick={()=>onAddUpdate()} className="btn btn-primary me-1 px-5 mb-3">Update</button></Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                updates ? (
                                    <>
                                         <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Update Services</h5>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label">Services Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={updatedData.servicename || service.addservices || ''} onChange={handleInputChange1} placeholder="Services Name" />
                                                                {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label">Services Details</label>
                                                        <div className="col-sm-10">
                                                        <div className="input-group mb-3">
                                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={updatedData.servicedetails || service.servicedetails || ''} onChange={handleInputChange1} style={{ height: 100 }} defaultValue={""} />
                                                                {/* <label htmlFor="floatingTextarea">Services Details</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label">Services Images</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <input type="file" className="form-control" id="floatingInput" name="images" onChange={handleFileChange} multiple />
                                                                {/* <label htmlFor="floatingInput">Services Images</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    

                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label">Provider Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={updatedData.providername || service.providername || ''} onChange={handleInputChange1} placeholder="Provider Name" />
                                                                {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Provider Number</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={updatedData.providernumber || service.providernumber || ''} onChange={handleInputChange1} placeholder="Provider Number" />
                                                                {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-sm-2 col-form-label fw-bold">Company Name</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control" id="floatingInput" value={updatedData.providercompanyname || service.providercompanyname || ''} onChange={handleInputChange1} placeholder="Provider Company Name" />
                                                                {/* <label htmlFor="floatingInput">Services Name</label> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <label className="col-sm-2 col-form-label">Provider Details</label>
                                                        <div className="col-sm-10">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">@</span>
                                                                <input type="email" className="form-control" placeholder="Provider Email"  value={updatedData.provideremail || service.provideremail || ''} onChange={handleInputChange1} aria-label="Provideremail" aria-describedby="basic-addon1" />
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
                                    </>
                                ): null
                            }
                           
                            
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

export default Servicedetails