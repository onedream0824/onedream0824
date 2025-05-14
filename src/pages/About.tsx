import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn more about my background, experience, and what drives me as a developer.
        </p>
      </motion.div>

      {/* Bio Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                As a Senior Full Stack Developer specializing in AI tech, I bring a wealth of experience in both frontend and backend development, complemented by deep expertise in AI.
              </p>
              <p>
                My primary focus is on designing and implementing best recommended algorithms and models across a diverse spectrum of AI applications, utilizing my proficiency in Node.js, Python, and PHP.
              </p>
              <p>
                My skill set encompasses allowing me to craft innovative solutions and seamlessly transition them into production-ready systems for web and mobile platforms. On the frontend, I specialize in frameworks and tools such as Next.js, Vue.js, React, Flutter, React Native, and Bubble.io, which empower me to create dynamic and responsive web and mobile applications.
              </p>
              <p>
                I specialize in AI automation and CRM integration, focusing on streamlining business processes to enhance efficiency and speed. I have designed and implemented AI automation platforms using tools such as n8n, Make.com, and Zapier, and have developed user-friendly front-end interfaces with Bubble.io to ensure rapid deployment and ease of use.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                Let's connect <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Strengths</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Full Stack Expertise</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Proficient in both frontend and backend technologies, enabling end-to-end development.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Award size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">AI Integration</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Specialized in implementing AI solutions that enhance application functionality.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <BookOpen size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Continuous Learning</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Committed to staying current with emerging technologies and industry best practices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">My Day</h3>
              <div className="flex flex-wrap">
                <div className="w-1/2 mb-4">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Developing (32%)</span>
                  </div>
                </div>
                <div className="w-1/2 mb-4">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Design (12%)</span>
                  </div>
                </div>
                <div className="w-1/2 mb-4">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Discussing (20%)</span>
                  </div>
                </div>
                <div className="w-1/2 mb-4">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">New ideas (16%)</span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Learning (10%)</span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Relaxing (10%)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {/* Experience 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex items-center order-1 md:w-1/2 md:pr-8 md:text-right">
                <div className="hidden md:block w-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Mobile App Developer | Flutter Specialist</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">Evolution Infosystem</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Led the development of innovative mobile applications using Flutter, harnessing its capabilities to create cross-platform solutions with seamless user experiences on both Android and iOS.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-4 border-indigo-200 dark:border-gray-700 bg-indigo-600 dark:bg-indigo-400"></div>
              </div>
              <div className="flex items-center md:w-1/2 md:pl-8">
                <div className="md:hidden w-full mt-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Mobile App Developer | Flutter Specialist</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">Evolution Infosystem</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Led the development of innovative mobile applications using Flutter, harnessing its capabilities to create cross-platform solutions with seamless user experiences on both Android and iOS.
                  </p>
                </div>
                <div className="hidden md:block w-full">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={18} className="mr-2" />
                    <span>Jan 2022 - Oct 2024</span>
                  </div>
                </div>
              </div>
              <div className="md:hidden w-full mt-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={18} className="mr-2" />
                  <span>Jan 2022 - Oct 2024</span>
                </div>
              </div>
            </motion.div>
            
            {/* Experience 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex items-center order-1 md:order-2 md:w-1/2 md:pl-8">
                <div className="hidden md:block w-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Engineer</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">MarnTech</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Directed the development and maintenance of diverse SaaS and corporate applications, significantly contributing to enhanced operational efficiency and the overarching growth of the organization.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-4 border-indigo-200 dark:border-gray-700 bg-indigo-600 dark:bg-indigo-400"></div>
              </div>
              <div className="flex items-center md:order-1 md:w-1/2 md:pr-8 md:text-right">
                <div className="md:hidden w-full mt-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Engineer</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">MarnTech</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Directed the development and maintenance of diverse SaaS and corporate applications, significantly contributing to enhanced operational efficiency and the overarching growth of the organization.
                  </p>
                </div>
                <div className="hidden md:block w-full">
                  <div className="flex items-center justify-end text-gray-600 dark:text-gray-300">
                    <span>Feb 2020 - Nov 2021</span>
                    <Calendar size={18} className="ml-2" />
                  </div>
                </div>
              </div>
              <div className="md:hidden w-full mt-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={18} className="mr-2" />
                  <span>Feb 2020 - Nov 2021</span>
                </div>
              </div>
            </motion.div>
            
            {/* Experience 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="flex items-center order-1 md:w-1/2 md:pr-8 md:text-right">
                <div className="hidden md:block w-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Flutter Developer</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">Inforox</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Developed a cutting-edge AI-based CRM and chatbot for Lethub Inc., leveraging an advanced technology stack, including Flutter for mobile app development, to create the platform from the ground up.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-4 border-indigo-200 dark:border-gray-700 bg-indigo-600 dark:bg-indigo-400"></div>
              </div>
              <div className="flex items-center md:w-1/2 md:pl-8">
                <div className="md:hidden w-full mt-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Flutter Developer</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">Inforox</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Developed a cutting-edge AI-based CRM and chatbot for Lethub Inc., leveraging an advanced technology stack, including Flutter for mobile app development, to create the platform from the ground up.
                  </p>
                </div>
                <div className="hidden md:block w-full">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={18} className="mr-2" />
                    <span>May 2017 - Jan 2020</span>
                  </div>
                </div>
              </div>
              <div className="md:hidden w-full mt-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={18} className="mr-2" />
                  <span>May 2017 - Jan 2020</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <GraduationCap size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Master of Computer Science (MSCS)</h3>
                <p className="text-indigo-600 dark:text-indigo-400">VinUniversity</p>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  <span>Aug 2013 - May 2015</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <GraduationCap size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Computer Science (BCompSc)</h3>
                <p className="text-indigo-600 dark:text-indigo-400">Fulbright Vietnam</p>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  <span>Aug 2009 - Aug 2013</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;