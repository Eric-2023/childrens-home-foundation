import { useState, useEffect, useRef } from "react";
import { Heart, Users, Home, Gift, Clock, ArrowRight, Play, ChevronLeft, ChevronRight, Star, Calendar, Shield, Menu, X, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const CurrentActivity = () => {
  const [currentSection, setCurrentSection] = useState('current-activity');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const autoPlayRef = useRef(null);
  const modalRef = useRef(null);

  // Photos from public folder
  const currentActivityPhotos = [
    "/getmorehome/photo1.jpeg",
    "/getmorehome/photo2.jpeg",
    "/getmorehome/photo3.jpeg",
    "/getmorehome/photo1.jpeg",
    "/getmorehome/photo4.jpeg"
  ];

  const childrensHomePhotos = [
    "/getmorehome/photo1.jpeg",
    "/getmorehome/photo2.jpeg",
    "/getmorehome/photo3.jpeg",
    "/getmorehome/photo1.jpeg",
    "/getmorehome/photo4.jpeg"
  ];

  const getMorePhotos = [
    "/getmorehome/photo1.jpeg",
    "/getmorehome/photo2.jpeg",
    "/getmorehome/photo3.jpeg",
    "/getmorehome/photo1.jpeg",
    "/getmorehome/photo4.jpeg"
  ];

  const getCurrentPhotos = () => {
    switch (currentSection) {
      case 'current-activity':
        return currentActivityPhotos;
      case 'childrens-home':
        return childrensHomePhotos;
      case 'get-more':
        return getMorePhotos;
      default:
        return currentActivityPhotos;
    }
  };

  const currentPhotos = getCurrentPhotos();

  const sectionData = {
    'current-activity': {
      title: "Current Activities",
      description: "See what's happening right now at our children's home. From educational programs to recreational activities, witness the daily moments that make a difference.",
      icon: Clock,
      stats: [
        { label: "Ongoing Programs", value: "12" },
        { label: "Children Participating", value: "45" },
        { label: "Volunteers Today", value: "8" }
      ]
    },
    'childrens-home': {
      title: "Our Children's Home",
      description: "Take a virtual tour of our safe and loving environment. See where our children live, learn, play, and grow together as a family.",
      icon: Home,
      stats: [
        { label: "Total Children", value: "247" },
        { label: "Rooms", value: "18" },
        { label: "Years Operating", value: "15" }
      ]
    },
    'get-more': {
      title: "Get More Involved",
      description: "Discover opportunities to make a greater impact. From volunteering to donations, see how you can help us expand our reach and services.",
      icon: Users,
      stats: [
        { label: "Urgent Needs", value: "5" },
        { label: "Upcoming Events", value: "3" },
        { label: "Sponsorship Slots", value: "12" }
      ]
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
      }, 4000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentPhotos.length]);

  // Reset photo index when section changes
  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [currentSection]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileModalOpen) {
        closeMobileModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileModalOpen]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
    resetAutoPlay();
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextPhoto();
    } else if (isRightSwipe) {
      prevPhoto();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
    resetAutoPlay();
  };

  // Mobile section handler
  const handleMobileSectionClick = (sectionKey) => {
    setCurrentSection(sectionKey);
    setMobileModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeMobileModal = () => {
    setMobileModalOpen(false);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMobileModal();
    }
  };

  const currentSectionData = sectionData[currentSection];
  const IconComponent = currentSectionData.icon;

  // Carousel Component to avoid duplication
  const CarouselContent = ({ isInModal = false }) => (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 shadow-xl overflow-hidden ${isInModal ? 'border-0 shadow-none' : ''}`}>
      {/* Carousel Header - Only show in modal */}
      {isInModal && (
        <div className="p-6 border-b border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900">{currentSectionData.title}</h2>
              <p className="text-blue-600/80 text-sm">{currentSectionData.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Carousel */}
      <div className="relative">
        <div 
          className="relative aspect-video bg-gray-100 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image */}
          <img
            src={currentPhotos[currentPhotoIndex]}
            alt={`${currentSectionData.title} - Image ${currentPhotoIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700 group-hover:text-blue-900" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-blue-700 group-hover:text-blue-900" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentPhotoIndex + 1} / {currentPhotos.length}
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2 justify-center">
              {currentPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPhoto(index)}
                  className={`flex-1 max-w-16 h-2 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="p-4 bg-blue-50/30 border-t border-blue-200/50">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {currentPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentPhotoIndex
                    ? 'border-blue-500 shadow-lg scale-110'
                    : 'border-blue-200 hover:border-blue-300 hover:scale-105'
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white rounded-xl border border-blue-200">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900">Location</h4>
            <p className="text-blue-600 text-sm">Nairobi, Kenya</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-blue-200">
            <Phone className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900">Contact</h4>
            <p className="text-blue-600 text-sm">+254 720 846 532</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-blue-200">
            <Mail className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h4 className="font-bold text-blue-900">Email</h4>
            <p className="text-blue-600 text-sm">info@faab.org</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-yellow-600 fill-current" />
            <div>
              <h4 className="font-bold text-yellow-800">How You Can Help</h4>
              <p className="text-yellow-700 text-sm">
                Your support makes these moments possible. Consider donating or volunteering today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-bold text-blue-700">FAAB Foundation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-blue-700/80 max-w-2xl mx-auto">
            Discover the heart of our work through photos and stories from our children's home
          </p>
        </div>

        {/* Mobile Navigation - Only visible on mobile */}
        <div className="lg:hidden mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 p-6 shadow-lg">
            <div className="space-y-3">
              {Object.entries(sectionData).map(([key, data]) => {
                const SectionIcon = data.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleMobileSectionClick(key)}
                    className="w-full text-left p-4 rounded-xl transition-all duration-300 bg-white/50 text-blue-800 hover:bg-blue-50 hover:shadow-md border border-blue-200/50 active:scale-95"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
                        <SectionIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{data.title}</h3>
                        <p className="text-blue-600/70 text-sm mt-1">
                          {data.description.substring(0, 60)}...
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-blue-400" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Navigation Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 p-6 shadow-lg sticky top-6">
              <div className="space-y-3">
                {Object.entries(sectionData).map(([key, data]) => {
                  const SectionIcon = data.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setCurrentSection(key)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        currentSection === key
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                          : 'bg-white/50 text-blue-800 hover:bg-blue-50 hover:shadow-md border border-blue-200/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          currentSection === key ? 'bg-white/20' : 'bg-blue-100'
                        }`}>
                          <SectionIcon className={`w-6 h-6 ${
                            currentSection === key ? 'text-white' : 'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{data.title}</h3>
                          <p className={`text-sm mt-1 ${
                            currentSection === key ? 'text-white/90' : 'text-blue-600/70'
                          }`}>
                            {data.description.substring(0, 60)}...
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">Quick Stats</h4>
                <div className="space-y-2">
                  {currentSectionData.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200/50 last:border-b-0">
                      <span className="text-blue-700 text-sm">{stat.label}</span>
                      <span className="font-bold text-blue-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Get Involved</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Panel */}
          <div className="lg:col-span-2">
            <CarouselContent />
          </div>
        </div>

        {/* Mobile Modal - Fixed positioning and proper z-index */}
        {mobileModalOpen && (
          <div 
            ref={modalRef}
            className="lg:hidden fixed inset-0 z-[100] flex items-start justify-center p-0 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={handleBackdropClick}
          >
            <div className="bg-white w-full min-h-full relative">
              {/* Close Button - Fixed position */}
              <button
                onClick={closeMobileModal}
                className="fixed top-4 right-4 z-[101] w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 border border-blue-200"
              >
                <X className="w-6 h-6 text-blue-700" />
              </button>

              {/* Modal Content */}
              <div className="pt-16 pb-8">
                {/* Stats Section */}
                <div className="p-6 border-b border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900">{currentSectionData.title}</h2>
                      <p className="text-blue-600/80">{currentSectionData.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-3 text-lg">Quick Stats</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {currentSectionData.stats.map((stat, index) => (
                        <div key={index} className="text-center bg-blue-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-blue-900">{stat.value}</div>
                          <div className="text-blue-700 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Carousel Content */}
                <div className="p-4">
                  <CarouselContent isInModal={true} />
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t border-blue-200/50 bg-blue-50/30">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-lg active:scale-95">
                    <Heart className="w-5 h-5" />
                    <span>Get Involved</span>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CurrentActivity;