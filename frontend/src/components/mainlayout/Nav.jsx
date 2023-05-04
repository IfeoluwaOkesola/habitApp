import Logo from './../../assets/images/logo.svg';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useEffect } from 'react';

const Nav = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className='flex bg-[#F6F6F6] top-0 left-0 mx-auto w-screen fixed px-14 z-10 py-4 mb-2 shadow-sm'>
                <div className=" flex justify-between items-center w-full">
                    <div>
                        <img src={Logo} alt="Logo" width="150px" height="150px"/>
                    </div>
                    <div className='flex items-center gap-x-3 rounded-lg bg-white h-fit p-2 w-[35%]'>
                        <FiSearch />
                        <input type="text" placeholder="Search sugested habits" className='focus:outline-none' />
                    </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='bg-white rounded-full p-2'>
                                <IoMdNotificationsOutline />
                            </div>
                            <div className='bg-slate-200 rounded-full p-2'>
                                <CgProfile />
                            </div>
                            <div className='gap-3 flex items-center'>
                                <p>Gloria Michael</p>
                                <MdOutlineKeyboardArrowDown />
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default Nav;