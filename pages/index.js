import { LandingPageLayout } from "layouts";

import Head from "next/head";
import Testimonials from "../src/components/Testimonials";
import Sponsors from "../src/components/Sponsors";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "./Portfolio/Projects";
import Contact from "components/Contact";
import Skills from "components/Skills";
import Packages from "components/Packages";
import Solutions from "components/Solutions";
import scrollToComponent from "react-scroll-to-component";
import { useRef } from "react";

export default function Home() {
    const refs = useRef([]);
    return (
        <LandingPageLayout>
            <Head>
                <title>Web Development - Tech Genie</title>
            </Head>
            <Hero refs={refs} />
            <Sponsors />
            <About />
            <Skills />
            <Packages
                onClick={() => console.log(refs.current)}
                ref={(ref) => refs.current.push(ref)}
            />
            <Solutions />
            <Projects ref={(ref) => refs.current.push(ref)} />
            <Testimonials />
            <Contact />
        </LandingPageLayout>
    );
}
