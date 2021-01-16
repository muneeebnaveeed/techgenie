import React from "react";

const Point = ({ children, icon }) => (
    <li className="flex gap-4 p-4 pl-0 pt-0">
        {icon && <icon />}
        <p className="font-semibold">{children}</p>
    </li>
);

export default function Solutions() {
    return (
        <section className="tw-container py-12 flex gap-8">
            <div style={{ flex: 3 }} className="hidden lg:flex justify-center">
                <img
                    src="https://techgenie.ca/wp-content/uploads/2019/06/web-development-technology.png"
                    className="w-full"
                    style={{ maxWidth: "400px" }}
                />
            </div>
            <div style={{ flex: 2 }} className="text-center">
                <h1 className="text-4xl font-bold mb-4">We Build Masterpieces</h1>

                <p className="mb-8">
                    Doesn’t matter if you’re looking to create a basic content-based WordPress
                    website or a full-fledged working ecommerce website. From initial front-end
                    design creation to final deployment, our technical managers will guide
                    throughout the procedure and make sure that you get a website which completely
                    suits your business.
                </p>
                <div className="flex flex-wrap justify-center xs:justify-start gap-4">
                    <Point>Custom Development</Point>
                    <Point>iOS & Android Development</Point>
                    <Point>Application Integration</Point>
                    <Point>Security Assurance</Point>
                </div>
            </div>
        </section>
    );
}
