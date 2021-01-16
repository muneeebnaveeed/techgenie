import React from "react";
import Carousel from "./Carousel";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        testimonial:
            "As long as I have these guys with me, I don't gave to worry about any technical support whether its for my website or app!",
        client: "Heather Rafei",
    },
    {
        testimonial:
            "I signed up with Tech Genie to design my website laste year. Now I don't only have a beautiful looking website, but a competitive marketing team aswell",
        client: "Terry Evans",
    },
    {
        testimonial:
            "These guys rock! It's been my 4th month with them and the website sales have gone up 400%. Now I can focus on expanding my business and not on marketing since they've got it!",
        client: "Georgy Berryhill",
    },
];

const sliderSettings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsStyle: { bottom: "-45px" },
    responsive: [],
};

const Testimonial = ({ testimonial, client }) => {
    return (
        <div className="" style={{ width: "800px" }}>
            <p className="mb-4 text-lg">{testimonial}</p>
            <p className="font-bold text-center mb-1">{client}</p>
            <div className="flex justify-center text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section className="bg-diagonal">
            <div className="tw-container py-14">
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
                    <h1 className="font-bold text-4xl">Our client testimonials says it all</h1>
                    <div className="relative w-12 h-12 bg-gradient-brand rounded-full flex justify-center items-center">
                        <img
                            src="/icon-quotes.png"
                            alt="Quotes"
                            className="pointer-events-none w-6 h-6 object-contain transform"
                        />
                    </div>
                </div>
                <p className="text-center mb-12">
                    The feedback we get from our customers tells about our cooperation better than
                    we do and makes us move forward.
                </p>

                <div className="tw-container" style={{ maxWidth: "400px" }}>
                    <Carousel {...sliderSettings}>
                        {/* <Testimonial src="https://via.placeholder.com/385x530" />
                        <Testimonial src="https://via.placeholder.com/385x530" />
                        <Testimonial src="https://via.placeholder.com/385x530" />
                        <Testimonial src="https://via.placeholder.com/385x530" /> */}
                        {testimonials.map((testimonial, index) => (
                            <Testimonial
                                key={index}
                                testimonial={testimonial.testimonial}
                                client={testimonial.client}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
