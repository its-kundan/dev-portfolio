'use client';

import { motion } from 'framer-motion';
import { Code, Database, Settings, Cloud, TestTube, Server, Wrench } from 'lucide-react';
import { getPortfolioData } from '@/lib/data';
import { Skills as SkillsType } from '@/lib/types';

const Skills = async () => {
  // Get data asynchronously from JSON file
  const portfolioData = await getPortfolioData();
  const data = portfolioData.skills;
  const content = portfolioData.content.sections.skills;

  // Dynamic skill categories configuration
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
      title: 'Testing',
      icon: TestTube,
      skills: data.testing,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      title: 'Database',
      icon: Server,
      skills: data.database,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: data.tools,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      title: 'Other',
      icon: Wrench,
      skills: data.other,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20'
    }
  ];

  // Filter out categories that have no skills
  const activeCategories = skillCategories.filter(category => 
    category.skills && category.skills.length > 0
  );

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
            {content.title} <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-dark-500 dark:text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeCategories.map((category, categoryIndex) => (
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
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} p-3 ${category.bgColor}`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
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
                    className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-dark-800 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-dark-700 dark:text-gray-300 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section - Now Dynamic */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">
              {content.additionalExpertiseTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.additionalExpertise.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-dark-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
