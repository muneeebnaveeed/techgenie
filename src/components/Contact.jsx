import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section className="w-full relative" style={{ height: "900px" }}>
            <img
                src="https://via.placeholder.com/2320x3200"
                className="object-cover w-full h-full absolute left-0 top-0"
            />
            <div className="w-full h-full bg-gradient-brand absolute left-0 top-0" />
            <div className="w-full h-full text-white absolute left-0 top-0 flex flex-col justify-center items-center px-12">
                <h1 className="uppercase font-sans font-light">Get started instantly</h1>
                <h1 className=" font-bold text-4xl mb-4">Get In Touch</h1>
                <div className="tw-container" style={{ maxWidth: "720px" }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
