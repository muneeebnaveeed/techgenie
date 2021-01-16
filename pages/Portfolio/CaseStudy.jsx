import Carousel from "../../src/components/Carousel";
const ProjectItem = ({ bottom, ...props }) => {
    return (
        <div className={`relative ${!bottom ? "md:mr-2" : ""}`}>
            <img className="object-cover rounded" {...props} />
            <div className="transition-all duration-500 absolute w-full top-0 left-0 bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end p-6 h-full">
                <p className="">SEO Optimization</p>
                <h1 className="text-2xl font-bold mb-4">Designing a better cinema experience</h1>
                <button className="border px-4 py-2 bg-white rounded-md text-indigo-600 font-thin hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all focus:outline-white">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default function CaseStudy() {
    return (
        <section className="py-16 tw-container">
            <Carousel>
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
                <ProjectItem src="https://via.placeholder.com/385x530" />
            </Carousel>
        </section>
    );
}
