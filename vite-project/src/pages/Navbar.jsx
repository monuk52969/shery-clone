import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuthUser, removeAuthUser } from '../utils/auth';
import Logo from '../assets/images/logo.webp';
import { BsFillBellFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(getAuthUser());
  const navigate = useNavigate();

  // ✅ Listen to login/logout changes globally
  useEffect(() => {
    const handleChange = () => {
      setUser(getAuthUser());
    };
    window.addEventListener('authChange', handleChange);
    return () => window.removeEventListener('authChange', handleChange);
  }, []);

  const handleLogout = () => {
    removeAuthUser();
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className="w-full flex items-center justify-between px-4 md:px-16 py-4 bg-transparent">
      {/* Left logo + name */}
      <div className="flex items-end gap-3">
        <Link to="/"><img src={Logo} alt="Logo" className="w-6 h-8 cursor-pointer" /></Link>
        <Link to="/"><h3 className="text-lg font-neue cursor-pointer">Sheryians Coding School</h3></Link>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-10">
        <div className="links flex gap-10">
          <Link to="/" className='text-sm font-neue'>Home</Link>
          <Link to="/courses" className='text-sm font-neue'>Courses</Link>
          <Link to="/kodr" className='text-lg font-neue font-900 text-[#BE524B] animate-shake'>KODR</Link>
          <Link to="/callback" className='text-sm font-neue'>Request Callback</Link>

          {user && <Link to="/classroom" className='text-sm font-neue'>Classroom</Link>}
        </div>

        {user && <BsFillBellFill className='text-xl cursor-pointer' />}

        {user ? (
          <div className="flex items-center gap-4">
            {user.img && <img src={user.img} alt="User" className="w-8 h-8 rounded-full object-cover" />}
            <span className="text-sm">{user.name || user.email}</span>
            <button onClick={handleLogout} className="px-4 py-1 bg-red-600 text-white rounded">Logout</button>
          </div>
        ) : (
          <Link to="/signup">
            <button className="px-6 py-2 bg-[#27DFB3] rounded text-zinc-800 font-helvetica font-medium">Sign in</button>
          </Link>
        )}
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center gap-4">
        <a href="tel:+919999999999" className="text-xl"><FiPhoneCall /></a>
        <button onClick={() => setOpen(!open)}>
          {open ? <IoMdClose className="text-2xl" /> : <RxHamburgerMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black text-white px-6 py-6 z-50 flex flex-col gap-4 font-neue">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link to="/kodr" className='text-lg font-900 text-[#BE524B] animate-shake' onClick={() => setOpen(false)}>KODR</Link>
          <Link to="/callback" onClick={() => setOpen(false)} className='flex items-center gap-2'><FiPhoneCall /> Request Callback</Link>
          {user && <Link to="/classroom" onClick={() => setOpen(false)}>Classroom</Link>}

          {user ? (
            <button onClick={handleLogout} className="px-6 py-2 bg-red-600 rounded mt-4">Logout</button>
          ) : (
            <Link to="/signup">
              <button className="px-6 py-2 bg-[#27DFB3] rounded mt-4">Sign in</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
