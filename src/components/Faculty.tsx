import React from 'react';
import { Quote } from 'lucide-react';
import { facultyData } from '../data/facultyData';

const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Mentors</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the exceptional educators who have shaped thousands of success stories. 
            Our faculty combines expertise with passion to deliver results that speak for themselves.
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {facultyData.map((faculty) => (
    <div
      key={faculty.id}
      className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-slate-700 p-6"
    >
      {/* Name & Title */}
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {faculty.name}
        </h3>
        <p className="text-amber-600 dark:text-amber-400 font-medium">
          {faculty.title}
        </p>
      </div>

      {/* Subjects */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-full">
          {faculty.mainSubject}
        </span>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-full">
          {faculty.secondarySubject}
        </span>
      </div>

      {/* Bio */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
        {faculty.bio}
      </p>

      {/* Quote */}
      <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg relative">
        <Quote className="h-4 w-4 text-amber-400 absolute top-2 left-2" />
        <p className="text-sm italic text-gray-700 dark:text-gray-300 pl-6">
          "{faculty.quote}"
        </p>
      </div>
    </div>
  ))}
</div>

        {/* Call to Action */} 
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Meet Our Faculty in Person</h3>
            <p className="text-xl mb-6 opacity-90">
              Experience our teaching methodology firsthand with a free demo class
            </p>
           
            <button    onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Schedule a Demo Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
