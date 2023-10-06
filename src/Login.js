import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [users, setUsers]=useState([])

    const nevigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userdetail ={
            adminemail: email,
            adminpassword:password
        }
        console.log("EMAIL:",email,"PASSWORD:",password);
        setEmail(email);
        setPassword(password);

        // data get karavava mate
        axios.post('http://192.168.0.111:8000/admin/logindata',userdetail).then(function (response) {
            // handle success

            // token localStorage ma set

            console.log(response.data,"DSDSDSDSDS");
            var token = response.data.token;
            // console.log(token,"tttttt");
            localStorage.setItem('token',token);
            console.log('tokenn::', token);

            // redirect login to home page
            nevigate('/admin_home')

          })
          .catch(function (error) {
            // handle error
            console.log(error);
        })
       
    }
    return (
        <>
            <section className="text-center text-lg-start">

                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right mm">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <img src={require('./img/Morsy Associate 1.png')} style={{height:'80px'}}></img>
                                    <h2 className="fw-bold mb-5 mt-5">Sign In now</h2>
                                    <form onSubmit={handleSubmit}>
                                       
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            <label className="form-label" for="form3Example3" >Admin Email address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" vlaue={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            <label className="form-label" for="form3Example4" >Admin Password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                            <label className="form-check-label" for="form2Example33">
                                                Password Reminder
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign In  
                                        </button>

                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="bg-image col-lg-6 mb-5 mb-lg-0 d-none d-md-block">
                            <img src={require('./img/login-img.jpg')} className="w-100 rounded-4 shadow-4"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Login