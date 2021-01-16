import React from "react";

const SkillIcon = (props) => <img {...props} style={{ width: "50px", height: "50px" }} />;

const Skill = ({ children, heading, icon }) => {
    const Icon = icon;
    return (
        <div className="flex flex-col gap-4">
            {Icon}
            <h1 className="font-semibold text-2xl text-pink-500">{heading}</h1>
            <p className="text-black">{children}</p>
        </div>
    );
};

export default function Skills() {
    return (
        <section className="tw-container py-8 pt-0 flex gap-8">
            <Skill
                icon={<SkillIcon src="/icons/cms.svg" />}
                heading="CMS Website Design & Development"
            >
                CMS-based websites are time saving and cost effective. Get your website developed on
                WordPress, Magento, Shopify etc. and start right away!
            </Skill>
            <Skill icon={<SkillIcon src="/icons/website.svg" />} heading="Custom Website Design">
                If you are looking for a customized website solution then we can make some great
                designs for you fully customized.
            </Skill>
            <Skill icon={<SkillIcon src="/icons/ecommerce.svg" />} heading="Ecommerce Development">
                Selling online is HUGE these days. Get your websites and online products ready today
                and start making money.
            </Skill>
            <Skill
                icon={<SkillIcon src="/icons/landing-page.svg" />}
                heading="Landing Page Design & Development"
            >
                Get landing pages designed for you targeted campaigns today and start acquiring
                leads and converting them into customers.
            </Skill>
        </section>
    );
}
