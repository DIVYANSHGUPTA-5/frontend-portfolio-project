import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fitness Microservices App",
    image: "/Projects/Fitness Microservices App.png",
    description:
      "AI-powered fitness tracking system using microservices architecture with API Gateway, Eureka, Keycloak auth, RabbitMQ messaging, and Google Gemini API for personalized recommendations.",
    tags: ["Java", "Spring Boot", "Spring Cloud", "React", "MongoDB", "Docker", "Keycloak", "RabbitMQ", "Gemini API", "AI", "Eureka", "PostgreSQL"],
    demoUrl: "#",
    gitHuburl: "https://github.com/DIVYANSHGUPTA-5/-fitness-microservices-app",
  },
  {
    id: 2,
    title: "Journal Management System",
    image: "/Projects/Journal Management System.jpeg",
    description:
      "Secure multi-user journal system with JWT authentication, OAuth2 Google Login, role-based access control, scheduler-based email notifications, and Swagger API documentation.",
    tags: ["Java", "Spring Boot", "Spring Security", "MongoDB", "REST APIs", "Google OAuth2", "Swagger", "Render", "JWT", "Postman"],
    demoUrl: "https://journalapp-1-ne46.onrender.com",
    gitHuburl: "https://github.com/DIVYANSHGUPTA-5/journalApp",
  },
  {
    id: 3,
    title: "Frontend Portfolio Website",
    image: "/Projects/Frontend Portfolio Website.png",
    description:
      "Built a responsive personal portfolio to showcase projects and skills using React and Vite. Designed reusable UI components with Tailwind CSS for a clean and consistent interface. Integrated Web3Forms API for contact form submission without backend. Optimized performance using Vite build system and modular architecture.",
    tags: ["React", "Vite", "JavaScript (JSX)", "Tailwind CSS", "HTML", "CSS", "Web3Forms"],
    demoUrl: "https://frontend-portfolio-project-wtfm.onrender.com",
    gitHuburl: "https://github.com/DIVYANSHGUPTA-5/frontend-portfolio-project",
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHuburl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/DIVYANSHGUPTA-5"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
