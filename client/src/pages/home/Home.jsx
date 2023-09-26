import React, { useState } from 'react';
import './Home.scss';
import { Dropdown } from 'react-bootstrap';
import { IoAdd } from 'react-icons/io5';
import { FaUserCircle, FaInstagram } from 'react-icons/fa';
import { BsFillDatabaseFill } from 'react-icons/bs';
import ItemDb from '../../components/item_db/ItemDb';
import Loader from '../../components/Loader';
import axios from 'axios';
import Paths from '../../apis/Apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GetIp from '../../apis/GetIP';
import GetHeaderKey from './../../apis/GetHeaderKey';

function Home() {
    const navigate = useNavigate();
    const [ showLoader, setLoaderShow ] = useState(true);

    function checkIsConnected(){
        const SERVER_PATH =  process.env.REACT_APP_SERVER_PATH;
        axios.get(`${SERVER_PATH}/${Paths.checkConnection}`).then(response => {
            const { status } = response.data;
            if(status){
                const authToken = localStorage.getItem('authToken');
                if(!authToken){
                    toast.warning("please Login first");
                    navigate('/login');
                }else{
                    setLoaderShow(true);
                    GetIp().then(ip => {
                        axios.post(`${SERVER_PATH}/${Paths.checkAuthToken}`,{authToken: authToken+ip})
                        .then(response => {
                            setLoaderShow(false);
                            const { status, message } = response.data;
                            if(!status){
                                toast.error(message);
                                navigate('/login');
                            }
                        }).catch(err => {
                            toast.error("" + err);
                            setLoaderShow(false);
                        })
                    }).catch(err => {
                        toast.error(""+err);
                        setLoaderShow(false);
                    });
                }
                
            }else{
                setLoaderShow(false);
                navigate('/signup');
                toast.warning("please Link You database first");
            }
        }).catch(error => {
            console.log("error is: " + error);
            setLoaderShow(false);
            toast.error('' + error);

        });
    }

    useState(() => {
        checkIsConnected();
    }, []);


    return (
        <>
            <Loader show={showLoader}/>
            <div className='home'>
                <div className='bg-danger position-relative' style={{height: 300}}>
                <nav className='nav position-sticky top-0 bg-danger'>
                    <h3 className='heading text-white'>CloneBase</h3>
                    <div className="item-list gap-2">
                        <div className="item px-3 py-2 bg-light rounded-full">Docs</div>
                        <div className='item p-1 rounded-lg'><FaInstagram size={30}/></div>
                        <div className='item p-1'>
                            <Dropdown>
                                <Dropdown.Toggle className='p-0' variant="transparent" id="dropdown-basic">
                                    <FaUserCircle size={30} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item  className='dropSetting'> Settings</Dropdown.Item>
                                    <Dropdown.Item className=''> Rename</Dropdown.Item>
                                    <Dropdown.Item className='dropDelete'> Icon Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </nav>

                <div className='container p-2 text-light mt-5 d-flex align-items-center justify-content-around'>

                    <div>
                    <h2>Realtime Database</h2>
                    <h5>Easily create a realtime database</h5>
                    </div>

                    <BsFillDatabaseFill size={100}/>
                </div>


                </div>

                <div className='clusters container-sm mt-5'>
                    <h3>recents project</h3>

                    <div className='clusters_grid mt-3'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='p-2 bg-white shadow rounded-3 w-100 h-100 bg-primary gap-2 d-flex flex-column align-items-center justify-content-center' style={{cursor: 'pointer'}}>
                            <IoAdd size={50} color='brown'/>
                            <h5>Add Project</h5>
                            </div>
                        </div>
                        {
                            new Array(10).fill('').map((val, index) => {
                                return (
                                  <ItemDb key={index}/>
                                )
                            })
                        }

                    </div>

                </div>
                {/* end clusters code */}

            </div>
            {/* end main */}
        </>
    )
}

export default Home