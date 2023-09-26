import React, { useEffect, useState } from 'react';
import './CRUD.scss';
import { AiFillHome } from 'react-icons/ai';
import { GrFormNext } from 'react-icons/gr';
import { SiFirebase } from 'react-icons/si';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFileEarmarkTextFill, BsFilter, BsThreeDotsVertical } from 'react-icons/bs';
import { MdEdit, MdDelete } from 'react-icons/md';

function CRUD() {

    const mycollections = [
        'users',
        'profiles',
        'stories',
        'posts'
    ];
    
    const mydocuments = [
        'jwN3NCj0mmQqOpnY0kDw',
        'D5FXSt8cZ4E9WnySa9Y6',
        'XHqdNKZOjZd6JJnpSGTr'
    ]
    
    const myFields =
    {
        name: 'Code Length',
        number: '+919191919191',
        salary: 5530.23,
        instagram: 'akram6t'
    }

    const [allCollections, setallCollections] = useState(mycollections);
    const [allDocuments, setAllDocuments] = useState(mydocuments);
    const [allFields, setAllFields] = useState(myFields);

    const handleFields = () =>  {
        const fieldsArr = Object.entries(allFields).map(([key, value]) => [key, value, typeof value]);
        // console.log(fieldsArr);
        return fieldsArr.map((field, index) => {
            console.log(field[0]);

            const checkValue = () => {
                switch(field[2]){
                    case 'string': 
                        return <><b>{field[0]}: </b> <div> <b>"</b>{field[1]}<b>"</b> </div></>
                        case 'number': 
                        return <><b>{field[0]}: </b> <div> {field[1]} </div></>
                }
            }

            return (
                <div className='list-item' key={index}>
                    {checkValue()}
                    <div className="item-actions">
                        <span>({field[2]})</span>
                        <MdEdit className='icon' size={25} />
                        <MdDelete className='icon' size={25} />
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="crud_view">
            <div className="paths">
                <AiFillHome className='item' size={20} />
                <span className='item'>colection</span>
                <GrFormNext color='#f7f7f7' className='item' size={18} />
                <span className='item'>document</span>
                {/* <GrNext className='item' size={18} /> */}
            </div>
            {/* <hr /> */}
            <div className='data_views'>
                <div className="views view_collections">
                    <div className="topbar">
                        <div className='d-flex gap-2'>
                            <SiFirebase size={22} />
                            <div>collection</div>
                        </div>
                    </div>
                    <p className='add_data p-2 mt-1 text-primary text-bold'><AiOutlinePlus size={25} /> Add Collection</p>
                    <div className='collections'>
                        {
                            allCollections.map((collection, index) => {
                                return (
                                    <div className='list-item' key={index}>
                                        {collection}
                                        <GrFormNext size={18} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="views view_documents">
                    <div className='topbar'>
                        <div className="d-flex gap-2">
                            <HiDocumentDuplicate size={22} />
                            <div>Document</div>
                        </div>
                        <div>
                            <BsFilter size={22} />
                            <BsThreeDotsVertical size={22} />
                        </div>
                    </div>
                    <p className='add_data p-2 mt-1 text-primary text-bold'><AiOutlinePlus size={25} /> Add Document</p>
                    <div className='documents'>
                        {
                            allDocuments.map((document, index) => {
                                return (
                                    <div className='list-item' key={index}>
                                        {document}
                                        <GrFormNext size={18} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="views view_fields">
                    <div className='topbar'>
                        <div className="d-flex gap-2">
                            <BsFileEarmarkTextFill size={22} />
                            <div>fields</div>
                        </div>
                        <BsThreeDotsVertical size={22} />
                    </div>
                    <p className='add_data p-2 mt-1 text-primary text-bold'><AiOutlinePlus size={25} /> Add Field</p>
                    <div className='fields'>
                         { handleFields() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRUD