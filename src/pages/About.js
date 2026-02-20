import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaInstagram, FaCheckCircle, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
    const professionalExperiences = [
        {
            title: "Full Stack Developer",
            company: "Santander Tecnología Argentina",
            period: "March 2023 - Present",
            tasks: [
                "Backend: Node.js, Next.js, .NET",
                "PostgreSQL, Oracle, MongoDB",
                "Frontend: React.js, TypeScript"
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
                "Invoicing & Balance Sheets",
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
                "Invoicing & Financial Reports",
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
                "Gestión de Stock - Full Stack",
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
            title: "E-commerce Development",
            company: "Pilcha SM",
            period: "2024",
            tasks: [
                "Tienda online profesional",
                "Sistema de pagos integrado",
                "Deployment y mantenimiento"
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
                "Aplicación móvil multiplataforma",
                "Plataforma web de préstamos",
                "Backend escalable"       
            ],
            links: {
                website: "https://www.ozonoinformatica.com.ar/"            
            },
            type: "freelance"
        }
    ];

    const skills = [
        { category: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { category: "Backend", skills: ["Node.js", ".NET", "Express", "Firebase", "PostgreSQL"] },
        { category: "Mobile", skills: ["React Native", "Flutter", "Firebase", "APIs REST"] },
        { category: "Otros", skills: ["Git", "Docker", "AWS", "Azure", "MongoDB"] }
    ];

    const SocialLinks = ({ links }) => (
        <div className="flex gap-4 mt-4">
            {links.website && (
                <a 
                    href={links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    title="Sitio web"
                >
                    <FaGlobe className="text-xl" />
                </a>
            )}
            {links.instagram && (
                <a 
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                    title="Instagram"
                >
                    <FaInstagram className="text-xl" />
                </a>
            )}
        </div>
    );

    const ExperienceSection = ({ title, subtitle, experiences, icon: Icon }) => (
        <div className="mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    {Icon && <Icon className="text-4xl text-blue-400" />}
                    <h2 className="text-4xl font-bold text-white">{title}</h2>
                </div>
                {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold text-blue-400">{exp.title}</h3>
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                        <h4 className="text-white font-semibold mb-3">{exp.company}</h4>
                        <ul className="space-y-2 mb-4">
                            {exp.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                        {exp.links && <SocialLinks links={exp.links} />}
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 py-16 pt-24">
            <div className="container mx-auto px-4">
                
                {/* About Hero */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Sobre Mí</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                        Profesional apasionado por la tecnología con más de 5 años de experiencia en desarrollo de software y gestiones empresariales
                    </p>
                    <Link 
                        to="/contacto"
                        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                    >
                        Iniciar Proyecto Conmigo
                    </Link>
                </motion.div>

                {/* Skills */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20 p-8 bg-gray-800 rounded-xl border border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900 p-4 rounded-lg"
                            >
                                <h3 className="font-bold text-blue-400 mb-3">{skillGroup.category}</h3>
                                <div className="space-y-2">
                                    {skillGroup.skills.map((skill, idx) => (
                                        <span key={idx} className="block text-sm text-gray-300 px-2 py-1 bg-gray-800 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Freelance Projects */}
                <ExperienceSection 
                    title="Proyectos Freelance" 
                    subtitle="Soluciones desarrolladas para empresas y emprendimientos"
                    experiences={freelanceExperiences}
                    icon={FaTrophy}
                />

                {/* Professional Experience */}
                <ExperienceSection 
                    title="Experiencia Profesional" 
                    subtitle="Trayectoria laboral en empresas de tecnología"
                    experiences={professionalExperiences}
                    icon={FaCheckCircle}
                />
            </div>
        </div>
    );
}

export default About;