import React from 'react';
import { Trophy, TrendingUp, Star, Medal, Target, Zap } from 'lucide-react';
import { achieversData } from '../data/achieversData';
import {  Users } from 'lucide-react';

import { BookOpen } from "lucide-react";

const Results: React.FC = () => {
  const stats = [
    { icon: Trophy, value: '200+', label: 'Board Toppers', color: 'text-amber-500' },
    { icon: TrendingUp, value: '100+', label: 'Students scoring 90+', color: 'text-emerald-500' },
    { icon: Star, value: '95%', label: 'Success Rate', color: 'text-blue-500' },
    { icon: Medal, value: '15+', label: 'District Toppers', color: 'text-rose-500' }
  ];

  return (
    <section id="results" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Results & <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Achievers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our students don't just pass they excel. Here are the success stories that make us proud 
            and motivate us to reach even greater heights.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl text-center group hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
            >
              <div className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievers Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Star Achievers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achieversData.map((achiever, index) => (
              <div
                key={achiever.id}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-slate-700 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {achiever.marks}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">{achiever.name}</h4>
                    <p className="text-amber-300">{achiever.school}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{achiever.class}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {achiever.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="text-xs bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achiever.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Formula */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-8 lg:p-12 rounded-2xl text-white">
          <div className="text-center mb-8">
            <Target className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">The YKC Success Formula</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology combines expert teaching, personalized attention, 
              and continuous assessment to guarantee outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Teaching</h4>
              <p className="text-gray-300">Subject specialists with proven track records</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Personal Attention</h4>
              <p className="text-gray-300">Small batches ensuring individual focus</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Continuous Support</h4>
              <p className="text-gray-300">24/7 doubt clearing and regular assessments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;