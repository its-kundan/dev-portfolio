'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Education as EducationType, Certification } from '@/lib/types';

const Education = async () => {
  // Get data asynchronously from JSON file
  const portfolioData = await getPortfolioData();
  const education = portfolioData.education;
  const certifications = portfolioData.certifications;

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-dark-500 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications that support my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-dark-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {edu.school}
                  </p>
                  
                  <p className="text-dark-600 dark:text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-dark-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  
                  <div className="text-xs text-dark-500 dark:text-gray-400">
                    Credential: {cert.credential}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                Continuous Learning
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                  Online Courses & Platforms
                </h4>
                <ul className="space-y-2 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Coursera - Machine Learning Specialization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Udemy - Advanced React & TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    AWS Training - Cloud Practitioner
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                  Current Focus Areas
                </h4>
                <ul className="space-y-2 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Advanced TypeScript & React Patterns
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Cloud Architecture & DevOps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    System Design & Scalability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
