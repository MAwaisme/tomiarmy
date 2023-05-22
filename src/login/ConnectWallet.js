import React from 'react';
import armyCap from '../assets/icons/mobileLogo.svg';
import armyText from '../assets/icons/armyText.svg';
import metamaskIcon from '../assets/icons/metamaskIcon.svg';
import walletConnectIcon from '../assets/icons/walletConnectIcon.svg';
import { Link } from 'react-router-dom';

const ConnectWallet = () => {
    return (
        <div className='ConnectWallet-wrapper border-grad1'>
            <div className='army-textImg'>
                <img src={armyCap} alt="armyCap" className='capImg' />
                <img src={armyText} alt="armyText" className='textImg' />
            </div>
            <div className="mainhead">
                <h5 className="innerhead">Connect Wallet</h5>
            </div>
            <Link to="/home" className="w-100">
            <button className='metamask-btn border-grad'>
                <img src={metamaskIcon} alt='metamaskIcon' />
                MetaMask
            </button>
            </Link>
            <button className='walletConnect-btn border-grad'>
                <img src={walletConnectIcon} alt='walletConnectIcon' />
                Wallet Connect
            </button>
        </div>
    )
}

export default ConnectWallet