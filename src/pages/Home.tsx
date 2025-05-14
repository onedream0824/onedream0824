import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Layers } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Hi, I'm Allen Davis</span>
              <span className="text-indigo-600 dark:text-indigo-400 block mt-2">
                <TypeAnimation
                  sequence={[
                    'Senior Full Stack Developer',
                    2000,
                    'AI Technology Specialist',
                    2000,
                    'Mobile App Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I build innovative, scalable applications with a focus on AI integration and exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 flex items-center"
              >
                View My Work <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <Code className="text-indigo-600 dark:text-indigo-400 mb-2" size={28} />
                    <h3 className="font-bold mb-1">Frontend</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">React, Vue, Next.js, Flutter</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <Database className="text-indigo-600 dark:text-indigo-400 mb-2" size={28} />
                    <h3 className="font-bold mb-1">Backend</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Python, PHP</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <Cpu className="text-indigo-600 dark:text-indigo-400 mb-2" size={28} />
                    <h3 className="font-bold mb-1">AI</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">ML, NLP, Computer Vision</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <Layers className="text-indigo-600 dark:text-indigo-400 mb-2" size={28} />
                    <h3 className="font-bold mb-1">Mobile</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Flutter, React Native</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Years of Experience</span>
                    <span className="text-sm font-bold">9+</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
              <Cpu size={64} className="text-indigo-500 dark:text-indigo-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI Voice Agent Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed a specialized AI agent for a Voice Agent Platform, enhancing user interactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">AI</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">NLP</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Vapi</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Retell.ai</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Python</span>
              </div>
            </div>
          </motion.div>
          
          {/* Project 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
              <Code size={64} className="text-indigo-500 dark:text-indigo-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI CRM System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led the development of an AI-based CRM for Lethub Inc., serving 10k+ users and 20+ clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Zoho</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Monday.com</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Salesforce</span>
              </div>
            </div>
          </motion.div>
          
          {/* Project 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-indigo-100 dark:bg-gray-700 flex items-center justify-center">
              <Layers size={64} className="text-indigo-500 dark:text-indigo-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">No-Code AI Automation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Implemented automation processes using No-Code Platform to accelerate development timelines.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">n8n</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Make.com</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-800 dark:text-indigo-300 rounded-full text-xs">Zapier</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            View all projects <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I specialize in a wide range of technologies and methodologies to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill categories based on resume */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Next.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Vue.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                React
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Flutter
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                React Native
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Bubble.io
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Node.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                PHP
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                MongoDB
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                MySQL
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                PostgreSQL
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">AI & Automation</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Machine Learning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Natural Language Processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Image & Voice Generation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Model Optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                No-Code Automation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                CRM Integration
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to work together?</h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-3xl mx-auto">
              I'm currently available for freelance projects, full-time positions, and consulting opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;