import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
    const projects = [
        {
            title: "Sistema de Gestión de Stock - Ecklypce",
            description: "Plataforma web completa para control de inventario con reportes en tiempo real",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            link: "https://www.ecklypce.com/",
            type: "Gestión de Stock",
            highlights: [
                "Control en tiempo real",
                "Reportes automáticos",
                "Integración de APIs"
            ]
        },
        {
            title: "Página Web E-commerce - Pilcha SM",
            description: "Tienda online moderna con carrito de compras e integración de pagos",
            technologies: ["React", "Express", "PostgreSQL", "Stripe"],
            link: "https://pilchasm.github.io/pilcha.sm",
            type: "Página Web",
            highlights: [
                "E-commerce completo",
                "Sistema de pagos",
                "Gestión de órdenes"
            ]
        },
        {
            title: "Aplicación Móvil PersonalCred",
            description: "App móvil y plataforma web para solicitud de créditos y préstamos",
            technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
            type: "Desarrollo Integral",
            highlights: [
                "App multiplataforma",
                "Backend escalable",
                "Autenticación segura"
            ]
        },
        {
            title: "Gestión de Turnos Inteligente",
            description: "Sistema automatizado para asignación y control de turnos de personal",
            technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
            type: "Gestión de Turnos",
            highlights: [
                "Asignación automática",
                "Notificaciones en tiempo real",
                "Reportes de asistencia"
            ]
        }
    ];

    const stats = [
        { number: "50+", label: "Proyectos Completados" },
        { number: "30+", label: "Clientes Satisfechos" },
        { number: "5+", label: "Años de Experiencia" },
        { number: "10+", label: "Tecnologías Dominio" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Portafolio de Proyectos</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Casos de éxito y soluciones desarrolladas para empresas en diferentes sectores
                    </p>
                </motion.div>

                {/* Estadísticas */}
                <motion.div 
                    className="grid md:grid-cols-4 gap-6 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-blue-500 transition-colors"
                        >
                            <p className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</p>
                            <p className="text-gray-300">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Proyectos */}
                <motion.div 
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative p-8 bg-gray-800 rounded-xl border border-gray-700 group-hover:border-blue-500 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                                                {project.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-gray-400 mb-4 max-w-2xl">{project.description}</p>
                                        
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold text-gray-300 mb-2">Highlights:</p>
                                            <ul className="flex flex-wrap gap-2">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="px-3 py-1 bg-gray-700 rounded text-sm text-gray-300">
                                                        ✓ {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-sm font-semibold text-gray-300 mb-2">Tecnologías:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {project.link && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex-shrink-0"
                                        >
                                            <FaExternalLinkAlt size={24} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 text-center p-12 bg-gradient-to-r from-blue-500/10 to-blue-700/10 border border-blue-500/30 rounded-xl"
                >
                    <h2 className="text-3xl font-bold mb-4">¿Te interesa un proyecto similar?</h2>
                    <p className="text-gray-300 mb-6 text-lg">
                        Cuéntanos sobre tu idea y desarrollaremos la solución perfecta para tu negocio
                    </p>
                    <Link 
                        to="/contacto"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors"
                    >
                        Solicitar Presupuesto
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Portfolio;
