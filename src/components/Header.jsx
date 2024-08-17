import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerDiv'>

            <div className='row navText'>
                <img src="navImg.png" alt="" />
                <p className='verticalLine'>|</p>
                <p className='companyDescription'>‘A’ grade Electrical Contractors & Engineers </p>
            </div>


            <div className='row'>
                <div className='row navItems'>
                    <p>About</p>
                    <p>Services</p>
                    <p>Portfolio Projects</p>
                    <p>All Project</p>
                </div>
                <div className='row'>
                    <div className='contactBtn'>Contact</div>
                    <div className='enquireBtn'>Enquire</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header