import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Experience from "../components/Experience";

function Home() {
    return (
        <div className="bg-gray-900 min-h-screen w-full">
            <Hero />
            <ServicesSection />
            <div className="container mx-auto">
                <section className="py-16">
                    <Experience />
                </section>
            </div>
        </div>
    );
}

export default Home;
