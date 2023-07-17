import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {
    const menu = <>
        <Link className="font-lato hover:text-blue-700 font-extrabold mr-5 uppercase text-base text-black ">Home</Link>
        <Link className="font-lato hover:text-blue-700 font-extrabold uppercase text-base mr-5 text-black">All Toys</Link>
        <Link className="font-lato  hover:text-blue-700 font-extrabold uppercase text-base mr-5 text-black">My Toys</Link>
        <Link className="font-lato  hover:text-blue-700 font-extrabold uppercase text-base mr-5 text-black">Add a Toy</Link>
        <Link className="font-lato  hover:text-blue-700 font-extrabold uppercase text-base  text-black">blogs</Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="font-vibes font-extrabold text-3xl text-black">Disney princes</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="text-2xl"><FaUserAlt></FaUserAlt></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;