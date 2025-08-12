'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Award } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Personal } from '@/lib/types';

const About = () => {
  const [data, setData] = useState<Personal | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolioData = await getPortfolioData();
        setData(portfolioData.personal);
      } catch (error) {
        console.error('Error loading about data:', error);
      }
    };
    loadData();
  }, []);

  if (!data) {
    return (
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-dark-700 rounded w-1/4 mb-8"></div>
            <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-3/4"></div>
          </div>
        </div>
      </section>
    );
  }

  const infoItems = [
    { icon: MapPin, label: 'Location', value: data.location },
    { icon: Mail, label: 'Email', value: data.email },
    { icon: Phone, label: 'Phone', value: data.phone },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-500 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and understand my journey in the world of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-dark-800 flex items-center justify-center text-8xl font-bold gradient-text">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-dark-800 shadow-lg dark:shadow-dark-900/20"
                >
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20">
                    <item.icon className="text-primary-600 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 dark:text-gray-400 font-medium">{item.label}</p>
                    <p className="text-dark-900 dark:text-white font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-lg text-dark-600 dark:text-gray-300 leading-relaxed mb-6">
                {data.bio}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                What I Do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Full Stack Development',
                  'UI/UX Design',
                  'Cloud Architecture',
                  'Performance Optimization',
                  'Team Leadership',
                  'Code Review & Mentoring'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-dark-700 dark:text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Let's Work Together</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
