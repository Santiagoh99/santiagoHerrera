import ecklypceImg from "../img/ecklypce.jpg"
import pilchaImg from "../img/pilcha.jpg"
import colors from "../img/colors.jpg"
import credit from "../img/credit.jpg"
import creditV2 from "../img/creditv2.jpg"

export const projects = [
    {
        group: "Web Projects",
        icon: "FaGlobe",
        projects: [
            {
                title: "Ecklypce - E-commerce",
                subtitle: "Fashion platform with stock management",
                images: [ecklypceImg],
                desc: "Professional e-commerce with modern design and real-time inventory management system",
                tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
                links: {
                    web: "https://www.ecklypce.com/",
                    instagram: "https://www.instagram.com/ecklypce/"
                }
            },
            {
                title: "Pilcha SM - Marketplace",
                subtitle: "Multi-brand clothing platform",
                images: [pilchaImg],
                desc: "Marketplace with multiple brands and integrated payment system for online sales",
                tech: ["React", "Express", "PostgreSQL", "Stripe"],
                links: {
                    web: "https://pilchasm.github.io/pilcha.sm",
                    instagram: "https://www.instagram.com/pilcha.sm/"
                }
            }
        ]
    },
    {
        group: "Mobile Projects",
        icon: "FaMobile",
        projects: [
            {
                title: "Login Color",
                subtitle: "Testing app with theme management system",
                images: [colors, credit, creditV2],
                desc: "React Native application with advanced state management, form validation, and multiple authentication flows. Features theme system with custom hooks and Redux for global state.",
                tech: ["React Native", "Redux", "Yup", "Custom Hooks", "Expo", "Firebase", "Context API"],
                details: [
                    "Redux for global state management",
                    "Yup for form validation schemas",
                    "Custom Hooks for reusable logic",
                    "Multiple authentication screens",
                    "Theme switching system",
                    "Responsive UI components",
                    "Real-time form validation"
                ],
                links: {
                    web: "https://github.com/Santiagoh99/login-color"
                }
            }
        ]
    }
];

