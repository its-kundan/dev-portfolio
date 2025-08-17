'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Experience as ExperienceType } from '@/lib/types';

const Experience = async () => {
  // Get data asynchronously from JSON file
  const portfolioData = await getPortfolioData();
  const data = portfolioData.experience;

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-dark-500 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600"></div>

          <div className="space-y-12">
            {data.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                          {experience.position}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-dark-700 dark:text-gray-300 flex items-center">
                          <Award size={16} className="mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-dark-600 dark:text-gray-400 flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-6">
              I'm always open to new opportunities and exciting projects. Let's discuss how we can create something amazing together.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
