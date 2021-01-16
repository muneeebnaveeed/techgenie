import { useMemo } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Slider from "react-slick";
import { FaDotCircle } from "react-icons/fa";

const PaginationIcon = ({ icon, position, onClick }) => {
    const translation = position === "left" ? "-left-8" : "-right-8 md:-right-10";
    const Icon = icon;
    return (
        <Icon
            onClick={onClick}
            style={{ transform: "translateY(-50%)" }}
            className={`z-10 absolute top-1/2 block text-4xl md:text-2xl text-indigo-500 transition-all cursor-pointer hover:text-black focus:outline-black ${translation}`}
        />
    );
};

export default function Carousel(props) {
    const sliderSettings = useMemo(
        () => ({
            arrows: props.arrows ?? true,
            dots: props.dots ?? true,
            infinite: true,
            speed: 500,
            slidesToShow: props.slidesToShow ?? 4,
            slidesToScroll: props.slidesToScroll ?? 4,
            customPaging: () => (
                <FaDotCircle
                    className={`text-sm text-gray-200 cursor-pointer hover:opacity-50 transition-all`}
                />
            ),
            appendDots: (dots) => <ul style={{ bottom: "-50px", ...props?.dotsStyle }}>{dots} </ul>,
            prevArrow: <PaginationIcon icon={AiFillLeftCircle} position="left" />,
            nextArrow: <PaginationIcon icon={AiFillRightCircle} position="right" />,
            responsive: props.responsive || [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        }),
        []
    );

    return <Slider {...sliderSettings}>{props.children}</Slider>;
}
