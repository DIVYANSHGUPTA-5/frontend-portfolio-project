import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Languages
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML, C & C++", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  // Frontend
  { name: "React & JavaScript", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  // Backend
  { name: "Spring Boot & Cloud", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "RabbitMQ", category: "Backend" },
  { name: "JUnit", category: "Backend" },
  { name: "Keycloak", category: "Backend" },
  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  // DevOps
  { name: "Docker & Render", category: "DevOps" },
  { name: "Microservices", category: "DevOps" },
  // Tools
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "SonarQube", category: "Tools" },
  { name: "Swagger", category: "Tools" },
  // Core CS
  { name: "OOPs", category: "Core CS" },
  { name: "DBMS", category: "Core CS" },
  { name: "Operating Systems", category: "Core CS" },
  { name: "Computer Networks", category: "Core CS" },
];

const categories = ["all", "Languages", "Frontend", "Backend", "Databases", "DevOps", "Tools", "Core CS"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover text-center"
            >
              <h3 className="font-semibold text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
