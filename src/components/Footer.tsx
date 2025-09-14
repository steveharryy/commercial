import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' }
  ];

  const courses = [
    { label: 'Class IX-X', href: '#courses' },
    { label: 'Class XI-XII', href: '#courses' },
    { label: 'English', href: '#english' },
    { label: 'Mathematics', href: '#mathematics' },
    { label: 'Science', href: '#science' },
    { label: 'Commerce', href: '#commerce' }
  ];


  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1CJpCf7rvY/?mibextid=wwXIfr', label: 'Facebook' },

    { icon: Instagram, href: 'https://www.instagram.com/yogesh_kochars_english_classes?igsh=MW44bXVuNjFxZnlqMg==', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@kochar_yogesh?si=YSIMkbhiYaQSKXd8', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://wa.me/919213092876', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Yogesh Kochar's Classes</h3>
                <p className="text-amber-400 text-sm">Since 2005</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Delhi's most trusted educational institute with 20+ years of excellence
              in shaping bright futures and creating success stories.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">6500+ Students Taught</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">200+ Board Toppers</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">5★ Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">+91 92130 92876</p>

                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">yogeshkocharenglishclasses@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">FIRST FLOOR, BLOCK-F, F-18/28</p>
                  <p className="text-gray-300">Pocket 16,Sector 15F,Rohini,New Delhi,110089</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-amber-600 dark:hover:bg-amber-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />  {/* ✅ Correct way */}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Yogesh Kochar's Classes. All rights reserved. |
              <span className="text-amber-400 ml-1">One Institute. Every Subject. Guaranteed Results.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;