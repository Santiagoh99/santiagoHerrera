import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Services() {
    const detailedServices = [
        {
            id: 1,
            name: "Gestión de Stock",
            description: "Sistema completo de control de inventario con automatización inteligente",
            fullDescription: [
                "Software de gestión de stock diseñado para pequeñas y medianas empresas.",
                "Control en tiempo real de tu inventario desde cualquier dispositivo.",
                "Automatiza alertas cuando el stock baja de niveles críticos.",
                "Genera reportes detallados para análisis de tendencias.",
                "Integración con sistemas de punto de venta.",
                "Seguimiento de movimientos de inventario.",
                "Dashboard intuitivo y fácil de usar."
            ],
            benefits: [
                "Reduce pérdidas por obsolescencia",
                "Optimiza capital invertido",
                "Mejora la rotación de inventario",
                "Evita desabastecimiento",
                "Toma decisiones basadas en datos"
            ],
            price: "Desde $199/mes"
        },
        {
            id: 2,
            name: "Gestión de Turnos",
            description: "Planificación eficiente de horarios para tu equipo de trabajo",
            fullDescription: [
                "Plataforma intuitiva para organizar y gestionar los turnos de tu personal.",
                "Asignación automática inteligente basada en disponibilidad.",
                "Calendario visual interactivo para fácil comprensión.",
                "Notificaciones automáticas a empleados vía correo o WhatsApp.",
                "Control de asistencia y puntualidad.",
                "Reportes de horas trabajadas y cobertura.",
                "Solicitudes de cambio de turno integradas."
            ],
            benefits: [
                "Reduce conflictos de horarios",
                "Mejora la satisfacción del equipo",
                "Control automático de asistencia",
                "Reducción de errores administrativos",
                "Mayor transparencia y comunicación"
            ],
            price: "Desde $149/mes"
        },
        {
            id: 3,
            name: "Páginas Web Profesionales",
            description: "Sitios web modernos optimizados para ventas y presencia online",
            fullDescription: [
                "Diseño web responsivo que se ve perfecto en todos los dispositivos.",
                "Optimización SEO para mejorar tu posicionamiento en Google.",
                "Integración de sistemas de pago para vender online.",
                "Formularios de contacto y cotización automatizados.",
                "Galería de productos/portafolio personalizada.",
                "Blog integrado para contenido y posicionamiento.",
                "Hosting seguro y dominio profesional incluidos."
            ],
            benefits: [
                "Aumenta tu visibilidad online",
                "Genera leads automáticamente",
                "Credibilidad empresarial",
                "Disponible 24/7 para tus clientes",
                "Mejora la conversión de clientes"
            ],
            price: "Desde $299 (desarrollo) + $9.99/mes (hosting)"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            <div className="container mx-auto px-4 py-16">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Servicios Profesionales</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Soluciones tecnológicas completas para optimizar cada aspecto de tu negocio
                    </p>
                </motion.div>

                {/* Servicios Detallados */}
                {detailedServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-blue-400">{service.name}</h2>
                                <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                                
                                <div className="space-y-4 mb-8">
                                    <h3 className="font-semibold text-white">Características:</h3>
                                    <ul className="space-y-2">
                                        {service.fullDescription.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-blue-400 font-bold mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link 
                                    to="/contacto"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                                >
                                    Solicitar Cotización <FaArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="bg-gray-900 p-8 rounded-lg border border-gray-600">
                                <h3 className="text-2xl font-bold mb-6 text-green-400">Beneficios</h3>
                                <ul className="space-y-4 mb-8">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-green-400 text-xl">✓</span>
                                            <span className="text-gray-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-blue-700/10 border border-blue-500/30 rounded-lg">
                                    <p className="text-gray-300 text-sm mb-2">Precio Inicial:</p>
                                    <p className="text-3xl font-bold text-blue-400">{service.price}</p>
                                    <p className="text-gray-400 text-sm mt-3">Solicita un presupuesto personalizado</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 text-center p-12 bg-gradient-to-r from-blue-500/10 to-blue-700/10 border border-blue-500/30 rounded-xl"
                >
                    <h2 className="text-3xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
                    <p className="text-gray-300 mb-6 text-lg">
                        Contáctanos para una consulta gratuita y descubre cómo podemos optimizar tu negocio
                    </p>
                    <Link 
                        to="/contacto"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors"
                    >
                        Contactar Ahora <FaArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Services;
