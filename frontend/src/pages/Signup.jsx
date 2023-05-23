import { BiEdit, BiEnvelope } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import signup from './../assets/images/signup.svg';
import Logo from './../assets/images/loginlogo.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from  'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    // setting up state to handle password visibility
    const [passwordType, setPasswordType] = useState('password');
    // function to toggle password visibility state
    const togglePassword = () => {
        if(passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    }
    // set up navigation hook
    const navigate = useNavigate();
    // Use reference to hold the value of user details not needed for rendering
    const fullnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // using usestate to handle  state of input data
    const [ loginData, setLoginData ] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    // function to update state onchange of input value
    const handleDataChange = () => {
        setLoginData({
        fullname: fullnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
        });
    };
    // Function to post login details to the backend using data from loginData state
    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000", {
      fullname: loginData.fullname,
      email: loginData.email,
      password: loginData.password
    })
    .then((response) => {
      console.log(response);
      if(response?.status === 200){
        navigate('/in')
      }
    })
    .catch(function (error) {
        console.log(error);
    });;
    setLoginData({
        fullname: '',
        email: '',
        password: ''
    })
    }

    return (
        <div className="flex w-full h-screen">
            <div className="bg-primary w-1/2 h-full p-3 items-center hidden md:block">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <img src={Logo} alt="Logo" width='150px' className='ml-6 mt-6 absolute top-0 left-0'/>
                    <img src={signup} alt="Sign up illustration"  className='h-[80%] w-[80%]' />
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
                    <form method='POST' onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor="name">Full Name</label><br />
                            <div className="flex justify-between items-center border border-slate-400 rounded-lg p-3">
                                <input type="text" className='text-sm font-light focus:outline-none' ref={fullnameRef} onChange={handleDataChange} name="fullname" value={loginData.fullname} placeholder='Enter your full name' required />
                                <BiEdit />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label for="email">Email Address</label><br />
                            <div className="flex justify-between items-center border border-slate-400 rounded-lg p-3">
                                <input type="email" className='focus:outline-none' onChange={handleDataChange} name="email" required  placeholder="rachealwoods@gmail"  ref={emailRef} value={loginData.email} />
                                <BiEnvelope />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label for="name">Password</label><br />
                            <div className="flex justify-between items-center border border-slate-400 rounded-lg p-3">
                                <input type={passwordType} className='focus:outline-none' onChange={handleDataChange} placeholder='Pick a strong password' required name="password" ref={passwordRef} value={loginData.password} />
                                <div>
                                    {passwordType === 'password' ? <BsEye onClick={togglePassword}/> : <BsEyeSlash onClick={togglePassword} />}
                                </div>
                            </div>
                        </div>
                        <Link to='/in'>Main</Link>
                        <button type='submit' className='bg-primary w-full text-white p-3 rounded-lg'>Create Account</button>
                        <p className='text-center mt-2'>Already a member?<span className='text-primary'><Link to='/signin'>Sign in</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;