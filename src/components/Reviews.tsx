import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Trophy } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= reviewsData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, reviewsData.length - cardsToShow) : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [cardsToShow]);

  const visibleReviews = reviewsData.slice(currentIndex, currentIndex + cardsToShow);

  // --- Extract YouTube ID (supports Shorts, normal, or just ID) ---
  const getYouTubeId = (urlOrId: string) => {
    try {
      // If it's already just an ID
      if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) return urlOrId;

      const url = new URL(urlOrId);
      if (url.hostname.includes("youtu.be")) {
        return url.pathname.slice(1);
      }
      if (url.hostname.includes("youtube.com")) {
        if (url.pathname.startsWith("/shorts/")) {
          return url.pathname.split("/shorts/")[1];
        }
        return url.searchParams.get("v");
      }
      return urlOrId;
    } catch {
      return urlOrId;
    }
  };

  // --- YOUTUBE REVIEWS ---
  const youtubeVideos = [
  "kKSu_I69coA",
  "37Ik0vUROkU",
  "CwwXmRZoyd8",
  "rmAc-mwlBEU",
  "t8IgVHs8hvg",
  "fCtJZ4uOo7I",
];


  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Google <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Love</span> ❤️
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our students and parents say about their YKC experience.
          </p>

          {/* Google Rating Display */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">5.0</span>
            <span className="text-gray-600 dark:text-gray-400">on Google</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out gap-6">
              {visibleReviews.map((review) => (
                <div key={review.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-slate-700 h-full">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {/* Comment */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                      "{review.comment}"
                    </p>
                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{review.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{review.class}</div>
                      </div>
                      {review.subject && (
                        <div className="text-xs bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full">
                          {review.subject}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-slate-700"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-slate-700"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(reviewsData.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / cardsToShow) === index
                  ? 'bg-amber-500'
                  : 'bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=yogesh+kochar+classes+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <span>See All Reviews on Google</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        {/* ✅ YOUTUBE REVIEWS SECTION */}
       {/* ✅ YOUTUBE REVIEWS SECTION */}
<div className="mt-20">
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
    🎥 Student Success Stories
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {youtubeVideos.map((video, index) => (
      <div
        key={index}
        className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
      >
        <div className="relative w-full" style={{ paddingTop: "177.78%" /* 9:16 ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${getYouTubeId(video)}`}
            title={`YouTube review ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Success Stories Highlight */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-2xl text-white text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
          <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-xl mb-6 opacity-90">
            Be the next topper! Our proven methods and dedicated faculty are here to guide you to excellence.
          </p>
          <button onClick={() => window.open("https://wa.me/919213092876?text=Hi%20I%20want%20to%20book%20a%20demo", "_blank")}
          className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
            Start Your Success Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
