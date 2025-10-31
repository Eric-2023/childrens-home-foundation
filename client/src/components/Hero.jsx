import { useState, useEffect, useRef } from "react";
import { Heart, Users, Home, Gift, Clock, ArrowRight, Play, ChevronLeft, ChevronRight, Star, Calendar, Shield, Menu, X } from "lucide-react";

const ChildrensHomeHero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [childrenHelped, setChildrenHelped] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const scrollRef = useRef(null);
  
  const features = [
    { icon: Heart, text: "Safe Loving Environment" },
    { icon: Shield, text: "Child Protection First" },
    { icon: Users, text: "Family Reintegration" },
    { icon: Gift, text: "Education Support" },
    { icon: Home, text: "Shelter & Care" },
    { icon: Calendar, text: "Daily Activities" }
  ];

  // Children's home photos (replace with actual foundation photos)
  const homePhotos = [
    "https://images.unsplash.com/photo-1516627145497-ae69578cf5c3?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507919909716-c8262b71e9ae?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1485546246426-74dc88ded4d2?w=400&h=300&fit=crop&crop=center"
  ];

  const programs = [
    { name: "Education Support", description: "School fees & supplies", image: homePhotos[0] },
    { name: "Healthcare", description: "Medical care & nutrition", image: homePhotos[1] },
    { name: "Counseling", description: "Psychological support", image: homePhotos[2] },
    { name: "Life Skills", description: "Vocational training", image: homePhotos[3] },
    { name: "Recreation", description: "Sports & activities", image: homePhotos[4] }
  ];

  const scrollingItems = [
    "❤️ Sponsor a Child Today",
    "🎓 Education Changes Lives",
    "🏠 Safe Housing Provided",
    "🍎 Nutritious Meals Daily",
    "👨‍👩‍👧‍👦 Family Reunification",
    "🎨 Creative Arts Programs",
    "⚽ Sports & Recreation",
    "📚 Learning Resources"
  ];

  const stats = {
    children: 247,
    volunteers: 89,
    years: 1,
    communities: 23
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (childrenHelped < stats.children) {
        setChildrenHelped(prev => prev + Math.floor(Math.random() * 5) + 1);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [childrenHelped]);

  // Auto-scroll for photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % homePhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for bottom marquee
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      };
      
      const scrollInterval = setInterval(scroll, 30);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % homePhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + homePhotos.length) % homePhotos.length);
  };

  const visibleFeatures = showAllFeatures ? features : features.slice(0, 3);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-blue-900 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 bg-purple-200/40 rounded-full blur-xl"></div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg border border-blue-200 shadow-lg flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section - Now on left for better visual flow */}
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            {/* FAAB Meaning Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl px-4 py-3 mb-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-blue-700">FAAB</span>
              </div>
              <span className="text-xs text-blue-600/80 text-center sm:text-left">
                Faith, Action & Abundance in Blessing
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FAAB
              </span>
              <span className="block text-blue-900 mt-2">Charity Organisation</span>
            </h1>

            {/* Description with expandable on mobile */}
            <div className="mb-6">
              <p className={`text-lg text-blue-800/80 leading-relaxed max-w-2xl ${
                !showFullDescription ? 'line-clamp-3' : ''
              }`}>
                Providing <span className="font-semibold text-blue-700">safe shelter, education, and love</span> 
                {" "}to vulnerable children. Every child deserves a chance to thrive and dream. 
                <span className="hidden md:inline"> We believe in transforming lives through faith, action, and abundant blessings.</span>
              </p>
              
              {/* Mobile expand button */}
              <button 
                className="md:hidden text-blue-600 font-medium text-sm mt-2 flex items-center gap-1 mx-auto lg:mx-0"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? 'Show less' : 'Read more'} 
                <ChevronRight className={`w-3 h-3 transition-transform ${showFullDescription ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Features Grid - Collapsible on mobile */}
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {visibleFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-xl p-3 transition-all duration-300 hover:shadow-md hover:border-blue-300"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-blue-800">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Show more/less toggle for mobile */}
              {features.length > 3 && (
                <button 
                  className="lg:hidden text-blue-600 font-medium text-sm flex items-center gap-1 mx-auto"
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                >
                  {showAllFeatures ? 'Show less features' : `Show ${features.length - 3} more features`}
                  <ChevronRight className={`w-3 h-3 transition-transform ${showAllFeatures ? 'rotate-90' : ''}`} />
                </button>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
              <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10"></div>
              </button>

              <button className="group border border-blue-500/30 bg-white/50 backdrop-blur-sm text-blue-700 font-semibold py-3 px-6 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                <span>Volunteer</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                <div className="text-2xl font-bold text-blue-700">{childrenHelped}+</div>
                <div className="text-blue-600 text-sm">Children Helped</div>
              </div>
              
              <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                <div className="text-2xl font-bold text-blue-700">{stats.volunteers}</div>
                <div className="text-blue-600 text-sm">Volunteers</div>
              </div>
              
              <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                <div className="text-2xl font-bold text-blue-700">{stats.years}+</div>
                <div className="text-blue-600 text-sm">Years</div>
              </div>
              
              <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
                <div className="text-2xl font-bold text-blue-700">{stats.communities}</div>
                <div className="text-blue-600 text-sm">Communities</div>
              </div>
            </div>
          </div>

          {/* Visual Section - Now on right */}
          <div className="lg:w-1/2 flex justify-center relative order-1 lg:order-2">
            <div className="relative max-w-md">
              {/* Main Photo Display */}
              <div className="relative w-full aspect-square bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 shadow-2xl overflow-hidden">
                <img 
                  src={homePhotos[currentPhotoIndex]} 
                  alt="Children's home activities"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-900/10"></div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-blue-700" />
                </button>
                <button 
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-blue-700" />
                </button>

                {/* Program Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-blue-900">{programs[currentPhotoIndex]?.name}</h3>
                      <p className="text-blue-600 text-sm">{programs[currentPhotoIndex]?.description}</p>
                    </div>
                    <div className="flex gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-blue-700">Essential</span>
                    </div>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {homePhotos.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPhotoIndex ? 'bg-blue-500 w-6' : 'bg-blue-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-24 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200 shadow-lg p-2 transform rotate-6 animate-float">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1 mx-auto">
                  <Gift className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-xs font-medium text-blue-800 text-center truncate">Sponsor</div>
                <div className="text-blue-600 text-xs font-bold text-center">A Child</div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-20 h-24 bg-white/90 backdrop-blur-sm rounded-xl border border-purple-200 shadow-lg p-2 transform -rotate-6 animate-float-delayed">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-1 mx-auto">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-xs font-medium text-blue-800 text-center truncate">Visit</div>
                <div className="text-purple-600 text-xs font-bold text-center">Our Home</div>
              </div>

              {/* Urgent Need Indicator */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <Heart className="w-3 h-3 fill-current" />
                <span className="text-sm font-medium">Urgent: School Supplies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scrolling Section */}
        <div className="mt-12 md:mt-16 border-t border-blue-200/50 pt-6">
          <div className="relative">
            {/* Scrolling Marquee */}
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide py-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...scrollingItems, ...scrollingItems].map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 shadow-sm"
                >
                  <span className="text-lg">{item.split(' ')[0]}</span>
                  <span className="text-blue-700 font-medium text-sm whitespace-nowrap">
                    {item.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5 text-blue-700" />
          </button>
          
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">FAAB Charity</h3>
            
            <button className="block w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-semibold">
              Donate Now
            </button>
            
            <button className="block w-full py-3 px-6 border border-blue-500 text-blue-700 rounded-lg font-semibold">
              Volunteer
            </button>
            
            <button className="block w-full py-3 px-6 border border-blue-500 text-blue-700 rounded-lg font-semibold">
              Our Story
            </button>
            
            <div className="pt-6 border-t border-blue-200">
              <p className="text-blue-600 text-sm">
                Faith, Action & Abundance in Blessing
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-8px) rotate(6deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ChildrensHomeHero;