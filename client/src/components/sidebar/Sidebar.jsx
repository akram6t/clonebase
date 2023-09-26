import React, { useState, useEffect } from 'react'
import './Sidebar.scss';
import { useLocation } from 'react-router-dom';
import { MdStorage } from 'react-icons/md';
import { SiFirebase } from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';

function Sidebar() {
    const location = useLocation();
    const [pathKey, setPathKey] = useState('');
    useEffect(() => setPathKey(location.pathname), [location]);

    return (
        <div className="sidebar">
            <h2 className='heading'>Firebase Clone</h2>

            <div className="list">
                <li className={`item ${pathKey.includes('firestore') ? 'active' : ''}`}><SiFirebase/> firestore</li>
                <li className={`item ${pathKey.includes('database') ? 'active' : ''}`}><BsDatabase/> database</li>
                <li className={`item ${pathKey.includes('storage') ? 'active' : ''}`}><MdStorage/> storage</li>
            </div>
        </div>
    )
}

export default Sidebar