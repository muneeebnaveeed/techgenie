import React, { useCallback, useState } from "react";

const FormInput = (props) => (
    <input
        className="transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800"
        type={props.type || "text"}
        {...props}
    />
);

export default function ContactForm() {
    // mailto:test@example.com
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [idea, setIdea] = useState("");

    const handleSubmit = useCallback(() => {
        const body = `Hi. I am ${name}, my number is ${phone}. I want to discuss about our project. ${idea}`;
        window.open(`mailto:info@techgenie.ca?subject=${name}&body=${body}`);
    }, []);

    return (
        <>
            <form className="w-full flex flex-col gap-4 mb-4">
                <div className="w-full flex flex-col gap-4">
                    <FormInput
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <FormInput
                        placeholder="Your Email"
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
                    style={{ height: "360px", maxHeight: "360px" }}
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
        </>
    );
}
