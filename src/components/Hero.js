import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-white pt-20"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Contenido */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Soluciones Informáticas Profesionales</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-5xl md:text-6xl font-bold leading-tight"
                    >
                        Optimiza tu Negocio con <span className="text-blue-500">Tecnología</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-xl text-gray-300 max-w-2xl"
                    >
                        Gestión de Stock, Gestión de Turnos y Páginas Web profesionales. Soluciones personalizadas para hacer crecer tu empresa.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Link 
                            to="/servicios"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Ver Servicios <FaArrowRight size={16} />
                        </Link>
                        <Link 
                            to="/contacto"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-colors"
                        >
                            Contactar Ahora
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Imagen/Ilustración */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 hidden md:flex items-center justify-center"
                >
                    <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 animate-pulse"></div>
                        <img 
                            src={require("../img/me.jpg")}
                            alt="Santiago"
                            className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
