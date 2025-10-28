import { useState } from "react";
import { Heart, Users, Star, MapPin, BookOpen, Cake, Calendar, ArrowRight } from "lucide-react";

const ChildSponsorshipGallery = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const [filter, setFilter] = useState("all");

  const children = [
    {
      id: 1,
      name: "Sarah M.",
      age: 8,
      location: "Nairobi",
      story: "Sarah lost both parents in a accident and came to us 2 years ago. She's a bright, cheerful girl who loves drawing and dreams of becoming a doctor.",
      interests: ["Drawing", "Reading", "Football"],
      needs: ["School Fees", "Uniform", "Books"],
      sponsorship: "Ksh 2,500/month",
      joined: "2022",
      progress: 65,
      image: "https://images.unsplash.com/photo-1516627145497-ae69578cf5c3?w=300&h=300&fit=crop&crop=face",
      urgency: "high"
    },
    {
      id: 2,
      name: "David K.",
      age: 12,
      location: "Kibera",
      story: "David was found living on the streets after his family could no longer care for him. He's now thriving in school and loves mathematics.",
      interests: ["Mathematics", "Chess", "Swimming"],
      needs: ["School Fees", "Mentorship", "Sports Gear"],
      sponsorship: "Ksh 2,800/month",
      joined: "2021",
      progress: 40,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop&crop=face",
      urgency: "critical"
    },
    {
      id: 3,
      name: "Grace W.",
      age: 6,
      location: "Embakasi",
      story: "Grace was abandoned as a baby and has been with us since infancy. She's a happy child who loves singing and dancing.",
      interests: ["Singing", "Dancing", "Storytelling"],
      needs: ["Basic Care", "Education", "Nutrition"],
      sponsorship: "Ksh 2,200/month",
      joined: "2019",
      progress: 85,
      image: "https://images.unsplash.com/photo-1485546246426-74dc88ded4d2?w=300&h=300&fit=crop&crop=face",
      urgency: "medium"
    },
    {
      id: 4,
      name: "Michael N.",
      age: 14,
      location: "Mathare",
      story: "Michael is an orphan who showed incredible resilience. He's passionate about technology and wants to be a software engineer.",
      interests: ["Computers", "Robotics", "Basketball"],
      needs: ["Vocational Training", "Laptop", "Exam Fees"],
      sponsorship: "Ksh 3,200/month",
      joined: "2020",
      progress: 25,
      image: "https://images.unsplash.com/photo-1507919909716-c8262b71e9ae?w=300&h=300&fit=crop&crop=face",
      urgency: "high"
    },
    {
      id: 5,
      name: "Lily A.",
      age: 10,
      location: "Kawangware",
      story: "Lily came from an abusive home situation. She's now safe and discovering her love for art and nature.",
      interests: ["Painting", "Gardening", "Animals"],
      needs: ["Therapy", "Art Supplies", "School Uniform"],
      sponsorship: "Ksh 2,600/month",
      joined: "2023",
      progress: 50,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop&crop=face",
      urgency: "critical"
    },
    {
      id: 6,
      name: "Brian O.",
      age: 11,
      location: "Dandora",
      story: "Brian's parents passed away from illness. He's a natural leader who enjoys sports and helping younger children.",
      interests: ["Football", "Leadership", "Science"],
      needs: ["Sports Equipment", "School Books", "Mentorship"],
      sponsorship: "Ksh 2,700/month",
      joined: "2022",
      progress: 70,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      urgency: "medium"
    }
  ];

  const filters = [
    { key: "all", label: "All Children", count: children.length },
    { key: "critical", label: "Urgent Need", count: children.filter(c => c.urgency === "critical").length },
    { key: "high", label: "High Priority", count: children.filter(c => c.urgency === "high").length },
    { key: "young", label: "Under 10", count: children.filter(c => c.age < 10).length },
    { key: "teens", label: "Teens", count: children.filter(c => c.age >= 10).length }
  ];

  const filteredChildren = filter === "all" 
    ? children 
    : filter === "critical" ? children.filter(c => c.urgency === "critical")
    : filter === "high" ? children.filter(c => c.urgency === "high")
    : filter === "young" ? children.filter(c => c.age < 10)
    : children.filter(c => c.age >= 10);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      default: return "bg-blue-500";
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case "critical": return "Urgent Need";
      case "high": return "High Priority";
      default: return "Seeking Sponsor";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Change a Life Today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-serif">
            Sponsor a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Child's Future</span>
          </h2>
          
          <p className="text-lg text-blue-800/80 max-w-2xl mx-auto">
            Your sponsorship provides education, healthcare, nutrition, and love to children who need it most
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === filterItem.key
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
              }`}
            >
              <span>{filterItem.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                filter === filterItem.key ? "bg-blue-600" : "bg-blue-100"
              }`}>
                {filterItem.count}
              </span>
            </button>
          ))}
        </div>

        {/* Children Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredChildren.map((child) => (
            <div
              key={child.id}
              className="bg-white rounded-2xl border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedChild(child)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={child.image}
                  alt={child.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Urgency Badge */}
                <div className={`absolute top-4 right-4 ${getUrgencyColor(child.urgency)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {getUrgencyText(child.urgency)}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-white text-xs mb-1">
                    <span>Sponsorship Progress</span>
                    <span>{child.progress}%</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${child.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-blue-900">{child.name}, {child.age}</h3>
                    <div className="flex items-center gap-1 text-blue-600 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{child.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-700">{child.sponsorship}</div>
                    <div className="text-blue-500 text-xs">Monthly</div>
                  </div>
                </div>

                <p className="text-blue-700/80 text-sm mb-4 line-clamp-2">
                  {child.story}
                </p>

                {/* Interests */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {child.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                {/* Needs */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-blue-600 text-sm">
                    <BookOpen className="w-3 h-3" />
                    <span>{child.needs.length} needs</span>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    Sponsor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3 font-serif">Not Ready to Sponsor?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            You can still make a huge difference! Consider a one-time donation or explore other ways to support our children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              One-Time Donation
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Other Ways to Help
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 rounded-xl p-6 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">47</div>
            <div className="text-blue-600 text-sm">Children Sponsored</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">23</div>
            <div className="text-blue-600 text-sm">Awaiting Sponsors</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">98%</div>
            <div className="text-blue-600 text-sm">School Success Rate</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">5Yrs</div>
            <div className="text-blue-600 text-sm">Average Sponsorship</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSponsorshipGallery;