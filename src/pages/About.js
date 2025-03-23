import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaInstagram } from "react-icons/fa";

function About() {
    const professionalExperiences = [
        {
            title: "Full Stack Developer",
            company: "Santander Tecnología Argentina",
            period: "March 2023 - Present",
            tasks: [
                "Backend: Node.js,Next.js, .NET",
                "PostgreSQL, Oracle, MongoDB",
                "Frontend: React js, TypeScript"
            ],
            links: {
                website: "https://www.santander.com.ar/santecday",
                instagram:"https://www.instagram.com/santandertec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            },
            type: "professional"
        },
        {
            title: "Frontend & Backend Developer",
            company: "Implementaciones Industriales SRL",
            period: "August 2021 - March 2023",
            tasks: [
                "React.js Development",
                "SQL Server Database Management",
                "ASP.NET Core Development"
            ],
            links: {
                website: "https://www.implementacionesi.com.ar/",
            },
            type: "professional"
        },
        {
            title: "Accounting Assistant",
            company: "Estudio Contable Ferre-Rivas",
            period: "January 2020 - August 2021",
            tasks: [
                "IIBB Spreadsheets (Excel)",
                "AFIP, AGIP, ARBA Management",
                "Invoicing, DDJJS, Balance Sheets",
                "Client Management"
            ],
            type: "professional"
        },
        {
            title: "Accounting Assistant",
            company: "Estudio Contable Tozzi",
            period: "December 2016 - October 2019",
            tasks: [
                "IIBB Spreadsheets (Excel)",
                "AFIP, AGIP, ARBA Management",
                "Invoicing, DDJJS, Balance Sheets",
                "Client Management"
            ],
            type: "professional"
        }
    ];

    const freelanceExperiences = [
        {
            title: "Web Development",
            company: "Ecklypce",
            period: "2025",
            tasks: [
                "Full-stack development",
                "Custom web application",
                "Deployment and maintenance"
            ],
            links: {
                website: "https://www.ecklypce.com/",
                instagram: "https://www.instagram.com/ecklypce/"
            },
            type: "freelance"
        },
        {
            title: "Web Development",
            company: "Pilcha SM",
            period: "2024",
            tasks: [
                "Full-stack development",
                "Custom web application",
                "Deployment and maintenance"
            ],
            links: {
                website: "https://pilchasm.github.io/pilcha.sm",
                instagram: "https://www.instagram.com/pilcha.sm/"
            },
            type: "freelance"
        },
        {
            title: "Mobile & Web Development",
            company: "OzonoInformática",
            period: "2025",
            tasks: [
                "PersonalCred mobile app development and web platform",
                "SantoTome mobile app development and web platform"       
            ],
            links: {
                website: "https://www.ozonoinformatica.com.ar/"            },
            type: "freelance"
        }
    ];

    const SocialLinks = ({ links }) => (
        <div className="flex gap-4 mt-4">
            {links.website && (
                <a 
                    href={links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                    <FaGlobe className="text-xl" />
                </a>
            )}
            {links.instagram && (
                <a 
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                    <FaInstagram className="text-xl" />
                </a>
            )}
        </div>
    );

    const ExperienceSection = ({ title, experiences }) => (
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            </motion.div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative mb-12 flex ${
                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <span className="text-blue-400 text-sm">{exp.period}</span>
                                </div>
                                <h4 className="text-lg text-blue-400 mb-3">{exp.company}</h4>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    {exp.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                    ))}
                                </ul>
                                {exp.links && <SocialLinks links={exp.links} />}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <ExperienceSection 
                    title="Freelance Projects" 
                    experiences={freelanceExperiences} 
                />
                <ExperienceSection 
                    title="Professional Experience" 
                    experiences={professionalExperiences} 
                />
            </div>
        </div>
    );
}

export default About;