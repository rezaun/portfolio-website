import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo1.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleCLick = () =>setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '50px' }} />
            </div>
            <div >
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contacts</li>
                </ul>
            </div>
            {/* Humburger */}
            <div onClick={handleCLick} className='md:hidden z-10'>
                {!nav ? <FaBars />: <FaTimes/>}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contacts</li>
            </ul>
        </div>
    )
}

export default Navbar