import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Phone, MessageCircle, Trophy, Users, Calendar } from 'lucide-react';
import yogeshsir from '../photos/yogeshsir.jpg';

const Hero: React.FC = () => {

  const typedRef = useRef<HTMLSpanElement | null>(null);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    if (!typedRef.current) return; // ⬅️ Prevent null error

    const typed = new Typed(typedRef.current, {
      strings: ["Yogesh Kochar's Classes"],
      typeSpeed: 100,
      showCursor: false,
      loop: false,
      onComplete: () => {
        setShowFinalText(true);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Stats Banner */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-amber-500/20 px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4 text-amber-400" />
                <span className="text-amber-200">20+ Years</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-500/20 px-3 py-1 rounded-full">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-200">6500+ Students</span>
              </div>
              <div className="flex items-center space-x-2 bg-rose-500/20 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 text-rose-400" />
                <span className="text-rose-200">200+ Toppers</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {showFinalText ? (
                  <>
                    <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                      Yogesh Kochar&apos;s
                    </span>
                    <br />
                    <span className="text-white">Classes</span>
                  </>
                ) : (
                  <span
                    ref={typedRef}
                    className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent"
                  />
                )}
              </h1>

              <div className="text-xl lg:text-2xl text-gray-300 font-medium">
                One Institute. Every Subject. Guaranteed Results.
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Delhi&apos;s most trusted institute for English, Mathematics, Science, Commerce & Humanities.
              Building confidence, ensuring success since 2005.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Book a Demo</span>
                </span>
              </button>


              <button
                onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>WhatsApp Us</span>
                </span>
              </button>

            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">100+</div>
                <div className="text-sm text-gray-400">Students scoring 90+</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">5★</div>
                <div className="text-sm text-gray-400">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400">24/7</div>
                <div className="text-sm text-gray-400">Doubt Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
              <img
                src={yogeshsir}
                alt="Students learning at YKC"
                className="w-full h-80 object-cover rounded-lg"
              />

              {/* Floating Achievement Card */}
              
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
