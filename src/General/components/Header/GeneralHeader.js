import React, { useState } from "react";
import "../../../style.scss";
import { Link } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notificationIcon.svg";
import menuIcon from "../../../assets/icons/menuIcon.svg";
import { Button, Offcanvas } from "react-bootstrap";
import mobileLogo from "../../../assets/icons/mobileLogo.svg";
import Modal from 'react-bootstrap/Modal';

const GeneralHeader = ({ routes, setroute, indexwait, handleShow }) => {




  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);


  const [profilePicture, setProfilePicture] = useState(null);
  const setProfilePic = (evt) => {
    setProfilePicture(evt.target.files[0]);
  }
  return (
    <>
      <div
        className={
          indexwait === 0
            ? "home-headed-username Header-wrapper"
            : "home-headed-username-none Header-wrapper"
        }
      >
        <div className="home-headed-username">
          <div className="mobile-logo">
            <Link to={"/soldier"}>
              <img src={mobileLogo} alt="mobileLogo" />
            </Link>
          </div>
          {indexwait === 0 ? (
            <div className="soldier-name">
              <h4>Welcome general, </h4>
              <p>your army awaits your orders</p>
            </div>
          ) : null}
          {indexwait === 1 ? (
            <div className="soldier-name">
              <h4>ALL TASKS</h4>
              <p>VIEW AND complete TASKS</p>
            </div>
          ) : null}
          {indexwait === 3 ? (
            <div className="soldier-name">
              <h4>Your Squad</h4>
              <p>VIEW Your Squad</p>
            </div>
          ) : null}
          {indexwait === 2 ? (
            <>
              {
                routes ?
                  <button onClick={() => setroute(!routes)} className="btn-goback"><img src="\assets\goback.svg" alt="img" className="img-fluid me-2" />Go Back</button> :
                  <div className="soldier-name">
                    <h4>Operations</h4>
                    <p>VIEW AND complete operations</p>
                  </div>
              }
            </>
          ) : null}
          {indexwait === 4 ? (
            <div className="soldier-name">
              <h4>announcements</h4>
              <p>view your announcements</p>
            </div>
          ) : null}
          {indexwait === 6 ? (
            <div className="soldier-name">
              <h4>Army Forum</h4>
              <p>Engage with your army</p>
            </div>
          ) : null}
          {indexwait === 5 ? (
            <div className="soldier-name">
              <h4>Group Chat</h4>
              <p>Chat with your army</p>
            </div>
          ) : null}
          {indexwait === 7 ? (
            <div className="soldier-name">
              <h4>Claim Rewards</h4>
              <p>claim you rewards</p>
            </div>
          ) : null}
          {indexwait === 8 ? (
            <div className="soldier-name">
              <h4>settings</h4>
              <p>Change you nickname and link social accounts</p>
            </div>
          ) : null}
          {indexwait === 9 ? (
            <div className="soldier-name">
              <h4>Report a Bug</h4>
              <p>report a bug to get resolved</p>
            </div>
          ) : null}
           {indexwait === 10 ? (
            <div className="soldier-name">
              <h4>Faqs</h4>
              <p>view faqs</p>
            </div>
          ) : null}
        </div>
        <div className="header-buttons">
          {
            indexwait === 0 ?
              <>
                 <button className="create-squad-btn display-none-in-mobile" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_260_1810)">
                      <path
                        d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                        fill="#81828A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_260_1810">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span> Create Operation</span>
                </button>
                <button className="create-squad-btn display-none-in-mobile" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_260_1810)">
                      <path
                        d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                        fill="#81828A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_260_1810">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span> Create Task</span>
                </button>
              </>
              : ""
          }
          {
            indexwait === 3 ?
              <>
                <button className="leave display-none-in-mobile" onClick={handleShow4}>
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.35 1.5H11.4C9 1.5 7.5 3 7.5 5.4V8.4375H12.1875C12.495 8.4375 12.75 8.6925 12.75 9C12.75 9.3075 12.495 9.5625 12.1875 9.5625H7.5V12.6C7.5 15 9 16.5 11.4 16.5H13.3425C15.7425 16.5 17.2425 15 17.2425 12.6V5.4C17.25 3 15.75 1.5 13.35 1.5Z" fill="white" />
                    <path d="M4.17008 8.43751L5.72258 6.88501C5.83508 6.77251 5.88758 6.63 5.88758 6.4875C5.88758 6.345 5.83508 6.195 5.72258 6.09C5.50508 5.8725 5.14508 5.8725 4.92758 6.09L2.41508 8.60251C2.19758 8.82001 2.19758 9.18 2.41508 9.3975L4.92758 11.91C5.14508 12.1275 5.50508 12.1275 5.72258 11.91C5.94008 11.6925 5.94008 11.3325 5.72258 11.115L4.17008 9.56251H7.50008V8.43751H4.17008Z" fill="white" />
                  </svg>
                  <span> Leave Squad</span></button>
                <button className="create-squad-btn display-none-in-mobile" onClick={handleShow1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="me-2"
                  >
                    <g clip-path="url(#clip0_260_1810)">
                      <path
                        d="M15.3822 3.91039L11.6631 3.37L9.99999 0L8.33682 3.37L4.6178 3.91039L7.30893 6.53356L6.67362 10.2375L9.99999 8.48875L13.3264 10.2375L12.6911 6.53356L15.3822 3.91039Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 12.3132L3.98651 9.90067V13.3275L10.0351 15.7541L16.0135 13.3256V9.90067L9.99999 12.3132Z"
                        fill="#81828A"
                      />
                      <path
                        d="M9.99999 16.5591L3.98651 14.1466V17.5734L10.0351 20L16.0135 17.5715V14.1466L9.99999 16.5591Z"
                        fill="#81828A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_260_1810">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span> Create Squad</span>
                </button>
              </>
              : ""
          }
          {
            indexwait === 6 ?
              <>
                <button className="create-squad-btn" data-bs-toggle="modal" data-bs-target="#exampleModall">
                  <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" />
                  <span>Start a new topic</span>
                </button>
              </>
              : ""
          }
          <button className="toggle-menu-btn" onClick={handleShow}>
            <img src={menuIcon} alt="menuIcon" />
          </button>


        </div>
        <Modal className='detailmodal' show={show1} onHide={handleClose1} centered>
          <Modal.Header closeButton>
            <Modal.Title>create Squad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='imagesmodal'>
              <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
              <p>Are you sure you want to leave this squad and create a new one?</p>
              {/* <p>Are you sure you want to leave this squad?</p> */}
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow2}><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
            </div>
          </Modal.Body>
        </Modal>


        <Modal className='detailmodal' show={show2} onHide={handleClose2} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              create Squad
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <div className="upload-parent">
              <p className='uehyuj'>Upload Squad Symbol</p>
              <div className="upload uploadsss">
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
                    <h6 className='support1'>Supports: JPG, JPEG, PNG</h6>
                    <p className='optimal'>Optimal Image size: 500x500 px</p>
                  </label>
                }

                <input type="file" className="d-none" id="upload" onChange={(e) => setProfilePic(e)} />

              </div>
            </div>
            <div className='maininput'>
              <p className="squad">Squad Name</p>
              <input type='text' placeholder='Enter Squad Name....' />
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow3}><img src='\add.svg' alt='img' className='img-fluid' /> Create Squad</button>
            </div>
          </Modal.Body>
        </Modal>


        <Modal className='detailmodal' show={show3} onHide={handleClose3} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Create Squad
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>

            <div className='arrowimg'>
              <img src='\Groupsquad.svg' alt='img' className='img-fluid' />
              <p>Squad successfully created</p>
            </div>

          </Modal.Body>

        </Modal>

        <Modal className='detailmodal' show={show4} onHide={handleClose4} centered>
          <Modal.Header closeButton>
            <Modal.Title>create Squad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='imagesmodal'>
              <img src='\imagesmodals.svg' alt='img' className='img-fluid' />
              {/* <p>Are you sure you want to leave this squad and create a new one?</p> */}
              <p>Are you sure you want to leave this squad?</p>
            </div>
            <div className='endbtn'>
              <button><span><img src='\Subtract.svg' alt='img' className='img-fluid' /></span>Cancel</button>
              <button onClick={handleShow2}><img src='\up.svg' alt='img' className='img-fluid' />Yes’ I am sure</button>
            </div>
          </Modal.Body>
        </Modal>

      </div>
      <div className="topicmodal">
        <div class="modal fade" id="exampleModall" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5>Start a New Topic</h5>
                <p>Title</p>
                <input type="text" placeholder="Enter Title...." />
                <p>Description</p>
                <textarea placeholder="Enter Description Url...."></textarea>
                <div className="twice-btn">
                  <button className="btn-cancel"> <img src="\assets\cancel.svg" alt="img" className="img-fluid me-2" /> Cancel</button>
                  <button className="btn-topic"> <img src="\assets\topic-btn.svg" alt="img" className="img-fluid me-2" /> Start a New Topic</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default GeneralHeader;