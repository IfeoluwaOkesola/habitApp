import Drinkwater from './../../assets/images/drinkwater.svg';
import Booklover from './../../assets/images/booklover.svg';
import Rafiki from './../../assets/images/rafiki.svg';
import Social from './../../assets/images/social.svg';


const Main = () => {
    return (
        <main className="pt-[48px] md:px-[155px]">
                    <section className="px-8">
                        <div className="mb-10">
                            <h2 className="font-bold text-2xl text-center text-primary">Your Habit Tracker</h2>
                            <p className="text-center w-[80%] md:w-fit mx-auto">Take control of your habits, track your habits and become a better version of yourself</p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-14 items-center md:justify-between md:mb-20">
                            <div className="mb-6 md:mb-0">
                                <img src={Drinkwater} alt="Illustration of woman drinking water" />
                            </div>
                            <div>
                                <h2 className="text-primary font-extrabold text-2xl">Set a healthy goal</h2>
                                <p>The app allows you to set goals you wish to<br /> achieve at a stipulated period. You also get to<br /> track your progress as you go in the journey of<br /> habit formation</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse mb-14 items-center md:justify-between md:mb-20">
                            <div className="mb-6 md:mb-0">
                                <img src={Booklover}  alt="Illustration of woman reading" />
                            </div>
                            <div>
                                <h2 className="text-primary font-extrabold text-2xl">Set a reading time</h2>
                                <p>The app allows you to set goals you wish to<br /> achieve at a stipulated period. You also get to<br /> track your progress as you go in the journey of<br /> habit formation</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mb-14 items-center md:justify-between md:mb-20">
                            <div className="mb-6 md:mb-0">
                                <img src={Social}  alt="Illustration of woman reading" />
                            </div>
                            <div>
                                <h2 className="text-primary font-extrabold text-2xl">Join community</h2>
                                <p>Growth is faster when you have people who<br /> motivate you. The app allows you to join a<br /> community of like mind to aid your growth.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse mb-14 items-center md:justify-between md:mb-20">
                            <div className="mb-6 md:mb-0">
                                <img src={Rafiki}  alt="Illustration of woman pressing phone" />
                            </div>
                            <div>
                                <h2 className="text-primary font-extrabold text-2xl">Request for a mentor</h2>
                                <p>You get to speak to a mentor who monitors<br /> your growth and gives you tips on how to get<br /> better.</p>
                            </div>
                        </div>
                    </section>
                </main>
    )
}

export default Main;