'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Settings } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Skills as SkillsType } from '@/lib/types';

const Skills = () => {
  const [data, setData] = useState<SkillsType | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolioData = await getPortfolioData();
        setData(portfolioData.skills);
      } catch (error) {
        console.error('Error loading skills data:', error);
      }
    };
    loadData();
  }, []);

  if (!data) {
    return (
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-dark-700 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 dark:bg-dark-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: data.frontend,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: data.backend,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: data.devops,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: data.tools,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  return (
    <section id="skills" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-dark-500 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center">
                    <category.icon className="text-2xl bg-gradient-to-r bg-clip-text text-transparent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className={`p-3 rounded-lg ${category.bgColor} border border-transparent hover:border-current transition-all duration-200`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-dark-700 dark:text-gray-300">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(Math.random() * 3) + 3
                                ? 'bg-gradient-to-r bg-clip-text'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-900 dark:text-white">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'REST APIs', 'GraphQL', 'Microservices', 'Docker', 'Kubernetes', 'AWS',
              'CI/CD', 'Testing', 'Agile', 'Git', 'Linux', 'Performance'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-white dark:bg-dark-800 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span className="text-sm font-medium text-dark-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
