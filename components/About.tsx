'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Award } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Personal } from '@/lib/types';

const About = async () => {
  // Get data asynchronously from JSON file
  const portfolioData = await getPortfolioData();
  const data = portfolioData.personal;

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
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-dark-600 dark:text-gray-300 leading-relaxed">
                <p>
                  {data.bio}
                </p>
                <p>
                  I'm passionate about creating user-friendly applications that solve real-world problems. 
                  My approach combines technical expertise with creative problem-solving, ensuring that 
                  every project I work on delivers exceptional value to users and stakeholders.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends and best practices.
                </p>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                What I Do Best
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
