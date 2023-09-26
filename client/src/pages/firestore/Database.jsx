import React, { useState, useEffect } from 'react'
import CRUD from './crud/CRUD';
import Usage from './usage/Usage';
import Navbar from '../../components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

function Database() {
    const location = useLocation();
    console.log(location.pathname);
    const [pathKey, setPathKey] = useState('data');
    useEffect(() => setPathKey(location.pathname), [location]);
    return (
        <>
        <div className='database' style={{padding: '0rem 1rem'}}>
            <Navbar />
            <h2 className="branding_name">Cloud Firestore</h2>

            <div className="mt-4">
                <Link to={pathKey.endsWith('/') ? pathKey.replace('usage', '') : pathKey.replace('usage', '')} className="btn text-bold d-inline" style={pathKey.includes('/usage') ? {} : { color: 'purple', borderBottom: '3px solid purple' }}>Data</Link>
                <Link to={pathKey.includes('/usage') ? pathKey : pathKey.endsWith('/') ? pathKey +'usage' : pathKey + '/usage'} className="btn text-bold d-inline" style={pathKey.includes('/usage') ? { color: 'purple', borderBottom: '3px solid purple' } : {}}>Usage</Link>
            </div>
            <hr />
            {/* {...props.children} */}
            <Routes>
            <Route path="/" element={<CRUD />} />
            <Route path="/usage" element={<Usage />} />
        </Routes>
        </div>
        </>
    )
}

export default Database;