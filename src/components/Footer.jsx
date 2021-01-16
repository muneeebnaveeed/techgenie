import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillInstagram,
    AiOutlineDown,
} from "react-icons/ai";

const ListItem = ({ children, rest }) => (
    <li className="cursor-pointer transition-all hover:opacity-50" {...rest}>
        {children}
    </li>
);

const Icon = ({ icon, ...rest }) => {
    const Icon = icon;
    return (
        <Icon
            {...rest}
            className="cursor-pointer hover:opacity-50 transition-all duration-300 focus:outline-black"
        />
    );
};

const Footer = (props) => {
    return (
        <section className="w-full bg-gray-50 py-8 md:h-156 lg:h-auto" {...props}>
            <div className="tw-container flex h-full flex-col items-start gap-6 md:gap-12 text-base text-gray-700 md:flex-wrap lg:flex-row lg:justify-between">
                <div className="md:w-3/5 lg:w-4/6 flex flex-1 flex-col gap-3 lg:gap-16 items-start lg:flex-row">
                    <div className="flex flex-col gap-3 items-start">
                        <div className="overflow-hidden" style={{ width: "130px", height: "35px" }}>
                            <img
                                className="w-full h-full object-contain"
                                src="/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <p>
                            When it comes to creating online presence for businesses and digital
                            sales channels, Tech Genie is the name you can trust!
                        </p>
                        <p>33 Yonge St, Toronto, ON M5E 0A9</p>
                        <p>647-370-7357</p>
                        <p>info@techgenie.ca</p>
                        <div className="w-full flex text-4xl justify-start gap-2 mb-4">
                            <Icon icon={AiFillFacebook} />
                            <Icon icon={AiFillTwitterSquare} />
                            <Icon icon={AiFillLinkedin} />
                            <Icon icon={AiFillInstagram} />
                        </div>
                        <img src="/certification.png" />
                    </div>
                    <div className="flex flex-col gap-3 items-start" style={{ minWidth: "222px" }}>
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold text-lg border-b-2 border-indigo-500">
                                Services
                            </h1>
                            <Icon icon={AiOutlineDown} />
                        </div>
                        <ul className="list-none flex flex-col gap-2 hover:border-b-2 hover:border-indigo-500 mb-4">
                            <ListItem>Website design</ListItem>
                            <ListItem>Wordpress development</ListItem>
                            <ListItem>Ecommerce website development</ListItem>
                            <ListItem>Web App Development</ListItem>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-lg border-b-2 border-indigo-500">
                            About Us
                        </h1>
                        <Icon icon={AiOutlineDown} />
                    </div>
                    <ul className="list-none flex flex-col gap-2 hover:border-b-2 hover:border-indigo-500">
                        <ListItem>Portfolio</ListItem>
                        <ListItem>About Us</ListItem>
                        <ListItem>Packages</ListItem>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
