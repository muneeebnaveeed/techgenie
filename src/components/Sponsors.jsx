import React from "react";
import Carousel from "./Carousel";

const SponsorLogo = (props) => (
    <img
        src={`/sponsors/${props.index}.png`}
        className="cursor-pointer select-none pointer-events-none"
        alt="Sponsor"
    />
);

const sponsors = [1, 2, 3, 4, 5];

const sliderSettings = {
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
};

export default function Sponsors() {
    return (
        <section className="tw-container py-12">
            <Carousel {...sliderSettings}>
                {sponsors.map((sponsor, index) => (
                    <SponsorLogo index={index + 1} />
                ))}
            </Carousel>
        </section>
    );
}
