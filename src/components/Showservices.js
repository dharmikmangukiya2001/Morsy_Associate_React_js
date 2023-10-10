import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";

const Showservices = () => {

    const [service, setService] = useState([])
    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/admin/servicesdata`, { headers: { token } }).then(function (response) {
            // handle success
            
            console.log(response.data);
            setService(response.data.service);
            // console.log("Service:", service);


        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>
            <Header />
            <div>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1 className="text-start">Show Services</h1>
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
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Show All Services</h5>
                                                <table className="rwd-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Services Number</th>
                                                            <th>Services Name</th>
                                                            <th>Services Details</th>
                                                            <th>Provider Name</th>
                                                            {/* <th>Provider Number</th> */}
                                                            <th>Company Name</th>
                                                            {/* <th>Provider Email</th> */}
                                                            <th>Services Image</th>
                                                            <th>Show Details</th>
                                                        </tr>

                                                        {
                                                            service && service.map((item, i) => {
                                                                // {const id=localStorage.setItem('id', item._id)}
                                                                return (
                                                                    <>

                                                                        {/* {console.log(item._id)} */}

                                                                        <tr>
                                                                            <td data-th="Supplier Code">
                                                                                <p className="fw-bold">{i + 1}</p>
                                                                            </td>
                                                                            <td data-th="Supplier Name">
                                                                                <p>{item.addservices}</p>
                                                                            </td>
                                                                            <td data-th="Invoice Number">
                                                                                <p>{item.servicedetails}</p>
                                                                            </td>
                                                                            <td data-th="Invoice Date">
                                                                                <p>{item.providername}</p>
                                                                            </td>
                                                                            {/* <td data-th="Invoice Date">
                                                                                <p>{item.providernumber}</p>
                                                                            </td> */}
                                                                            <td data-th="Invoice Date">
                                                                                <p>{item.providercompanyname}</p>
                                                                            </td>
                                                                            {/* <td data-th="Invoice Date">
                                                                                <p>{item.provideremail}</p>
                                                                            </td> */}
                                                                            <td data-th="Due Date">
                                                                                <img src={`${process.env.REACT_APP_URL}/${item.servicesimg[0]}`} height={50} />
                                                                               
                                                                            </td>
                                                                            <td data-th="Net Amount">
                                                                                <Link to={`/admin_servicesdetails/${item._id}`}>
                                                                                    <button type="button" className="btn btn-danger btn-sm">Show All Details</button>
                                                                                </Link>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>

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

export default Showservices