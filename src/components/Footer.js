import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/santiago-martin-herrera/", label: "LinkedIn" },
        { icon: FaGithub, url: "https://github.com/Santiagoh99", label: "GitHub" },
        { icon: FaInstagram, url: "https://www.instagram.com/santiagohdev/", label: "Instagram" },
        { icon: FaWhatsapp, url: "https://wa.me/5491155555555", label: "WhatsApp" },
    ];

    const footerLinks = [
        {
            title: "Navegación",
            links: [
                { name: "Inicio", path: "/" },
                { name: "Servicios", path: "/servicios" },
                { name: "Portafolio", path: "/portafolio" },
                { name: "Sobre Mí", path: "/sobre-mi" }
            ]
        },
        {
            title: "Servicios",
            links: [
                { name: "Gestión de Stock", path: "/servicios" },
                { name: "Gestión de Turnos", path: "/servicios" },
                { name: "Páginas Web", path: "/servicios" }
            ]
        }
    ];

    return (
        <footer className="bg-gray-800 border-t border-gray-700 text-white">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="py-12 grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                            TechGest
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Soluciones informáticas profesionales para optimizar tu negocio
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        title={social.label}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Links */}
                    {footerLinks.map((section, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="font-semibold text-white">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link 
                                            to={link.path}
                                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Contact CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="font-semibold text-white">¿Necesitas Ayuda?</h3>
                        <div className="space-y-3">
                            <a 
                                href="mailto:santiagomh1999@gmail.com"
                                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                <FaEnvelope size={16} />
                                santiagomh1999@gmail.com
                            </a>
                            <a 
                                href="https://wa.me/5491155555555"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                            >
                                <FaWhatsapp size={16} />
                                WhatsApp Directo
                            </a>
                        </div>
                        <Link 
                            to="/contacto"
                            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold transition-colors"
                        >
                            Contactar Ahora
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
                >
                    <p>© {currentYear} TechGest. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <button className="text-gray-400 hover:text-blue-400 transition-colors cursor-not-allowed">Política de Privacidad</button>
                        <button className="text-gray-400 hover:text-blue-400 transition-colors cursor-not-allowed">Términos de Servicio</button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
