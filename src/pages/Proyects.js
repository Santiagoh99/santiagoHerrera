import React from "react";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

function Home() {
    return (
            <div className="container mx-auto">
                <section className="py-16">
                    <Experience />
                    <Skills />
                </section>
            </div>
    );
}

export default Home;
