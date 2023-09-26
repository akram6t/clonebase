import React, { useState } from 'react';
import { SiMongodb } from 'react-icons/si';
import './Login.scss';
import { toast } from 'react-toastify';
import axios from 'axios';
import Paths from '../../apis/Apis';
import { Link, Navigate } from 'react-router-dom';
import GetIp from '../../apis/GetIP';
import GetRandomUID from '../../apis/GetRandomUID';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

const Login = () => {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const [UserAuth, setUserAuth] = useState({
        username: '',
        password: ''
    });

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUserAuth({ ...UserAuth, [name]: value });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const SERVER_PATH = process.env.REACT_APP_SERVER_PATH;
        const token = GetRandomUID();
        if(UserAuth.username != "" && UserAuth.password != "") {
            setShowLoader(true);
            GetIp().then(ip => {
                axios.post(`${SERVER_PATH}/${Paths.login}`, {...UserAuth, authToken: token+ip})
                .then(response => {
                    setShowLoader(false);
                    const { status, message } = response.data;
                    if(status){
                        localStorage.setItem('authToken', token);
                        navigate('/');
                    }else{
                        toast.warning(message);
                    }
                }).catch(error => {toast.error(""+error); setShowLoader(false);});
            }).catch(err => {toast.error("" + err); setShowLoader(false);});
            
        }else {toast.error("Please fill the All Input Values");}

    };

    return (
        <>
        <Loader show={showLoader}/>
        <div className="wrapper fadeInDown">
            <div id="formContent" className='pt-3'>
                {/* <!-- Tabs Titles --> */}

                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                    <SiMongodb size={30} />
                </div>

                {/* <!-- Login Form --> */}
                <form onSubmit={handleLogin} className='mt-3'>
                    <input type="text" id="login" className="fadeIn second" name="username" onChange={(e) => handleTextChange(e)} placeholder="username" />
                    <input type="text" id="password" className="fadeIn third" name="password" onChange={(e) => handleTextChange(e)} placeholder="password" />
                    <input type="submit" className="fadeIn fourth mt-3" value="Log In" />
                    <div className='mb-2 fadeIn five'>
                        {/* <Spinner variant='info'/> */}
                    </div>
                </form>

                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter" className='fadeIn six'>
                    <span className="underlineHover cursor-pointer">If Your Are Forgot a USERNAME OR PASSWORD <br /> Run Again NODEJS SERVER And Again Link to MONGODB.</span>
                    <br /> <Link className='btn btn-light mt-2 border' to={'/'}>Go Back to Home</Link>
                </div>

            </div>

            <div className='position-absolute bottom-0 left-0 mx-auto fadeIn seven'>
                <h5>If you are face problem please read the  <span className='btn btn-primary ms-2'> Documentation ?</span></h5>
            </div>
        </div>
        </>
    );
};

export default Login;
