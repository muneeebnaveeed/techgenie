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

export default function Home() {
    return (
        <LandingPageLayout>
            <Head>
                <title>Web Development - Tech Genie</title>
            </Head>
            <Hero />
            <Sponsors />
            <About />
            <Skills />
            <Packages />
            <Solutions />
            <Projects />
            <Testimonials />
            <Contact />
        </LandingPageLayout>
    );
}
