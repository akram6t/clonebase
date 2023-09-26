//                             <Form.Control as="input" placeholder='http://localhost:27017 OR mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/?retryWrites=true&w=majority' />


import React, { useState } from 'react';
import { SiMongodb } from 'react-icons/si';
import './Signup.scss';
import Paths from '../../apis/Apis';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import GetIp from '../../apis/GetIP';
import GetRandomUID from '../../apis/GetRandomUID';

const Signup = () => {
    const navigate = useNavigate();
    const [showLoader, setLoaderShow] = useState(true);
    // const [showSpinner, setShowSpinner] = useState(false);
    const [User, setUser] = useState({
        username: '',
        password: '',
        mongodb: ''
    });

    function checkIsConnected() {
        const SERVER_PATH =  process.env.REACT_APP_SERVER_PATH;
        axios.get(`${SERVER_PATH}/${Paths.checkConnection}`, {}).then(response => {
            setLoaderShow(false);
            const { status } = response.data;
            if (status) {
                navigate('/login');
            }
        }).catch(error => {
            console.log("error is: " + error);
            setLoaderShow(false);
            toast.error('' + error);

        });
    }

    useState(() => checkIsConnected(), []);


    const handleTextChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...User, [name]: value });
    }

    const handleLinkDatabase = (event) => {
        const SERVER_PATH =  process.env.REACT_APP_SERVER_PATH;
        event.preventDefault();
        if (User.username != "" && User.password != "" && User.mongodb != "") {
            setLoaderShow(true);
            const token = GetRandomUID();
            GetIp().then(ip => {
                axios.post(`${SERVER_PATH}/${Paths.signup}`, { ...User, authToken: token + ip })
                    .then(response => {
                        const { status, message } = response.data;
                        if (status) {
                            localStorage.setItem('authToken', token);
                            toast.success(message);
                            setLoaderShow(false);
                            navigate('/');
                        } else {
                            setLoaderShow(false);
                            toast.error(message);
                        }
                    })
                    .catch((error) => { toast.error("" + error); setLoaderShow(false); });
            }).catch(err => { toast.error('' + err); setLoaderShow(false); });
        } else toast.error("Any Input value Is Empty");
    };

    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent" className='pt-3'>
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <SiMongodb size={30} />
                    </div>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={handleLinkDatabase} className='mt-3'>
                        <input type="text" id="login" className="fadeIn second" name="username" onChange={(e) => handleTextChange(e)} placeholder="username" />
                        <input type="text" id="password" className="fadeIn third" name="password" onChange={(e) => handleTextChange(e)} placeholder="password" />
                        <input type="text" id="mongodb" className="fadeIn fourth" name="mongodb" onChange={(e) => handleTextChange(e)} placeholder="MongoDB Link" />
                        <input type="submit" className="fadeIn five mt-3" value="Link Database" />
                        <div hidden className='mb-2 fadeIn five'>
                            {/* <Spinner hidden={!showSpinner} variant='info' /> */}
                        </div>
                    </form>

                    {/* <!-- Remind Passowrd --> */}
                    <div id="formFooter" className='fadeIn six'>
                        {/* <span className="underlineHover cursor-pointer">if you have already account? <span className='text-primary'>please Login </span> </span> */}
                    </div>

                </div>

                <div className='position-absolute bottom-0 left-0 mx-auto fadeIn seven'>
                    <h5>If you are face problem please read the  <span className='btn btn-primary ms-2'> Documentation ?</span></h5>
                </div>
            </div>

            <Loader show={showLoader} />
        </>
    );
};

export default Signup;
