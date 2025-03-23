import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "./proyect";
import { FaGlobe, FaInstagram } from "react-icons/fa";

const Experience = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

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

    const ProjectMedia = ({ project }) => {
        if (project.image) {
            return (
                <div 
                    className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg"
                    onClick={() => window.open(project.links.web, '_blank')}
                >
                    <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all">
                        <span className="text-white text-sm">Visit Site →</span>
                    </div>
                </div>
            );
        }

        if (project.film) {
            return (
                <div 
                    className="relative aspect-video cursor-pointer group"
                    onClick={() => setSelectedVideo(project.film)}
                >
                    <video 
                        className="w-full h-full object-cover rounded-lg"
                        muted
                        loop
                        onMouseOver={e => e.target.play()}
                        onMouseOut={e => e.target.pause()}
                    >
                        <source src={project.film} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all">
                        <span className="text-white text-sm">
                            {project.hasWebAndMobile ? 'Web & Mobile Demo' : 'Click to expand'}
                        </span>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Frontend Projects</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-6">{group.group}</h3>

                                {group.projects ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {group.projects.map((project, pIndex) => (
                                            <div key={pIndex} className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-lg font-semibold text-blue-400">{project.title}</h4>
                                                </div>
                                                
                                                <ProjectMedia project={project} />
                                                
                                                <p className="text-gray-400 text-sm">{project.desc}</p>
                                                {project.links && <SocialLinks links={project.links} />}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-semibold text-blue-400">{group.title}</h4>
                                        {group.film && (
                                            <div 
                                                className="relative aspect-video cursor-pointer"
                                                onClick={() => setSelectedVideo(group.film)}
                                            >
                                                <video 
                                                    className="w-full h-full object-cover rounded-lg"
                                                    muted
                                                    loop
                                                    onMouseOver={e => e.target.play()}
                                                    onMouseOut={e => e.target.pause()}
                                                >
                                                    <source src={group.film} type="video/mp4" />
                                                </video>
                                            </div>
                                        )}
                                        <p className="text-gray-400 text-sm">{group.desc}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal mejorado para mostrar web/mobile */}
            {selectedVideo && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className={`w-full ${selectedVideo.hasWebAndMobile ? 'max-w-6xl' : 'max-w-4xl'}`}>
                        <video 
                            className="w-full rounded-lg"
                            controls
                            autoPlay
                        >
                            <source src={selectedVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;
