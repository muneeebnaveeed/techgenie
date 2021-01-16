import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Package = ({ name, price, features }) => (
    <div className="bg-white py-6 text-left rounded" style={{ width: "270px" }}>
        <h1 className="text-black font-semibold text-2xl mb-6 px-12">{name}</h1>
        <h1 className="text-black font-bold py-6 px-12 text-4xl border-dashed border-t border-b border-gray-300 mb-6">
            <sup className="font-sans text-gray-300 mr-2">$</sup>
            {price}
        </h1>
        <ul className="px-12 flex flex-col gap-2 overflow-y-scroll" style={{ maxHeight: "340px" }}>
            {features.map((feature, index) => (
                <li className="flex items-center gap-4" key={`feature-${index}`}>
                    <AiFillCheckCircle className="text-indigo-500" />
                    <p className="">{feature}</p>
                </li>
            ))}
        </ul>
        <div className="px-12 pt-6">
            <button className="w-full tw-button-secondary">Avail Now</button>
        </div>
    </div>
);

export default function Packages(props) {
    return (
        <section className="py-8 text-center bg-gray-100" {...props}>
            <div className="tw-container">
                <h1 className="text-black text-4xl font-bold mb-2">Packages</h1>
                <p className="mb-4">
                    We've come up with various packages to meet the specific needs of all businesses
                    out there. Our packages are for the following services
                </p>
                <div className="flex justify-center flex-wrap gap-6">
                    <Package
                        name="Startup"
                        price="249.99"
                        features={[
                            "5 Stock Photos",
                            "5 Page Website",
                            "3 Banner Design",
                            "1 jQuery Slider Banner",
                            "Free Google Friendly Sitemap",
                            "Complete W3C Certified HTML",
                            "48 To 72 Hours TAT",
                            "Facebook Page Design",
                            "Twitter Page Design",
                            "YouTube Page Design",
                        ]}
                    />
                    <Package
                        name="Professional"
                        price="599.99"
                        features={[
                            "10 Unique Pages Website",
                            "CMS/Admin Panel Support",
                            "8 Stock Photos",
                            "5 Banner Designs",
                            "1 jQuery Slider Banner",
                            "Free Google Friendly Sitemap",
                            "Complete W3C Certified HTML",
                            "48 To 72 Hours TAT",
                            "Facebook Page Design",
                            "Twitter Page Design",
                            "YouTube Page Design",
                            "Complete Deployment",
                            "100% Satisfaction Guarantee",
                            "100% Unique Design Guarantee",
                            "100% Money Back Guarantee",
                            "Mobile Responsive Will Be Additional $99",
                        ]}
                    />
                    <Package
                        name="Elite"
                        price="999.99"
                        features={[
                            "Upto 15 Unique Pages Website",
                            "Conceptual And Dynamic Website",
                            "Mobile Responsive",
                            "Online Reservation/Appointment Tool (Optional)",
                            "Online Payment Integration (Optional)",
                            "Custom Forms",
                            "Lead Capturing Forms (Optional)",
                            "Newsletter Subscription (Optional)",
                            "Newsfeed Integration",
                            "Social Media Integration",
                            "Search Engine Submission",
                            "CMS/Admin Panel Support",
                            "5 Stock Photos",
                            "5 Banner Designs",
                            "1 jQuery Slider Banner",
                            "Free Google Friendly Sitemap",
                            "Complete W3C Certified HTML",
                            "48 To 72 Hours TAT",
                            "Facebook Page Design",
                            "Twitter Page Design",
                            "YouTube Page Design",
                            "Complete Deployment",
                            "100% Satisfaction Guarantee",
                            "100% Unique Design Guarantee",
                            "100% Money Back Guarantee",
                        ]}
                    />
                    <Package
                        name="Silver"
                        price="1599.99"
                        features={[
                            "Upto 15 Unique Pages Website",
                            "Conceptual And Dynamic Website",
                            "Mobile Responsive",
                            "Online Reservation/Appointment Tool (Optional)",
                            "Online Payment Integration (Optional)",
                            "Custom Forms",
                            "Lead Capturing Forms (Optional)",
                            "Newsletter Subscription (Optional)",
                            "Newsfeed Integration",
                            "Social Media Integration",
                            "Search Engine Submission",
                            "CMS/Admin Panel Support",
                            "5 Stock Photos",
                            "5 Banner Designs",
                            "1 jQuery Slider Banner",
                            "Free Google Friendly Sitemap",
                            "Complete W3C Certified HTML",
                            "48 To 72 Hours TAT",
                            "Facebook Page Design",
                            "Twitter Page Design",
                            "YouTube Page Design",
                            "Complete Deployment",
                            "100% Satisfaction Guarantee",
                            "100% Unique Design Guarantee",
                            "100% Money Back Guarantee",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
