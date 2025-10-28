import { useState, useEffect } from "react";
import { Calculator, Heart, Users, Book, Shirt, Utensils, Home, Stethoscope, TrendingUp } from "lucide-react";

const DonationImpactCalculator = () => {
  const [amount, setAmount] = useState(500);
  const [frequency, setFrequency] = useState("one-time");
  const [impact, setImpact] = useState({});

  const impactData = {
    500: { 
      items: ["School supplies for 1 child", "1 week of nutritious meals", "Basic medical supplies"],
      children: 1,
      description: "Your donation provides essential learning materials and nutrition"
    },
    1000: { 
      items: ["2 school uniforms", "2 weeks of meals", "Healthcare for 1 child"],
      children: 2,
      description: "Help two children with education and healthcare needs"
    },
    2500: { 
      items: ["Monthly education support", "Healthcare for 1 month", "Recreational activities"],
      children: 1,
      description: "Sponsor one child's monthly educational and healthcare needs"
    },
    5000: { 
      items: ["2 children monthly support", "Educational materials", "Extracurricular programs"],
      children: 2,
      description: "Transform the lives of two children with comprehensive support"
    },
    10000: { 
      items: ["Classroom supplies", "5 children monthly support", "Special programs"],
      children: 5,
      description: "Make a significant impact on an entire classroom of children"
    }
  };

  const suggestedAmounts = [500, 1000, 2500, 5000, 10000];
  const frequencies = [
    { value: "one-time", label: "One Time" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "yearly", label: "Yearly" }
  ];

  useEffect(() => {
    // Find the closest impact data
    const closestAmount = suggestedAmounts.reduce((prev, curr) => 
      Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
    );
    setImpact(impactData[closestAmount] || impactData[500]);
  }, [amount]);

  const calculateAnnualImpact = () => {
    const multipliers = {
      "one-time": 1,
      "monthly": 12,
      "quarterly": 4,
      "yearly": 1
    };
    return amount * multipliers[frequency];
  };

  const annualAmount = calculateAnnualImpact();

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-cyan-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 rounded-full px-4 py-2 mb-4">
            <Calculator className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">See Your Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4 font-serif">
            Donation <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Impact</span> Calculator
          </h2>
          
          <p className="text-lg text-teal-800/80 max-w-2xl mx-auto">
            Discover exactly how your contribution transforms children's lives in real, measurable ways
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Panel */}
          <div className="bg-white rounded-2xl border border-teal-200 shadow-lg p-6">
            <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Calculate Your Impact
            </h3>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-teal-700 font-medium mb-3">Select Amount (Ksh)</label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {suggestedAmounts.map((suggestedAmount) => (
                  <button
                    key={suggestedAmount}
                    onClick={() => setAmount(suggestedAmount)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      amount === suggestedAmount
                        ? "border-teal-500 bg-teal-50 text-teal-700 font-bold"
                        : "border-teal-200 hover:border-teal-300 text-teal-600"
                    }`}
                  >
                    {suggestedAmount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-teal-700 text-sm font-medium mb-2">Or enter custom amount:</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 font-medium">Ksh</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-teal-200 rounded-xl focus:border-teal-500 focus:outline-none text-teal-700 font-semibold"
                    min="100"
                    step="100"
                  />
                </div>
              </div>
            </div>

            {/* Frequency Selection */}
            <div className="mb-6">
              <label className="block text-teal-700 font-medium mb-3">Donation Frequency</label>
              <div className="grid grid-cols-2 gap-3">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => setFrequency(freq.value)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      frequency === freq.value
                        ? "border-teal-500 bg-teal-50 text-teal-700 font-bold"
                        : "border-teal-200 hover:border-teal-300 text-teal-600"
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Annual Impact */}
            {frequency !== "one-time" && (
              <div className="bg-teal-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-teal-700 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">Annual Impact:</span>
                </div>
                <div className="text-2xl font-bold text-teal-600">
                  Ksh {annualAmount.toLocaleString()}
                </div>
                <div className="text-teal-600 text-sm">
                  That's {impact.children * (frequency === "monthly" ? 12 : frequency === "quarterly" ? 4 : 1)} children supported annually!
                </div>
              </div>
            )}

            {/* Donate Button */}
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              <Heart className="w-5 h-5" />
              Donate Ksh {amount.toLocaleString()} {frequency !== "one-time" && `per ${frequency}`}
            </button>
          </div>

          {/* Impact Visualization */}
          <div className="bg-white rounded-2xl border border-teal-200 shadow-lg p-6">
            <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Your Impact Will Provide
            </h3>

            {/* Impact Summary */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-6 text-white mb-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold mb-2">{impact.children}+</div>
                <div className="text-teal-100">Children Supported</div>
              </div>
              <p className="text-teal-100 text-center text-sm">
                {impact.description}
              </p>
            </div>

            {/* Impact Items */}
            <div className="space-y-4">
              {impact.items?.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    {item.includes("school") || item.includes("education") ? (
                      <Book className="w-4 h-4 text-teal-600" />
                    ) : item.includes("uniform") ? (
                      <Shirt className="w-4 h-4 text-teal-600" />
                    ) : item.includes("meal") ? (
                      <Utensils className="w-4 h-4 text-teal-600" />
                    ) : item.includes("health") ? (
                      <Stethoscope className="w-4 h-4 text-teal-600" />
                    ) : (
                      <Home className="w-4 h-4 text-teal-600" />
                    )}
                  </div>
                  <span className="text-teal-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Additional Impact */}
            <div className="mt-6 p-4 bg-cyan-50 rounded-xl border border-cyan-200">
              <h4 className="font-semibold text-cyan-900 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Long-term Benefits
              </h4>
              <ul className="text-cyan-700 text-sm space-y-1">
                <li>• Improved educational outcomes</li>
                <li>• Better health and nutrition</li>
                <li>• Enhanced life opportunities</li>
                <li>• Stronger community impact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 rounded-xl p-6 border border-teal-200">
            <div className="text-2xl font-bold text-teal-700">1,247</div>
            <div className="text-teal-600 text-sm">Children Helped</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-teal-200">
            <div className="text-2xl font-bold text-teal-700">98%</div>
            <div className="text-teal-600 text-sm">School Success</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-teal-200">
            <div className="text-2xl font-bold text-teal-700">Ksh 2.4M</div>
            <div className="text-teal-600 text-sm">Annual Impact</div>
          </div>
          <div className="bg-white/80 rounded-xl p-6 border border-teal-200">
            <div className="text-2xl font-bold text-teal-700">89%</div>
            <div className="text-teal-600 text-sm">Direct to Programs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpactCalculator;