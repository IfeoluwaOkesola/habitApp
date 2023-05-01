import { useState } from "react";
import Logo from './../../assets/images/logo.svg';
import { Link } from "react-router-dom";
import { BiMenu, BiX } from 'react-icons/bi'

const Navbar = () => {

    // Set a state to determine if the mobile naviagtion menu is open
    const [isOpen, setIsOpen ] = useState(false);

    return (
        <nav className="w-full container">
                <div className="container flex items-center justify-between flex-wrap md:px-4 lg:px-20 md:py-6 p-6 w-full">
                    <div className="flex justify-between w-full items-center container">
                        <div className="md:ml-10">
                            <img src={Logo} alt='Logo' height='150px' width='150px'/>
                        </div>
                        <div className="flex justify-center items-center ml-auto h-fit p-3 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <button className={`${isOpen ? 'block' : 'hidden'}`}><BiX className="text-3xl"/></button> :
                            <button className={`${isOpen ? 'hidden' : 'block'}`}><BiMenu className='text-3xl'/></button>
                            }
                        </div>
                        <ul className='w-full gap-x-4 hidden text-primary md:inline-flex my-4 md:items-center md:w-fit lg:mr-20'>
                            <li><Link to='#about-us'>About Us</Link></li>
                            <li><Link to='#features'>Features</Link></li>
                            <li><Link to='#faq'>FAQs</Link></li>
                            <li><Link to='#contact-us'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="w-full">
                        {isOpen &&
                            <div className="w-full md:hidden flex items-center p-10">
                                <ul className='my-4 mx-auto text-primary md:items-center'>
                                    <li><Link to='#about-us'>About Us</Link></li>
                                    <li><Link to='#features'>Features</Link></li>
                                    <li><Link to='#faq'>FAQs</Link></li>
                                    <li><Link to='#contact-us'>Contact Us</Link></li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;