import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar email
        const mailtoLink = `mailto:santiagomh1999@gmail.com?subject=Nueva%20Solicitud%20de%20${formData.service}&body=Nombre:%20${formData.name}%0AEmail:%20${formData.email}%0ATeléfono:%20${formData.phone}%0AServicio:%20${formData.service}%0A%0AMensaje:%0A${formData.message}`;
        window.location.href = mailtoLink;
        
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    };

    const contactMethods = [
        {
            icon: FaWhatsapp,
            title: "WhatsApp",
            description: "Respuesta rápida",
            action: "https://wa.me/5491155555555?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios",
            color: "from-green-500 to-green-700"
        },
        {
            icon: FaEnvelope,
            title: "Correo Electrónico",
            description: "santiagomh1999@gmail.com",
            action: "mailto:santiagomh1999@gmail.com",
            color: "from-blue-500 to-blue-700"
        },
        {
            icon: FaPhone,
            title: "Teléfono",
            description: "+54 9 11 5555-5555",
            action: "tel:+5491155555555",
            color: "from-purple-500 to-purple-700"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Contáctanos</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        ¿Listo para transformar tu negocio? Ponte en contacto con nosotros hoy mismo
                    </p>
                </motion.div>

                {/* Métodos de Contacto Rápido */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <motion.a
                                key={index}
                                href={method.action}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className={`p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 transition-all text-center group`}
                            >
                                <div className={`text-5xl mb-4 bg-gradient-to-r ${method.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform`}>
                                    <Icon className="mx-auto" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                                <p className="text-gray-400">{method.description}</p>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Formulario */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-12 mb-16"
                >
                    {/* Formulario */}
                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6">Envía tu Mensaje</h2>
                        
                        {submitted && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-green-400 text-xl" />
                                <span className="text-green-400">¡Mensaje enviado! Te responderemos pronto.</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Nombre *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                                    placeholder="+54 9 11 XXXX-XXXX"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Servicio de Interés *</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="Gestión de Stock">Gestión de Stock</option>
                                    <option value="Gestión de Turnos">Gestión de Turnos</option>
                                    <option value="Páginas Web">Páginas Web</option>
                                    <option value="Otro">Otro / Consulta General</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white resize-none"
                                    placeholder="Cuéntanos sobre tu necesidad..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                            >
                                Enviar Mensaje
                            </motion.button>
                        </form>
                    </div>

                    {/* Información Adicional */}
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                        >
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <FaMapMarkerAlt className="text-blue-400" />
                                Ubicación
                            </h3>
                            <p className="text-gray-300">Buenos Aires, Argentina</p>
                            <p className="text-gray-400 text-sm mt-2">Disponible para trabajos remotos a nivel nacional e internacional</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                        >
                            <h3 className="text-2xl font-bold mb-4">Horarios de Atención</h3>
                            <div className="space-y-2 text-gray-300">
                                <p><span className="font-semibold">Lunes a Viernes:</span> 9:00 AM - 18:00 PM</p>
                                <p><span className="font-semibold">Sábado:</span> 10:00 AM - 14:00 PM</p>
                                <p className="text-sm text-gray-400 mt-4">Respondo con prioridad en WhatsApp para consultas urgentes</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-r from-blue-500/10 to-blue-700/10 p-8 rounded-xl border border-blue-500/30"
                        >
                            <h3 className="text-2xl font-bold mb-3">¿Preguntas Frecuentes?</h3>
                            <p className="text-gray-300 mb-4">Envía tu consulta por WhatsApp para una respuesta inmediata</p>
                            <a 
                                href="https://wa.me/5491155555555?text=Hola,%20tengo%20una%20pregunta%20sobre%20tus%20servicios"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                            >
                                <FaWhatsapp /> Chatear por WhatsApp
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
