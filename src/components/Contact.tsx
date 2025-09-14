import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_is1p9j3", // Your Service ID
        "template_500hjau", // Your Template ID
        form.current,
        "iKjvymq7rk5TJvUO0" // Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            class: '',
            subject: '',
            message: ''
          });
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 92130 92876', '+91 98765 43211'],
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['yogeshkocharenglishclasses@gmail.com'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['FIRST FLOOR, BLOCK-F, F-18/28, Pocket 16, Sector 15F, Rohini, New Delhi, 110089'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Timings',
      details: ['Mon to Sat: 10 am to 9 Pm', 'Sat and Sun: Special Classes Available'],
      color: 'from-amber-400 to-amber-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your success journey? Reach out to us for admissions,
            demo classes, or any questions about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
              <div className="flex items-center space-x-4">
                <MessageCircle className="h-8 w-8" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Quick WhatsApp Support</h4>
                  <p className="text-green-100">Get instant responses to your queries</p>
                </div>
                <button
                  onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
                  className="group bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Chat Now</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-slate-700 h-64 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.462914252802!2d77.1324764!3d28.735592800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019469e75823%3A0x240577ae576e5f57!2sYogesh%20Kochar&#39;s%20English%20Classes%20%7C%20Coaching%20Institute%20%7C%20Tuition%20Centre%20(Rohini%20Sector%2015)!5e0!3m2!1sen!2sin!4v1757777930394!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Admission Inquiry
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We've received your inquiry and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Class *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                    >
                      <option value="">Select Class</option>
                      <option value="9">Class IX</option>
                      <option value="10">Class X</option>
                      <option value="11">Class XI</option>
                      <option value="12">Class XII</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject of Interest
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                  >
                    <option value="">Select Subject (Optional)</option>
                    <option value="english">English</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="social-science">Social Science</option>
                    <option value="economics">Economics</option>
                    <option value="psychology">Psychology</option>
                    <option value="history">History</option>
                    <option value="geography">Geography</option>
                    <option value="sociology">Sociology</option>
                    <option value="political-science">Political Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell us about your learning goals or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Inquiry</span>
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We'll respond within 24 hours with detailed information about our programs.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
