import { useState } from 'react';
import twit from '../../assets/twit.png';
import link from '../../assets/link.png';
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';
import logo from '../../assets/navlogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const closeMobileMenu = () => setShow(false);

  return (
    <div className='overflow-x-hidden top-0 fixed w-screen bg-primary -mt-4 z-50'>
      <div className='flex lg:hidden justify-between items-center mt-2 mx-3 py-2'>
        <img src={logo} alt='' className='max-w-[249px] max-h-[63px] ' />
        <div onClick={() => setShow(!show)} className='text-black'>
          {show ? <FaTimes />:<FaBars /> }
        </div>
      </div>
      <div className={`hidden lg:flex flex-col lg:flex-row justify-center lg:justify-between items-center px-2 lg:px-4 lg:min-h-[100px] ${show ? "min-h-screen" : ""}`}>
        
        <div className='ml-5 gap-5 list-none items-center justify-center hidden lg:flex'>
          <li><img src={face} alt="" className='h-[20px] w-[20px] ' /></li>
          <li><img src={link} alt="" className='h-[20px] w-[20px] ' /></li>
          <li><img src={insta} alt="" className='h-[20px] w-[20px] ' /></li>
          <li><img src={twit} alt="" className='h-[20px] w-[20px] ' /></li>
        </div>
        <div className='flex lg:flex-row flex-col justify-between items-center gap-10'>
          <div className='hidden lg:flex lg:flex-row flex-col justify-center items-center list-none gap-8'>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-4'>
            <div className='hidden lg:flex'>
            <img src={logo} alt='' className='max-w-[249px] max-h-[63px]' />
          </div>
              <div className='flex justify-center gap-6 list-none px-4 mt-3'>
                <Link to='/properties'>
                <li onClick={closeMobileMenu} className='font-semibold text-black'>Properties</li>
                </Link>
              <Link to="/about">
              <li onClick={closeMobileMenu} className='font-semibold text-black'>About Us</li>
              </Link>
              <Link to="/contact">
              <li onClick={closeMobileMenu} className='font-semibold text-black'>Contact Us</li>
              </Link>
              </div>
            </div>
            <div>
              <li onClick={closeMobileMenu} className='bg-footer text-primary py-2 px-8 rounded-3xl text-lg ml-20'>Contact us</li>
            </div>
          </div>
        </div>
</div>
        {/* Conditional rendering based on the show state */}
        <div>
        {show ? (
          <div className='flex flex-col lg:hidden animate-slide-in min-h-screen justify-center items-center'>
            <div className='flex lg:hidden flex-col justify-center items-center list-none gap-8 -mt-20'>
              <div className='flex lg:hidden flex-col justify-center items-center gap-4'>
                <Link to="/properties">
                <li onClick={closeMobileMenu} className='font-semibold text-black'>Properties</li>
                </Link>
                <Link to="/about">
                <li onClick={closeMobileMenu} className='font-semibold text-black'>About Us</li>
                </Link>
                <Link to="/contact">
                <li onClick={closeMobileMenu} className='font-semibold text-black'>Contact Us</li>
                </Link>
              </div>
              <div>
                <li className='bg-footer text-primary py-2 px-8 rounded-3xl text-lg'>Contact us</li>
              </div>
            </div>
            <div className='flex mt-16 lg:hidden gap-8 list-none items-center justify-center'>
              <li><img src={face} alt="" className='h-[20px] w-[20px]' /></li>
              <li><img src={link} alt="" className='h-[20px] w-[20px]' /></li>
              <li><img src={insta} alt="" className='h-[20px] w-[20px]' /></li>
              <li><img src={twit} alt="" className='h-[20px] w-[20px]' /></li>
            </div>
          </div>
        ) : (
          <div>
           
          </div>
        )}
        </div>
    </div>
  )
}

export default Navbar;
