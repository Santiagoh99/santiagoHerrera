import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-2xl" />,
            url: "https://www.linkedin.com/in/santiago-martin-herrera/",
            color: "hover:text-blue-500"
        },
        {
            name: "GitHub",
            icon: <FaGithub className="text-2xl" />,
            url: "https://github.com/Santiagoh99",
            color: "hover:text-gray-400"
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="text-2xl" />,
            url: "https://www.instagram.com/_santiherreraa/",
            color: "hover:text-pink-500"
        },
        {
            name: "Email",
            icon: <FaEnvelope className="text-2xl" />,
            url: "mailto:santiherrera99@icloud.com",
            color: "hover:text-red-500"
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16 text-white"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Contact me</h2>
                </div>

                <div className="flex justify-center items-center space-x-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transform transition-all duration-300 hover:scale-110 ${social.color}`}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col items-center">
                                {social.icon}
                                <span className="mt-2 text-sm">{social.name}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
