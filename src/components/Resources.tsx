import React from 'react';
import { Download, FileText, Video, BookOpen, ExternalLink, Zap, Target, Brain } from 'lucide-react';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: 'Study Notes',
      description: 'Comprehensive notes for all subjects and classes',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      icon: Video,
      title: 'Recorded Lectures',
      description: 'Access to all class recordings and special sessions',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
    },
    {
      icon: Brain,
      title: 'Practice Papers',
      description: 'Previous year papers and mock tests',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      icon: Target,
      title: 'Quick Revision',
      description: 'Last-minute revision materials and formula sheets',
      color: 'from-rose-400 to-rose-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30'
    }
  ];

  const subjects = [
    'English', 'Mathematics', 'Science', 'Social Science', 
    'Commerce', 'Economics', 'Psychology', 'Business Studies', 
    'Sociology', 'Political Science', 'Geography', 'History'
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Study <span className="bg-gradient-to-r from-amber-400 to-emerald-500 bg-clip-text text-transparent">Smarter</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Access our comprehensive digital library with notes, recordings, practice papers, 
            and resources designed to accelerate your learning journey.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-amber-600 dark:text-amber-400">
            <Zap className="h-5 w-5" />
            <span className="font-medium">Available 24/7 | Updated Weekly</span>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.bgColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-slate-600`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 lg:p-12 rounded-2xl text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-amber-400" />
                <h3 className="text-3xl font-bold">YKC Resources Hub</h3>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Everything you need to excel in your studies. From detailed notes to video lectures, 
                practice papers to quick revision guides - all organized by subject and class.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Updated weekly with fresh content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">Organized by subject and difficulty level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-300">Mobile-friendly access anytime, anywhere</span>
                </div>
              </div>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                <span>Access Notes Now</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-amber-400 mb-4">Available Subjects:</h4>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((subject) => (
                  <div
                    key={subject}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-lg text-center hover:bg-white/20 transition-all duration-200"
                  >
                    <span className="text-white font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Download</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Download any resource instantly without waiting
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Search</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Find exactly what you need with powerful search
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Organized Library</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Everything categorized by class, subject, and topic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;