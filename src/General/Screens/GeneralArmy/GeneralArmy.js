import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import Accordion from 'react-bootstrap/Accordion';
import "./generalarmy.scss"
import ArmyDetail from './ArmyDetail';
const GeneralArmy = ({ routesarmy, setroutearmy }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showapprove, setShowapprove] = useState(false);
    const handleCloseapprove = () => setShowapprove(false);
    const handleShowapprove = () => setShowapprove(true);

    const [showreject, setShowreject] = useState(false);
    const handleClosereject = () => setShowreject(false);
    const handleShowreject = () => setShowreject(true);
    return (
        <>
            {
                routesarmy ?
                    <>
                        <ArmyDetail setroutearmy={setroutearmy} routesarmy={routesarmy} />
                    </>
                    :
                    <>
                        <div className="formobile-heading d-none display-block-in-mobile">
                            <div className="inner-heading">
                                <h6>Army  </h6>
                                <p>view your army</p>
                            </div>
                        </div>
                        <section className='main-task general-army'>
                            <div className='container-fluid padd-sm p-0'>
                                <div className='row'>
                                    <div className='col-sm-12 padd-sm p-0'>
                                        <div className='my-tabs'>
                                            <Tabs
                                                defaultActiveKey="home"
                                                transition={false}
                                                id="noanim-tab-example"
                                                className="mb-3"
                                            >
                                                <Tab eventKey="home" title="Rank Approvals">
                                                    <div className="parent-field">
                                                        <div className="option-field option-field1">
                                                            <input type="text" placeholder='Search' />
                                                            <img src="\assets\search-icon.svg" alt="img" className='img-fluid search-icon' />
                                                        </div>
                                                        <div className="option-field option-field2">
                                                            <input type="text" placeholder='Wallet Address' />
                                                        </div>
                                                        <div className="option-field option-field3">
                                                            <div class="dropdown">
                                                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Filter Ranks
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="#">Private</a></li>
                                                                    <li><a class="dropdown-item" href="#">Sergeant</a></li>
                                                                    <li><a class="dropdown-item" href="#">Lieutenant</a></li>
                                                                    <li><a class="dropdown-item" href="#">Captain</a></li>
                                                                    <li><a class="dropdown-item" href="#">Major</a></li>
                                                                    <li><a class="dropdown-item" href="#">Major General</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='maincard'>
                                                        <div className='display-none-in-mobile'>
                                                            <div className="maintable">
                                                                <table class="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                <p className='headtable'>Wallet</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>Nickname</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>From</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>To</p>
                                                                            </th>
                                                                            <th>
                                                                                <p className='headtable'>Actions</p>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p className='paratable'>0x0F4D...B5D8</p>
                                                                            </td>
                                                                            <td>
                                                                                <p className='paratable'>Umar_x2jz</p>
                                                                            </td>
                                                                            <td>
                                                                                <p className='paratable'>Soldier</p>
                                                                            </td>
                                                                            <td>
                                                                                <p className='paratable'>Soldier</p>
                                                                            </td>
                                                                            <td>
                                                                                <div className='dropbtn global-dropdown-style'>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                                            <img src='\Vectordots.svg' alt='img' className='img-fluid ' />

                                                                                        </Dropdown.Toggle>

                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item href="#/action-1">
                                                                                                <p onClick={handleShow}><img src='\generalassets\icons\promote.svg' alt='img' className='img-fluid' />Promote</p>
                                                                                                <p onClick={handleShowreject}><img src='\generalassets\icons\trash.svg' alt='img' className='img-fluid' />Reject</p>
                                                                                                <p onClick={() => { setroutearmy(!routesarmy) }}><img src='\generalassets\icons\detail.svg' alt='img' className='img-fluid' />Details</p>
                                                                                            </Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>


                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="pagi">
                                                                <div className="left">
                                                                    <p>Showing 1 to 10 of 57 entries</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p>Previous</p>
                                                                    <Pagination>
                                                                        <Pagination.Item active>{1}</Pagination.Item>
                                                                        <Pagination.Item>{2}</Pagination.Item>
                                                                        <Pagination.Item >{3}</Pagination.Item>
                                                                        <Pagination.Item>{4}</Pagination.Item>
                                                                        <Pagination.Item >{5}</Pagination.Item>
                                                                        <Pagination.Item>{6}</Pagination.Item>
                                                                    </Pagination>
                                                                    <p>Next</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mobile-responsive-table d-none display-block-in-mobile">
                                                            <div className="heading-mobile">
                                                                <p>Wallet</p>
                                                            </div>
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header>0x0F4D...B5D8</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="inner-fields">
                                                                            <div className="inner-item">
                                                                                <h6>Nickname</h6>
                                                                                <p>Umar_x2jz</p>
                                                                            </div>
                                                                            <div className="inner-item">
                                                                                <h6>From</h6>
                                                                               <p>Soldier</p>
                                                                            </div>
                                                                            <div className="inner-item">
                                                                                <h6>To</h6>
                                                                                <p>Private</p>
                                                                            </div>
                                                                            <div className="inner-item">
                                                                                <h6>Actions</h6>
                                                                                <a href="#"><img src="\assets\btn-more-mobile.svg" alt="img" className="img-fluid" /></a>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <Modal className='promote-modal global-modal-style' show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>RANK UPDATE approval</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="inner-div">
                                    <h6 className='inner-head'>Are you sure you want to promote this user?</h6>
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>Wallet</p>
                                            <h6>0x0F4D...B5D8</h6>
                                        </div>
                                        <div className="text">
                                            <p>Nickname</p>
                                            <h6>sharjeel</h6>
                                        </div>
                                        <div className="text">
                                            <p>From</p>
                                            <h6>Captain</h6>
                                        </div>
                                        <div className="text">
                                            <p>To</p>
                                            <h6>Private</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="btnss">
                                    <button onClick={handleClose} className="redbtn"><img src="\generalassets\other-imgs\Subtract.svg" alt="crossimg" className="crossimg" /> Reject</button>
                                    <button onClick={() => {
                                        handleClose();
                                        handleShowapprove();
                                    }} className="greenbtn"><img src="\generalassets\other-imgs\checkmark.svg" alt="crossimg" className="crossimg" /> Promote</button>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal className="createdsuccess-modal global-modal-style powmodal" show={showapprove} onHide={handleCloseapprove} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>RANK UPDATE approval</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="approvemain">
                                    <img src="\generalassets\other-imgs\approveimg.png" alt="approveimg" className="approveimg img-fluid" />
                                    <p className="approvetext">rank promotion approved</p>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal className="createdsuccess-modal global-modal-style powmodal" show={showreject} onHide={handleClosereject} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>pRANK UPDATE approval</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="approvemain">
                                    <img src="\generalassets\other-imgs\rejectimg.png" alt="approveimg" className="approveimg img-fluid" />
                                    <p className="approvetext">rank promotion rejected</p>
                                </div>
                            </Modal.Body>
                        </Modal>

                    </>
            }

        </>
    )
}

export default GeneralArmy