import Header from "../components/landingpage/Header";
import Footer from "../components/landingpage/Footer";
import Faq from "../components/landingpage/Faq";
import Main from "../components/landingpage/Main";

const LandingPage = () => {
    return (
        <div className="w-full">
            <Header />
            <Main />
            <Faq />
            <Footer />
        </div>
    )
}

export default LandingPage;
