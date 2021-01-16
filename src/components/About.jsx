import React from "react";

const Point = ({ children, icon }) => (
    <li className="flex gap-4 p-4 pl-0 pt-0">
        {icon && <icon />}
        <p className="font-semibold">{children}</p>
    </li>
);

export default function About() {
    return (
        <section className="tw-container py-8 pt-0 flex gap-8">
            <div className="flex flex-col gap-4 justify-center " style={{ flex: 2 }}>
                <h1 className="text-4xl font-bold mb-4">We Build Masterpieces</h1>
                <p className="mb-4">
                    Doesn’t matter if you’re looking to create a basic content-based WordPress
                    website or a full-fledged working ecommerce website. From initial front-end
                    design creation to final deployment, our technical managers will guide
                    throughout the procedure and make sure that you get a website which completely
                    suits your business.
                </p>
                <div className="flex flex-wrap justify-center xs:justify-start gap-4">
                    <Point>Fully Responsive</Point>
                    <Point>Device Testing</Point>
                    <Point>Clean & Modern</Point>
                    <Point>Great Experience</Point>
                </div>
            </div>
            <div
                className="hidden lg:flex justify-center items-center"
                style={{
                    flex: 3,
                }}
            >
                <img src="https://techgenie.ca/wp-content/uploads/2019/06/web-development-process-img.png" />
            </div>
        </section>
    );
}
