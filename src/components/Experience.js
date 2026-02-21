import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "./proyect";
import { FaInstagram, FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { isValidUrl, safeExternalLinkAttrs } from "../utils/security";

const Experience = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const SocialLinks = ({ links }) => (
        <div className="flex gap-3">
            {links.web && isValidUrl(links.web) && (
                <a 
                    href={links.web}
                    {...safeExternalLinkAttrs}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded text-xs font-semibold transition-colors"
                >
                    {links.web.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
                    {links.web.includes('github') ? 'GitHub' : 'Visit'}
                </a>
            )}
            {links.instagram && isValidUrl(links.instagram) && (
                <a 
                    href={links.instagram}
                    {...safeExternalLinkAttrs}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-pink-600/20 hover:bg-pink-600/40 text-pink-400 rounded text-xs font-semibold transition-colors"
                >
                    <FaInstagram />
                    Instagram
                </a>
            )}
        </div>
    );

    const TechStack = ({ tech }) => (
        <div className="flex flex-wrap gap-2">
            {tech.map((t, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {t}
                </span>
            ))}
        </div>
    );

    const GalleryModal = ({ image, onClose }) => (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-2 sm:p-4 overflow-auto"
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative my-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-8 right-0 text-white hover:text-gray-400 transition-colors z-10 sm:-top-10"
                >
                    <FaTimes size={24} className="sm:w-7 sm:h-7" />
                </button>
                <img 
                    src={image}
                    alt="Gallery"
                    className="max-w-[95vw] max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                    style={{
                        objectFit: 'contain',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none'
                    }}
                />
            </motion.div>
        </motion.div>
    );

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Collection of projects built with modern technologies
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {projects.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                        >
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-white mb-2">{group.group}</h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
                            </div>
                            <div className="space-y-12">
                                {group.projects.map((project, pIndex) => (
                                    <motion.div
                                        key={pIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                                        className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors group"
                                    >
                                        <div className="p-6">
                                            <div className="mb-6">
                                                <h4 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h4>
                                                <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
                                                <p className="text-gray-300 mb-4">{project.desc}</p>
                                                
                                                {project.tech && (
                                                    <div className="mb-4">
                                                        <p className="text-xs font-semibold text-gray-400 mb-2">TECHNOLOGIES:</p>
                                                        <TechStack tech={project.tech} />
                                                    </div>
                                                )}

                                                {project.details && (
                                                    <div className="mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                                                        <p className="text-xs font-semibold text-gray-400 mb-2">KEY FEATURES:</p>
                                                        <ul className="space-y-1">
                                                            {project.details.map((detail, idx) => (
                                                                <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                                                                    <span className="text-green-400">✓</span> {detail}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {project.links && <SocialLinks links={project.links} />}
                                            </div>

                                            {project.images && project.images.length > 0 && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                    {project.images.map((image, imgIndex) => (
                                                        <motion.div
                                                            key={imgIndex}
                                                            whileHover={{ scale: 1.05 }}
                                                            onClick={() => setSelectedImage(image)}
                                                            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg group/img"
                                                        >
                                                            <img 
                                                                src={image}
                                                                alt={`${project.title} ${imgIndex + 1}`}
                                                                className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-colors flex items-center justify-center">
                                                                <span className="text-white text-sm opacity-0 group-hover/img:opacity-100">View image</span>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};

export default Experience;
