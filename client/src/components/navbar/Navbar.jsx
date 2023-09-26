import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { IoHelpCircle } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.scss';

function Navbar() {
    return (
        <div className='navbar'>
            <Dropdown>
                <Dropdown.Toggle className='drop_name' variant="white" id="dropdown-basic">
                    First Project
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>React Native</Dropdown.Item>
                    <Dropdown.Item>First Flutter</Dropdown.Item>
                    <Dropdown.Item>Something Learn React</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className="actions">
                <IoHelpCircle size={30} color='#5E5E5E' />
                <AiFillInstagram size={30} color='#5E5E5E' />
                <FaUserCircle size={30} />
            </div>
        </div>
    )
}

export default Navbar