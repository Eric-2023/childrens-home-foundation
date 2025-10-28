import { useState } from "react";
import { Play, ZoomIn, MapPin, Users, Heart, Home, ArrowLeft, ArrowRight, X } from "lucide-react";

const VirtualTourGallery = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tourAreas = [
    {
      id: 1,
      name: "Learning Center",
      description: "Where children do homework, study, and develop their academic skills in a supportive environment",
      images: [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop"
      ],
      stats: { children: 25, volunteers: 8, hours: "4-6 PM Daily" },
      icon: "📚",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Playground & Recreation",
      description: "Safe outdoor space for sports, games, and physical activities that promote healthy development",
      images: [
        "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop"
      ],
      stats: { children: 40, volunteers: 5, hours: "All Day" },
      icon: "⚽",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "Dormitories",
      description: "Comfortable, safe sleeping quarters where children feel at home and get proper rest",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555854871-d4c35ddb3ea8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1566665797736-7f2aa617823e?w=600&h=400&fit=crop"
      ],
      stats: { children: 15, volunteers: 3, hours: "7 PM - 7 AM" },
      icon: "🛏️",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      name: "Dining Hall & Kitchen",
      description: "Where nutritious meals are prepared and shared, fostering community and healthy eating habits",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1576867757601-887fd9650a4e?w=600&h=400&fit=crop"
      ],
      stats: { children: 50, volunteers: 6, hours: "7 AM, 12 PM, 6 PM" },
      icon: "🍽️",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 5,
      name: "Arts & Crafts Room",
      description: "Creative space for painting, drawing, and crafts that help children express themselves",
      images: [
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019614243-c32cdb000d6f?w=600&h=400&fit=crop"
      ],
      stats: { children: 20, volunteers: 4, hours: "Weekends" },
      icon: "🎨",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      name: "Medical Clinic",
      description: "On-site healthcare facility providing regular checkups and immediate medical attention",
      images: [
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1584467735871-8db9ac8d55b4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516549655669-df66514e35b3?w=600&h=400&fit=crop"
      ],
      stats: { children: "All", volunteers: 2, hours: "24/7 Emergency" },
      icon: "🏥",
      color: "from-red-500 to-pink-500"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === selectedArea.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? selectedArea.images.length - 1 : prev - 1
    );
  };

  const openArea = (area) => {
    setSelectedArea(area);
    setCurrentImage(0);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-4">
            <Home className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Explore Our Home</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 font-serif">
            Virtual <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tour</span>
          </h2>
          
          <p className="text-lg text-purple-800/80 max-w-2xl mx-auto">
            Take a guided tour through our facilities and see where hope grows every day
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tourAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl border border-purple-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => openArea(area)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.images[0]}
                  alt={area.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                  {area.icon}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-purple-900 mb-2">{area.name}</h3>
                <p className="text-purple-700/80 text-sm mb-4 line-clamp-2">
                  {area.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-purple-50 rounded-lg p-2">
                    <Users className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs text-purple-700">{area.stats.children}</div>
                    <div className="text-xs text-purple-500">Children</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2">
                    <Heart className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs text-purple-700">{area.stats.volunteers}</div>
                    <div className="text-xs text-purple-500">Volunteers</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2">
                    <Play className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs text-purple-700">{area.stats.hours}</div>
                    <div className="text-xs text-purple-500">Hours</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedArea && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-purple-200">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${selectedArea.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                    {selectedArea.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-purple-900">{selectedArea.name}</h3>
                    <p className="text-purple-600 text-sm">{selectedArea.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-purple-500 hover:text-purple-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <img
                  src={selectedArea.images[currentImage]}
                  alt={selectedArea.name}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <ArrowLeft className="w-5 h-5 text-purple-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                >
                  <ArrowRight className="w-5 h-5 text-purple-600" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedArea.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-3">Area Details</h4>
                    <div className="space-y-2 text-sm text-purple-700">
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold">{selectedArea.stats.children} children</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Volunteers:</span>
                        <span className="font-semibold">{selectedArea.stats.volunteers} dedicated</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Operating Hours:</span>
                        <span className="font-semibold">{selectedArea.stats.hours}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-3">Recent Activities</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Daily educational support sessions</li>
                      <li>• Creative arts and crafts workshops</li>
                      <li>• Health and wellness programs</li>
                      <li>• Community building activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3 font-serif">Want to Visit in Person?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Schedule a guided tour and see firsthand how your support transforms lives
            </p>
            <button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              <MapPin className="w-5 h-5" />
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourGallery;