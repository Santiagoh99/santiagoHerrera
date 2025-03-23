const Skills = () => {
    const skills = ["React", "Node.js", "Tailwind", "JavaScript", "TypeScript",
        "Next.js", "MongoDB", "Firebase", "Git", "Figma", "Sql", "Python",
        "HTML", "CSS", "Material-UI", "Redux", "Context API", "REST API", "Jest", "Testing Library", "Cypress", "Heroku", "Vercel",
        "AWS", "Azure", "Google Cloud", "Docker","PostgreSQL","MySQL","SQLite","Redis"];

    return (
        <div className="p-8 bg-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-700 rounded">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default Skills;

