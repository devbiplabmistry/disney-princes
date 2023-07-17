import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {
    const menu = <>
        <Link className="font-lato transition-all hover:text-violet font-extrabold mr-5 uppercase text-base text-jade ">Home</Link>
        <Link className="font-lato transition-all hover:text-violet font-extrabold uppercase text-base mr-5 text-jade">All Toys</Link>
        <Link className="font-lato transition-all  hover:text-violet font-extrabold uppercase text-base mr-5 text-jade">My Toys</Link>
        <Link className="font-lato transition-all  hover:text-violet font-extrabold uppercase text-base mr-5 text-jade">Add a Toy</Link>
        <Link className="font-lato transition-all  hover:text-violet font-extrabold uppercase text-base  text-jade">blogs</Link>
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
                    <Link className="font-vibes font-extrabold text-3xl text-jade">Disney princes</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="text-2xl"><FaUserAlt></FaUserAlt></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;