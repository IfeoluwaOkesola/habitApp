import Navbar from './Navbar' ;
import Hero from './../../assets/images/hero.svg'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="w-full">
            <Navbar />
            <div className="flex md:mt-14 py-20 md:px-32 bg-primary justify-evenly bg-opacity-5 w-full relative">
                <div className="flex flex-col justify-center">
                    <h2 className="text-primary font-bold text-2xl mb-2">Take control of your Habits</h2>
                    <p className="text-center mb-10">We help you to break or develop<br /> habits that help you grow and<br />
                    become a better person
                    </p>
                    <button className="text-white rounded-lg px-14 py-3 bg-primary mx-auto"><Link to='/signup'>Sign up</Link></button>
                </div>
                <div className='h-[400px] w-[400px] -mt-36 hidden md:inline-flex'>
                    <img src={Hero} alt="Hero illustration" />
                </div>

            </div>
        </header>
    )
}

export default Header;