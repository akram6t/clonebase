import React from 'react'
import { Modal, Spinner } from 'react-bootstrap';
import ReactLoading from 'react-loading';

const Loader = ({show}) => {
    
  return (
    <Modal className='d-flex align-items-center justify-content-center' centered backdrop={'static'} show={show} onHide={() => {}}>
        <div style={{borderRadius: 100}} className='d-flex bg-white align-items-center p-3 justify-content-center'>
        <ReactLoading color='red' type='spin'/>
        </div>
    </Modal>
  )
}

export default Loader