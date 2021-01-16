import React from "react";

const FormInput = (props) => (
    <input
        className="transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
        type={props.type || "text"}
        {...props}
    />
);

export default function ContactForm() {
    return (
        <>
            <form className="w-full flex flex-col gap-4 mb-4">
                <div className="w-full flex flex-col gap-4">
                    <FormInput placeholder="Your Name" />
                    <FormInput placeholder="Your Email" />
                    <FormInput type="number" placeholder="Phone" />
                </div>
                <textarea
                    style={{ height: "360px", maxHeight: "360px" }}
                    className="transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
                    type="text"
                    placeholder="Your Idea"
                />
            </form>
            <button className="tw-button-secondary w-full py-4 focus:outline-white">
                Send Message
            </button>
        </>
    );
}
