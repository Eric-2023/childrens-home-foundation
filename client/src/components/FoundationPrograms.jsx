import { useState } from "react";
import { ArrowRight, Sparkles, Star, Clock, Heart, Users, Home, Gift, BookOpen, GraduationCap, Stethoscope, Utensils } from "lucide-react";

// Children's Home Programs data
const foundationPrograms = [
  {
    id: 1,
    name: "Education Support",
    icon: "📚",
    gradient: "from-blue-500 to-cyan-500",
    items: "150+ children",
    price: "Ksh 1,500/month",
    popular: true,
    description: "School fees, uniforms, and learning materials",
    impact: "98% school attendance"
  },
  {
    id: 2,
    name: "Healthcare Program",
    icon: "🏥",
    gradient: "from-green-500 to-emerald-500",
    items: "Medical care",
    price: "Ksh 2,000/month",
    popular: true,
    description: "Regular checkups, vaccinations, and emergency care",
    impact: "Healthy development"
  },
  {
    id: 3,
    name: "Nutrition Program",
    icon: "🍎",
    gradient: "from-orange-500 to-amber-500",
    items: "3 meals daily",
    price: "Ksh 1,200/month",
    popular: true,
    description: "Balanced nutritious meals for growing children",
    impact: "Zero malnutrition"
  },
  {
    id: 4,
    name: "Counseling Services",
    icon: "💙",
    gradient: "from-purple-500 to-indigo-500",
    items: "Professional support",
    price: "Ksh 1,800/month",
    popular: false,
    description: "Psychological support and trauma healing",
    impact: "Emotional wellbeing"
  },
  {
    id: 5,
    name: "Vocational Training",
    icon: "🔧",
    gradient: "from-teal-500 to-blue-500",
    items: "Skills development",
    price: "Ksh 2,500/month",
    popular: true,
    description: "Life skills and vocational training for teens",
    impact: "Future readiness"
  },
  {
    id: 6,
    name: "Recreation & Sports",
    icon: "⚽",
    gradient: "from-red-500 to-pink-500",
    items: "15+ activities",
    price: "Ksh 800/month",
    popular: false,
    description: "Sports, arts, and recreational activities",
    impact: "Holistic development"
  },
  {
    id: 7,
    name: "Family Reunification",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-yellow-500 to-orange-500",
    items: "Family support",
    price: "Ksh 3,000/month",
    popular: true,
    description: "Supporting family reconciliation and reintegration",
    impact: "Sustainable solutions"
  },
  {
    id: 8,
    name: "Emergency Shelter",
    icon: "🏠",
    gradient: "from-gray-500 to-blue-500",
    items: "Immediate care",
    price: "Ksh 4,000/month",
    popular: false,
    description: "Safe temporary housing for emergency cases",
    impact: "Lifesaving support"
  }
];

const FoundationPrograms = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 to-purple-50/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Making a Difference</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-serif">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Life-Changing</span> Programs
          </h2>
          
          <p className="text-lg text-blue-800/80 max-w-2xl mx-auto">
            Comprehensive support programs designed to give every child the love, care, and opportunities they deserve
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foundationPrograms.map((program) => (
            <div 
              key={program.id}
              onMouseEnter={() => setActiveProgram(program.id)}
              onMouseLeave={() => setActiveProgram(null)}
              className="group relative bg-white rounded-2xl border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22/%3E%3C/g%3E%3C/svg%3E')] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>Most Needed</span>
                  </div>
                </div>
              )}

              {/* Program Icon Section */}
              <div className={`p-6 bg-gradient-to-br ${program.gradient} relative overflow-hidden`}>
                {/* Sparkle Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center h-28">
                  <span className="text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {program.icon}
                  </span>
                  
                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-5 relative">
                <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-800 transition-colors font-serif">
                  {program.name}
                </h3>
                
                <p className="text-blue-700/80 text-sm mb-3 line-clamp-2">
                  {program.description}
                </p>

                {/* Impact & Cost */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="font-medium">{program.impact}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <Users className="w-3 h-3" />
                      <span>{program.items}</span>
                    </div>
                    
                    <div className="text-sm font-bold text-blue-700">
                      {program.price}
                    </div>
                  </div>
                </div>

                {/* Urgency Indicator */}
                <div className="flex items-center gap-1 mb-3">
                  <div className={`w-2 h-2 rounded-full ${program.popular ? 'bg-red-400 animate-pulse' : 'bg-blue-400'}`}></div>
                  <span className="text-xs text-blue-600">
                    {program.popular ? 'High Priority' : 'Ongoing Support'}
                  </span>
                </div>

                {/* Support Button */}
                <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center gap-1 group/btn">
                  <span>Support Program</span>
                  <Heart className="w-3 h-3 group-hover/btn:fill-red-400 transition-colors" />
                </button>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
                </div>
              </div>

              {/* Impact Indicator */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-green-600 font-medium">Changing Lives</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Home className="w-8 h-8 text-blue-600" />
              <Heart className="w-8 h-8 text-red-500" />
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-blue-900 mb-3 font-serif">
              Want to Make a Difference?
            </h3>
            
            <p className="text-blue-700/80 mb-6">
              Your support can transform a child's life. Join us in creating brighter futures and lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border border-blue-300 bg-blue-50 text-blue-700 font-semibold py-3 px-6 rounded-xl hover:bg-blue-100 transition-all duration-300 flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                <span>Volunteer</span>
              </button>

              <button className="group border border-purple-300 bg-purple-50 text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-purple-100 transition-all duration-300 flex items-center justify-center gap-2">
                <Gift className="w-4 h-4" />
                <span>Sponsor a Child</span>
              </button>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/80 rounded-xl p-4 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">1,247+</div>
            <div className="text-blue-600 text-sm">Children Helped</div>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">98%</div>
            <div className="text-blue-600 text-sm">School Success</div>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">15Yrs</div>
            <div className="text-blue-600 text-sm">Of Service</div>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">23</div>
            <div className="text-blue-600 text-sm">Communities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationPrograms;