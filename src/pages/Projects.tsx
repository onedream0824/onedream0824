import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Project type definition with multiple images
interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // Changed from single image to array of images
  tags: string[];
  category: string;
  demoLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  // Sample projects data with multiple images
  const projects: Project[] = [
    {
      id: 1,
      title: "Autonurture",
      description: "24/7 AI Agents for your Business. Deploy AI Agents to Automate Outreach, Gather Feedback, and Streamline Scheduling Across Industries with Seamless CRM Integration.",
      images: [
        "images/autonurture/01.png",
        "images/autonurture/02.png",
        "images/autonurture/03.png",
        "images/autonurture/04.png",
        "images/autonurture/05.png",
        "images/autonurture/06.png",
        "images/autonurture/07.png",
      ],
      tags: ["Next.js", "AI", "NLP", "Node.js" ],
      category: "AI Voice Agent",
      demoLink: "https://autonurture.ai"
    },
    {
      id: 2,
      title: "Lethub",
      description: "AI-powered leasing and operations automation for property management. Experience end-to-end lead-to-lease software built to make property management easy.",
      images: [
        "images/lethub/01.png",
        "images/lethub/02.png",
        "images/lethub/03.png",
        "images/lethub/04.png",
        "images/lethub/05.png",
        "images/lethub/06.png",
        "images/lethub/07.png",
      ],
      tags: ["React", "Automation", "AI", "CRM"],
      category: "AI CRM System",
      demoLink: "https://www.lethub.co/",
    },
    {
      id: 3,
      title: "Sphinxmind",
      description: "Simplify marketing with Sphinx Mind, your AI assistant. Integrate with leading platforms, get automated reports, insightful analysis, and optimize performance.",
      images: [
        "images/sphinxmind/01.png",
        "images/sphinxmind/02.png",
        "images/sphinxmind/03.png",
        "images/sphinxmind/04.png",
        "images/sphinxmind/05.png",
      ],
      tags: ["n8n", "Make.com", "Zapier", "Automation"],
      category: "AI Marketing | Automation",
      demoLink: "https://www.sphinxmind.com/"
    },
    {
      id: 4,
      title: "Doctor Hub",
      description: "Explore Medical Courses, Healthcare Jobs, Upcoming Events At One Platform with precise jobs of healthcare industry along with best medical courses.",
      images: [
        "images/doctorhub/01.png",
        "images/doctorhub/02.png",
        "images/doctorhub/03.png",
        "images/doctorhub/04.png",
        "images/doctorhub/05.png",
        "images/doctorhub/06.png",
        "images/doctorhub/07.png",
      ],
      tags: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      category: "AI Healthcare Support Platform",
      demoLink: "https://www.docthub.com/",
    },
    {
      id: 5,
      title: "Spsoft",
      description: "Reliable healthcare software development, FHIR experts, advanced AI-based healthcare products, Cloud DevOps, Cybersecurity, and more. ",
      images: [
        "images/spsoft/01.png",
        "images/spsoft/02.png",
        "images/spsoft/03.png",
        "images/spsoft/04.png",
        "images/spsoft/05.png",
        "images/spsoft/06.png",
      ],
      tags: ["Vue.js", "AI", "LLM", "Python"],
      category: "AI Healthcare Platform",
      demoLink: "https://spsoft.com",
    },
    {
      title: "Manuscriptreport",
      id: 6,
      description: "Created a real-time chat application with features like message encryption, file sharing, and group conversations. Implemented WebSocket for instant messaging.",
      images: [
        "images/manuscriptreport/01.png",
        "images/manuscriptreport/02.png",
        "images/manuscriptreport/03.png",
        "images/manuscriptreport/04.png",
      ],
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "Web",
      demoLink: "https://manuscriptreport.com/",
    },
  ];

  // State for filtering and searching
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});

  // Initialize current image indices
  useEffect(() => {
    const initialIndices: Record<number, number> = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndices(initialIndices);
  }, []);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prevIndices => {
        const newIndices = { ...prevIndices };
        Object.keys(newIndices).forEach(projectId => {
          const id = parseInt(projectId);
          const project = projects.find(p => p.id === id);
          if (project) {
            newIndices[id] = (newIndices[id] + 1) % project.images.length;
          }
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Categories for filter
  const categories = ["All", "AI", "Web", "Mobile", "Automation"];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-700/50"
            >
              {/* Image Carousel */}
              <div className="h-48 w-full overflow-hidden relative">
                {project.images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentImageIndices[project.id] === index ? 1 : 0,
                      zIndex: currentImageIndices[project.id] === index ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
                {/* Image indicators */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${currentImageIndices[project.id] === index ? 'bg-white' : 'bg-white/50'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndices(prev => ({
                          ...prev,
                          [project.id]: index
                        }));
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Rest of the project card content (keep the same) */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No projects found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;