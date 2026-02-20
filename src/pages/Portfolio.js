import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
    const skills = [
        {
            category: "Backend Development",
            items: ["Node.js", "NestJS", "TypeScript", "Express", ".NET", "Microservices"]
        },
        {
            category: "Frontend Development",
            items: ["React", "React Native", "Angular", "Styled Components", "Tailwind CSS", "Microfrontends"]
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MongoDB", "Oracle", "Redis", "SQL Server"]
        },
        {
            category: "DevOps & Tools",
            items: ["OpenShift", "Docker", "GitLab Pipelines", "CI/CD", "Dynatrace", "Jest", "SonarQube"]
        },
        {
            category: "Enterprise & Methodologies",
            items: ["Agile/Scrum", "Jira", "Microsoft CRM", "Design Patterns", "Data Structures"]
        },
        {
            category: "Fundamentals",
            items: ["HTML", "CSS", "JavaScript", "REST APIs", "System Integration"]
        }
    ];

    const experience = [
        {
            role: "Full Stack Software Engineer",
            company: "Santander Tecnología Argentina",
            period: "March 2023 - Present",
            responsibilities: [
                "Developed microservices using Node.js, NestJS and TypeScript with scalable architectures",
                "Worked with PostgreSQL, MongoDB, Oracle and Redis databases",
                "Deployed and managed applications using OpenShift container orchestration",
                "Monitored performance using Dynatrace and implemented unit/integration testing with Jest",
                "Contributed to CI/CD pipelines using GitLab Pipelines and SonarQube",
                "Built modern UIs with React and created microfrontends for scalability",
                "Applied Agile/Scrum methodologies and managed tasks with Jira",
                "Integrated enterprise systems including Microsoft CRM"
            ]
        },
        {
            role: "Frontend & Backend Developer",
            company: "Implementaciones Industriales SRL",
            period: "August 2021 - March 2023",
            responsibilities: [
                "Developed web interfaces using React.js, Hooks and Redux for SPA applications",
                "Integrated REST APIs using Axios and improved data validation with Yup",
                "Collaborated on backend development using .NET and C#, working with SQL databases",
                "Performed debugging, testing and deployment support in development and staging environments",
                "Applied best practices in version control and code quality"
            ]
        },
        {
            role: "Freelance Full Stack Developer",
            company: "Self-Employed",
            period: "2022 - Present",
            responsibilities: [
                "Designed and developed responsive websites and mobile apps using React, Next.js and React Native",
                "Built custom solutions such as stock management systems and booking platforms",
                "Integrated REST APIs and managed application state using Redux and Context",
                "Focused on delivering simple, scalable and business-oriented solutions",
                "Maintained repositories on GitHub and handled basic deployment workflows"
            ]
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Professional Portfolio</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Full Stack Software Engineer with expertise in scalable solutions and modern technologies
                    </p>
                </motion.div>

                {/* Professional Experience */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <div className="h-1 w-10 bg-blue-500 rounded"></div>
                        Professional Experience
                    </h2>
                    
                    {experience.map((exp, index) => (
                        <div key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.role}</h3>
                                        <p className="text-lg text-white">{exp.company}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-semibold whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-gray-400 mb-3">Key Responsibilities:</p>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span>{resp}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            
                            {index < experience.length - 1 && (
                                <div className="my-6 flex items-center gap-4">
                                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent"></div>
                                    <span className="text-blue-400/60 text-sm">•</span>
                                    <div className="flex-1 h-px bg-gradient-to-l from-blue-500/30 to-transparent"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Skills Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <div className="h-1 w-10 bg-blue-500 rounded"></div>
                        Technical Skills
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-blue-400 mb-4">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}  

export default Portfolio;