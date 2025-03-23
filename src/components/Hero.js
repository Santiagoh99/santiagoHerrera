import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
        >
            <div className="container mx-auto flex flex-col items-center gap-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500"
                >
                    <img 
                        src={require("../img/me.jpg")}
                        alt="Santiago"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                
                <div className="text-center space-y-4">
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-xl text-blue-400"
                    >
                        Software Engineer
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-xl text-blue-400"
                    >
                        From Argentina
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="flex justify-center gap-6"
                    >
                        <a 
                            href="https://www.linkedin.com/in/santiago-martin-herrera/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="https://github.com/Santiagoh99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <FaGithub />
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
