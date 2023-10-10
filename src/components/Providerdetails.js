import {React,useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

function Providerdetails(){
    const [provider, setProvider] = useState([])
    const id = useParams()
    const providerid = id.id
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/providerdetails/${providerid}`, { headers: { token } }).then(function (response) {
            // handle success
            console.log(response.data);
            setProvider(response.data.providerdata);

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);
    return (
        <>
        <Header/>
        <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Provider Details</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">Provider</li>
                                <li className="breadcrumb-item active">Show Provider</li>
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

                                                                {/* <img src={`${process.env.REACT_APP_URL}/${provider.providerimg}`} height={150} /> */}

                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Name &nbsp;&nbsp;: </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                     <span className="fs-6">{provider.providername}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p><span className="fs-6">{provider.providernumber}</span></p>
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
                                                                   <span className="fs-6 ">{provider.provideremailid}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider B.O.D. : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                     <span className="fs-6 ">{provider.providerbod}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Provider Address : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                    <span className="fs-6 ">{provider.provideraddress}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinessname}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinessnumber}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinessemailid}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Website Url : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinesswebsiteurl}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness GSTIN Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinessgstnumber}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Type : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinesstype}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Details : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinessdetails}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness TDS Details : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinesstdsdetails}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Pancard Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinesspancardnumber}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Category : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinesscategory}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bussiness Address : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bussinessaddress}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Collaboration Details: </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.collaborationdetails}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Person Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.salespersonname}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Person Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.salespersonnumber}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Person Email : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.salespersonemailid}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Sales Personposition : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.salespersonposition}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bankname}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank Account Numbar : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bankaccountnumber}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank ISFC Code : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bankifsccode}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12">
                                                            <div className="col-4">
                                                                <p className="fs-6">
                                                                    <strong>Bank Branch Name : </strong>
                                                                </p>
                                                            </div>
                                                            <div className="col-8 pe-3">
                                                                <p>
                                                                   <span className="fs-6 ">{provider.bankbranchname}</span> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="ms-3 d-flex col-12 mb-2">
                                                            <div className="pe-4 col-12 text-end">
                                                                {/* <Link ><button onClick={deleteService} className="btn btn-danger px-5 me-2 mb-3">Delete</button></Link> */}

                                                                {/* <Link><button id="updateButton" onClick={() => onAddUpdate()} className="btn btn-primary me-1 px-5 mb-3">Update</button></Link> */}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
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

export default Providerdetails
