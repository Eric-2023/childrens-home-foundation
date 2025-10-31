import { useState, useEffect } from "react";
import { AlertTriangle, Heart, Gift, Book, Shirt, Utensils, ArrowRight, CheckCircle } from "lucide-react";

const UrgentNeedsMeter = () => {
  const [needs, setNeeds] = useState([
    {
      id: 1,
      item: "School Uniforms",
      icon: <Shirt className="w-5 h-5" />,
      target: 50,
      current: 32,
      urgency: "critical",
      description: "New uniforms for children starting school in January",
      costPerItem: 1200,
      deadline: "2024-12-31",
      donors: 28
    },
    {
      id: 2,
      item: "Shelter",
      icon: <Heart className="w-5 h-5" />,
      target: 100,
      current: 45,
      urgency: "high",
      description: "Warm blankets for cold nights in our dormitories",
      costPerItem: 800,
      deadline: "2024-11-15",
      donors: 45
    },
    {
      id: 3,
      item: "Textbooks & Supplies",
      icon: <Book className="w-5 h-5" />,
      target: 75,
      current: 60,
      urgency: "medium",
      description: "Educational materials for the new academic year",
      costPerItem: 1500,
      deadline: "2024-12-20",
      donors: 60
    },
    {
      id: 4,
      item: "Nutrition Packages",
      icon: <Utensils className="w-5 h-5" />,
      target: 120,
      current: 85,
      urgency: "high",
      description: "Monthly nutrition support for malnourished children",
      costPerItem: 2000,
      deadline: "Ongoing",
      donors: 72
    }
  ]);

  const [donationAmount, setDonationAmount] = useState(0);
  const [selectedNeed, setSelectedNeed] = useState(null);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "critical": return "from-red-500 to-orange-500";
      case "high": return "from-orange-500 to-yellow-500";
      default: return "from-blue-500 to-cyan-500";
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case "critical": return "Critical Need";
      case "high": return "High Priority";
      default: return "Ongoing Need";
    }
  };

  const calculateProgress = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDaysUntilDeadline = (deadline) => {
    if (deadline === "Ongoing") return "Ongoing";
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : "Urgent!";
  };

  const suggestedAmounts = [500, 1000, 2500, 5000];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-red-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">Urgent Assistance Needed</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4 font-serif">
            Critical <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Needs</span> Right Now
          </h2>
          
          <p className="text-lg text-red-800/80 max-w-2xl mx-auto">
            Your immediate support can provide essential items and care for children in desperate need
          </p>
        </div>

        {/* Needs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {needs.map((need) => (
            <div
              key={need.id}
              className="bg-white rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getUrgencyColor(need.urgency)} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {need.icon}
                    <div>
                      <h3 className="font-bold text-lg">{need.item}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{getUrgencyText(need.urgency)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{need.current}/{need.target}</div>
                    <div className="text-sm opacity-90">Items Funded</div>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="p-4">
                <div className="flex justify-between text-sm text-red-700 mb-2">
                  <span>Progress</span>
                  <span>{calculateProgress(need.current, need.target).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${calculateProgress(need.current, need.target)}%` }}
                  ></div>
                </div>

                {/* Details */}
                <p className="text-red-800/80 text-sm mb-4">{need.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="text-center bg-red-50 rounded-lg p-3">
                    <div className="font-bold text-red-700">Ksh {need.costPerItem.toLocaleString()}</div>
                    <div className="text-red-600">Per item</div>
                  </div>
                  <div className="text-center bg-red-50 rounded-lg p-3">
                    <div className="font-bold text-red-700">{getDaysUntilDeadline(need.deadline)}</div>
                    <div className="text-red-600">Deadline</div>
                  </div>
                </div>

                {/* Donors */}
                <div className="flex items-center justify-between text-sm text-red-600">
                  <span>{need.donors} donors contributed</span>
                  <button 
                    onClick={() => setSelectedNeed(need)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Donation Panel */}
        <div className="bg-white rounded-2xl border border-red-200 shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-red-900 mb-4 text-center">Quick Donation</h3>
          
          {/* Suggested Amounts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {suggestedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setDonationAmount(amount)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  donationAmount === amount
                    ? "border-red-500 bg-red-50 text-red-700 font-bold"
                    : "border-red-200 hover:border-red-300 text-red-600"
                }`}
              >
                Ksh {amount.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <label className="block text-red-700 text-sm font-medium mb-2">Or enter custom amount:</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600">Ksh</span>
              <input
                type="number"
                value={donationAmount || ""}
                onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                className="w-full pl-12 pr-4 py-3 border-2 border-red-200 rounded-xl focus:border-red-500 focus:outline-none"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Impact Preview */}
          {donationAmount > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Your Impact:</span>
              </div>
              <p className="text-green-600 text-sm">
                Ksh {donationAmount.toLocaleString()} could provide {
                  donationAmount >= 1200 ? Math.floor(donationAmount / 1200) + " school uniforms" :
                  donationAmount >= 800 ? Math.floor(donationAmount / 800) + " warm blankets" :
                  donationAmount >= 500 ? "nutrition for " + Math.floor(donationAmount / 500) + " children" :
                  "essential supplies"
                } for children in need.
              </p>
            </div>
          )}

          {/* Donate Button */}
          <button 
            disabled={!donationAmount}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              donationAmount 
                ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-xl"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <Gift className="w-5 h-5" />
            Donate Ksh {(donationAmount || 0).toLocaleString()}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/80 rounded-xl p-6 border border-red-200">
            <div className="text-2xl font-bold text-red-700">Ksh 287,400</div>
            <div className="text-red-600 text-sm">Raised This Month</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-red-200">
            <div className="text-2xl font-bold text-red-700">156</div>
            <div className="text-red-600 text-sm">Active Donors</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-red-200">
            <div className="text-2xl font-bold text-red-700">83%</div>
            <div className="text-red-600 text-sm">Needs Met</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentNeedsMeter;