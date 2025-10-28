import { useState, useEffect } from "react";
import { Heart, Gift, TrendingUp, Users, Clock } from "lucide-react";

const DonationTicker = () => {
  const [donations, setDonations] = useState([]);
  const [stats, setStats] = useState({
    today: 0,
    monthly: 0,
    donors: 0
  });

  // Simulate real-time donations
  useEffect(() => {
    const initialDonations = [
      { id: 1, name: "Sarah K.", amount: 2500, time: "2 mins ago", anonymous: false },
      { id: 2, name: "Anonymous", amount: 5000, time: "5 mins ago", anonymous: true },
      { id: 3, name: "TechCorp Ltd", amount: 15000, time: "12 mins ago", anonymous: false },
      { id: 4, name: "Michael T.", amount: 1200, time: "18 mins ago", anonymous: false },
      { id: 5, name: "Grace Family", amount: 8000, time: "25 mins ago", anonymous: false },
    ];

    setDonations(initialDonations);
    setStats({
      today: 287400,
      monthly: 1250000,
      donors: 156
    });

    // Simulate new donations
    const interval = setInterval(() => {
      const newDonation = {
        id: Date.now(),
        name: Math.random() > 0.3 ? "Anonymous" : ["John D.", "Lisa M.", "David K.", "Hope Church", "Community Group"][Math.floor(Math.random() * 5)],
        amount: [500, 1000, 1500, 2000, 2500, 5000, 10000][Math.floor(Math.random() * 7)],
        time: "Just now",
        anonymous: Math.random() > 0.3
      };

      setDonations(prev => [newDonation, ...prev.slice(0, 4)]);
      setStats(prev => ({
        today: prev.today + newDonation.amount,
        monthly: prev.monthly + newDonation.amount,
        donors: prev.donors + 1
      }));
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatAmount = (amount) => {
    return `Ksh ${amount.toLocaleString()}`;
  };

  const formatTime = (time) => {
    return time;
  };

  return (
    <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50/30 border-y border-amber-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Ticker */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-amber-900">Live Donations</h3>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  LIVE
                </span>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {donations.map((donation) => (
                  <div
                    key={donation.id}
                    className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100 hover:bg-amber-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-amber-900">
                          {donation.anonymous ? "Anonymous Hero" : donation.name}
                        </div>
                        <div className="flex items-center gap-1 text-amber-600 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{formatTime(donation.time)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-700 text-lg">
                        {formatAmount(donation.amount)}
                      </div>
                      <div className="text-amber-500 text-xs">
                        {donation.amount >= 5000 ? "Major Donor" : "Supporter"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ticker Footer */}
              <div className="mt-4 pt-4 border-t border-amber-200">
                <div className="flex items-center gap-2 text-amber-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>New donations appear here in real-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="space-y-6">
            {/* Today's Impact */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-6 h-6" />
                <h4 className="font-bold text-lg">Today's Impact</h4>
              </div>
              <div className="text-3xl font-bold mb-2">{formatAmount(stats.today)}</div>
              <div className="text-amber-100 text-sm">Raised today by {stats.donors} donors</div>
            </div>

            {/* Monthly Goal */}
            <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                <h4 className="font-bold text-lg text-amber-900">Monthly Goal</h4>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm text-amber-700 mb-1">
                  <span>Progress</span>
                  <span>{Math.min(Math.round((stats.monthly / 2000000) * 100), 100)}%</span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((stats.monthly / 2000000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-700">
                    {formatAmount(stats.monthly)}
                  </div>
                  <div className="text-amber-600 text-xs">Raised</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-700">
                    {formatAmount(2000000 - stats.monthly)}
                  </div>
                  <div className="text-amber-600 text-xs">To Goal</div>
                </div>
              </div>
            </div>

            {/* Quick Donate */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4">
              <h4 className="font-semibold text-amber-900 mb-3 text-center">Join the Movement</h4>
              <div className="grid grid-cols-2 gap-2">
                {[500, 1000, 2500, 5000].map((amount) => (
                  <button
                    key={amount}
                    className="bg-white border border-amber-300 text-amber-700 hover:bg-amber-100 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Ksh {amount}
                  </button>
                ))}
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition-colors mt-2 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Custom Amount
              </button>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
            <div className="text-xl font-bold text-amber-700">{stats.donors}+</div>
            <div className="text-amber-600 text-xs">Active Donors</div>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
            <div className="text-xl font-bold text-amber-700">47</div>
            <div className="text-amber-600 text-xs">Children Sponsored</div>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
            <div className="text-xl font-bold text-amber-700">83%</div>
            <div className="text-amber-600 text-xs">Goal Progress</div>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
            <div className="text-xl font-bold text-amber-700">24/7</div>
            <div className="text-amber-600 text-xs">Support Active</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationTicker;