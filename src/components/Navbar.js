import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/project", label: "Projects" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
                : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link 
                            to="/" 
                            className="text-blue-500 font-bold text-xl"
                        >
                            Santiago Herrera
                        </Link>
                    </motion.div>

                    <div className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300
                                        ${location.pathname === link.path 
                                            ? 'text-blue-500' 
                                            : 'text-gray-300 hover:text-blue-400'
                                        }`}
                                >
                                    {link.label}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500"
                                            initial={false}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;