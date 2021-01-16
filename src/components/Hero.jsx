import React from "react";

const FormInput = (props) => (
    <input
        className="transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
        type={props.type || "text"}
        {...props}
    />
);

export default function Hero(props) {
    return (
        <section className="w-full bg-center bg-cover bg-gradient-brand p-12">
            <div className="tw-container flex flex-col nv:flex-row gap-12 justify-center items-center h-full">
                <div
                    className="flex flex-col justify-center gap-3 text-center nv:text-left "
                    style={{ flex: 5 }}
                >
                    <p className="text-white text-3xl font-light">Custom Website Development</p>
                    <h1 className="text-white text-4xl">We design and develop custom websites</h1>
                    <p className="text-white text-xl font-light">
                        We create responsive web applications and sites leveraging the most robust
                        technologies in the industry to help you boost your business
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 px-12 py-8 bg-gray-300 rounded-xl text-center"
                    style={{ flex: 3, width: "500px" }}
                >
                    <div>
                        <h1 className="text-2xl mb-4">
                            Up to 70% OFF On Logo Design & Website Designs Packages
                        </h1>
                        <p>Or Call Now 647-370-7357</p>
                    </div>
                    <form className="w-full flex flex-col gap-4 mb-4">
                        <div className="w-full flex flex-col gap-4">
                            <FormInput placeholder="Name" />
                            <FormInput placeholder="Email" />
                            <FormInput type="number" placeholder="Phone" />
                        </div>
                        <textarea
                            style={{ maxHeight: "100px" }}
                            className="transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
                            type="text"
                            placeholder="Your Idea"
                        />
                    </form>
                    <button className="tw-button-secondary w-full py-4 focus:outline-white">
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    );
}
