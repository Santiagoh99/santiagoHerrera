import { motion } from "framer-motion";
import { FaWarehouse, FaClock, FaGlobe, FaCheck } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            icon: FaWarehouse,
            title: "Gestión de Stock",
            description: "Control integral de tu inventario con sistema automatizado en tiempo real.",
            features: [
                "Control de stock en tiempo real",
                "Alertas de bajo inventario",
                "Reportes detallados",
                "Integración con ventas"
            ],
            color: "from-blue-500 to-blue-700"
        },
        {
            icon: FaClock,
            title: "Gestión de Turnos",
            description: "Organiza los horarios de tu equipo de forma simple y eficiente.",
            features: [
                "Asignación automática de turnos",
                "Calendario interactivo",
                "Notificaciones a empleados",
                "Reportes de asistencia"
            ],
            color: "from-green-500 to-green-700"
        },
        {
            icon: FaGlobe,
            title: "Páginas Web",
            description: "Sitios web modernos, rápidos y optimizados para convertir clientes.",
            features: [
                "Diseño responsivo",
                "SEO optimizado",
                "Hosting seguro",
                "Mantenimiento incluido"
            ],
            color: "from-purple-500 to-purple-700"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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
        <div className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Soluciones tecnológicas diseñadas para optimizar y hacer crecer tu negocio
                    </p>
                </motion.div>

                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                                <div className="relative p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                                    <motion.div 
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className={`text-5xl mb-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                                    >
                                        <Icon />
                                    </motion.div>
                                    
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 mb-6">{service.description}</p>
                                    
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-8 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                                    >
                                        Cotizar Ahora
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
