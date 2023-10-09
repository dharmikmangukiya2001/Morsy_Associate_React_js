import React from "react";
import Header from "./Header.js";
import axios from "axios";

const Showprovider = () => {
    return(
        <>
        <Header/>

        <div>
                <main id="main" className='main'>
                    <div className='pagetitle'>
                        <h1 className='text-start'>Show Providers</h1>
                        <nav>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>Home</li>
                                <li className='breadcrumb-item activ'>Providers</li>
                            </ol>
                        </nav>
                    </div>

                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card recent-sales overflow-auto">
                                            <div className="card-body">
                                                <h5 className="card-title">Show All Providers</h5>
                                                <table className="rwd-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Provider Name</th>
                                                            <th>Provider Number</th>
                                                            <th>Business Name</th>
                                                            {/* <th>Provider Number</th> */}
                                                            <th>Category Name</th>
                                                            {/* <th>Provider Email</th> */}
                                                            <th>Business Details</th>
                                                            <th>Show Details</th>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>fg</td>
                                                            <td>fg</td>
                                                            <td>fg</td>
                                                            <td>fg</td>
                                                            <td>fg</td>
                                                            <td><button className="btn btn-danger btn-sm" type="button">Show All Details</button></td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
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
export default Showprovider