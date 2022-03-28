import React from 'react'
import './Header.css'
import uslogo from '../../Components/Header/usaidlogo.png'


function Header() {
    return (
       <>
        <div clasname='usaid'>
            <div className='usaiddad'>
                <div className='oga'>
                <div className='tag'><img src={uslogo} className='logo'/> USAID</div>
                <div className='icons'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
                </div>
            </div>
        </div>

       </>
    )
}

export default Header