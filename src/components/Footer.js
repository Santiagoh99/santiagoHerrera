import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 border-t border-gray-700 text-white">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="py-6 border-t border-gray-700 text-center text-sm text-gray-400"
                >
                    <p>© {currentYear} Santiago Herrera. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
