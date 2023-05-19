import { MdDashboard } from 'react-icons/md';
import { RiGroupLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { MdOutlinePeople } from 'react-icons/md';
import { BsBookmarkStar } from 'react-icons/bs';
import { MdOutlineStars } from 'react-icons/md';
import { useEffect, useState } from 'react';

const Sidebar = () => {

    const [active, setActive] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);

    return (
        <div className="h-screen left-0 top-0 overflow-x-hidden w-[15%] bg-[#F6F6F6] mr-2">
            <div className="mt-36 flex flex-col gap-y-8 ml-32">
                <NavLink to='/in' onClick={() => setActive(true)} className={() => active ? 'bg-primary p-2 w-fit rounded-full text-white' : 'bg-white text-primary p-2 w-fit rounded-full'}>
                    <MdDashboard />
                </NavLink>
                <NavLink to='profile' onClick={() => setActive(false)} className={({ isActive }) => isActive ? 'bg-primary p-2 w-fit rounded-full text-white' : 'bg-white text-primary p-2 w-fit rounded-full'}>
                    <CgProfile />
                </NavLink>
                <NavLink to='habits' onClick={() => setActive(false)} className={({ isActive }) => isActive ? 'bg-primary p-2 w-fit rounded-full text-white' : 'bg-white text-primary p-2 w-fit rounded-full'}>
                    <RiGroupLine />
                </NavLink>
                <NavLink to='community' onClick={() => setActive(false)} className={({ isActive }) => isActive ? 'bg-primary p-2 w-fit rounded-full text-white' : 'bg-white text-primary p-2 w-fit rounded-full'}>
                    <MdOutlinePeople />
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;