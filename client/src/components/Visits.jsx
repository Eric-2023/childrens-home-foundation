import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, Users, Heart, CheckCircle } from "lucide-react";

const VisitScheduling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    visitType: "tour",
    preferredDate: "",
    preferredTime: "",
    groupSize: 1,
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const visitTypes = [
    { value: "tour", label: "General Tour", description: "See our facilities and meet the children" },
    { value: "volunteer", label: "Volunteer Orientation", description: "Learn about volunteer opportunities" },
    { value: "corporate", label: "Corporate Visit", description: "For business partnerships and team building" },
    { value: "donor", label: "Donor Meeting", description: "Personal meeting with our team" }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // In real implementation, you would send this data to your backend
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50/30">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl border border-green-200 shadow-lg p-8 max-w-md mx-auto">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-2">Visit Scheduled!</h3>
            <p className="text-green-700 mb-6">
              Thank you for scheduling a visit. We've sent a confirmation email with all the details.
            </p>
            <div className="bg-green-50 rounded-xl p-4 text-left mb-6">
              <h4 className="font-semibold text-green-900 mb-2">Visit Details:</h4>
              <div className="text-green-700 text-sm space-y-1">
                <div><strong>Date:</strong> {formData.preferredDate}</div>
                <div><strong>Time:</strong> {formData.preferredTime}</div>
                <div><strong>Type:</strong> {visitTypes.find(v => v.value === formData.visitType)?.label}</div>
              </div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
            >
              Schedule Another Visit
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Schedule Your Visit</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 font-serif">
            Visit <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Home</span>
          </h2>
          
          <p className="text-lg text-green-800/80 max-w-2xl mx-auto">
            Come see firsthand how your support transforms lives. Schedule a guided tour and meet the amazing children we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-green-200 shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Visit Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-900">Location</div>
                    <div className="text-green-700 text-sm">Nairobi, Kenya</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-900">Tour Hours</div>
                    <div className="text-green-700 text-sm">Mon-Fri: 9AM-5PM</div>
                    <div className="text-green-700 text-sm">Sat: 10AM-2PM</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-900">Phone</div>
                    <div className="text-green-700 text-sm">+254705957417</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-900">Email</div>
                    <div className="text-green-700 text-sm">visits@hopehaven.org</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Visit Guidelines
              </h4>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• Tours last approximately 1-2 hours</li>
                <li>• Maximum group size: 10 people</li>
                <li>• Photography may be restricted in certain areas</li>
                <li>• Please arrive 15 minutes early</li>
                <li>• Wear comfortable clothing and shoes</li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
              <h4 className="font-semibold text-amber-900 mb-2">Need Immediate Assistance?</h4>
              <p className="text-amber-700 text-sm mb-3">
                For urgent matters or same-day visits, call us directly.
              </p>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
            </div>
          </div>

          {/* Scheduling Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-green-200 shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-6">Schedule Your Visit</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="Company or organization (optional)"
                    />
                  </div>
                </div>

                {/* Visit Details */}
                <div>
                  <label className="block text-green-700 font-medium mb-2">Visit Type *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {visitTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.visitType === type.value
                            ? "border-green-500 bg-green-50"
                            : "border-green-200 hover:border-green-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="visitType"
                          value={type.value}
                          checked={formData.visitType === type.value}
                          onChange={handleInputChange}
                          className="mt-1 text-green-500"
                        />
                        <div>
                          <div className="font-semibold text-green-900">{type.label}</div>
                          <div className="text-green-600 text-xs">{type.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Preferred Time *</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-green-700 font-medium mb-2">Group Size *</label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map((size) => (
                        <option key={size} value={size}>{size} {size === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-green-700 font-medium mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:outline-none"
                    placeholder="Any specific areas you'd like to focus on during your visit..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Your Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitScheduling;