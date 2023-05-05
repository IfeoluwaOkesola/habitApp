import { BiEdit, BiEnvelope } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import signup from './../assets/images/signup.svg';
import Logo from './../assets/images/logo.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from  'react-icons/fa';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="flex w-full h-full">
            <div className="bg-primary w-1/2 h-full hidden md:block">
                <img src={Logo} alt="Logo" />
                <div>
                    <img src={signup} alt="Sign up illustration" className='h-[80%] w-[80%]' />
                </div>
            </div>
            <div className='px-8 md:px-[60px] py-[60px] w-full md:w-1/2 relative'>
                <img src={Logo} alt="Logo" className='md:hidden absolute left-7 top-4' width="100px" height="100px"/>
                <div>
                    <div className='w-full mb-5'>
                        <h2 className='font-extrabold text-3xl'>Let's get started</h2>
                        <p className='text-sm text-slate-300'>Sign up with one of the following options</p>
                        <div className='flex flex-col md:flex-row mt-4 gap-x-3 gap-y-3'>
                            <button className='flex rounded-lg border p-2 md:p-3 justify-center w-full md:w-1/2 border-slate-200 items-center gap-x-2'><FcGoogle /><span>Continue with Google</span></button>
                            <button className='flex rounded-lg border w-full md:p-3 md:w-1/2 justify-center border-slate-200 items-center p-2 gap-x-2'><FaFacebookF className='text-blue-500' /><span>Continue with Facebook</span></button>
                        </div>
                    </div>
                    <div className='flex w-full justify-center items-center gap-x-1 mb-5'>
                        <div className='border w-full h-0'></div><p>OR</p><div className='border w-full h-0'></div>
                    </div>
                    <form method='post'>
                        <div className='mb-4'>
                            <label htmlFor="name">Full Name</label><br />
                            <div className="flex justify-between items-center border border-slate-400 rounded-lg p-3">
                                <input type="text" className='text-sm font-light focus:outline-none' name="fullname" id='fullname' placeholder='Enter your full name' />
                                <BiEdit />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label for="email">Email Address</label><br />
                            <div className="flex justify-between items-center border border-slate-400 rounded-lg p-3">
                                <input type="email" className='focus:outline-none' name="email" id='email' placeholder="rachealwoods@gmail" />
                                <BiEnvelope />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label for="name">Password</label><br />
                            <div className="flex justify-between items-center border border-slate-400 rounded-lg p-3">
                                <input type="password" className='focus:outline-none' placeholder='Pick a strong password' name="password" id="password" value="" />
                                <BsEye />
                            </div>
                        </div>
                        <button type='submit' className='bg-primary w-full text-white p-3 rounded-lg'>Create Account</button>
                        <p className='text-center mt-2'>Not a member?<span className='text-primary'><Link to='/signup'>Sign up</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;