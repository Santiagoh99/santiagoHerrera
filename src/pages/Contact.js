import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { sanitizeFormData, isValidEmail } from "../utils/security";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form data
        if (!formData.name.trim()) {
            setError("Name is required");
            return;
        }
        
        if (!isValidEmail(formData.email)) {
            setError("Valid email is required");
            return;
        }
        
        if (!formData.message.trim() || formData.message.trim().length < 10) {
            setError("Message must be at least 10 characters");
            return;
        }
        
        // Sanitize data
        const sanitized = sanitizeFormData(formData);
        
        // Create safe mailto link with encoded parameters
        const params = new URLSearchParams({
            subject: "New Message",
            body: `Name: ${sanitized.name}\nEmail: ${sanitized.email}\n\nMessage:\n${sanitized.message}`
        });
        
        const mailtoLink = `mailto:santiagomh1999@gmail.com?${params.toString()}`;
        window.location.href = mailtoLink;
        
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            <div className="container mx-auto px-4 py-16">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Me</h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-12 mb-16"
                >
                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                        
                        {submitted && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-green-400 text-xl" />
                                <span className="text-green-400">Message sent! I'll get back to you soon.</span>
                            </motion.div>
                        )}

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg"
                            >
                                <span className="text-red-400">{error}</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                                    placeholder="Your name"
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
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white resize-none"
                                    placeholder="Tell me about your message..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-r from-blue-500/10 to-blue-700/10 p-8 rounded-xl border border-blue-500/30"
                        >
                            <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
                            <p className="text-gray-300 mb-6">Feel free to reach out through the form or contact me directly on social media.</p>
                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href="mailto:santiagomh1999@gmail.com"
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                                >
                                    Email Me
                                </a>
                                <a 
                                    href="https://wa.me/5491155555555?text=Hi,%20I%20have%20a%20question"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
