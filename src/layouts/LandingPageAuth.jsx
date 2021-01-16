import Footer from "components/Footer";
import Navbar from "components/Navbar";

export const LandingPageLayout = (props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">{props.children}</div>
            <Footer />
        </div>
    );
};
