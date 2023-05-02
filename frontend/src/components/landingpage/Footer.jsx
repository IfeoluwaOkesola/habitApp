import logo from './../../assets/images/logo.svg';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { FiTwitter } from 'react-icons/fi';
import Playstore from './../../assets/images/playstore.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container px-8">
                <div className='md:flex md:justify-between mt-12 md:items-center md:px-[155px] py-16'>
                    <div className='mb-12 mt-7'>
                        <h3 className='text-primary font-extrabold text-3xl mb-3'>Build Your Habits, Build Your Life</h3>
                        <button type="button" class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14">
                            <div class="mr-3">
                                <img src={Playstore} alt='playstore logo' />
                            </div>
                            <div>
                                 <div class="text-xs justify-self-start">
                                    GET IT ON
                                </div>
                                <div class="-mt-1 font-sans text-xl font-semibold">
                                    Google Play
                                </div>
                            </div>
                        </button>
                    </div>
                    <div>
                        <img src={logo} alt='Logo' />
                    </div>
                </div>
                <div className='flex justify-between md:px-[155px] py-3  border-t-2 border-t-slate-200'>
                    <div className='flex items-center md:gap-x-3 gap-x-2'>
                        <p className="font-bold">Contact us</p>
                        <IoLogoInstagram className='text-[#DCCA1B]' />
                        <TiSocialFacebookCircular className='text-[#DCCA1B]' />
                        <FiTwitter className='text-[#DCCA1B]' />
                    </div>
                    <div className='flex md:gap-x-3'>
                        <p><span className='text-[#DCCA1B]'>&copy;</span> 2023</p>
                        <p className="font-bold">HABITUAL</p>
                    </div>

                </div>
            </div>
            <div class="flex justify-center">
    <div>
        
    </div>
</div>
        </footer>
    )
}

export default Footer;