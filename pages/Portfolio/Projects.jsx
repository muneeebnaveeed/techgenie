import React from "react";

const data = [
    "Chaar Achaar",
    "Ecommerce",
    "Furniture",
    "Medical",
    "Hospital",
    "Digital Agency",
    "Business",
    "Furniture",
];

const ProjectItem = ({ title, index, ...rest }) => {
    return (
        <div
            className="shadow cursor-pointer relative w-full md:w-64"
            onClick={() => window.open(`portfolio/${index}.jpg`)}
        >
            <div className="object-cover overflow-hidden w-full md:w-289px h-398px">
                <img className="w-full h-full object-cover rounded" {...rest} />
            </div>
            {/* <div
                className="absolute top-0 left-0 w-full h-full bg-black rounded opacity-10"
                style={{ width: "289px", height: "398px" }}
            ></div> */}
            <div className="transition-all duration-500 absolute top-0 left-0 bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end px-6 w-full md:w-289px h-398px">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <section className="w-full pb-8">
            <div className="transition-all bg-gray-100 mb-8">
                <div className="tw-container py-8">
                    <h1 className="text-center font-bold text-4xl mb-4">Projects</h1>
                    <p className="text-center">
                        Take a look at how we solve challenges to meet project requirements that
                        deliver a greater level of functionality compared to traditional websites.
                    </p>
                </div>
            </div>
            <div className="tw-container flex flex-col md:flex-row md:justify-center gap-20 flex-wrap">
                {data.map((project, index) => (
                    <ProjectItem
                        key={`project-${index}`}
                        index={index + 1}
                        src={`/portfolio/${index + 1}.jpg`}
                        title={project}
                    />
                ))}
            </div>
        </section>
    );
}
