import React, { useCallback, useState } from "react";

const FormInput = (props) => (
    <input
        className="transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
        type={props.type || "text"}
        {...props}
    />
);

export default function Hero(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [idea, setIdea] = useState("");

    const handleSubmit = useCallback(() => {
        const body = `Hi. I am ${name}, my number is ${phone}. I want to discuss about our project. ${idea}`;
        window.open(`mailto:info@techgenie.ca?subject=${name}&body=${body}`);
    }, [name, phone, idea]);
    return (
        <section className="w-full bg-center bg-cover bg-gradient-brand p-12">
            <div className="md:w-auto md:tw-container xs:w-full flex flex-col nv:flex-row gap-12 justify-center items-center h-full">
                <div
                    className="flex flex-col justify-center gap-3  "
                    style={{ maxWidth: "643px", flex: 5 }}
                >
                    <p className="text-white text-3xl font-light text-left xs:text-left dt:text-center">
                        Custom Website Development
                    </p>
                    <h1 className="text-white text-4xl text-left xs:text-left dt:text-center">
                        We build Sales-Friendly and Future-Proof Websites
                    </h1>
                    <p className="text-white text-xl font-light text-left xs:text-left dt:text-center">
                        An unreliable, outdated, and mind-numbingly slow website is the quickest way
                        to lose business and tarnish your brand image. Tech Genie is here to help
                        you set that right.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 px-12 py-8 bg-gray-300 rounded-xl text-center"
                    style={{ flex: 3, maxWidth: "500px" }}
                >
                    <div>
                        <h1 className="text-2xl mb-4">
                            Up to 70% OFF On Logo Design & Website Designs Packages
                        </h1>
                        <p>Or Call Now 647-370-7357</p>
                    </div>
                    <form className="w-full flex flex-col gap-4 mb-4">
                        <div className="w-full flex flex-col gap-4">
                            <FormInput
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <FormInput
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <FormInput
                                type="number"
                                placeholder="Phone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>
                        <textarea
                            style={{ maxHeight: "100px" }}
                            className="transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
                            type="text"
                            placeholder="Your Idea"
                            onChange={(e) => setIdea(e.target.value)}
                            value={idea}
                        />
                    </form>
                    <button
                        onClick={handleSubmit}
                        className="tw-button-secondary w-full py-4 focus:outline-white"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    );
}
