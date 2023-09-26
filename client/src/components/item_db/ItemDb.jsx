
import './ItemDb.scss';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdDeleteOutline, MdDriveFileRenameOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ItemDb = () => {
    
    return (
        <>
        <Link to={'database/project-name'} style={{textDecoration: 'none', color: 'black'}}>
            <div className='grid_item shadow rounded-3'>

                <div className='dbnameWithmenu bg-light align-items-center justify-content-between py-1'>
                    <h5 className='d-flex ms-2 pt-2 text-align-center'> <b className='text-danger mx-auto'>FirstClient</b> </h5>
                            <AiOutlineSetting className='me-2' size={20} />
                    {/* <Dropdown>
                        <Dropdown.Toggle className='p-2' variant="transparent" id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleSetting} className='dropSetting'><AiOutlineSetting /> Settings</Dropdown.Item>
                            <Dropdown.Item onClick={handleRename} className=''><MdDriveFileRenameOutline /> Rename</Dropdown.Item>
                            <Dropdown.Item onClick={handleDelete} className='dropDelete'><MdDeleteOutline /> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </div>

                <div className='p-2'>
                    <h5 className='d-flex align-items-center justify-content-between'> documents: <b>5</b> </h5>
                    <h5 className='d-flex align-items-center justify-content-between'> size: <b>500kb</b> </h5>
                    <h5 className='d-flex align-items-center justify-content-between'> size: <b>500kb</b> </h5>
                </div>

            </div>
            </Link>
        </>
    )
}

export default ItemDb;