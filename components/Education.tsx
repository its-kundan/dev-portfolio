'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Education as EducationType, Certification } from '@/lib/types';

const Education = () => {
  const [education, setEducation] = useState<EducationType[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolioData = await getPortfolioData();
        setEducation(portfolioData.education);
        setCertifications(portfolioData.certifications);
      } catch (error) {
        console.error('Error loading education data:', error);
      }
    };
    loadData();
  }, []);

  if (!education.length && !certifications.length) {
    return (
      <section id="education" className="section-padding">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-dark-700 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 dark:bg-dark-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  
                  <p className="text-dark-600 dark:text-gray-300 leading-relaxed">
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
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
                  
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-gray-400">
                    <BookOpen size={16} />
                    <span>Credential: {cert.credential}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 card p-6"
            >
              <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-4">
                Continuous Learning
              </h4>
              <div className="space-y-3">
                {[
                  'Online Courses & Workshops',
                  'Tech Conferences & Meetups',
                  'Open Source Contributions',
                  'Reading Tech Blogs & Books'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-dark-600 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
              Always Learning, Always Growing
            </h3>
            <p className="text-dark-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and staying up-to-date with the latest technologies and best practices in the industry.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Years of Experience', value: '5+' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Technologies Mastered', value: '20+' },
                { label: 'Happy Clients', value: '30+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-dark-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
