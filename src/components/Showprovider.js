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
                    <section className='section dashboard'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='card recent-sales overflow-auto'>
                                    <div className='card-body'>


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