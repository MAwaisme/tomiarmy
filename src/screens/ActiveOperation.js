import React, { useState } from 'react'
import "./operation.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';

const ActiveOperation = () => {

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [profilePicture, setProfilePicture] = useState(null);
    const setProfilePic = (evt) => {
        setProfilePicture(evt.target.files[0]);
    }
    return (
        <>
            <section className="active-operations">
                <div className="upper-item">
                    <div className='left'>
                        <h6>operation : ELON MUSK <span>ENDS IN: 23:34:12</span></h6>
                        <p>make elon musk tweet about tomi</p>
                    </div>
                    <a href="#">View All Operation Tasks <img src="\assets\arrow-right.svg" alt="img" className='img-fluid ms-2' /></a>
                </div>
                <div className="bottom-cards">
                    <div className="card-item border-grad">
                        <img src="\assets\points.svg" alt="img" className='img-fluid' />
                        <div className="inner-content">
                            <p>Points</p>
                            <h6>150,000</h6>
                        </div>
                    </div>
                    <div className="card-item border-grad">
                        <img src="\assets\tomitokens.svg" alt="img" className='img-fluid' />
                        <div className="inner-content">
                            <p>TOMI Tokens</p>
                            <h6>100,000</h6>
                        </div>
                    </div>
                    <div className="card-item border-grad">
                        <img src="\assets\totaltasks.svg" alt="img" className='img-fluid' />
                        <div className="inner-content">
                            <p>Total Tasks</p>
                            <h6>55</h6>
                        </div>
                    </div>
                    <div className="card-item border-grad unique-item">
                        <div className='inner-set'>
                            <img src="\assets\rewardnft.svg" alt="img" className='img-fluid' />
                            <div className="inner-content">
                                <p>Reward NFT</p>
                                <h6>ELN MSK #41234</h6>
                            </div>
                        </div>
                        <div className="nft-img">
                            <img src="\assets\nft.svg" alt="img" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className='maincard'>
                    <div className="maintable table-responsive">
                        <table class="table table-striped " >
                            <thead>
                                <tr>
                                    <th>
                                        <p className='headtable'>Task</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>Points</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>TOMI Tokens</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>Progress</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>Status</p>
                                    </th>
                                    <th>
                                        <p className='headtable'>Action</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className='paratable'>Like our facebook page</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>+5</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>500 TOMI</p>
                                    </td>
                                    <td>
                                        <div className="twice">
                                            <img src="\assets\greenline.svg" alt="img" className='img-fluid' />
                                            <p className='paratable'>100 of 100</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='completebtn'>
                                            <button className=''>Completed</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='dropbtn'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">
                                                        <p onClick={handleShow1}><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>Like our facebook page</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>+5</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>500 TOMI</p>
                                    </td>
                                    <td>
                                        <div className="twice">
                                            <img src="\assets\orangeline.svg" alt="img" className='img-fluid' />
                                            <p className='paratable'>67 of 100</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='completebtn'>
                                            <button className='orange'>In Progress</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='dropbtn'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">
                                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>Follow our twitter acc...</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>+5</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>500 TOMI</p>
                                    </td>
                                    <td>
                                        <div className="twice">
                                            <img src="\assets\blankline.svg" alt="img" className='img-fluid' />
                                            <p className='paratable'>0 of 100</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='completebtn'>
                                            <button className='orange'>In Progress</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='dropbtn'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">
                                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='paratable'>Follow our twitter acc...</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>+5</p>
                                    </td>
                                    <td>
                                        <p className='paratable'>500 TOMI</p>
                                    </td>
                                    <td>
                                        <div className="twice">
                                            <img src="\assets\redline.svg" alt="img" className='img-fluid' />
                                            <p className='paratable'>5 of 100</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='completebtn'>
                                            <button className='red'>Not Started</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='dropbtn'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    <img src='\Vectordots.svg' alt='img' className='img-fluid' />

                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">
                                                        <p><img src='\Vector.svg' alt='img' className='img-fluid' />Submit Proof</p>
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
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item >...</Pagination.Item>
                                <Pagination.Item>{6}</Pagination.Item>
                            </Pagination>
                            <p>Next</p>
                        </div>
                    </div>
                </div>
            </section>

            <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='heading'>
                            <h4>submit proof of work</h4>
                            <p>upload at least one of the below items</p>
                        </div>
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className='maininput'>
                        <p>POW Url</p>
                        <input type='text' placeholder='Enter POW Url....' />
                    </div>
                    <div className="upload-parent">
                        <p className='uehyuj'>Upload Proof of Work Image</p>
                        <div className="upload">
                            {
                                profilePicture ? <label htmlFor="upload">
                                    {" "}
                                    <img
                                        src={profilePicture ? URL?.createObjectURL(profilePicture) : ""}
                                        alt="img"
                                        className="img-fluid"
                                    />
                                </label> : <label htmlFor="upload">
                                    {" "}
                                    <img
                                        src="\uploadimage.svg"
                                        alt="img"
                                        className="img-fluid"
                                    />
                                    <p className='dropimage'>Drop your image here, or<span>browse</span> </p>
                                    <p className='support'>Supports: JPG, JPEG, PNG</p>
                                </label>
                            }

                            <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

                        </div>
                    </div>
                    <div className='endbtn'>
                        <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
                        <button onClick={() =>{
                            handleClose1();
                            handleShow2();
                        }} >Submit proof of work</button>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        submit proof of work
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <div className='arrowimg'>
                        <img src='\arrowmodal.svg' alt='img' className='img-fluid' />
                        <p>proof of work successfully submitted</p>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default ActiveOperation
